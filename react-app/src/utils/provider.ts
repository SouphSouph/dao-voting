import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
  }
}

export function getProvider(): Web3 {
  if (window.ethereum) {
    const web3Provider = new Web3(window.ethereum);
    return web3Provider;
  } else {
    // Handle the case when MetaMask or another Ethereum provider is not available
    throw new Error('Ethereum provider not found');
  }
}

export type Provider = Web3;
