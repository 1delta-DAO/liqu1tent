/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace ICommonOFT {
  export type LzCallParamsStruct = {
    refundAddress: AddressLike;
    zroPaymentAddress: AddressLike;
    adapterParams: BytesLike;
  };

  export type LzCallParamsStructOutput = [
    refundAddress: string,
    zroPaymentAddress: string,
    adapterParams: string
  ] & {
    refundAddress: string;
    zroPaymentAddress: string;
    adapterParams: string;
  };
}

export interface IOFTV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "circulatingSupply"
      | "estimateSendAndCallFee"
      | "estimateSendFee"
      | "sendAndCall"
      | "sendFrom"
      | "supportsInterface"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "circulatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimateSendAndCallFee",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      boolean,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateSendFee",
    values: [BigNumberish, BytesLike, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendAndCall",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      ICommonOFT.LzCallParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendFrom",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      ICommonOFT.LzCallParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "circulatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateSendAndCallFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateSendFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
}

export interface IOFTV2 extends BaseContract {
  connect(runner?: ContractRunner | null): IOFTV2;
  waitForDeployment(): Promise<this>;

  interface: IOFTV2Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  circulatingSupply: TypedContractMethod<[], [bigint], "view">;

  estimateSendAndCallFee: TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _payload: BytesLike,
      _dstGasForCall: BigNumberish,
      _useZro: boolean,
      _adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;

  estimateSendFee: TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _useZro: boolean,
      _adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;

  sendAndCall: TypedContractMethod<
    [
      _from: AddressLike,
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _payload: BytesLike,
      _dstGasForCall: BigNumberish,
      _callParams: ICommonOFT.LzCallParamsStruct
    ],
    [void],
    "payable"
  >;

  sendFrom: TypedContractMethod<
    [
      _from: AddressLike,
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _callParams: ICommonOFT.LzCallParamsStruct
    ],
    [void],
    "payable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "circulatingSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateSendAndCallFee"
  ): TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _payload: BytesLike,
      _dstGasForCall: BigNumberish,
      _useZro: boolean,
      _adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "estimateSendFee"
  ): TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _useZro: boolean,
      _adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "sendAndCall"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _payload: BytesLike,
      _dstGasForCall: BigNumberish,
      _callParams: ICommonOFT.LzCallParamsStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sendFrom"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _dstChainId: BigNumberish,
      _toAddress: BytesLike,
      _amount: BigNumberish,
      _callParams: ICommonOFT.LzCallParamsStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
