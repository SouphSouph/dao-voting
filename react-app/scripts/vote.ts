import { VOTING_PERIOD, developmentChains, proposalsFile } from "../helper-hardhat-config"
import * as fs from "fs" 
import {ethers, network} from 'hardhat'
import { moveBlock } from "../utils/move-blocks"
const index =0
async function main(proposalIndex:number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile,"utf8"))
    const proposalId = "84354691236725887399186700614856362238473277974615194915511191795677518070506"
    const governor = await ethers.getContract("GovernorContract")
    const reason = "idk"
    //0=against, 1=FOR, 2=Abstain 
    const voteWay = 1
    const voteTx = await governor.getFunction("castVoteWithReason")(proposalId, voteWay, reason)
    const voteTxReceipt = await voteTx.wait(1)
    if(developmentChains.includes(network.name)){
        await moveBlock(VOTING_PERIOD+1)
    }
    console.log("Vote ready to go ")
}

main(index)
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error)
    process.exit(1)
})