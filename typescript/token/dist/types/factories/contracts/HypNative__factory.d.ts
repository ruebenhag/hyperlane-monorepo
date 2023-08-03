import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides, Signer } from 'ethers';

import type { HypNative, HypNativeInterface } from '../../contracts/HypNative';

declare type HypNativeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class HypNative__factory extends ContractFactory {
  constructor(...args: HypNativeConstructorParams);
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<HypNative>;
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): HypNative;
  connect(signer: Signer): HypNative__factory;
  static readonly bytecode =
    '0x608060405234801561001057600080fd5b50612c8b806100206000396000f3fe60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063e9198bf91161006f578063e9198bf9146103d1578063ed88c68e146103fa578063f1bd6f0a14610404578063f2ed8c531461042d578063f2fde38b1461046a578063f3c61d6b146104935761012a565b80638da5cb5b146102fe578063b1bd643614610329578063b49c53a714610352578063d5438eae1461037b578063de523cf3146103a65761012a565b806356d5d475116100f257806356d5d4751461021457806370a082311461023d578063715018a61461027a578063775313a11461029157806381b4e8b4146102ce5761012a565b80630e72cc061461012f5780632ead72f61461015857806339bb4ad914610195578063440df4f4146101c0578063485cc955146101eb575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190611a74565b6104bc565b005b34801561016457600080fd5b5061017f600480360381019061017a9190611add565b6104d0565b60405161018c9190611b23565b60405180910390f35b3480156101a157600080fd5b506101aa61051e565b6040516101b79190611b9d565b60405180910390f35b3480156101cc57600080fd5b506101d5610544565b6040516101e29190611c76565b60405180910390f35b3480156101f757600080fd5b50610212600480360381019061020d9190611c98565b610620565b005b34801561022057600080fd5b5061023b60048036038101906102369190611d69565b610762565b005b34801561024957600080fd5b50610264600480360381019061025f9190611a74565b61086d565b6040516102719190611df6565b60405180910390f35b34801561028657600080fd5b5061028f61088e565b005b34801561029d57600080fd5b506102b860048036038101906102b39190611add565b6108a2565b6040516102c59190611df6565b60405180910390f35b6102e860048036038101906102e39190611e3d565b6108ba565b6040516102f59190611b23565b60405180910390f35b34801561030a57600080fd5b5061031361097d565b6040516103209190611e9f565b60405180910390f35b34801561033557600080fd5b50610350600480360381019061034b9190611f10565b6109a7565b005b34801561035e57600080fd5b5061037960048036038101906103749190611f5d565b610a26565b005b34801561038757600080fd5b50610390610a3c565b60405161039d9190611fbe565b60405180910390f35b3480156103b257600080fd5b506103bb610a62565b6040516103c89190611ffa565b60405180910390f35b3480156103dd57600080fd5b506103f860048036038101906103f391906120c1565b610a88565b005b610402610b51565b005b34801561041057600080fd5b5061042b60048036038101906104269190611a74565b610ba1565b005b34801561043957600080fd5b50610454600480360381019061044f9190611add565b610bb5565b6040516104619190611df6565b60405180910390f35b34801561047657600080fd5b50610491600480360381019061048c9190611a74565b610c7b565b005b34801561049f57600080fd5b506104ba60048036038101906104b59190611a74565b610cfe565b005b6104c4610d12565b6104cd81610d90565b50565b60006104ec8263ffffffff166098610e9690919063ffffffff16565b156105125761050b8263ffffffff166098610eb990919063ffffffff16565b9050610519565b6000801b90505b919050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060006105526098610edc565b905060008180549050905060008167ffffffffffffffff81111561057957610578612142565b5b6040519080825280602002602001820160405280156105a75781602001602082028036833780820191505090505b50905060005b82811015610616578381815481106105c8576105c7612171565b5b906000526020600020015460001c8282815181106105e9576105e8612171565b5b602002602001019063ffffffff16908163ffffffff1681525050808061060e906121cf565b9150506105ad565b5080935050505090565b60008060019054906101000a900460ff161590508080156106515750600160008054906101000a900460ff1660ff16105b8061067e575061066030610ef2565b15801561067d5750600160008054906101000a900460ff1660ff16145b5b6106bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b49061229a565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156106fa576001600060016101000a81548160ff0219169083151502179055505b6107048383610f15565b801561075d5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516107549190612302565b60405180910390a15b505050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e990612369565b60405180910390fd5b83836107fe8282610f7a565b604051806080016040528060438152602001612c136043913990610858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084f9190612408565b60405180910390fd5b5061086586868686610f8f565b505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b610896610d12565b6108a06000611019565b565b60cc6020528060005260406000206000915090505481565b6000813410156108ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f690612476565b60405180910390fd5b6000823461090d9190612496565b90506109348561092d8686604051806020016040528060008152506110df565b833361110e565b9150838563ffffffff167fd229aacb94204188fe8042965fa6b269c62dc5818b21238779ab64bdd17efeec8560405161096d9190611df6565b60405180910390a3509392505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109af610d12565b60005b82829050811015610a2157610a0d8383838181106109d3576109d2612171565b5b90506040020160000160208101906109eb9190611add565b8484848181106109fe576109fd612171565b5b90506040020160200135611146565b600181610a1a91906124ca565b90506109b2565b505050565b610a2e610d12565b610a3882826111ac565b5050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a90610d12565b818190508484905014610ad8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acf9061254a565b60405180910390fd5b600084849050905060005b81811015610b4957610b35868683818110610b0157610b00612171565b5b9050602002016020810190610b169190611add565b858584818110610b2957610b28612171565b5b905060200201356111ac565b600181610b4291906124ca565b9050610ae3565b505050505050565b3373ffffffffffffffffffffffffffffffffffffffff167f5d8bc849764969eb1bcc6d0a2f55999d0167c1ccec240a4f39cf664ca9c4148e34604051610b979190611df6565b60405180910390a2565b610ba9610d12565b610bb28161120a565b50565b6000606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a69297938360cc60008663ffffffff1663ffffffff168152602001908152602001600020546040518363ffffffff1660e01b8152600401610c33929190612579565b602060405180830381865afa158015610c50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7491906125b7565b9050919050565b610c83610d12565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610cf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce990612656565b60405180910390fd5b610cfb81611019565b50565b610d06610d12565b610d0f816112db565b50565b610d1a6113ac565b73ffffffffffffffffffffffffffffffffffffffff16610d3861097d565b73ffffffffffffffffffffffffffffffffffffffff1614610d8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d85906126c2565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610dd05750610dcf816113b4565b5b610e0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e069061272e565b60405180910390fd5b80606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167ffec811ed4e60aebdaf7a79cad8a97196bf56e35362f039705598226d30c9d24860405160405180910390a250565b6000610eb18260001b846000016113d790919063ffffffff16565b905092915050565b6000610ed48260001b846000016113f790919063ffffffff16565b905092915050565b6000816000016000016000016000019050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16610f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5b906127c0565b60405180910390fd5b610f6d8161120a565b610f7682611473565b5050565b600081610f86846104d0565b14905092915050565b6000610f9b83836114d6565b90506000610fa984846114ff565b9050366000610fb8868661152b565b91509150610fd0610fc88561154c565b848484611559565b838863ffffffff167fba20947a325f450d232530e5f5fce293e7963499d5309a07cee84a269f2f15a6856040516110079190611df6565b60405180910390a35050505050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60608383836040516020016110f693929190612869565b60405160208183030381529060405290509392505050565b600061113c858560cc60008963ffffffff1663ffffffff168152602001908152602001600020548686611569565b9050949350505050565b8060cc60008463ffffffff1663ffffffff168152602001908152602001600020819055508163ffffffff167f90563f253ecb04527a6a7ae1a8cbe2bdc6caefb39d5f7b06a973cf5e7f8035a4826040516111a09190611df6565b60405180910390a25050565b6111c88263ffffffff168260986116149092919063ffffffff16565b8163ffffffff167f97fd51fef1f80c854cbd0150c248e8b2ac4ecdc97cc05e742b5f61c9f4dc6458826040516111fe9190611b23565b60405180910390a25050565b80611214816113b4565b611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a9061272e565b60405180910390fd5b81606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167fb87f5a0bface22cde699143559fb99f990ae54eea236995fc54178af91af859f60405160405180910390a25050565b806112e5816113b4565b611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b9061272e565b60405180910390fd5b81606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f7a61e573722ff8b205c8962b59d37e7d30573f368965597a844a94872204ebd760405160405180910390a25050565b600033905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006113ef828460000161163590919063ffffffff16565b905092915050565b6000808360020160008481526020019081526020016000205490506000801b8114158061142a575061142984846113d7565b5b611469576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611460906128ee565b60405180910390fd5b8091505092915050565b600060019054906101000a900460ff166114c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b9906127c0565b60405180910390fd5b6114cb816112db565b6114d361164c565b50565b600082826000906020926114ec93929190612918565b906114f7919061296b565b905092915050565b6000828260209060409261151593929190612918565b90611520919061296b565b60001c905092915050565b3660008383604090809261154193929190612918565b915091509250929050565b60008160001c9050919050565b61156384846116a5565b50505050565b60006115758686611799565b9050606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311bf2c1884838988876040518663ffffffff1660e01b81526004016115d994939291906129ca565b6000604051808303818588803b1580156115f257600080fd5b505af1158015611606573d6000803e3d6000fd5b505050505095945050505050565b61162f8260001b82856000016118529092919063ffffffff16565b50505050565b6000611644836000018361188d565b905092915050565b600060019054906101000a900460ff1661169b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611692906127c0565b60405180910390fd5b6116a36118b0565b565b804710156116e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116df90612a5b565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405161170e90612aa1565b60006040518083038185875af1925050503d806000811461174b576040519150601f19603f3d011682016040523d82523d6000602084013e611750565b606091505b5050905080611794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178b90612b28565b60405180910390fd5b505050565b6000806117a584611911565b9050606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fa31de018583866040518463ffffffff1660e01b815260040161180693929190612b92565b6020604051808303816000875af1158015611825573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118499190612be5565b91505092915050565b60008184600201600085815260200190815260200160002081905550611884838560000161198590919063ffffffff16565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600060019054906101000a900460ff166118ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f6906127c0565b60405180910390fd5b61190f61190a6113ac565b611019565b565b600061191c826104d0565b90506000801b811415604051806080016040528060438152602001612c13604391399061197f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119769190612408565b60405180910390fd5b50919050565b6000611994836000018361199c565b905092915050565b60006119a8838361188d565b611a01578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611a06565b600090505b92915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a4182611a16565b9050919050565b611a5181611a36565b8114611a5c57600080fd5b50565b600081359050611a6e81611a48565b92915050565b600060208284031215611a8a57611a89611a0c565b5b6000611a9884828501611a5f565b91505092915050565b600063ffffffff82169050919050565b611aba81611aa1565b8114611ac557600080fd5b50565b600081359050611ad781611ab1565b92915050565b600060208284031215611af357611af2611a0c565b5b6000611b0184828501611ac8565b91505092915050565b6000819050919050565b611b1d81611b0a565b82525050565b6000602082019050611b386000830184611b14565b92915050565b6000819050919050565b6000611b63611b5e611b5984611a16565b611b3e565b611a16565b9050919050565b6000611b7582611b48565b9050919050565b6000611b8782611b6a565b9050919050565b611b9781611b7c565b82525050565b6000602082019050611bb26000830184611b8e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611bed81611aa1565b82525050565b6000611bff8383611be4565b60208301905092915050565b6000602082019050919050565b6000611c2382611bb8565b611c2d8185611bc3565b9350611c3883611bd4565b8060005b83811015611c69578151611c508882611bf3565b9750611c5b83611c0b565b925050600181019050611c3c565b5085935050505092915050565b60006020820190508181036000830152611c908184611c18565b905092915050565b60008060408385031215611caf57611cae611a0c565b5b6000611cbd85828601611a5f565b9250506020611cce85828601611a5f565b9150509250929050565b611ce181611b0a565b8114611cec57600080fd5b50565b600081359050611cfe81611cd8565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611d2957611d28611d04565b5b8235905067ffffffffffffffff811115611d4657611d45611d09565b5b602083019150836001820283011115611d6257611d61611d0e565b5b9250929050565b60008060008060608587031215611d8357611d82611a0c565b5b6000611d9187828801611ac8565b9450506020611da287828801611cef565b935050604085013567ffffffffffffffff811115611dc357611dc2611a11565b5b611dcf87828801611d13565b925092505092959194509250565b6000819050919050565b611df081611ddd565b82525050565b6000602082019050611e0b6000830184611de7565b92915050565b611e1a81611ddd565b8114611e2557600080fd5b50565b600081359050611e3781611e11565b92915050565b600080600060608486031215611e5657611e55611a0c565b5b6000611e6486828701611ac8565b9350506020611e7586828701611cef565b9250506040611e8686828701611e28565b9150509250925092565b611e9981611a36565b82525050565b6000602082019050611eb46000830184611e90565b92915050565b60008083601f840112611ed057611ecf611d04565b5b8235905067ffffffffffffffff811115611eed57611eec611d09565b5b602083019150836040820283011115611f0957611f08611d0e565b5b9250929050565b60008060208385031215611f2757611f26611a0c565b5b600083013567ffffffffffffffff811115611f4557611f44611a11565b5b611f5185828601611eba565b92509250509250929050565b60008060408385031215611f7457611f73611a0c565b5b6000611f8285828601611ac8565b9250506020611f9385828601611cef565b9150509250929050565b6000611fa882611b6a565b9050919050565b611fb881611f9d565b82525050565b6000602082019050611fd36000830184611faf565b92915050565b6000611fe482611b6a565b9050919050565b611ff481611fd9565b82525050565b600060208201905061200f6000830184611feb565b92915050565b60008083601f84011261202b5761202a611d04565b5b8235905067ffffffffffffffff81111561204857612047611d09565b5b60208301915083602082028301111561206457612063611d0e565b5b9250929050565b60008083601f84011261208157612080611d04565b5b8235905067ffffffffffffffff81111561209e5761209d611d09565b5b6020830191508360208202830111156120ba576120b9611d0e565b5b9250929050565b600080600080604085870312156120db576120da611a0c565b5b600085013567ffffffffffffffff8111156120f9576120f8611a11565b5b61210587828801612015565b9450945050602085013567ffffffffffffffff81111561212857612127611a11565b5b6121348782880161206b565b925092505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006121da82611ddd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361220c5761220b6121a0565b5b600182019050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612284602e83612217565b915061228f82612228565b604082019050919050565b600060208201905081810360008301526122b381612277565b9050919050565b6000819050919050565b600060ff82169050919050565b60006122ec6122e76122e2846122ba565b611b3e565b6122c4565b9050919050565b6122fc816122d1565b82525050565b600060208201905061231760008301846122f3565b92915050565b7f216d61696c626f78000000000000000000000000000000000000000000000000600082015250565b6000612353600883612217565b915061235e8261231d565b602082019050919050565b6000602082019050818103600083015261238281612346565b9050919050565b600081519050919050565b60005b838110156123b2578082015181840152602081019050612397565b60008484015250505050565b6000601f19601f8301169050919050565b60006123da82612389565b6123e48185612217565b93506123f4818560208601612394565b6123fd816123be565b840191505092915050565b6000602082019050818103600083015261242281846123cf565b905092915050565b7f4e61746976653a20616d6f756e742065786365656473206d73672e76616c7565600082015250565b6000612460602083612217565b915061246b8261242a565b602082019050919050565b6000602082019050818103600083015261248f81612453565b9050919050565b60006124a182611ddd565b91506124ac83611ddd565b92508282039050818111156124c4576124c36121a0565b5b92915050565b60006124d582611ddd565b91506124e083611ddd565b92508282019050808211156124f8576124f76121a0565b5b92915050565b7f216c656e67746800000000000000000000000000000000000000000000000000600082015250565b6000612534600783612217565b915061253f826124fe565b602082019050919050565b6000602082019050818103600083015261256381612527565b9050919050565b61257381611aa1565b82525050565b600060408201905061258e600083018561256a565b61259b6020830184611de7565b9392505050565b6000815190506125b181611e11565b92915050565b6000602082840312156125cd576125cc611a0c565b5b60006125db848285016125a2565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612640602683612217565b915061264b826125e4565b604082019050919050565b6000602082019050818103600083015261266f81612633565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006126ac602083612217565b91506126b782612676565b602082019050919050565b600060208201905081810360008301526126db8161269f565b9050919050565b7f21636f6e74726163740000000000000000000000000000000000000000000000600082015250565b6000612718600983612217565b9150612723826126e2565b602082019050919050565b600060208201905081810360008301526127478161270b565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006127aa602b83612217565b91506127b58261274e565b604082019050919050565b600060208201905081810360008301526127d98161279d565b9050919050565b6000819050919050565b6127fb6127f682611b0a565b6127e0565b82525050565b6000819050919050565b61281c61281782611ddd565b612801565b82525050565b600081519050919050565b600081905092915050565b600061284382612822565b61284d818561282d565b935061285d818560208601612394565b80840191505092915050565b600061287582866127ea565b602082019150612885828561280b565b6020820191506128958284612838565b9150819050949350505050565b7f456e756d657261626c654d61703a206e6f6e6578697374656e74206b65790000600082015250565b60006128d8601e83612217565b91506128e3826128a2565b602082019050919050565b60006020820190508181036000830152612907816128cb565b9050919050565b600080fd5b600080fd5b6000808585111561292c5761292b61290e565b5b8386111561293d5761293c612913565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b60006129778383612953565b826129828135611b0a565b925060208210156129c2576129bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261295e565b831692505b505092915050565b60006080820190506129df6000830187611b14565b6129ec602083018661256a565b6129f96040830185611de7565b612a066060830184611e90565b95945050505050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000612a45601d83612217565b9150612a5082612a0f565b602082019050919050565b60006020820190508181036000830152612a7481612a38565b9050919050565b50565b6000612a8b60008361282d565b9150612a9682612a7b565b600082019050919050565b6000612aac82612a7e565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000612b12603a83612217565b9150612b1d82612ab6565b604082019050919050565b60006020820190508181036000830152612b4181612b05565b9050919050565b600082825260208201905092915050565b6000612b6482612822565b612b6e8185612b48565b9350612b7e818560208601612394565b612b87816123be565b840191505092915050565b6000606082019050612ba7600083018661256a565b612bb46020830185611b14565b8181036040830152612bc68184612b59565b9050949350505050565b600081519050612bdf81611cd8565b92915050565b600060208284031215612bfb57612bfa611a0c565b5b6000612c0984828501612bd0565b9150509291505056fe4e6f20726f7574657220656e726f6c6c656420666f7220646f6d61696e2e2044696420796f7520737065636966792074686520726967687420646f6d61696e2049443fa264697066735822122062f20a23bc47d359c2bae5db301a3184292b89a28481d87571755dd49237093064736f6c63430008100033';
  static readonly abi: (
    | {
        anonymous: boolean;
        inputs: {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
      }
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        outputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
      }
    | {
        inputs: {
          components: {
            internalType: string;
            name: string;
            type: string;
          }[];
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
      }
  )[];
  static createInterface(): HypNativeInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): HypNative;
}
export {};
//# sourceMappingURL=HypNative__factory.d.ts.map
