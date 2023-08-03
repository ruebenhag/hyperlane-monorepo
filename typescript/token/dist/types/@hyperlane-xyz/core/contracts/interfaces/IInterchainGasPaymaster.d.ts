import type {
  EventFragment,
  FunctionFragment,
  Result,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../../../common';

export interface IInterchainGasPaymasterInterface extends utils.Interface {
  functions: {
    'payForGas(bytes32,uint32,uint256,address)': FunctionFragment;
    'quoteGasPayment(uint32,uint256)': FunctionFragment;
  };
  getFunction(
    nameOrSignatureOrTopic: 'payForGas' | 'quoteGasPayment',
  ): FunctionFragment;
  encodeFunctionData(
    functionFragment: 'payForGas',
    values: [BytesLike, BigNumberish, BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'quoteGasPayment',
    values: [BigNumberish, BigNumberish],
  ): string;
  decodeFunctionResult(functionFragment: 'payForGas', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'quoteGasPayment',
    data: BytesLike,
  ): Result;
  events: {
    'GasPayment(bytes32,uint256,uint256)': EventFragment;
  };
  getEvent(nameOrSignatureOrTopic: 'GasPayment'): EventFragment;
}
export interface GasPaymentEventObject {
  messageId: string;
  gasAmount: BigNumber;
  payment: BigNumber;
}
export declare type GasPaymentEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  GasPaymentEventObject
>;
export declare type GasPaymentEventFilter = TypedEventFilter<GasPaymentEvent>;
export interface IInterchainGasPaymaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: IInterchainGasPaymasterInterface;
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
    payForGas(
      _messageId: BytesLike,
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      _refundAddress: string,
      overrides?: PayableOverrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    quoteGasPayment(
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
  };
  payForGas(
    _messageId: BytesLike,
    _destinationDomain: BigNumberish,
    _gasAmount: BigNumberish,
    _refundAddress: string,
    overrides?: PayableOverrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  quoteGasPayment(
    _destinationDomain: BigNumberish,
    _gasAmount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;
  callStatic: {
    payForGas(
      _messageId: BytesLike,
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      _refundAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>;
    quoteGasPayment(
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };
  filters: {
    'GasPayment(bytes32,uint256,uint256)'(
      messageId?: BytesLike | null,
      gasAmount?: null,
      payment?: null,
    ): GasPaymentEventFilter;
    GasPayment(
      messageId?: BytesLike | null,
      gasAmount?: null,
      payment?: null,
    ): GasPaymentEventFilter;
  };
  estimateGas: {
    payForGas(
      _messageId: BytesLike,
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      _refundAddress: string,
      overrides?: PayableOverrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    quoteGasPayment(
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    payForGas(
      _messageId: BytesLike,
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      _refundAddress: string,
      overrides?: PayableOverrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    quoteGasPayment(
      _destinationDomain: BigNumberish,
      _gasAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
//# sourceMappingURL=IInterchainGasPaymaster.d.ts.map
