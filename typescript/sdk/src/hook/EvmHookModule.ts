import { ethers } from 'ethers';

import {
  DomainRoutingHook,
  FallbackDomainRoutingHook,
  IL1CrossDomainMessenger__factory,
  OPStackHook,
  OPStackIsm__factory,
  Ownable__factory,
  ProtocolFee,
  ProtocolFee__factory,
  StaticAggregationHook,
  StaticAggregationHookFactory__factory,
  StaticAggregationHook__factory,
} from '@hyperlane-xyz/core';
import {
  Address,
  ProtocolType,
  addressToBytes32,
  configDeepEquals,
  eqAddress,
  normalizeConfig,
  rootLogger,
} from '@hyperlane-xyz/utils';

import { HyperlaneAddresses } from '../contracts/types.js';
import {
  HyperlaneModule,
  HyperlaneModuleArgs,
} from '../core/AbstractHyperlaneModule.js';
import { HyperlaneDeployer } from '../deploy/HyperlaneDeployer.js';
import { ProxyFactoryFactories } from '../deploy/contracts.js';
import { extractOwnerAddress } from '../deploy/types.js';
import { EvmIsmModule } from '../ism/EvmIsmModule.js';
import { IsmType, OpStackIsmConfig } from '../ism/types.js';
import { MultiProvider } from '../providers/MultiProvider.js';
import {
  AnnotatedEthersV5Transaction,
  EthersV5Transaction,
  createAnnotatedEthersV5Transaction,
} from '../providers/ProviderType.js';
import { ChainNameOrId } from '../types.js';

import { EvmHookReader } from './EvmHookReader.js';
import { DeployedHook } from './contracts.js';
import {
  AggregationHookConfig,
  DomainRoutingHookConfig,
  FallbackRoutingHookConfig,
  HookConfig,
  HookType,
  ImmutableHookType,
  OpStackHookConfig,
  ProtocolFeeHookConfig,
} from './types.js';

type HookModuleAddresses = {
  deployedHook: Address;
  mailbox: Address;
  proxyAdmin?: Address;
};

export class EvmHookModule extends HyperlaneModule<
  ProtocolType.Ethereum,
  HookConfig,
  HyperlaneAddresses<ProxyFactoryFactories> & HookModuleAddresses
> {
  protected readonly logger = rootLogger.child({ module: 'EvmHookModule' });
  protected readonly reader: EvmHookReader;

  // Adding these to reduce how often we need to grab from MultiProvider.
  public readonly chainName: string;
  // We use domainId here because MultiProvider.getDomainId() will always
  // return a number, and EVM the domainId and chainId are the same.
  public readonly domainId: number;

  protected constructor(
    protected readonly multiProvider: MultiProvider,
    protected readonly deployer: HyperlaneDeployer<any, any>,
    args: HyperlaneModuleArgs<
      HookConfig,
      HyperlaneAddresses<ProxyFactoryFactories> & HookModuleAddresses
    >,
  ) {
    super(args);
    this.reader = new EvmHookReader(multiProvider, args.chain);

    this.chainName = this.multiProvider.getChainName(this.args.chain);
    this.domainId = this.multiProvider.getDomainId(this.chainName);
  }

  public async read(): Promise<HookConfig> {
    const config = await this.reader.deriveHookConfig(
      this.args.addresses.deployedHook,
    );
    return normalizeConfig(config);
  }

  public async update(
    targetConfig: HookConfig,
  ): Promise<AnnotatedEthersV5Transaction[]> {
    // save current config for comparison
    const currentConfig = await this.read();

    // Update the config
    this.args.config = targetConfig;

    if (configDeepEquals(currentConfig, targetConfig)) {
      return [];
    }

    // Check if we need to deploy a new hook
    if (
      // if types are different, do a new deploy
      currentConfig.type !== targetConfig.type ||
      // if immutable, do a new deploy
      ImmutableHookType.includes(targetConfig.type)
    ) {
      const contract = await this.deploy({
        config: targetConfig,
      });

      this.args.addresses.deployedHook = contract.address;
      return [];
    }

    let updateTxs: EthersV5Transaction[];

    switch (targetConfig.type) {
      // TODO: IGP support in EvmHookModule
      // case HookType.INTERCHAIN_GAS_PAYMASTER:
      //   break;
      case HookType.PROTOCOL_FEE: {
        updateTxs = await this.updateProtocolFee({
          current: currentConfig as ProtocolFeeHookConfig,
          target: targetConfig,
        });
        break;
      }
      case HookType.OP_STACK:
        updateTxs = [];
        // Handle OP Stack specific updates
        // Add your OP Stack update logic here
        break;
      case HookType.ROUTING:
        updateTxs = [];
        // Handle Routing specific updates
        // Add your Routing update logic here
        break;
      case HookType.FALLBACK_ROUTING:
        updateTxs = [];
        // Handle Fallback Routing specific updates
        // Add your Fallback Routing update logic here
        break;
      case HookType.PAUSABLE:
        updateTxs = [];
        // no-op, just check ownership later
        break;
      default:
        // Handle unexpected hook type
        throw new Error(`Unexpected hook type: ${targetConfig.type}`);
    }

    // Lastly, check if the resolved owner is different from the current owner
    const provider = this.multiProvider.getProvider(this.chainName);
    const targetOwner = extractOwnerAddress(targetConfig.owner);
    const owner = await Ownable__factory.connect(
      this.args.addresses.deployedHook,
      provider,
    ).owner();

    // Return an ownership transfer transaction if required
    if (!eqAddress(targetOwner, owner)) {
      const tx = createAnnotatedEthersV5Transaction({
        annotation: 'Transferring ownership of ownable Hook...',
        chainId: this.domainId,
        to: this.args.addresses.deployedHook,
        data: Ownable__factory.createInterface().encodeFunctionData(
          'transferOwnership(address)',
          [targetOwner],
        ),
      });
      updateTxs.push(tx);
    }

    return updateTxs;
  }

  // manually write static create function
  public static async create(params: {
    chain: ChainNameOrId;
    config: HookConfig;
    deployer: HyperlaneDeployer<any, any>;
    factories: HyperlaneAddresses<ProxyFactoryFactories>;
    mailbox: Address;
    multiProvider: MultiProvider;
  }): Promise<EvmHookModule> {
    const { chain, config, deployer, factories, mailbox, multiProvider } =
      params;

    // instantiate new EvmIsmModule
    const module = new EvmHookModule(multiProvider, deployer, {
      addresses: {
        ...factories,
        mailbox,
        deployedHook: ethers.constants.AddressZero,
      },
      chain,
      config,
    });

    // deploy ISM and assign address to module
    const deployedHook = await module.deploy({ config });
    module.args.addresses.deployedHook = deployedHook.address;

    return module;
  }

  async deploy({ config }: { config: HookConfig }): Promise<DeployedHook> {
    switch (config.type) {
      case HookType.MERKLE_TREE:
        return this.deployer.deployContract(this.chainName, config.type, [
          this.args.addresses.mailbox,
        ]);
      // TODO: IGP support in EvmHookModule
      // case HookType.INTERCHAIN_GAS_PAYMASTER:
      //   const { interchainGasPaymaster } = await this.deployIgp(
      //     chain,
      //     config,
      //     coreAddresses,
      //   );
      //   hook = interchainGasPaymaster;
      //   break;
      case HookType.AGGREGATION:
        return this.deployAggregation({ config });
      case HookType.PROTOCOL_FEE:
        return this.deployProtocolFee({ config });
      case HookType.OP_STACK:
        return this.deployOpStack({ config });
      case HookType.ROUTING:
      case HookType.FALLBACK_ROUTING:
        return this.deployRouting({ config });
      case HookType.PAUSABLE: {
        return this.deployer.deployContract(this.chainName, config.type, []);
      }
      default:
        throw new Error(`Unsupported hook config: ${config}`);
    }
  }

  async deployProtocolFee({
    config,
  }: {
    config: ProtocolFeeHookConfig;
  }): Promise<ProtocolFee> {
    this.logger.debug('Deploying ProtocolFeeHook for %s', this.chainName);
    return this.deployer.deployContract(this.chainName, HookType.PROTOCOL_FEE, [
      config.maxProtocolFee,
      config.protocolFee,
      config.beneficiary,
      extractOwnerAddress(config.owner),
    ]);
  }

  async updateProtocolFee({
    current,
    target,
  }: {
    current: ProtocolFeeHookConfig;
    target: ProtocolFeeHookConfig;
  }): Promise<AnnotatedEthersV5Transaction[]> {
    const updateTxs = [];

    // Deploy a new protocol fee hook if maxProtocolFee has changed
    if (current.maxProtocolFee !== target.maxProtocolFee) {
      const hook = await this.deployProtocolFee({ config: target });
      this.args.addresses.deployedHook = hook.address;
    }

    // Update protocol fee if changed
    if (current.protocolFee !== target.protocolFee) {
      updateTxs.push(
        createAnnotatedEthersV5Transaction({
          annotation: `Updating protocol fee from ${current.protocolFee} to ${target.protocolFee}`,
          chainId: this.domainId,
          to: this.args.addresses.deployedHook,
          data: ProtocolFee__factory.createInterface().encodeFunctionData(
            'setProtocolFee(uint256)',
            [target.protocolFee],
          ),
        }),
      );
    }

    // Update beneficiary if changed
    if (current.beneficiary !== target.beneficiary) {
      updateTxs.push(
        createAnnotatedEthersV5Transaction({
          annotation: `Updating beneficiary from ${current.beneficiary} to ${target.beneficiary}`,
          chainId: this.domainId,
          to: this.args.addresses.deployedHook,
          data: ProtocolFee__factory.createInterface().encodeFunctionData(
            'setBeneficiary(address)',
            [target.beneficiary],
          ),
        }),
      );
    }

    // Return the transactions to update the protocol fee hook
    return updateTxs;
  }

  // TODO: IGP support in EvmHookModule
  // async deployIgp(
  //   config: IgpHookConfig,
  // ): Promise<HyperlaneContracts<IgpFactories>> {
  //   this.logger.debug('Deploying IGP as hook for %s', chain);
  //   if (coreAddresses.proxyAdmin) {
  //     this.igpDeployer.writeCache(
  //       chain,
  //       'proxyAdmin',
  //       coreAddresses.proxyAdmin,
  //     );
  //   }
  //   const igpContracts = await this.igpDeployer.deployContracts(chain, config);
  //   // bubbling up addresses and verification input artifacts
  //   this.deployer.addDeployedContracts(
  //     chain,
  //     igpContracts,
  //     this.igpDeployer.verificationInputs[chain],
  //   );
  //   return igpContracts;
  // }

  async deployAggregation({
    config,
  }: {
    config: AggregationHookConfig;
  }): Promise<StaticAggregationHook> {
    // deploy subhooks
    this.logger.debug('Deploying AggregationHook for %s', this.chainName);
    const aggregatedHooks = await Promise.all(
      config.hooks.map(async (hookConfig) => {
        const subhook = await this.deploy({ config: hookConfig });
        return subhook.address;
      }),
    );

    // deploy aggregation hook
    this.logger.debug(
      `Deploying aggregation hook of ${config.hooks.map((h) => h.type)}`,
    );
    const signer = this.multiProvider.getSigner(this.chainName);
    const factory = StaticAggregationHookFactory__factory.connect(
      this.args.addresses.staticAggregationHookFactory,
      signer,
    );
    const address = await EvmIsmModule.deployStaticAddressSet({
      chain: this.chainName,
      factory,
      values: aggregatedHooks,
      logger: this.logger,
      multiProvider: this.multiProvider,
    });

    // return aggregation hook
    return StaticAggregationHook__factory.connect(address, signer);
  }

  async deployOpStack({
    config,
  }: {
    config: OpStackHookConfig;
  }): Promise<OPStackHook> {
    const chain = this.chainName;
    const mailbox = this.args.addresses.mailbox;
    this.logger.debug(
      'Deploying OPStackHook for %s to %s',
      chain,
      config.destinationChain,
    );

    // fetch l2 messenger address from l1 messenger
    const l1Messenger = IL1CrossDomainMessenger__factory.connect(
      config.nativeBridge,
      this.multiProvider.getSignerOrProvider(chain),
    );
    const l2Messenger: Address = await l1Messenger.OTHER_MESSENGER();
    // deploy opstack ism
    const ismConfig: OpStackIsmConfig = {
      type: IsmType.OP_STACK,
      origin: chain,
      nativeBridge: l2Messenger,
    };

    // deploy opstack ism
    const opStackIsmAddress = (
      await EvmIsmModule.create({
        chain,
        config: ismConfig,
        deployer: this.deployer,
        factories: this.args.addresses,
        mailbox: mailbox,
        multiProvider: this.multiProvider,
      })
    ).serialize().deployedIsm;

    // connect to ISM
    const opstackIsm = OPStackIsm__factory.connect(
      opStackIsmAddress,
      this.multiProvider.getSignerOrProvider(chain),
    );

    // deploy opstack hook
    const hook = await this.deployer.deployContract(chain, HookType.OP_STACK, [
      mailbox,
      this.multiProvider.getDomainId(config.destinationChain),
      addressToBytes32(opstackIsm.address),
      config.nativeBridge,
    ]);

    const overrides = this.multiProvider.getTransactionOverrides(chain);

    // set authorized hook on opstack ism
    const authorizedHook = await opstackIsm.authorizedHook();
    if (authorizedHook === addressToBytes32(hook.address)) {
      this.logger.debug(
        'Authorized hook already set on ism %s',
        opstackIsm.address,
      );
      return hook;
    } else if (
      authorizedHook !== addressToBytes32(ethers.constants.AddressZero)
    ) {
      this.logger.debug(
        'Authorized hook mismatch on ism %s, expected %s, got %s',
        opstackIsm.address,
        addressToBytes32(hook.address),
        authorizedHook,
      );
      throw new Error('Authorized hook mismatch');
    }

    // check if mismatch and redeploy hook
    this.logger.debug(
      'Setting authorized hook %s on ism % on destination %s',
      hook.address,
      opstackIsm.address,
      config.destinationChain,
    );
    await this.multiProvider.handleTx(
      config.destinationChain,
      opstackIsm.setAuthorizedHook(addressToBytes32(hook.address), overrides),
    );

    return hook;
  }

  async deployRouting({
    config,
  }: {
    config: DomainRoutingHookConfig | FallbackRoutingHookConfig;
  }): Promise<DomainRoutingHook> {
    const mailbox = this.args.addresses.mailbox;
    // we don't config owner as config.owner because there're post-deploy steps like
    // enrolling routing hooks which need ownership, and therefore we transferOwnership at the end
    const deployerAddress = await this.multiProvider
      .getSigner(this.chainName)
      .getAddress();

    let routingHook: DomainRoutingHook | FallbackDomainRoutingHook;
    if (config.type === HookType.ROUTING) {
      this.logger.debug('Deploying DomainRoutingHook for %s', this.chainName);
      routingHook = await this.deployer.deployContract(
        this.chainName,
        HookType.ROUTING,
        [mailbox, deployerAddress],
      );
    } else if (config.type === HookType.FALLBACK_ROUTING) {
      this.logger.debug(
        'Deploying FallbackDomainRoutingHook for %s',
        this.chainName,
      );
      const fallbackHook = await this.deploy({ config: config.fallback });
      routingHook = await this.deployer.deployContract(
        this.chainName,
        HookType.FALLBACK_ROUTING,
        [mailbox, deployerAddress, fallbackHook.address],
      );
    } else {
      throw new Error(`Unexpected hook type: ${config}`);
    }

    const routingConfigs: DomainRoutingHook.HookConfigStruct[] = [];
    for (const [dest, hookConfig] of Object.entries(config.domains)) {
      const destDomain = this.multiProvider.getDomainId(dest);
      if (typeof hookConfig === 'string') {
        routingConfigs.push({
          destination: destDomain,
          hook: hookConfig,
        });
      } else {
        const hook = await this.deploy({ config: hookConfig });
        routingConfigs.push({
          destination: destDomain,
          hook: hook.address,
        });
      }
    }

    const overrides = this.multiProvider.getTransactionOverrides(
      this.chainName,
    );
    // await this.deployer.runIfOwner(this.chainName, routingHook, async () =>
    await this.multiProvider.handleTx(
      this.chainName,
      routingHook.setHooks(routingConfigs, overrides),
    );
    // );

    await this.deployer.transferOwnershipOfContracts(this.chainName, config, {
      [config.type]: routingHook,
    });

    return routingHook;
  }
}
