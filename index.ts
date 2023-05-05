import { AcalaJsonRpcProvider, EvmRpcProvider } from '@acala-network/eth-providers';
import { ethers } from 'ethers';
import ADDRESS from '@acala-network/contracts/utils/AcalaTokens';

const ERC20_ABI = require('@acala-network/contracts/build/contracts/Token.json').abi;

const main = async () => {
  // use substrate url
  // const provider = new EvmRpcProvider('wss://acala-rpc-3.aca-api.network/ws');
  // await provider.isReady();

  // or use eth rpc url
  const provider = new AcalaJsonRpcProvider('https://eth-rpc-acala.aca-api.network');

  const contract = new ethers.Contract(ADDRESS.ACA, ERC20_ABI, provider);
  const name = await contract.name();

  console.log(`token name: ${name}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });