/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  UlnOptions,
  UlnOptionsInterface,
} from "../../../../../../@layerzerolabs/lz-evm-messagelib-v2/contracts/uln/libs/UlnOptions";

const _abi = [
  {
    inputs: [],
    name: "LZ_ULN_InvalidLegacyType1Option",
    type: "error",
  },
  {
    inputs: [],
    name: "LZ_ULN_InvalidLegacyType2Option",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "workerId",
        type: "uint8",
      },
    ],
    name: "LZ_ULN_InvalidWorkerId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
    ],
    name: "LZ_ULN_InvalidWorkerOptions",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "optionType",
        type: "uint16",
      },
    ],
    name: "LZ_ULN_UnsupportedOptionType",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220abc333210b97aab5bfdb9dec548ba7116344bc48d4466c5fc57c7b58be48060464736f6c63430008190033";

type UlnOptionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UlnOptionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UlnOptions__factory extends ContractFactory {
  constructor(...args: UlnOptionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UlnOptions & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UlnOptions__factory {
    return super.connect(runner) as UlnOptions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UlnOptionsInterface {
    return new Interface(_abi) as UlnOptionsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): UlnOptions {
    return new Contract(address, _abi, runner) as unknown as UlnOptions;
  }
}
