import { FUNC, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION, developmentChains, MIN_DELAY } from "../helper-hardhat-config";
import { ethers, network } from "hardhat";
import { moveTime } from "../utils/move-time";
import { moveBlock } from "../utils/move-blocks";

export async function queueAndExecute () {
    const args = [NEW_STORE_VALUE];
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(FUNC, args);
    const descriptionHash = ethers.id((PROPOSAL_DESCRIPTION));

    console.log(`Proposal function call: ${encodedFunctionCall}`);
    console.log(`Proposal description hash: ${descriptionHash}`);

    const governance = await ethers.getContract("GovernorContract");
    console.log("Queueing...");
    const queueTx = await governance.getFunction("queue")(
        [await box.getAddress()],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );

    await queueTx.wait(1);

    if (developmentChains.includes(network.name)) {
        await moveTime(MIN_DELAY + 1);
        await moveBlock(1);
    }

    console.log("Executing...");
    const executeTx = await governance.getFunction("execute")(
        [await box.getAddress()],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );

    await executeTx.wait(1);

    const boxNewValue = await box.getFunction("retrieve").call(null);
    console.log(`New Box Value: ${boxNewValue.toString()}`);
}

queueAndExecute().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});