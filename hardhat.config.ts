import "dotenv/config";

import { HardhatUserConfig } from "hardhat/types";

import "@nomicfoundation/hardhat-network-helpers";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "tsconfig-paths/register";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  paths: {
    artifacts: "./dist/artifacts",
    cache: "./dist/cache",
    sources: "./src/contracts",
    tests: "./src/test/contracts",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    },
  },
  gasReporter: {
    currency: "JPY",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: "ETH",
    gasPriceApi: "ETH",
  },
};

export default config;
