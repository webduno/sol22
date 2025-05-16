require('dotenv').config()
const { TokenStandard, updateMetadataAccountV2, findMetadataPda } = require("@metaplex-foundation/mpl-token-metadata");
const { fromWeb3JsPublicKey, fromWeb3JsKeypair} = require('@metaplex-foundation/umi-web3js-adapters');
const { loadWalletKey, ourMetadata } = require('./helpers.js');
const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');
const { createSignerFromKeypair, signerIdentity, none, percentAmount } = require("@metaplex-foundation/umi");
const web3 = require('@solana/web3.js');

async function updateTokenMetadata() {
    const myKeypair = loadWalletKey(process.env.KEYPAIR_FILE || 'keypair.json');
    const mint = new web3.PublicKey(process.env.TOKEN_ADDRESS || '');
    console.log("Target token address:", process.env.TOKEN_ADDRESS);
    const umi = createUmi(process.env.UMI_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com');
  
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair));
    umi.use(signerIdentity(signer, true));
    
    // Find the metadata PDA for the mint
    const [metadataPda] = findMetadataPda(umi, { mint: fromWeb3JsPublicKey(mint) });

    const accounts = {
        metadata: metadataPda,
        updateAuthority: signer.publicKey,
    }

    const fetchedMetadata = await ourMetadata();
    const customMetadata = {
        name: fetchedMetadata.name,
        symbol: fetchedMetadata.symbol,
        uri: fetchedMetadata.uri,
    }
    const data = {
        ...customMetadata,
        creators: null,
        isMutable: true,
        primarySaleHappened: true,
        tokenStandard: TokenStandard.Fungible,        
        sellerFeeBasisPoints: percentAmount(0,2),
        creators: none(),
        collection: none(),
        uses: none(),
    }

    try {
        console.log(signer.publicKey+" is updating metadata account... ");
        
        const finalPayload = {
            ...accounts,
            data,
            creators: null,
            updateAuthority: signer.publicKey,
            isMutable: true,
        }

        const txid = await updateMetadataAccountV2(umi, finalPayload).sendAndConfirm(umi);
        console.log("Success on updateMetadataAccountV2");
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