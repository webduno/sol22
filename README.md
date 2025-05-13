# Create a token on Solana with Liquidity

Create your own crypto currency from scratch for web3 using solana cli & metaplex. This repository contains resources for the Solana Token22 Program & the Metaplex Protocol that allow you to create and manage your tokens on the Solana blockchain and adding liquidity pools and providers to allow public trading.

### Website Guide:
  - https://sol22.vercel.app

<br/><br/>

## Important Links:
  - https://github.com/webduno/sol22
  - https://phantom.com/
  - https://nodejs.org/
  - https://docs.solanalabs.com/cli/install
  
### More Links:
  - https://fluxbeam.xyz/app/liquidity
  - https://docs.anza.xyz/cli/install/
  - https://spl.solana.com/token-2022

<br/><br/>

## Commands:

1. Create keypair.json file from phantom exported private key
```
node secretgen.js SECRET_KEY
```

2. Create token program using the generated file as payer
```
spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb keypair.json
```

3. Install the sol22 toolset
```
npm i
```
<br/>
Update .env file
<br/>
4. Upload metadata and image using .env file data
```
node token22.js
```

5. Create token functionalities for sending and receiving
```
spl-token create-account TOKEN_ADDRESS keypair.json
```

6. Receive tokens in phantom wallet
```
spl-token mint TOKEN_ADDRESS 10000 --fee-payer keypair.json
```

<br/><br/>

## Metamplex Metadata JSON Structure
Example: https://sol22.vercel.app/metadata.json
```
{
    "name": "Newest Coin Token",
    "symbol": "NEWCOIN",
    "description": "This is a token program on the Solana blockchain, defining a common implementation for fungible tokens",
    "image": "https://sol22.vercel.app/image.png"
}    
```


## Example Metadata Files:

- A
  - [ALL](https://sol22.vercel.app/gen/A/metadata_ALL.json), [AND](https://sol22.vercel.app/gen/A/metadata_AND.json), [ARE](https://sol22.vercel.app/gen/A/metadata_ARE.json), [ANY](https://sol22.vercel.app/gen/A/metadata_ANY.json), [ASK](https://sol22.vercel.app/gen/A/metadata_ASK.json)

- C
  - [CAN](https://sol22.vercel.app/gen/C/metadata_CAN.json), [CAT](https://sol22.vercel.app/gen/C/metadata_CAT.json), [CUT](https://sol22.vercel.app/gen/C/metadata_CUT.json)

- F
  - [FOR](https://sol22.vercel.app/gen/F/metadata_FOR.json), [FAR](https://sol22.vercel.app/gen/F/metadata_FAR.json), [FUN](https://sol22.vercel.app/gen/F/metadata_FUN.json)

- H
  - [HAD](https://sol22.vercel.app/gen/H/metadata_HAD.json), [HAS](https://sol22.vercel.app/gen/H/metadata_HAS.json), [HER](https://sol22.vercel.app/gen/H/metadata_HER.json), [HIS](https://sol22.vercel.app/gen/H/metadata_HIS.json), [HOW](https://sol22.vercel.app/gen/H/metadata_HOW.json)

- M
  - [MAN](https://sol22.vercel.app/gen/M/metadata_MAN.json), [MAP](https://sol22.vercel.app/gen/M/metadata_MAP.json), [MAY](https://sol22.vercel.app/gen/M/metadata_MAY.json)

- O
  - [OUT](https://sol22.vercel.app/gen/O/metadata_OUT.json), [ONE](https://sol22.vercel.app/gen/O/metadata_ONE.json), [OUR](https://sol22.vercel.app/gen/O/metadata_OUR.json)

- S
  - [SHE](https://sol22.vercel.app/gen/S/metadata_SHE.json), [SEE](https://sol22.vercel.app/gen/S/metadata_SEE.json), [SAY](https://sol22.vercel.app/gen/S/metadata_SAY.json)

- T
  - [THE](https://sol22.vercel.app/gen/T/metadata_THE.json), [TWO](https://sol22.vercel.app/gen/T/metadata_TWO.json), [TRY](https://sol22.vercel.app/gen/T/metadata_TRY.json)

- W
  - [WAS](https://sol22.vercel.app/gen/W/metadata_WAS.json), [WHO](https://sol22.vercel.app/gen/W/metadata_WHO.json), [WHY](https://sol22.vercel.app/gen/W/metadata_WHY.json)

- Y
  - [YOU](https://sol22.vercel.app/gen/Y/metadata_YOU.json), [YES](https://sol22.vercel.app/gen/Y/metadata_YES.json), [YET](https://sol22.vercel.app/gen/Y/metadata_YET.json)



## Generated Folders:
  - View all folders: 
  - [A](https://github.com/webduno/sol22/tree/main/public/gen/A), [B](https://github.com/webduno/sol22/tree/main/public/gen/B), [C](https://github.com/webduno/sol22/tree/main/public/gen/C), [D](https://github.com/webduno/sol22/tree/main/public/gen/D), [E](https://github.com/webduno/sol22/tree/main/public/gen/E), [F](https://github.com/webduno/sol22/tree/main/public/gen/F), [G](https://github.com/webduno/sol22/tree/main/public/gen/G), [H](https://github.com/webduno/sol22/tree/main/public/gen/H), [I](https://github.com/webduno/sol22/tree/main/public/gen/I), [J](https://github.com/webduno/sol22/tree/main/public/gen/J)
  - [K](https://github.com/webduno/sol22/tree/main/public/gen/K), [L](https://github.com/webduno/sol22/tree/main/public/gen/L), [M](https://github.com/webduno/sol22/tree/main/public/gen/M), [N](https://github.com/webduno/sol22/tree/main/public/gen/N), [O](https://github.com/webduno/sol22/tree/main/public/gen/O), [P](https://github.com/webduno/sol22/tree/main/public/gen/P), [Q](https://github.com/webduno/sol22/tree/main/public/gen/Q), [R](https://github.com/webduno/sol22/tree/main/public/gen/R), [S](https://github.com/webduno/sol22/tree/main/public/gen/S), [T](https://github.com/webduno/sol22/tree/main/public/gen/T), [U](https://github.com/webduno/sol22/tree/main/public/gen/U)
  - [V](https://github.com/webduno/sol22/tree/main/public/gen/V), [W](https://github.com/webduno/sol22/tree/main/public/gen/W), [X](https://github.com/webduno/sol22/tree/main/public/gen/X), [Y](https://github.com/webduno/sol22/tree/main/public/gen/Y), [Z](https://github.com/webduno/sol22/tree/main/public/gen/Z)
