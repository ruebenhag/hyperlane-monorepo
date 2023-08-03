/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers';
import { Contract, Signer, utils } from 'ethers';

import type {
  IMailbox,
  IMailboxInterface,
} from '../../../../../@hyperlane-xyz/core/contracts/interfaces/IMailbox';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'destination',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'message',
        type: 'bytes',
      },
    ],
    name: 'Dispatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32',
      },
    ],
    name: 'DispatchId',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'origin',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'sender',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'Process',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32',
      },
    ],
    name: 'ProcessId',
    type: 'event',
  },
  {
    inputs: [],
    name: 'count',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultIsm',
    outputs: [
      {
        internalType: 'contract IInterchainSecurityModule',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32',
      },
    ],
    name: 'delivered',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_destinationDomain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_recipientAddress',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: '_messageBody',
        type: 'bytes',
      },
    ],
    name: 'dispatch',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestCheckpoint',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'localDomain',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
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
    name: 'process',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'recipientIsm',
    outputs: [
      {
        internalType: 'contract IInterchainSecurityModule',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'root',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IMailbox__factory {
  static readonly abi = _abi;
  static createInterface(): IMailboxInterface {
    return new utils.Interface(_abi) as IMailboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IMailbox {
    return new Contract(address, _abi, signerOrProvider) as IMailbox;
  }
}
