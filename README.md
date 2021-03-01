# Non Fungible Token (NFT) contract

To run these tutorials, you must have the following installed:

- [nodejs](https://nodejs.org/en/)

- [nvm](https://github.com/nvm-sh/nvm)

```bash
$ npm install
```

to compile your smart contract to get an ABI and artifact of a smart contract.

```bash
$ npx hardhat compile
```

for a unit testing smart contract using the command line.

```
$ npx hardhat test
```
expecting `sample-test.js` result.
```bash  
```

after testing if you want to deploy the contract using the command line.

```bash
$ npx hardhat node
# Open another Terminal
$ npx hardhat
# result in npx hardhat node Terminal

# result in npx hardhat run Terminal
Non Fungible Token contract deployed to: 0x5Fb...aa3

```
your can edit deploy network endpoint at `hardhat.config.js`.

```javascript
module.exports = {
  networks: {
        {
        localhost: {
          url: "http://127.0.0.1:8545",
          chainId: 1337
        },
        hardhat: {
          // See its defaults
        }
  }
};
```

## Donate
Ethereum, Binance  
<img src="address.png" width="100">  
0xDc7b36Fd5b6e37373B9Cd0d7a291e2A9b9a71Dff