// import { publicKey } from "@metaplex-foundation/umi";
// import { Keypair } from "@solana/web3.js";
// import fs from "fs";
const { publicKey } = require("@metaplex-foundation/umi");
const { Keypair } = require("@solana/web3.js");
const fs = require("fs");

const SPL_TOKEN_2022_PROGRAM_ID = publicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const umiRpcEndpoint = process.env.UMI_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com'; // https://api.mainnet-beta.solana.com
// const ourMetadata = {
//   "name": process.env.METADATA_NAME || 'Test Coin Name',
//   "symbol": process.env.METADATA_SYMBOL || 'BTC',
//   "uri": process.env.METADATA_URI || 'https://mileisol.com/token22/milei_metadata.json',
// };

const ourMetadata = async () => {
  const jsonsrc = process.env.METADATA_URI || 'https://sol22.vercel.app/metadata.json';
  const metadata = await fetch(jsonsrc);
  const jsonResult = await metadata.json();
  return {
    ...jsonResult,
    uri: jsonsrc,
  };
}

function loadWalletKey(keypairFile) {
  return Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())),
  );
}
  

// async function createOrUpdateToken(mint, umi, maxRetries = 3, retryDelay = 5000) {
//   const onChainData = {
//     ...ourMetadata,
//     sellerFeeBasisPoints: percentAmount(0, 2),
//     creators: none(),
//     collection: none(),
//     uses: none(),
//   };

//   const accounts = {
//     mint: fromWeb3JsPublicKey(mint),
//     splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
//   };

//   const data = {
//     ...onChainData,
//     isMutable: true,
//     discriminator: 0,
//     tokenStandard: TokenStandard.Fungible,
//     collectionDetails: none(),
//     ruleSet: none(),
//     createV1Discriminator: 0,
//     primarySaleHappened: true,
//     decimals: none(),
//     printSupply: none(),
//   };
//   console.log("createOrUpdateTokencreateOrUpdateToken")

//   for (let attempt = 1; attempt <= maxRetries; attempt++) {
//     try {
//       console.log("Attempt to create or update the token and confirm the transaction")
//       // Attempt to create or update the token and confirm the transaction
//       const txid = await createV1(umi, { ...accounts, ...data }).sendAndConfirm(umi);

//       // If the transaction is successful, return the transaction ID
//       console.log("If the transaction is successful, return the transaction ID")
//       return txid;
//     } catch (error) {
//       // Check if the error is due to transaction expiration
//       console.log("Check if the error is due to transaction expiration")
//       if (error instanceof TransactionExpiredBlockheightExceededError) {
//         console.warn(`Attempt ${attempt} failed: Transaction expired. Retrying after ${retryDelay}ms...`);

//         // Wait for a specified delay before retrying
//         console.log("Wait for a specified delay before retrying")
//         await sleep(retryDelay);
//       } else {
//         // If the error is not due to transaction expiration, rethrow it
//         console.log("If the error is not due to transaction expiration, rethrow it")
//         throw error;
//       }
//     }
//   }

//   // If all attempts fail, throw an error
//   console.log("If all attempts fail, throw an error")
//   throw new Error('Failed to create or update token after maximum retries.');
// }

module.exports = {
  SPL_TOKEN_2022_PROGRAM_ID,
  umiRpcEndpoint,
  ourMetadata,
  loadWalletKey,
};

