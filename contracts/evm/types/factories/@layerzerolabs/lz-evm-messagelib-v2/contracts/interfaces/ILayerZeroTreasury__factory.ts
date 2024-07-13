/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILayerZeroTreasury,
  ILayerZeroTreasuryInterface,
} from "../../../../../@layerzerolabs/lz-evm-messagelib-v2/contracts/interfaces/ILayerZeroTreasury";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_totalNativeFee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_totalNativeFee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool",
      },
    ],
    name: "payFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ILayerZeroTreasury__factory {
  static readonly abi = _abi;
  static createInterface(): ILayerZeroTreasuryInterface {
    return new Interface(_abi) as ILayerZeroTreasuryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILayerZeroTreasury {
    return new Contract(address, _abi, runner) as unknown as ILayerZeroTreasury;
  }
}
