var HelloWorld = artifacts.require("HelloWorld")

module.exports = function (deployer, network, accounts) {
  console.log("Network:", network)
  deployer.deploy(HelloWorld, "hello")
}
