import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import {networkConfig} from "../helper-hardhat-config"

//@ts-ignore
const deployGovernanceToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy,log}= deployments;
    const {deployer} = await getNamedAccounts()
    log("Governance Token is being deployed...")
    const governanceToken = await deploy("Token",{
        from: deployer,
        args:[],
        log:true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
    })
    log("Successfuly deployed !")
    governanceToken
};
// Delegate function to the deployer
const delegate = async(deployGovernanceTokenAddress: string, delegatedAccount:string)=>{
    const governanceToken = await ethers.getContractAt("Token", deployGovernanceTokenAddress)
    const tx= await governanceToken.delegate(delegatedAccount)
    await tx.wait(1)
    console.log() 

}
export default deployGovernanceToken;
