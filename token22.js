// import 'dotenv/config'

// import { TokenStandard, updateMetadataAccountV2, findMetadataPda } from "@metaplex-foundation/mpl-token-metadata";
// import { fromWeb3JsPublicKey, fromWeb3JsKeypair} from '@metaplex-foundation/umi-web3js-adapters';
// import { loadWalletKey, ourMetadata } from './helpers.js';
// import * as web3 from "@solana/web3.js";
// import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
// import { createSignerFromKeypair, none, percentAmount, signerIdentity } from "@metaplex-foundation/umi";

require('dotenv').config()
const { TokenStandard, updateMetadataAccountV2, findMetadataPda } = require("@metaplex-foundation/mpl-token-metadata");
const { fromWeb3JsPublicKey, fromWeb3JsKeypair} = require('@metaplex-foundation/umi-web3js-adapters');
const { loadWalletKey, ourMetadata } = require('./helpers.js');
const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');
const { createSignerFromKeypair, none, percentAmount, signerIdentity } = require("@metaplex-foundation/umi");
const web3 = require('@solana/web3.js');

async function updateTokenMetadata() {
    const myKeypair = loadWalletKey(process.env.KEYPAIR_FILE || '');
    const mint = new web3.PublicKey(process.env.TOKEN_ADDRESS || '');
    console.log("Target token address:", process.env.TOKEN_ADDRESS);
    const umi = createUmi(process.env.UMI_RPC_ENDPOINT || '');
  
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair));
    umi.use(signerIdentity(signer, true));
    
    // Find the metadata PDA for the mint
    const [metadataPda] = findMetadataPda(umi, { mint: fromWeb3JsPublicKey(mint) });

    const accounts = {
        metadata: metadataPda,
        updateAuthority: signer.publicKey,
    }

    const data = {
        name: ourMetadata.name,
        symbol: ourMetadata.symbol,
        uri: ourMetadata.uri,
        isMutable: true,
        primarySaleHappened: true,
        tokenStandard: TokenStandard.Fungible,
    }

    try {
        console.log(signer.publicKey+" is updating metadata account... ");
        
        const finalPayload = {
            ...accounts,
            data,
            updateAuthority: signer.publicKey,
            isMutable: true,
        }
        console.log("finalPayload", finalPayload);
        const txid = await updateMetadataAccountV2(umi, finalPayload).sendAndConfirm(umi);
        console.log("Success: https://solscan.io/tx/"+txid);
        return txid;
    } catch (error) {
        if (error.name === 'SendTransactionError') {
            console.error("\nTransaction failed with logs:");
            const logs = await error.getLogs();
            console.error(JSON.stringify(logs, null, 2));
        }
        throw error;
    }
}

updateTokenMetadata(); 