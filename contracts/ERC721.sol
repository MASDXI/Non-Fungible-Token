//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseuri) 
        ERC721(_name, _symbol) public {
        _setBaseURI(_baseuri);
    }

    function mint(address account, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(account, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

}