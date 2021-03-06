var HDWalletProvider = require("truffle-hdwallet-provider");  // 导入模块
var mnemonic = "erode apple this awful report vacuum suffer enrich target general youth envelope";  //MetaMask的助记词

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 3000000
    },
    rinkeby: {
      provider: function() {
          // mnemonic表示MetaMask的助记词。 "ropsten.infura.io/v3/33..."表示Infura上的项目id
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/977d4e00b1e440da99cf1fc6be3be50b", 0);   // 1表示第二个账户(从0开始)
      },
      network_id: "*",  // match any network
      gas: 3012388,
      gasPrice: 30000000000
  }
  },
  compilers: {
    solc: {
       version: "0.6.2",    //0.5.1 Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  mocha:{
    timeout:200000  //我把原来的100000调成了200000，就OK了
  }
};
