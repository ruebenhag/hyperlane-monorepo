/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';

import type {
  HypERC721Collateral,
  HypERC721CollateralInterface,
} from '../../contracts/HypERC721Collateral';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc721',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gas',
        type: 'uint256',
      },
    ],
    name: 'DestinationGasSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'interchainGasPaymaster',
        type: 'address',
      },
    ],
    name: 'InterchainGasPaymasterSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'module',
        type: 'address',
      },
    ],
    name: 'InterchainSecurityModuleSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'mailbox',
        type: 'address',
      },
    ],
    name: 'MailboxSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
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
        name: 'recipient',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ReceivedTransferRemote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'router',
        type: 'bytes32',
      },
    ],
    name: 'RemoteRouterEnrolled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'SentTransferRemote',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'destinationGas',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'domains',
    outputs: [
      {
        internalType: 'uint32[]',
        name: '',
        type: 'uint32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_domain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_router',
        type: 'bytes32',
      },
    ],
    name: 'enrollRemoteRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32[]',
        name: '_domains',
        type: 'uint32[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_addresses',
        type: 'bytes32[]',
      },
    ],
    name: 'enrollRemoteRouters',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_origin',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_sender',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
    ],
    name: 'handle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mailbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_interchainGasPaymaster',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
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
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
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
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
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
        internalType: 'uint32',
        name: '_destinationDomain',
        type: 'uint32',
      },
    ],
    name: 'quoteGasPayment',
    outputs: [
      {
        internalType: 'uint256',
        name: '_gasPayment',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_domain',
        type: 'uint32',
      },
    ],
    name: 'routers',
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
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'domain',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'gas',
            type: 'uint256',
          },
        ],
        internalType: 'struct GasRouter.GasRouterConfig[]',
        name: 'gasConfigs',
        type: 'tuple[]',
      },
    ],
    name: 'setDestinationGas',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_interchainGasPaymaster',
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
        name: '_module',
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
        name: '_mailbox',
        type: 'address',
      },
    ],
    name: 'setMailbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_destination',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_recipient',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_amountOrId',
        type: 'uint256',
      },
    ],
    name: 'transferRemote',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wrappedToken',
    outputs: [
      {
        internalType: 'contract IERC721',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a06040523480156200001157600080fd5b5060405162002e1f38038062002e1f8339818101604052810190620000379190620000dc565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000a48262000077565b9050919050565b620000b68162000097565b8114620000c257600080fd5b50565b600081519050620000d681620000ab565b92915050565b600060208284031215620000f557620000f462000072565b5b60006200010584828501620000c5565b91505092915050565b608051612cd962000146600039600081816108da0152818161097d01528181610ae1015281816111ef015261170f0152612cd96000f3fe6080604052600436106101355760003560e01c80638da5cb5b116100ab578063de523cf31161006f578063de523cf314610419578063e9198bf914610444578063f1bd6f0a1461046d578063f2ed8c5314610496578063f2fde38b146104d3578063f3c61d6b146104fc57610135565b80638da5cb5b14610346578063996c6cc314610371578063b1bd64361461039c578063b49c53a7146103c5578063d5438eae146103ee57610135565b806356d5d475116100fd57806356d5d4751461021f5780636352211e1461024857806370a0823114610285578063715018a6146102c2578063775313a1146102d957806381b4e8b41461031657610135565b80630e72cc061461013a5780632ead72f61461016357806339bb4ad9146101a0578063440df4f4146101cb578063485cc955146101f6575b600080fd5b34801561014657600080fd5b50610161600480360381019061015c9190611bb9565b610525565b005b34801561016f57600080fd5b5061018a60048036038101906101859190611c22565b610539565b6040516101979190611c68565b60405180910390f35b3480156101ac57600080fd5b506101b5610587565b6040516101c29190611ce2565b60405180910390f35b3480156101d757600080fd5b506101e06105ad565b6040516101ed9190611dbb565b60405180910390f35b34801561020257600080fd5b5061021d60048036038101906102189190611ddd565b610689565b005b34801561022b57600080fd5b5061024660048036038101906102419190611eae565b6107cb565b005b34801561025457600080fd5b5061026f600480360381019061026a9190611f58565b6108d6565b60405161027c9190611f94565b60405180910390f35b34801561029157600080fd5b506102ac60048036038101906102a79190611bb9565b610979565b6040516102b99190611fbe565b60405180910390f35b3480156102ce57600080fd5b506102d7610a1c565b005b3480156102e557600080fd5b5061030060048036038101906102fb9190611c22565b610a30565b60405161030d9190611fbe565b60405180910390f35b610330600480360381019061032b9190611fd9565b610a48565b60405161033d9190611c68565b60405180910390f35b34801561035257600080fd5b5061035b610ab5565b6040516103689190611f94565b60405180910390f35b34801561037d57600080fd5b50610386610adf565b604051610393919061204d565b60405180910390f35b3480156103a857600080fd5b506103c360048036038101906103be91906120be565b610b03565b005b3480156103d157600080fd5b506103ec60048036038101906103e7919061210b565b610b82565b005b3480156103fa57600080fd5b50610403610b98565b604051610410919061216c565b60405180910390f35b34801561042557600080fd5b5061042e610bbe565b60405161043b91906121a8565b60405180910390f35b34801561045057600080fd5b5061046b6004803603810190610466919061226f565b610be4565b005b34801561047957600080fd5b50610494600480360381019061048f9190611bb9565b610cad565b005b3480156104a257600080fd5b506104bd60048036038101906104b89190611c22565b610cc1565b6040516104ca9190611fbe565b60405180910390f35b3480156104df57600080fd5b506104fa60048036038101906104f59190611bb9565b610d87565b005b34801561050857600080fd5b50610523600480360381019061051e9190611bb9565b610e0a565b005b61052d610e1e565b61053681610e9c565b50565b60006105558263ffffffff166098610fa290919063ffffffff16565b1561057b576105748263ffffffff166098610fc590919063ffffffff16565b9050610582565b6000801b90505b919050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060006105bb6098610fe8565b905060008180549050905060008167ffffffffffffffff8111156105e2576105e16122f0565b5b6040519080825280602002602001820160405280156106105781602001602082028036833780820191505090505b50905060005b8281101561067f578381815481106106315761063061231f565b5b906000526020600020015460001c8282815181106106525761065161231f565b5b602002602001019063ffffffff16908163ffffffff168152505080806106779061237d565b915050610616565b5080935050505090565b60008060019054906101000a900460ff161590508080156106ba5750600160008054906101000a900460ff1660ff16105b806106e757506106c930610ffe565b1580156106e65750600160008054906101000a900460ff1660ff16145b5b610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d90612448565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610763576001600060016101000a81548160ff0219169083151502179055505b61076d8383611021565b80156107c65760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516107bd91906124b0565b60405180910390a15b505050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461085b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085290612517565b60405180910390fd5b83836108678282611086565b604051806080016040528060438152602001612c6160439139906108c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b891906125b6565b60405180910390fd5b506108ce8686868661109b565b505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016109319190611fbe565b602060405180830381865afa15801561094e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097291906125ed565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016109d49190611f94565b602060405180830381865afa1580156109f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a15919061262f565b9050919050565b610a24610e1e565b610a2e6000611125565b565b60cc6020528060005260406000206000915090505481565b600080610a54836111eb565b9050610a6c85610a65868685611293565b34336112c2565b9150838563ffffffff167fd229aacb94204188fe8042965fa6b269c62dc5818b21238779ab64bdd17efeec85604051610aa59190611fbe565b60405180910390a3509392505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610b0b610e1e565b60005b82829050811015610b7d57610b69838383818110610b2f57610b2e61231f565b5b9050604002016000016020810190610b479190611c22565b848484818110610b5a57610b5961231f565b5b905060400201602001356112fa565b600181610b76919061265c565b9050610b0e565b505050565b610b8a610e1e565b610b948282611360565b5050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610bec610e1e565b818190508484905014610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b906126dc565b60405180910390fd5b600084849050905060005b81811015610ca557610c91868683818110610c5d57610c5c61231f565b5b9050602002016020810190610c729190611c22565b858584818110610c8557610c8461231f565b5b90506020020135611360565b600181610c9e919061265c565b9050610c3f565b505050505050565b610cb5610e1e565b610cbe816113be565b50565b6000606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a69297938360cc60008663ffffffff1663ffffffff168152602001908152602001600020546040518363ffffffff1660e01b8152600401610d3f92919061270b565b602060405180830381865afa158015610d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d80919061262f565b9050919050565b610d8f610e1e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df5906127a6565b60405180910390fd5b610e0781611125565b50565b610e12610e1e565b610e1b8161148f565b50565b610e26611560565b73ffffffffffffffffffffffffffffffffffffffff16610e44610ab5565b73ffffffffffffffffffffffffffffffffffffffff1614610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9190612812565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610edc5750610edb81611568565b5b610f1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f129061287e565b60405180910390fd5b80606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167ffec811ed4e60aebdaf7a79cad8a97196bf56e35362f039705598226d30c9d24860405160405180910390a250565b6000610fbd8260001b8460000161158b90919063ffffffff16565b905092915050565b6000610fe08260001b846000016115ab90919063ffffffff16565b905092915050565b6000816000016000016000016000019050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611070576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106790612910565b60405180910390fd5b611079816113be565b61108282611627565b5050565b60008161109284610539565b14905092915050565b60006110a7838361168a565b905060006110b584846116b3565b90503660006110c486866116df565b915091506110dc6110d485611700565b84848461170d565b838863ffffffff167fba20947a325f450d232530e5f5fce293e7963499d5309a07cee84a269f2f15a6856040516111139190611fbe565b60405180910390a35050505050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161124a93929190612930565b600060405180830381600087803b15801561126457600080fd5b505af1158015611278573d6000803e3d6000fd5b50505050604051806020016040528060008152509050919050565b60608383836040516020016112aa939291906129f0565b60405160208183030381529060405290509392505050565b60006112f0858560cc60008963ffffffff1663ffffffff1681526020019081526020016000205486866117a2565b9050949350505050565b8060cc60008463ffffffff1663ffffffff168152602001908152602001600020819055508163ffffffff167f90563f253ecb04527a6a7ae1a8cbe2bdc6caefb39d5f7b06a973cf5e7f8035a4826040516113549190611fbe565b60405180910390a25050565b61137c8263ffffffff1682609861184d9092919063ffffffff16565b8163ffffffff167f97fd51fef1f80c854cbd0150c248e8b2ac4ecdc97cc05e742b5f61c9f4dc6458826040516113b29190611c68565b60405180910390a25050565b806113c881611568565b611407576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fe9061287e565b60405180910390fd5b81606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167fb87f5a0bface22cde699143559fb99f990ae54eea236995fc54178af91af859f60405160405180910390a25050565b8061149981611568565b6114d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cf9061287e565b60405180910390fd5b81606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f7a61e573722ff8b205c8962b59d37e7d30573f368965597a844a94872204ebd760405160405180910390a25050565b600033905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006115a3828460000161186e90919063ffffffff16565b905092915050565b6000808360020160008481526020019081526020016000205490506000801b811415806115de57506115dd848461158b565b5b61161d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161490612a75565b60405180910390fd5b8091505092915050565b600060019054906101000a900460ff16611676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166d90612910565b60405180910390fd5b61167f8161148f565b611687611885565b50565b600082826000906020926116a093929190612a9f565b906116ab9190612af2565b905092915050565b600082826020906040926116c993929190612a9f565b906116d49190612af2565b60001c905092915050565b366000838360409080926116f593929190612a9f565b915091509250929050565b60008160001c9050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342842e0e3086866040518463ffffffff1660e01b815260040161176a93929190612930565b600060405180830381600087803b15801561178457600080fd5b505af1158015611798573d6000803e3d6000fd5b5050505050505050565b60006117ae86866118de565b9050606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311bf2c1884838988876040518663ffffffff1660e01b81526004016118129493929190612b51565b6000604051808303818588803b15801561182b57600080fd5b505af115801561183f573d6000803e3d6000fd5b505050505095945050505050565b6118688260001b82856000016119979092919063ffffffff16565b50505050565b600061187d83600001836119d2565b905092915050565b600060019054906101000a900460ff166118d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118cb90612910565b60405180910390fd5b6118dc6119f5565b565b6000806118ea84611a56565b9050606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fa31de018583866040518463ffffffff1660e01b815260040161194b93929190612be0565b6020604051808303816000875af115801561196a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198e9190612c33565b91505092915050565b600081846002016000858152602001908152602001600020819055506119c98385600001611aca90919063ffffffff16565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600060019054906101000a900460ff16611a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3b90612910565b60405180910390fd5b611a54611a4f611560565b611125565b565b6000611a6182610539565b90506000801b811415604051806080016040528060438152602001612c616043913990611ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611abb91906125b6565b60405180910390fd5b50919050565b6000611ad98360000183611ae1565b905092915050565b6000611aed83836119d2565b611b46578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611b4b565b600090505b92915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b8682611b5b565b9050919050565b611b9681611b7b565b8114611ba157600080fd5b50565b600081359050611bb381611b8d565b92915050565b600060208284031215611bcf57611bce611b51565b5b6000611bdd84828501611ba4565b91505092915050565b600063ffffffff82169050919050565b611bff81611be6565b8114611c0a57600080fd5b50565b600081359050611c1c81611bf6565b92915050565b600060208284031215611c3857611c37611b51565b5b6000611c4684828501611c0d565b91505092915050565b6000819050919050565b611c6281611c4f565b82525050565b6000602082019050611c7d6000830184611c59565b92915050565b6000819050919050565b6000611ca8611ca3611c9e84611b5b565b611c83565b611b5b565b9050919050565b6000611cba82611c8d565b9050919050565b6000611ccc82611caf565b9050919050565b611cdc81611cc1565b82525050565b6000602082019050611cf76000830184611cd3565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d3281611be6565b82525050565b6000611d448383611d29565b60208301905092915050565b6000602082019050919050565b6000611d6882611cfd565b611d728185611d08565b9350611d7d83611d19565b8060005b83811015611dae578151611d958882611d38565b9750611da083611d50565b925050600181019050611d81565b5085935050505092915050565b60006020820190508181036000830152611dd58184611d5d565b905092915050565b60008060408385031215611df457611df3611b51565b5b6000611e0285828601611ba4565b9250506020611e1385828601611ba4565b9150509250929050565b611e2681611c4f565b8114611e3157600080fd5b50565b600081359050611e4381611e1d565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611e6e57611e6d611e49565b5b8235905067ffffffffffffffff811115611e8b57611e8a611e4e565b5b602083019150836001820283011115611ea757611ea6611e53565b5b9250929050565b60008060008060608587031215611ec857611ec7611b51565b5b6000611ed687828801611c0d565b9450506020611ee787828801611e34565b935050604085013567ffffffffffffffff811115611f0857611f07611b56565b5b611f1487828801611e58565b925092505092959194509250565b6000819050919050565b611f3581611f22565b8114611f4057600080fd5b50565b600081359050611f5281611f2c565b92915050565b600060208284031215611f6e57611f6d611b51565b5b6000611f7c84828501611f43565b91505092915050565b611f8e81611b7b565b82525050565b6000602082019050611fa96000830184611f85565b92915050565b611fb881611f22565b82525050565b6000602082019050611fd36000830184611faf565b92915050565b600080600060608486031215611ff257611ff1611b51565b5b600061200086828701611c0d565b935050602061201186828701611e34565b925050604061202286828701611f43565b9150509250925092565b600061203782611caf565b9050919050565b6120478161202c565b82525050565b6000602082019050612062600083018461203e565b92915050565b60008083601f84011261207e5761207d611e49565b5b8235905067ffffffffffffffff81111561209b5761209a611e4e565b5b6020830191508360408202830111156120b7576120b6611e53565b5b9250929050565b600080602083850312156120d5576120d4611b51565b5b600083013567ffffffffffffffff8111156120f3576120f2611b56565b5b6120ff85828601612068565b92509250509250929050565b6000806040838503121561212257612121611b51565b5b600061213085828601611c0d565b925050602061214185828601611e34565b9150509250929050565b600061215682611caf565b9050919050565b6121668161214b565b82525050565b6000602082019050612181600083018461215d565b92915050565b600061219282611caf565b9050919050565b6121a281612187565b82525050565b60006020820190506121bd6000830184612199565b92915050565b60008083601f8401126121d9576121d8611e49565b5b8235905067ffffffffffffffff8111156121f6576121f5611e4e565b5b60208301915083602082028301111561221257612211611e53565b5b9250929050565b60008083601f84011261222f5761222e611e49565b5b8235905067ffffffffffffffff81111561224c5761224b611e4e565b5b60208301915083602082028301111561226857612267611e53565b5b9250929050565b6000806000806040858703121561228957612288611b51565b5b600085013567ffffffffffffffff8111156122a7576122a6611b56565b5b6122b3878288016121c3565b9450945050602085013567ffffffffffffffff8111156122d6576122d5611b56565b5b6122e287828801612219565b925092505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061238882611f22565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123ba576123b961234e565b5b600182019050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612432602e836123c5565b915061243d826123d6565b604082019050919050565b6000602082019050818103600083015261246181612425565b9050919050565b6000819050919050565b600060ff82169050919050565b600061249a61249561249084612468565b611c83565b612472565b9050919050565b6124aa8161247f565b82525050565b60006020820190506124c560008301846124a1565b92915050565b7f216d61696c626f78000000000000000000000000000000000000000000000000600082015250565b60006125016008836123c5565b915061250c826124cb565b602082019050919050565b60006020820190508181036000830152612530816124f4565b9050919050565b600081519050919050565b60005b83811015612560578082015181840152602081019050612545565b60008484015250505050565b6000601f19601f8301169050919050565b600061258882612537565b61259281856123c5565b93506125a2818560208601612542565b6125ab8161256c565b840191505092915050565b600060208201905081810360008301526125d0818461257d565b905092915050565b6000815190506125e781611b8d565b92915050565b60006020828403121561260357612602611b51565b5b6000612611848285016125d8565b91505092915050565b60008151905061262981611f2c565b92915050565b60006020828403121561264557612644611b51565b5b60006126538482850161261a565b91505092915050565b600061266782611f22565b915061267283611f22565b925082820190508082111561268a5761268961234e565b5b92915050565b7f216c656e67746800000000000000000000000000000000000000000000000000600082015250565b60006126c66007836123c5565b91506126d182612690565b602082019050919050565b600060208201905081810360008301526126f5816126b9565b9050919050565b61270581611be6565b82525050565b600060408201905061272060008301856126fc565b61272d6020830184611faf565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006127906026836123c5565b915061279b82612734565b604082019050919050565b600060208201905081810360008301526127bf81612783565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127fc6020836123c5565b9150612807826127c6565b602082019050919050565b6000602082019050818103600083015261282b816127ef565b9050919050565b7f21636f6e74726163740000000000000000000000000000000000000000000000600082015250565b60006128686009836123c5565b915061287382612832565b602082019050919050565b600060208201905081810360008301526128978161285b565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006128fa602b836123c5565b91506129058261289e565b604082019050919050565b60006020820190508181036000830152612929816128ed565b9050919050565b60006060820190506129456000830186611f85565b6129526020830185611f85565b61295f6040830184611faf565b949350505050565b6000819050919050565b61298261297d82611c4f565b612967565b82525050565b6000819050919050565b6129a361299e82611f22565b612988565b82525050565b600081519050919050565b600081905092915050565b60006129ca826129a9565b6129d481856129b4565b93506129e4818560208601612542565b80840191505092915050565b60006129fc8286612971565b602082019150612a0c8285612992565b602082019150612a1c82846129bf565b9150819050949350505050565b7f456e756d657261626c654d61703a206e6f6e6578697374656e74206b65790000600082015250565b6000612a5f601e836123c5565b9150612a6a82612a29565b602082019050919050565b60006020820190508181036000830152612a8e81612a52565b9050919050565b600080fd5b600080fd5b60008085851115612ab357612ab2612a95565b5b83861115612ac457612ac3612a9a565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b6000612afe8383612ada565b82612b098135611c4f565b92506020821015612b4957612b447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802612ae5565b831692505b505092915050565b6000608082019050612b666000830187611c59565b612b7360208301866126fc565b612b806040830185611faf565b612b8d6060830184611f85565b95945050505050565b600082825260208201905092915050565b6000612bb2826129a9565b612bbc8185612b96565b9350612bcc818560208601612542565b612bd58161256c565b840191505092915050565b6000606082019050612bf560008301866126fc565b612c026020830185611c59565b8181036040830152612c148184612ba7565b9050949350505050565b600081519050612c2d81611e1d565b92915050565b600060208284031215612c4957612c48611b51565b5b6000612c5784828501612c1e565b9150509291505056fe4e6f20726f7574657220656e726f6c6c656420666f7220646f6d61696e2e2044696420796f7520737065636966792074686520726967687420646f6d61696e2049443fa2646970667358221220275482326a71684f04d51e4b9649b3c229f15cac3142c7e704b104654522c00e64736f6c63430008100033';

type HypERC721CollateralConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HypERC721CollateralConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HypERC721Collateral__factory extends ContractFactory {
  constructor(...args: HypERC721CollateralConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    erc721: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<HypERC721Collateral> {
    return super.deploy(
      erc721,
      overrides || {},
    ) as Promise<HypERC721Collateral>;
  }
  override getDeployTransaction(
    erc721: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(erc721, overrides || {});
  }
  override attach(address: string): HypERC721Collateral {
    return super.attach(address) as HypERC721Collateral;
  }
  override connect(signer: Signer): HypERC721Collateral__factory {
    return super.connect(signer) as HypERC721Collateral__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HypERC721CollateralInterface {
    return new utils.Interface(_abi) as HypERC721CollateralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): HypERC721Collateral {
    return new Contract(address, _abi, signerOrProvider) as HypERC721Collateral;
  }
}
