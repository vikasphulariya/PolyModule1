require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
     solidity: "0.8.19",
     defaultNetwork: "rospten",
     networks: {
        hardhat: {},
        rospten: { 
            url: "https://eth-goerli.g.alchemy.com/v2/822oQpZ5OrMUvLi2iGTTHHCuL0yABhe_",
            accounts: [`daacf807221af27adb38ecabd3fa2d2d38b73922a04287a316307cf9f9975909`],
           },
       },
  };