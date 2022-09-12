/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';

import type {
  TestRecipient,
  TestRecipientInterface,
} from '../../contracts/TestRecipient';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'foo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastData',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastSender',
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506106c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100405760003560e01c80626e75ec14610045578063256fec881461006357806330c8d1da14610081575b600080fd5b61004d61009d565b60405161005a9190610235565b60405180910390f35b61006b61012b565b6040516100789190610298565b60405180910390f35b61009b60048036038101906100969190610322565b61014f565b005b600180546100aa9061039e565b80601f01602080910402602001604051908101604052809291908181526020018280546100d69061039e565b80156101235780601f106100f857610100808354040283529160200191610123565b820191906000526020600020905b81548152906001019060200180831161010657829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508181600191826101a09291906105bf565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101df5780820151818401526020810190506101c4565b60008484015250505050565b6000601f19601f8301169050919050565b6000610207826101a5565b61021181856101b0565b93506102218185602086016101c1565b61022a816101eb565b840191505092915050565b6000602082019050818103600083015261024f81846101fc565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061028282610257565b9050919050565b61029281610277565b82525050565b60006020820190506102ad6000830184610289565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126102e2576102e16102bd565b5b8235905067ffffffffffffffff8111156102ff576102fe6102c2565b5b60208301915083600182028301111561031b5761031a6102c7565b5b9250929050565b60008060208385031215610339576103386102b3565b5b600083013567ffffffffffffffff811115610357576103566102b8565b5b610363858286016102cc565b92509250509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103b657607f821691505b6020821081036103c9576103c861036f565b5b50919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261046b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261042e565b610475868361042e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006104bc6104b76104b28461048d565b610497565b61048d565b9050919050565b6000819050919050565b6104d6836104a1565b6104ea6104e2826104c3565b84845461043b565b825550505050565b600090565b6104ff6104f2565b61050a8184846104cd565b505050565b5b8181101561052e576105236000826104f7565b600181019050610510565b5050565b601f8211156105735761054481610409565b61054d8461041e565b8101602085101561055c578190505b6105706105688561041e565b83018261050f565b50505b505050565b600082821c905092915050565b600061059660001984600802610578565b1980831691505092915050565b60006105af8383610585565b9150826002028217905092915050565b6105c983836103cf565b67ffffffffffffffff8111156105e2576105e16103da565b5b6105ec825461039e565b6105f7828285610532565b6000601f8311600181146106265760008415610614578287013590505b61061e85826105a3565b865550610686565b601f19841661063486610409565b60005b8281101561065c57848901358255600182019150602085019450602081019050610637565b868310156106795784890135610675601f891682610585565b8355505b6001600288020188555050505b5050505050505056fea2646970667358221220d52fcdcbd25b17ad08bbb167f6123f5a261417ee6b72749eae799496a880cffe64736f6c63430008100033';

type TestRecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRecipientConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRecipient__factory extends ContractFactory {
  constructor(...args: TestRecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<TestRecipient> {
    return super.deploy(overrides || {}) as Promise<TestRecipient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestRecipient {
    return super.attach(address) as TestRecipient;
  }
  override connect(signer: Signer): TestRecipient__factory {
    return super.connect(signer) as TestRecipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRecipientInterface {
    return new utils.Interface(_abi) as TestRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TestRecipient {
    return new Contract(address, _abi, signerOrProvider) as TestRecipient;
  }
}
