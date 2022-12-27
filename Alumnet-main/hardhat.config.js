// /** @type import('hardhat/config').HardhatUserConfig */
// require("@nomiclabs/hardhat-ethers");
// module.exports = {
//   solidity: "0.8.17",
// };

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("./tasks/faucet");

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337 // We set 1337 to make interacting with MetaMask simpler
    }
  }
};
