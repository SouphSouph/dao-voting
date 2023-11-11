import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat"

const setupGovernanceContract: DeployFunction = async function(hre:HardhatRuntimeEnvironment){
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    const timeLock = await ethers.getContract("TimeLock", deployer)
    const governor = await ethers.getContract("GovernorContract",deployer)

    const proposerRole = ethers.id("PROPOSER_ROLE")
    const executorRole = ethers.id("EXECUTOR_ROLE")
    const adminRole = ethers.id("TIMELOCK_ADMIN_ROLE")

    const proposerTx = await timeLock.getFunction("grantRole")(proposerRole, await governor.getAddress());
    await proposerTx.wait(1); // wait for 1 block confirmation
    const executorTx = await timeLock.getFunction("grantRole")(executorRole, ethers.ZeroAddress);
    await executorTx.wait(1); // wait for 1 block confirmation */
    const revokeTx = await timeLock.getFunction("revokeRole")(adminRole, deployer);
    await revokeTx.wait(1); // wait for 1 block confirmation */


}
export default setupGovernanceContract