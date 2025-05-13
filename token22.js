import 'dotenv/config'

import { TokenStandard, updateMetadataAccountV2, findMetadataPda } from "@metaplex-foundation/mpl-token-metadata";
import { fromWeb3JsPublicKey, fromWeb3JsKeypair} from '@metaplex-foundation/umi-web3js-adapters';
import { loadWalletKey, ourMetadata } from './helpers.js';
import * as web3 from "@solana/web3.js";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { createSignerFromKeypair, none, percentAmount, signerIdentity } from "@metaplex-foundation/umi";

async function updateTokenMetadata() {
    const myKeypair = loadWalletKey(process.env.KEYPAIR_FILE || '');
    const mint = new web3.PublicKey(process.env.TOKEN_ADDRESS || '');
    console.log("TOKEN_ADDRESS");
    console.log(TOKEN_ADDRESS);
    const umi = createUmi(process.env.UMI_RPC_ENDPOINT || '');
  
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair));
    umi.use(signerIdentity(signer, true));
    
    const onChainData = {...ourMetadata,
      sellerFeeBasisPoints: percentAmount(0,2),
      creators: none(),
      collection: none(),
      uses: none(),
    }

    // Find the metadata PDA for the mint
    const [metadataPda] = findMetadataPda(umi, { mint: fromWeb3JsPublicKey(mint) });

    const accounts = {
        metadata: metadataPda,
        updateAuthority: signer.publicKey,
    }

    const data = {
        ...onChainData,
        isMutable: true,
        primarySaleHappened: true,
        tokenStandard: TokenStandard.Fungible,
    }

    try {
        console.log("Updating metadata account... DEV:"+signer.publicKey);
        const txid = await updateMetadataAccountV2(umi, {
            ...accounts,
            data,
            updateAuthority: signer.publicKey,
            isMutable: true,
        }).sendAndConfirm(umi);
        console.log("Success: https://solscan.io/tx/"+txid);
        return txid;
    } catch (error) {
        throw error;
    }
}

updateTokenMetadata(); 