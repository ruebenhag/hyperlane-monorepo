import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../../../../common';

export interface ISpecifiesInterchainSecurityModuleInterface
  extends utils.Interface {
  functions: {
    'interchainSecurityModule()': FunctionFragment;
  };
  getFunction(
    nameOrSignatureOrTopic: 'interchainSecurityModule',
  ): FunctionFragment;
  encodeFunctionData(
    functionFragment: 'interchainSecurityModule',
    values?: undefined,
  ): string;
  decodeFunctionResult(
    functionFragment: 'interchainSecurityModule',
    data: BytesLike,
  ): Result;
  events: {};
}
export interface ISpecifiesInterchainSecurityModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: ISpecifiesInterchainSecurityModuleInterface;
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;
  functions: {
    interchainSecurityModule(overrides?: CallOverrides): Promise<[string]>;
  };
  interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
  callStatic: {
    interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
  };
  filters: {};
  estimateGas: {
    interchainSecurityModule(overrides?: CallOverrides): Promise<BigNumber>;
  };
  populateTransaction: {
    interchainSecurityModule(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
//# sourceMappingURL=ISpecifiesInterchainSecurityModule.d.ts.map
