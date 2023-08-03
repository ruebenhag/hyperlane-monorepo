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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../common';

export interface ERC20TestInterface extends utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };
  getFunction(
    nameOrSignatureOrTopic:
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'decimals'
      | 'decreaseAllowance'
      | 'increaseAllowance'
      | 'name'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom',
  ): FunctionFragment;
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result;
  events: {
    'Approval(address,address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}
export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export declare type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ERC20Test extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: ERC20TestInterface;
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
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    decimals(overrides?: CallOverrides): Promise<[number]>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<[string]>;
    symbol(overrides?: CallOverrides): Promise<[string]>;
    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
  };
  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
  decimals(overrides?: CallOverrides): Promise<number>;
  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  name(overrides?: CallOverrides): Promise<string>;
  symbol(overrides?: CallOverrides): Promise<string>;
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };
  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;
    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TransferEventFilter;
  };
  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
  };
  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    balanceOf(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
  };
}
//# sourceMappingURL=ERC20Test.d.ts.map
