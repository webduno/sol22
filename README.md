# How to make a token in the solana blockchain

Create your own crypto currency from scratch for web3 using solana cli & metaplex. This repository contains resources for the Solana Token22 Program & the Metaplex Protocol that allow you to create and manage your tokens on the Solana blockchain.

### Main Page:
  - https://sol22.vercel.app


## Links:
  - https://phantom.com/
  - https://docs.solanalabs.com/cli/install
  - https://docs.anza.xyz/cli/install/
  - https://github.com/webduno/solana22
  - https://spl.solana.com/token-2022
  - https://fluxbeam.xyz/app/liquidity



## Commands:

```
solana-keygen new --no-bip39-passphrase

cat C:\Users\Equipo\.config\solana\

spl-token create-token --enable-metadata --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

spl-token create-account TOKEN_ADDRESS

spl-token initialize-metadata TOKEN_ADDRESS "FUN coin" FUN https://sol22.vercel.app/gen/F/metadata_FUN.json

spl-token mint TOKEN_ADDRESS 10000  

spl-token authorize TOKEN_ADDRESS  mint --disable

spl-token authorize TOKEN_ADDRESS  freeze --disable
```

## Metadata Structure:
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
  - View all folders: sol22.vercel.app/
  - [A](sol22.vercel.app/A), [B](sol22.vercel.app/B), [C](sol22.vercel.app/C), [D](sol22.vercel.app/D), [E](sol22.vercel.app/E), [F](sol22.vercel.app/F), [G](sol22.vercel.app/G), [H](sol22.vercel.app/H), [I](sol22.vercel.app/I), [J](sol22.vercel.app/J)
  - [K](sol22.vercel.app/K), [L](sol22.vercel.app/L), [M](sol22.vercel.app/M), [N](sol22.vercel.app/N), [O](sol22.vercel.app/O), [P](sol22.vercel.app/P), [Q](sol22.vercel.app/Q), [R](sol22.vercel.app/R), [S](sol22.vercel.app/S), [T](sol22.vercel.app/T), [U](sol22.vercel.app/U)
  - [V](sol22.vercel.app/V), [W](sol22.vercel.app/W), [X](sol22.vercel.app/X), [Y](sol22.vercel.app/Y), [Z](sol22.vercel.app/Z)
