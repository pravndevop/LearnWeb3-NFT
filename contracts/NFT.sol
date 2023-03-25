// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

//import standerd impimetation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//contract NFT is ERC721 contract
contract NFTee is ERC721 {
    constructor() ERC721("LearnWeb3 NFT", "LEARN-NFT") {
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
