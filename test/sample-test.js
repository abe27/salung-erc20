const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Salung", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Salung = await ethers.getContractFactory("Salung");
    const salung = await Salung.deploy();
    await salung.deployed();
  });
});
