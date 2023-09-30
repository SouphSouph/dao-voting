import { HardhatUserConfig } from 'hardhat/config';

require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-ethers");


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;
