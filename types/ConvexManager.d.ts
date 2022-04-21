/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ConvexManagerInterface extends ethers.utils.Interface {
  functions: {
    "addBasePool(address)": FunctionFragment;
    "addExtraPool(address,address)": FunctionFragment;
    "booster()": FunctionFragment;
    "crv()": FunctionFragment;
    "cvx()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolFactory()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "syncCVXSupply(uint256)": FunctionFragment;
    "syncPool(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "syncer()": FunctionFragment;
    "tokenFactory()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addBasePool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addExtraPool",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "booster", values?: undefined): string;
  encodeFunctionData(functionFragment: "crv", values?: undefined): string;
  encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "syncCVXSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "syncPool",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "syncer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBasePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addExtraPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "booster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncCVXSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "syncPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "syncer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class ConvexManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ConvexManagerInterface;

  functions: {
    addBasePool(
      _curveLpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addExtraPool(
      _rewardToken: string,
      _basePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    booster(overrides?: CallOverrides): Promise<[string]>;

    crv(overrides?: CallOverrides): Promise<[string]>;

    cvx(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolFactory(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    syncCVXSupply(
      supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    syncPool(
      pool: string,
      _periodFinish: BigNumberish,
      _rewardRate: BigNumberish,
      _lastUpdateTime: BigNumberish,
      _rewardPerTokenStored: BigNumberish,
      _queuedRewards: BigNumberish,
      _currentRewards: BigNumberish,
      _historicalRewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    syncer(overrides?: CallOverrides): Promise<[string]>;

    tokenFactory(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBasePool(
    _curveLpToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addExtraPool(
    _rewardToken: string,
    _basePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  booster(overrides?: CallOverrides): Promise<string>;

  crv(overrides?: CallOverrides): Promise<string>;

  cvx(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolFactory(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  syncCVXSupply(
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  syncPool(
    pool: string,
    _periodFinish: BigNumberish,
    _rewardRate: BigNumberish,
    _lastUpdateTime: BigNumberish,
    _rewardPerTokenStored: BigNumberish,
    _queuedRewards: BigNumberish,
    _currentRewards: BigNumberish,
    _historicalRewards: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  syncer(overrides?: CallOverrides): Promise<string>;

  tokenFactory(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBasePool(
      _curveLpToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    addExtraPool(
      _rewardToken: string,
      _basePool: string,
      overrides?: CallOverrides
    ): Promise<string>;

    booster(overrides?: CallOverrides): Promise<string>;

    crv(overrides?: CallOverrides): Promise<string>;

    cvx(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolFactory(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    syncCVXSupply(
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    syncPool(
      pool: string,
      _periodFinish: BigNumberish,
      _rewardRate: BigNumberish,
      _lastUpdateTime: BigNumberish,
      _rewardPerTokenStored: BigNumberish,
      _queuedRewards: BigNumberish,
      _currentRewards: BigNumberish,
      _historicalRewards: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    syncer(overrides?: CallOverrides): Promise<string>;

    tokenFactory(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addBasePool(
      _curveLpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addExtraPool(
      _rewardToken: string,
      _basePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    booster(overrides?: CallOverrides): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<BigNumber>;

    cvx(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolFactory(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    syncCVXSupply(
      supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    syncPool(
      pool: string,
      _periodFinish: BigNumberish,
      _rewardRate: BigNumberish,
      _lastUpdateTime: BigNumberish,
      _rewardPerTokenStored: BigNumberish,
      _queuedRewards: BigNumberish,
      _currentRewards: BigNumberish,
      _historicalRewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    syncer(overrides?: CallOverrides): Promise<BigNumber>;

    tokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBasePool(
      _curveLpToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addExtraPool(
      _rewardToken: string,
      _basePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    booster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    syncCVXSupply(
      supply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    syncPool(
      pool: string,
      _periodFinish: BigNumberish,
      _rewardRate: BigNumberish,
      _lastUpdateTime: BigNumberish,
      _rewardPerTokenStored: BigNumberish,
      _queuedRewards: BigNumberish,
      _currentRewards: BigNumberish,
      _historicalRewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    syncer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}