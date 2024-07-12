/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockERC20,
  MockERC20Interface,
} from "../../../contracts/mock/MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523461030a57611019803803806100198161030f565b928339810160608282031261030a5781516001600160401b039081811161030a5782610046918501610334565b906020928385015182811161030a57604091610063918701610334565b9401519360ff851680950361030a578251828111610216576003918254916001958684811c94168015610300575b888510146102ea578190601f94858111610299575b5088908583116001146102375760009261022c575b505060001982861b1c191690861b1783555b80519384116102165760049586548681811c9116801561020c575b828210146101f7578381116101b1575b5080928511600114610148575093839491849260009561013d575b50501b92600019911b1c19161790555b60ff196005541617600555604051610c7990816103a08239f35b015193503880610113565b92919084601f1981168860005285600020956000905b89838310610197575050501061017d575b50505050811b019055610123565b01519060f884600019921b161c191690553880808061016f565b85870151895590970196948501948893509081019061015e565b87600052816000208480880160051c8201928489106101ee575b0160051c019087905b8281106101e25750506100f8565b600081550187906101d4565b925081926101cb565b602288634e487b7160e01b6000525260246000fd5b90607f16906100e8565b634e487b7160e01b600052604160045260246000fd5b0151905038806100bb565b90889350601f19831691876000528a6000209260005b8c828210610283575050841161026b575b505050811b0183556100cd565b015160001983881b60f8161c1916905538808061025e565b8385015186558c9790950194938401930161024d565b90915085600052886000208580850160051c8201928b86106102e1575b918a91869594930160051c01915b8281106102d25750506100a6565b600081558594508a91016102c4565b925081926102b6565b634e487b7160e01b600052602260045260246000fd5b93607f1693610091565b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761021657604052565b919080601f8401121561030a5782516001600160401b03811161021657602090610366601f8201601f1916830161030f565b9281845282828701011161030a5760005b81811061038c57508260009394955001015290565b858101830151848201840152820161037756fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461091157508163095ea7b31461080c57816318160ddd146107cf57816323b872dd14610645578163313ce5671461060557816340c10f19146104fc57816370a082311461049b57816395d89b41146102a35781639dc29fac1461016257508063a9059cbb146101145763dd62ed3e1461009e57600080fd5b3461011057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011057806020926100d8610ab7565b6100e0610adf565b73ffffffffffffffffffffffffffffffffffffffff91821683526001865283832091168252845220549051908152f35b5080fd5b503461011057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101105760209061015b610151610ab7565b6024359033610b02565b5160018152f35b8391503461011057827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101105761019b610ab7565b73ffffffffffffffffffffffffffffffffffffffff811691602435918315610274578385528460205285852054918383106102155750508184957fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef936020938688528785520381872055816002540360025551908152a380f35b610270848489519485947fe450d38c000000000000000000000000000000000000000000000000000000008652850160409194939273ffffffffffffffffffffffffffffffffffffffff606083019616825260208201520152565b0390fd5b602482868851917f96c6fd1e000000000000000000000000000000000000000000000000000000008352820152fd5b83833461011057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101105780519082845460018160011c9060018316928315610491575b602093848410811461046557838852879594939291811561040a575060011461038e575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff841183851017610362575082918261035e925282610a51565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b8888529193925086917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106103f457505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610310565b80548885018701528794509285019281016103b9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610310565b60248960228c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b91607f16916102ec565b5050346101105760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610110578060209273ffffffffffffffffffffffffffffffffffffffff6104ed610ab7565b16815280845220549051908152f35b9190503461060157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261060157610535610ab7565b9073ffffffffffffffffffffffffffffffffffffffff60243592169283156105d357600254908382018092116105a7575084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9260209260025585855284835280852082815401905551908152a380f35b8560116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8460249251917fec442f05000000000000000000000000000000000000000000000000000000008352820152fd5b8280fd5b50503461011057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101105760209060ff600554169051908152f35b905082346107cc5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126107cc5761067f610ab7565b610687610adf565b916044359373ffffffffffffffffffffffffffffffffffffffff8316808352600160205286832033845260205286832054917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83036106ef575b60208861015b898989610b02565b8683106107875781156107585733156107295750825260016020908152868320338452815291869020908590039055829061015b876106e1565b602490848951917f94280d62000000000000000000000000000000000000000000000000000000008352820152fd5b602490848951917fe602df05000000000000000000000000000000000000000000000000000000008352820152fd5b87517ffb8f41b2000000000000000000000000000000000000000000000000000000008152339181019182526020820193909352604081018790528291506060010390fd5b80fd5b50503461011057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610110576020906002549051908152f35b90503461060157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261060157610844610ab7565b6024359033156108e25773ffffffffffffffffffffffffffffffffffffffff169182156108b357508083602095338152600187528181208582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b602490858551917f94280d62000000000000000000000000000000000000000000000000000000008352820152fd5b602483868651917fe602df05000000000000000000000000000000000000000000000000000000008352820152fd5b8490843461060157827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610601578260035460018160011c9060018316928315610a47575b602093848410811461046557838852879594939291811561040a57506001146109ca5750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff841183851017610362575082918261035e925282610a51565b600388529193925086917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610a3157505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610310565b80548885018701528794509285019281016109f6565b91607f1691610959565b60208082528251818301819052939260005b858110610aa3575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610a63565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610ada57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610ada57565b9173ffffffffffffffffffffffffffffffffffffffff808416928315610c125716928315610be15760009083825281602052604082205490838210610b89575091604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b6040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff919091166004820152602481019190915260448101839052606490fd5b60246040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152fd5b60246040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152fdfea2646970667358221220950d74c10bb9a9072f4718e508cf20ad0fa3bd61535ac8c6a5452867336bf04c64736f6c63430008190033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, _decimals, overrides || {}) as Promise<
      MockERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC20__factory {
    return super.connect(runner) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new Interface(_abi) as MockERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockERC20 {
    return new Contract(address, _abi, runner) as unknown as MockERC20;
  }
}
