module.exports = {
  networks: {
    development: {
      provider: require("ganache-cli").provider({ gasLimit: 100000000 }),
      network_id: "*",
    },
    local: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    // local network for generating coverage
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
}
