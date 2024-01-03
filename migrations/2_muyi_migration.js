const MuyiProductMigration = artifacts.require("MuyiProduct")

module.exports = function (deployer) {
  deployer.deploy(MuyiProductMigration)
}