import { useState, useEffect } from 'react';
import { Contract, ethers } from 'ethers';
import Token from '../artifacts/contracts/Token.sol/Token.json';
import React from 'react';
import Web3 from 'web3';
declare global {
  interface Window {
    ethereum: any
  }
}
interface UserInformationsProps {}

function UserInformations(props: UserInformationsProps) {
  const [contractAddress, setContractAddress] = useState<string | undefined>();
  const contractAddress1 = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  const [fundings, setFundings] = useState<number | string>("Loading..."); // Initialize fundings as a loading state

  useEffect(() => {
    async function connectMetamask() {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress1, Token.abi, provider);
        const address = await contract.address;
        setContractAddress(address);

        // Fetch the balance of an account
        const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const userFunding = await web3.eth.getBalance(userAddress);
        setFundings(userFunding);
      } catch (err) {
        console.error("Error connecting to MetaMask or fetching data", err);
        setFundings("Error occurred while fetching data");
      }
    }

    connectMetamask();
  }, []);

  return (
    <div>
      <div>
        <h1>Contract Address:</h1>
        <p>{contractAddress}</p>
      </div>
      <div>
        <h1>Your Account Information:</h1>
        <p>{fundings}</p>
      </div>
    </div>
  );
}

export default UserInformations;
