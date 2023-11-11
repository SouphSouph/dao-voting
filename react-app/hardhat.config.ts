import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import { HardhatUserConfig } from 'hardhat/config';
require("@nomiclabs/hardhat-waffle");

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 2100000,
      gasPrice: 8000000000   
    },
    localhost:{
      chainId: 31337,
      gas: 2100000,
      gasPrice: 8000000000   
    }
  },
  namedAccounts:{
    deployer:{
      default:0,
    }
  },
};


export default config;