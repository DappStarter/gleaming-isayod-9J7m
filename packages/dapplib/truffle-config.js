require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember common gesture slice suit gather'; 
let testAccounts = [
"0x591b6c805b83250950f8cd708f4eaa3db87ffe5fcb58ba2d011414eb1eac5c2e",
"0x1283e1ff681acc34de643d51f43e6fdb48d1e47f2d76c565f14d305fd6f42d2c",
"0x3eb9ba342cc3f07902106467f45435ae6b3d7b7b67fd19873ae4e0ebe267907d",
"0x9fc44a80b74254b686dc7695faff8724a0e4deafb3474cf41959ece5cf55f484",
"0xd650959d707d95257548f4442d48b6bbb8909e1f0f448109ed219f3b6bd8ceaf",
"0x8939a8cd0e4e99c51bb4a9fda1f495f44a78f8b3b0469353b379d363dd042c95",
"0xa82db1f2b80cf8c76321aa17406777486f0ca4b6d213ffd04fbd2340b28c494e",
"0x4385dfe034cd62c3be3ac2a3465473eba62710c7da5692e11986c752bf920be2",
"0xe3b368f47807ae871c3ae65c57a51c55f60e23e4a477e8a01cb04815bdab45a2",
"0xcdca9e68128e463880862a1e9270cd2229f4eb38ea2a35b653ff7a6720db6c84"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


