/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISyncablePool, ISyncablePoolInterface } from "../ISyncablePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodFinish",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lastUpdateTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardPerTokenStored",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_queuedRewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currentRewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_historicalRewards",
        type: "uint256",
      },
    ],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISyncablePool__factory {
  static readonly abi = _abi;
  static createInterface(): ISyncablePoolInterface {
    return new utils.Interface(_abi) as ISyncablePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISyncablePool {
    return new Contract(address, _abi, signerOrProvider) as ISyncablePool;
  }
}