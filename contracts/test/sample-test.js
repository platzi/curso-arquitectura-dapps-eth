const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PlatziFood", function () {
  it("Add a new dish", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const PlatziFood = await ethers.getContractFactory("PlatziFood");
    const platziFood = await PlatziFood.deploy();
    await platziFood.deployed();

    var addFood = await platziFood.addPlatziFood(
      "https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg",
      "Gallo Pinto",
      "Costa Rica"
    );

    await addFood.wait();

    var addFood2 = await platziFood
      .connect(addr1)
      .addPlatziFood(
        "https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg",
        "Gallo Pinto2",
        "Costa Rica"
      );

    await addFood2.wait();

    var foods = await platziFood.getAllPlatziFoods();
    expect(foods.length).to.equal(2);

    var foodsByOwner = await platziFood.getPlatziFoodsByOwner();

    expect(foodsByOwner.length).to.equal(1);
  });
});
