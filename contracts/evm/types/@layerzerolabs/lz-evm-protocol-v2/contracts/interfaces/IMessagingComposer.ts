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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface IMessagingComposerInterface extends Interface {
  getFunction(
    nameOrSignature: "composeQueue" | "lzCompose" | "sendCompose"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ComposeDelivered"
      | "ComposeSent"
      | "LzComposeAlert"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "composeQueue",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lzCompose",
    values: [
      AddressLike,
      AddressLike,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCompose",
    values: [AddressLike, BytesLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "composeQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzCompose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendCompose",
    data: BytesLike
  ): Result;
}

export namespace ComposeDeliveredEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    guid: BytesLike,
    index: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    guid: string,
    index: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    guid: string;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ComposeSentEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    guid: BytesLike,
    index: BigNumberish,
    message: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    guid: string,
    index: bigint,
    message: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    guid: string;
    index: bigint;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LzComposeAlertEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    executor: AddressLike,
    guid: BytesLike,
    index: BigNumberish,
    gas: BigNumberish,
    value: BigNumberish,
    message: BytesLike,
    extraData: BytesLike,
    reason: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    executor: string,
    guid: string,
    index: bigint,
    gas: bigint,
    value: bigint,
    message: string,
    extraData: string,
    reason: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    executor: string;
    guid: string;
    index: bigint;
    gas: bigint;
    value: bigint;
    message: string;
    extraData: string;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IMessagingComposer extends BaseContract {
  connect(runner?: ContractRunner | null): IMessagingComposer;
  waitForDeployment(): Promise<this>;

  interface: IMessagingComposerInterface;

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

  composeQueue: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish
    ],
    [string],
    "view"
  >;

  lzCompose: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish,
      _message: BytesLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;

  sendCompose: TypedContractMethod<
    [
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish,
      _message: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "composeQueue"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "lzCompose"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish,
      _message: BytesLike,
      _extraData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sendCompose"
  ): TypedContractMethod<
    [
      _to: AddressLike,
      _guid: BytesLike,
      _index: BigNumberish,
      _message: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ComposeDelivered"
  ): TypedContractEvent<
    ComposeDeliveredEvent.InputTuple,
    ComposeDeliveredEvent.OutputTuple,
    ComposeDeliveredEvent.OutputObject
  >;
  getEvent(
    key: "ComposeSent"
  ): TypedContractEvent<
    ComposeSentEvent.InputTuple,
    ComposeSentEvent.OutputTuple,
    ComposeSentEvent.OutputObject
  >;
  getEvent(
    key: "LzComposeAlert"
  ): TypedContractEvent<
    LzComposeAlertEvent.InputTuple,
    LzComposeAlertEvent.OutputTuple,
    LzComposeAlertEvent.OutputObject
  >;

  filters: {
    "ComposeDelivered(address,address,bytes32,uint16)": TypedContractEvent<
      ComposeDeliveredEvent.InputTuple,
      ComposeDeliveredEvent.OutputTuple,
      ComposeDeliveredEvent.OutputObject
    >;
    ComposeDelivered: TypedContractEvent<
      ComposeDeliveredEvent.InputTuple,
      ComposeDeliveredEvent.OutputTuple,
      ComposeDeliveredEvent.OutputObject
    >;

    "ComposeSent(address,address,bytes32,uint16,bytes)": TypedContractEvent<
      ComposeSentEvent.InputTuple,
      ComposeSentEvent.OutputTuple,
      ComposeSentEvent.OutputObject
    >;
    ComposeSent: TypedContractEvent<
      ComposeSentEvent.InputTuple,
      ComposeSentEvent.OutputTuple,
      ComposeSentEvent.OutputObject
    >;

    "LzComposeAlert(address,address,address,bytes32,uint16,uint256,uint256,bytes,bytes,bytes)": TypedContractEvent<
      LzComposeAlertEvent.InputTuple,
      LzComposeAlertEvent.OutputTuple,
      LzComposeAlertEvent.OutputObject
    >;
    LzComposeAlert: TypedContractEvent<
      LzComposeAlertEvent.InputTuple,
      LzComposeAlertEvent.OutputTuple,
      LzComposeAlertEvent.OutputObject
    >;
  };
}
