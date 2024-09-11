require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x4f3330b9a3df543d1e26ed02528e6b185e03609408acc883945a88b107088f0d"], //Your private key starting with "0x"
    },
  },
};
