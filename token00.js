
require('dotenv').config()
const { fromWeb3JsPublicKey, fromWeb3JsKeypair} = require('@metaplex-foundation/umi-web3js-adapters');
const { loadWalletKey, ourMetadata } = require('./helpers.js');
const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');
const { createSignerFromKeypair, none, percentAmount, signerIdentity } = require("@metaplex-foundation/umi");
const web3 = require('@solana/web3.js');
const { createV1, TokenStandard} = require("@metaplex-foundation/mpl-token-metadata");

async function initializeToken() {
    const myKeypair = loadWalletKey(process.env.KEYPAIR_FILE || '');
    const mint = new web3.PublicKey(process.env.TOKEN_ADDRESS || '');
    console.log("Target token address:", process.env.TOKEN_ADDRESS);
    const umi = createUmi(process.env.UMI_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com');
  
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair));
    umi.use(signerIdentity(signer, true));
    
    const fetchedMetadata = await ourMetadata();
    const customMetadata = {
        name: fetchedMetadata.name,
        symbol: fetchedMetadata.symbol,
        uri: fetchedMetadata.uri,
    }
    
    const onChainData = {...customMetadata,
      sellerFeeBasisPoints: percentAmount(0,2),creators: none(),
      collection: none(),uses: none(),
    }
    const accounts = {
        mint: fromWeb3JsPublicKey(mint),splTokenProgram: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
    }
    const data = {...onChainData,
        isMutable: true,discriminator: 0,
        tokenStandard: TokenStandard.Fungible,collectionDetails: none(),
        ruleSet: none(),createV1Discriminator: 0,
        primarySaleHappened: true,decimals: none(),
        printSupply: none(),
    }

    try {
        console.log(signer.publicKey+" is creating metadata account... ");
        const txid = await createV1(umi, {...accounts, ...data}).sendAndConfirm(umi);
        console.log("Success: https://solscan.io/tx/"+txid);
        return txid;
    } catch (error) {
        throw error;
    }
}

initializeToken(); 