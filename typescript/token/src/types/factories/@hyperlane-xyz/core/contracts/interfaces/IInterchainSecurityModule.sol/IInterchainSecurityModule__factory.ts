/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers';
import { Contract, Signer, utils } from 'ethers';

import type {
  IInterchainSecurityModule,
  IInterchainSecurityModuleInterface,
} from '../../../../../../@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol/IInterchainSecurityModule';

const _abi = [
  {
    inputs: [],
    name: 'moduleType',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_metadata',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
    ],
    name: 'verify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IInterchainSecurityModule__factory {
  static readonly abi = _abi;
  static createInterface(): IInterchainSecurityModuleInterface {
    return new utils.Interface(_abi) as IInterchainSecurityModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IInterchainSecurityModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as IInterchainSecurityModule;
  }
}
