import { deploy, waitForTransaction } from "@gearbox-protocol/devops";
import {
  IYVault__factory,
  tokenDataByNetwork,
  YearnLPToken,
  yearnTokens,
} from "@gearbox-protocol/sdk";
import { YearnMock } from "../types";
import { AbstractDeployer } from "./abstractDeployer";
import { SYNCER } from "./constants";

const yearnTokenList: Array<YearnLPToken> = [
  "yvDAI",
  "yvUSDC",
  "yvWETH",
  "yvWBTC",
  "yvCurve_stETH",
  "yvCurve_FRAX",
];

const yearnDependency: Record<YearnLPToken, boolean> = {
  yvDAI: false,
  yvUSDC: false,
  yvWETH: false,
  yvWBTC: false,
  yvCurve_FRAX: true,
  yvCurve_stETH: true,
};

export class YearnDeployer extends AbstractDeployer {
  async deploy() {
    for (let yearnToken of yearnTokenList) {
      if (this.isDeployNeeded(yearnToken)) {
        await this.deployVault(yearnToken);
      }
    }
  }

  async deployVault(yearnToken: YearnLPToken) {
    this.log.debug(`Deploying the Yearn vault mock for ${yearnToken}`);

    const underlying = yearnTokens[yearnToken].underlying;

    const underlyingAddress = yearnDependency[yearnToken]
      ? this.getProgressOrThrow(underlying)
      : tokenDataByNetwork.Kovan[underlying];

    const symbol = yearnTokens[yearnToken].name;
    const vault = await deploy<YearnMock>(
      "YearnMock",
      this.log,
      SYNCER,
      underlyingAddress,
      symbol
    );

    this.log.info(
      `Yearn vault for ${underlying} deployed at: ${vault.address}`
    );

    this.log.debug(`Syncing the Yearn vault mock for ${yearnToken}`);

    const mainnetVault = IYVault__factory.connect(
      tokenDataByNetwork.Mainnet[yearnToken],
      this.mainnetProvider
    );

    const mainnetPPS = await mainnetVault.pricePerShare();

    await waitForTransaction(vault.setPricePerShare(mainnetPPS));

    this.log.info(
      `Yearn vault for ${yearnToken} synced - pricePerShare: ${mainnetPPS}`
    );

    this.verifier.addContract({
      address: vault.address,
      constructorArguments: [SYNCER, underlyingAddress, symbol],
    });

    this.saveProgress(yearnToken, vault.address);
  }
}
