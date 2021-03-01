// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const constructor = {
    name: "",
    symbol: "",
    baseURI: ""
  };
  // We get the contract to deploy
  const Token = await hre.ethers.getContractFactory("MyNFT");
  const ERC721 = await Token.deploy(
    constructor.name,
    constructor.symbol,
    constructor.baseURI
  );
  await ERC721.deployed();
  console.log("ERC721 deployed to:", ERC721.address);

  // const Auction = await hre.ethers.getContractFactory("Auction");
  // const auction = await Auction.deploy(ERC721.address)
  // await auction.deployed();
  // console.log("ERC721 deployed to:", auction.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
