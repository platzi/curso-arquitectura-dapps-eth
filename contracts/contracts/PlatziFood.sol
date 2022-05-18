//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PlatziFood {
    constructor() {}

    struct PlatziFoodItem {
        address owner;
        string foodUrl;
        string foodName;
        string originCountry;
    }

    PlatziFoodItem[] private platziFoods;

    function addPlatziFood(
        string memory foodUrl,
        string memory foodName,
        string memory originCountry
    ) public {
        platziFoods.push(
            PlatziFoodItem(msg.sender, foodUrl, foodName, originCountry)
        );
    }

    function getAllPlatziFoods() public view returns (PlatziFoodItem[] memory) {
        return platziFoods;
    }

    function getPlatziFoodsByOwner()
        public
        view
        returns (PlatziFoodItem[] memory)
    {
        uint256 itemCount = 0;

        for (uint256 i = 0; i < platziFoods.length; i++) {
            if (platziFoods[i].owner == msg.sender) {
                itemCount += 1;
            }
        }

        PlatziFoodItem[] memory myfoods = new PlatziFoodItem[](itemCount);
        for (uint256 i = 0; i < platziFoods.length; i++) {
            if (platziFoods[i].owner == msg.sender) {
                myfoods[i] = platziFoods[i];
            }
        }

        return myfoods;
    }
}