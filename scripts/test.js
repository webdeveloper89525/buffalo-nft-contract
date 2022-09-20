const hre = require("hardhat");
require('dotenv').config();
const { baseURI, artist, token } = process.env;


async function main() {
  const [owner, signer] = await hre.ethers.getSigners();
  const Buffalos = await hre.ethers.getContractFactory("Buffalos");
  const buffalo = await Buffalos.deploy("Buffalos", "Buff", baseURI, 100, 1637290616, artist, token, 1);
  await buffalo.deployed();
  console.log("Contract deployed to address:", buffalo.address)
  const app_tx= await buffalo.connect(signer).ApproveContract();
  const recepit = await app_tx.wait();
  console.log('recepit', recepit)
  
  const tx = await buffalo.connect(signer).mintBuffalo(1, {value: 0, gasPrice: 21000000000, gasLimit: 3000000});
  console.log('tx',tx);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
