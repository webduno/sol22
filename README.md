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

1. Install the sol22 toolset
```
npm i
```

2. Create keypair.json file from phantom exported private key
```
node secretgen.js PRIVATE_KEY
```

3. Create keypair.json file from phantom exported private key
```
solana config set -u m --keypair keypair.json
```

4. Create token program using the generated file as payer
```
spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb keypair.json
```

<br/>
Update .env file
<br/><br/><br/>

5. Upload metadata and image using .env file data
```
node token00.js
```

6. Upload metadata and image using .env file data
```
node token22.js
```

7. Create token functionalities for sending and receiving
```
spl-token create-account TOKEN_ADDRESS keypair.json
```

8. Receive tokens in phantom wallet
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

---

<br />
<br />

# Written Guide

how to create a token in solana 
with liquidity pools for trading

first we will need to download
and install a couple of things

this link list will be here
at sol22.vercel.app
and also in the description

##  step 1 requirements
so for step 1
you have to install things like the phantom wallet,
that you can download from this link here - phatom.com
just click here, install the extension, and create your account, 
then you should have something like this
also install nodejs from this link, nodejs.org
click the download button and install it
and finally open the solana cli link,
and for this one, depending on your os
for example on windows, just run these 2 commands
this one basically downloads an executable file
 and this one is to run that installer 
so lets follow the steps
first we have to open a command prompt console terminal as administrator
so ill open the windows menu, search cmd, and click here
execute as admin

then copy the first command, go the console again, paste it, and hit enter,
 wait a moment... perfect
 
now this other command to run the installer
we do the same, copy, paste, and done
when it says press enter to continue, do that
and finally you can test that all of this worked succesfully
by doing this last command
so type solana --version... and enter.
and as you can see, it shows a valid number 
lets close this terminal since we have the cli now

and for the last requirement,
you'll need to download this github repository
that i wrote, these scripts will call the
blockchain to update the name and image of the token you will be creating
this software will provide the data to be shown in the wallets 
and blockchain explorers like this
so, go to the github webduno sol22 link
and click this green button, then download zip over here
and extract it when its done

now that all that is ready, we can go to the commands list

## step 2 commands

at the commands list, 
lets start with the first one
npm i, 

copy it

then lets open a new command terminal inside the "sol22 dash main"   
folder you downloaded and extracted previously from the github link
like this, open folder, right click, open terminal
then paste the command, press enter and wait

once you see "found 0 vulnerabilities" its done
so we can continue with the seccond command,
but lets clear the terminal first with clear and enter

and lets check the second comand,
node secretgen.js PRIVATE_KEY
what this will do, is generate a file called keypair.json
 based on the private key of your phantom wallet

first copy and paste the command in the terminal
but you have to edit it before pressing enter,
you need to add your actual private key

so go to your phantom wallet, profile, settings
account management, select the one you want,
then click show private key
put your password, select solana, and continue
and copy this value
remember not to share this private key 
since its like the password of your wallet


now, going back to the terminal

you will replace what you copied from the private key here
so, lets delete this, remember to leave the space in between,
 right click or shift insert to paste
 and now we'll have this command
node secretgen.js and a bunch of letters and numbers

now run the second command so you can now hit enter
 and when you can see the message
"Successfully created keypair.json"
this will have generated the file in the same folder,
 which will be used for
the next commands and transactions which will actually create the token

remember you need some solana balance 
to  run the next commands, so send some SOL to the public adress 
of that wallet you selected
im going to send 5 dollars which should cover for all steps
great, lets keep going
the third command setups the solana cli configuration,
 to use that newly generated file
so copy the command number three
solana config set "dash u space m" which means to deploy to mainnet
and this that tells it the name of the file for your accounts private key
which you know is keypair.json
so go to the terminal, paste it
and hit enter
and we see the commitment as confirmed
so we are good

## step 3 token

now, that the intial config is done
lets clear the terminal again and continue
copy the fourth command to create the actual token
spl-token create token, program id, then this code, which
represents how solana makes their tokens
if you google it, it should return abunch of oficial solana token22 results 
as you can see

open the  terminal  
paste the command and press enter
wait a few seconds
and now you should see here, your new token adress
this is the most important code for the token
so, make sure to save it 

its crucial that you save this new token adrress to continue with 
the next commands
and also before the fith command, we have to update a file
 inside the sol22 folder first
which is the environment file, find the file called .envExample, 
and rename it to just .env




then open it with a notepad or something
and this is where you have to paste your new token address
 that you saved before
so it know thats which token to update

now, see this metadata uri field, and open this link
you can change this to update the name of the token
and this symbol for the abbreviation of the name

if you open the phantom wallet you can see that for example 
this main token name is Solana which is the name, 
but the symbol is just SOL "s o l"

this json syncronizes the name and symbol, along with a  description, 
but also one of the most important properties of any coin
the token image
this is where we'll set the sources

remember you can find an example 
in the website guide at
sol22 vercel app /metadata.json

the same structure for this json file
look the name symbol, and description
and the image url


going back to the environment file
and continuing with the tutorial for the new token
lets select a metadata.json file,
well use one of the examples that i have generated here at the website,
 you can also use any of these
for example lets take YES, this will create
a new token called "yes coin"
if you click this option and open it

you can see the details
so go to the notepad with the opened .env file again

and copy paste the correct uri or metadata json url
in my case is this one
sol22 vercel app
gen/y/metadata_yes.json

and for this scenario
the image is a generic coin image emoji that i set as default
 for all tokens for now
again, located in  the same base url 
sol22 vercel app then /image.png

but you can upload your own metadatajson file, 
with a custom image  to any website you have, and use that instead

if you have your own metadatajson file and image, but no website, 
and you would like me to add your custom token metadata to my main website guide,
 contact me via github or in the comments

at last, we are done with the environment file
now we can run the fourth command
node token00.js
copy, paste it, press enter and wait
once we see Success, it should have created the metadata

now we can run the fith command which is pretty much the same, but like this
node token22.js
press enter and wait
again
once we see Success, it should have updated everything on the blockchain


## step 4 cryptocurrency

so lets go to the sixth command, that setups the
token accounts protocol, for sending and receiving the coin
spl-token create-account then your TOKEN_ADDRESS 
the same from before

and finally the last step, the reward
pay yourself some new tokens, with this last command


spltoken mint token-address 1000
same as before, replace the TOKEN_ADRESS text with your token code
and the last value is the amount of coins that you will receive in your wallet

in this case ill put 20000, and press enter
and tada, you now have sent yourself some freshly created of your 
new coin or token

anyone in the solana blockchain  can now send receive and hold your coin

finally, lets enable trading using a 
popular website called fluxbeam xyz
just go to this url on the liquidity section

and add some of your tokens, plus a bit of solana
this is the calculation for you to get the initial selling price
after that you wont have control of the tokens price
in this liquidity pool, but you can always create new ones

click continue, wait a moment, and you are done
this is your public trading link, where users can come
to buy your tokens which will make the price go up


## step 5 recap


