const Buffalos = artifacts.require('Buffalos.sol');
require('dotenv').config();
const { baseURI, artist, token } = process.env;

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Buffalos, "Buffalos", "Buff", baseURI, 2000, 1669852800, artist, token, 1000);
  const BuffaloContract = await Buffalos.deployed();
  console.log("Contract Address === ", BuffaloContract.address);

};
