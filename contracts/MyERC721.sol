pragma solidity >=0.6.0 <0.8.0;

import "./base/ERC721.sol";

contract MyERC721 is ERC721 {
    constructor (string memory _name, string memory _symbol) public
        ERC721(_name, _symbol)
    {
    }

    /**
    * Custom accessor to create a unique token
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string memory _tokenURI
    ) public
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }


    

    
    /**
    * _from 卖家
    * _to 买家
    * 
    */
    function transDeed(address _to,uint256 _tokenId) public payable {

        address _from=super.ownerOf(_tokenId);
        payable(_from).transfer(msg.value);
        super._transfer(_from, _to, _tokenId);
    }


    event DeedRegistered(address _by, uint256 _tokenId);
}