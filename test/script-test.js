const { expect, assert  } = require("chai");

describe("Non Fungible Token (NFT)", function() {

  let token;
  let accounts;
  const zero_address = 0x0000000000000000000000000000000000000000;
  const attribute = {
    name: "TEST_NFT",
    symbol: "NFT",
    baseURI: "https://api.mocki.io/v1/67f898c5/test"
  };

  before(async () => {
    const contract = await ethers.getContractFactory("MyNFT");
    token = await contract.deploy(
      attribute.name,
      attribute.symbol,
      attribute.baseURI
    );
    accounts = await ethers.getSigners();
    await token.deployed();
  });

  it("Mint Non Fungible Token", async () => {
    await token.mint(accounts[0].address,attribute.baseURI);
    expect(await token.balanceOf(accounts[0].address)).to.equal("1");
  });

  it("Transfer Token", async () => {
    await token.transferFrom(accounts[0].address, accounts[1].address,"1");
    expect(await token.balanceOf(accounts[1].address)).to.equal("1");
  });

  it("Transfer emits event", async () => {
    const wallet = token.connect(accounts[1]);
    await expect(wallet.transferFrom(accounts[1].address, accounts[0].address, "1"))
      .to.emit(wallet, "Transfer")
      .withArgs(accounts[1].address, accounts[0].address, "1");
  });

  it("Can not transfer not owned token", async () => {
    await expect(token.transferFrom(accounts[1].address, accounts[0].address, "1")).to.be.reverted;
  });

  it("Can not transfer to empty account", async () => {
    await expect(token.transferFrom(accounts[0].address, zero_address, "1")).to.be.reverted;
  });

  //#################### TODO test-case ####################

  it("Burn Non Fungible Token", async () => {
    console.log("TODO");
    await token.burn(accounts[0].address,TokenId);
    expect(await token.balanceOf(accounts[0].address)).to.equal("0");
  });

  it("Do not have permission to minting token", async () =>{
    console.log("TODO");
    const wallet = token.connect(accounts[i]);
    await expect(wallet.mint(accounts[i].address,TokenId)).to.be.reverted
  });

  it("Do not have permission to burning token", async () =>{
    console.log("TODO");
    const wallet = token.connect(accounts[i]);
    await expect(wallet.burn(accounts[i].address,TokenId)).to.be.reverted
  });
  
});
