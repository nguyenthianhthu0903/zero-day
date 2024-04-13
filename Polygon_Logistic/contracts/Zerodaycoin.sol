// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Zerodaycoin is ERC20("Zerodaycoin", "TDT") {
    constructor (){
        _mint(msg.sender, 1000*10**18);
    }
    
}

