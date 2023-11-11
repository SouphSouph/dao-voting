import { useState, useEffect } from 'react';
import Token from '../artifacts/contracts/Token.sol/Token.json';
import React from 'react';
import Web3 from 'web3';
import { getProvider } from '../utils/provider';
import Rectangle from './Informations';
declare global {
  interface Window {
    ethereum: any
  }
}
interface UserInformationsProps {}

function ConnexionMetamask(props: UserInformationsProps) {
  const [contractAddress, setContractAddress] = useState<string | undefined>();
  const contractAddress1 = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  const [fundings, setFundings] = useState<number | string>("Loading..."); // Initialize fundings as a loading state
  const [status, setStatus] = useState(false)
  useEffect(() => {
    async function connectMetamask() {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const provider = getProvider();
        const contract = new web3.eth.Contract(Token.abi, contractAddress1);
        const address = (await web3.eth.getAccounts()).toString();
        setContractAddress(address);

        // Fetch the balance of an account
        const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const userFunding = await web3.eth.getBalance(userAddress);
        setFundings(userFunding);
        setStatus(true)
      } catch (err) {
        console.error("Error connecting to MetaMask or fetching data", err);
        setFundings("Error occurred while fetching data");
      }
    }

    connectMetamask();
  }, []);

  return (
    
    <div>
        <Rectangle status={status} account={contractAddress} funds={fundings}/>
    </div>
  );
}

export default ConnexionMetamask;
