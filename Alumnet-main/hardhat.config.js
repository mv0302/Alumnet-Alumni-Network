// // /** @type import('hardhat/config').HardhatUserConfig */
// // require("@nomiclabs/hardhat-ethers");
// // module.exports = {
// //   solidity: "0.8.17",
// // };

// /** @type import('hardhat/config').HardhatUserConfig */
// require("@nomiclabs/hardhat-ethers");
// require("./tasks/faucet");

// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {
//       chainId: 31337 // We set 1337 to make interacting with MetaMask simpler
//     }
//   }
// };









require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "_zUQmx56HPCu-4QCYamhFqe1CWkI7fo9";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
