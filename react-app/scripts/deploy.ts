const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  await token.waitForDeployment(); // Wait for the deployment transaction to be mined
  console.log(token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });