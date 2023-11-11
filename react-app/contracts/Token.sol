// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract Token is ERC20Votes  {
    constructor() ERC20("Token", "GV")
    ERC20Permit("Token"){
        _mint(msg.sender, 10000000);
    }
    
    function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override(ERC20Votes) {
    super._afterTokenTransfer(from, to, amount);
  }

  function _mint(address to, uint256 amount) internal override(ERC20Votes) {
    super._mint(to, amount);
  }

  function _burn(address account, uint256 amount) internal override(ERC20Votes) {
    super._burn(account, amount);
  }
}