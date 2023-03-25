//import ehther.js
const { ethers } = require("hardhat");

async function main() {
  //1. tell the script we want to deploy the NFT.sol contract
  const contract = await ethers.getContractFactory("NFTee");
  //2. Deploy it
  const deployedContract = await contract.deploy();
  //2.1 wait for the deployment finish
  await deployedContract.deployed();
  //3. print the address of the deployment contract
  console.log("NFT contract deployed to: ", deployedContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
