import debug from 'debug';

import { HyperlaneContracts } from '../contracts';
import { HyperlaneDeployer } from '../deploy/HyperlaneDeployer';
import { MultiProvider } from '../providers/MultiProvider';
import { ChainMap, ChainName } from '../types';

import { IsmFactoryFactories, ismFactoryFactories } from './contracts';

export type IsmFactoryConfig = any;

export class HyperlaneIsmFactoryDeployer extends HyperlaneDeployer<
  IsmFactoryConfig,
  IsmFactoryFactories
> {
  constructor(
    multiProvider: MultiProvider,
    configMap: ChainMap<IsmFactoryConfig>,
    factoriesOverride = ismFactoryFactories,
  ) {
    super(multiProvider, configMap, factoriesOverride, {
      logger: debug('hyperlane:IsmFactoryDeployer'),
    });
  }

  async deployContracts(
    chain: ChainName,
    config: IsmFactoryConfig,
  ): Promise<HyperlaneContracts<IsmFactoryFactories>> {
    const multisigIsmFactory = await this.deployContract(
      chain,
      'multisigIsmFactory',
      [],
    );
    const aggregationIsmFactory = await this.deployContract(
      chain,
      'aggregationIsmFactory',
      [],
    );
    const routingIsmFactory = await this.deployContract(
      chain,
      'routingIsmFactory',
      [],
    );
    return { multisigIsmFactory, aggregationIsmFactory, routingIsmFactory };
  }
}
