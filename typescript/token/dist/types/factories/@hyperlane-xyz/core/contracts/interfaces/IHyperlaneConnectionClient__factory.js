'use strict';
/* Autogenerated file. Do not edit manually. */
Object.defineProperty(exports, '__esModule', { value: true });
exports.IHyperlaneConnectionClient__factory = void 0;
const ethers_1 = require('ethers');
const _abi = [
  {
    inputs: [],
    name: 'interchainGasPaymaster',
    outputs: [
      {
        internalType: 'contract IInterchainGasPaymaster',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'interchainSecurityModule',
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
    name: 'mailbox',
    outputs: [
      {
        internalType: 'contract IMailbox',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'setInterchainGasPaymaster',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'setInterchainSecurityModule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'setMailbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
class IHyperlaneConnectionClient__factory {
  static createInterface() {
    return new ethers_1.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider);
  }
}
exports.IHyperlaneConnectionClient__factory =
  IHyperlaneConnectionClient__factory;
IHyperlaneConnectionClient__factory.abi = _abi;
//# sourceMappingURL=IHyperlaneConnectionClient__factory.js.map
