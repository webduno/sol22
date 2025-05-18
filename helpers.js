const { publicKey } = require("@metaplex-foundation/umi");
const { Keypair } = require("@solana/web3.js");
const fs = require("fs");
const axios = require('axios');


const SPL_TOKEN_2022_PROGRAM_ID = publicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const umiRpcEndpoint = process.env.UMI_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com'; // https://api.mainnet-beta.solana.com

const ourMetadata = async () => {
  const jsonsrc = process.env.METADATA_URI || 'https://sol22.vercel.app/metadata.json';
  const metadata = await axios.get(jsonsrc);
  const jsonResult = metadata.data;
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

module.exports = {
  SPL_TOKEN_2022_PROGRAM_ID,
  umiRpcEndpoint,
  ourMetadata,
  loadWalletKey,
};

