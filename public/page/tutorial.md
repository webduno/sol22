





how to create a token in solana 
with liquidity pools for trading

first we will need to download
and install a couple of things

all these links will be here
at solana22.vercel.app
and in the description


you have to install things like the phantom wallet,
that you can download from this link here - phatom.com
just click here, install the extension, and create your account, then you should have something like this
also install nodejs from this link, nodejs.org
click the download button and install it
and finally open the solana cli link,
and for this, depending on your os
for example on windows, just run these 2 commands
this basically download the installer and then runs it
lets follow the steps
we have to open a command prompt console terminal as admin
open windows, search cmd, and click here

the copy the first command, go the console again, paste it, and hit enter, wait a moment... perfect
now this other command to run the installer
we do the same, and done
lastly when it says press enter to continue, do that
and finally you can test that all worked succesfully
by doing this last command
solana --version
lets clear the terminal first, type solana --version...
and as you can see, it shows a valid version 
lets close this terminal

and for the last requirement, you'll need to download this other toolset that i wrote, that will update the name and image of the token you will be creating
so it can be shown in the wallets and blockchain explorers
so, go to the first github link
and click this green button, then download zip over here
and extract it when its done

now that all that is ready, we can go to the commands list
and start with the first one
we will need a keypair.json file from the private key of
your phantom wallet
so go to your phantom wallet, profile, settings
account management, select the one you want,
then click show private key
put your password, continue
and copy this value
remember not to share this secret key since its like the 
password of your wallet

then lets open a new command terminal inside the solana22  folder you downloaded and extracted previously from the github link
and run this first command
node secretgen.js SECRET_KEY
where you will replace what you copied from the private key here
so, lets delete this, and we'll have this command
node secretgen.js and a bunch of letters and numbers
then you can hit enter and when you can see the message
"Successfully created keypair.json"
this will have generated a keypair.json file in the same folder, which will be used for transactions needed to make everything happen to create the token

remember needs some solana balance 
to make run the next commands, so send some SOL to this new account
im going to send 5 dollars which should cover for all steps

now, copy the second command to create the actual token
spl-token token create, program id, then this code, which
represents how solana makes their tokens
if you google it, it should return token22 results 
as you can see
and finally keypair.json, which as you know now is the file of the password of your wallet

open the  terminal  again, we can clear this,
paste the command and press enter
wait a few seconds
and now you should see here, your new token adress
this is the most important code for the token
so, make sure to save it 


continuing with the third command, lets clear the terminal
and this one is just npm i, copy, paste it, enter and wait
once you see "found 0 vulnerabilities" its done

and before the fourth command, we have to update a file first
which is the env file, find the .envExample file, and rename it to just .env

then open it with a notepad or something
and this is where you will first, paste your new token address
so it know thats the token to update
you can change this for the name of the token
and this symbol for the abbreviation

if you open the phantom wallet you can see that for example 
this main token name is Solana, but the symbol is just SOL

and lastly this updates the name and symbol again, which should match, algon with a  description, but also one of the most important of any coin
the token image

the structure of this json file is like this
look the name symbol, and description
and the image url

yuo can find an example at in the website at
solana22 vercel app then /metadata.json


for this new token
for the metadata.json file, well use one of
the examples that i have here at the website
for example lets take YES, this will create the yes coin
if you click it and open it

you can see the details
so go to the notepad with the opened .env file again

and start copy pasting the rest of values 

we already pasted the tokenadrees
so now well put the name
then symbol

and most importantly, the correct metadata uri
in my case is this one
solana22 vercel app
gen/y/metadata_yes.json

in this case
the image is a generic coin image emoji that i set as default for all tokens
again, located in  the same url 
solana22 vercel app then /image.png

but you can upload your own metadatajson file, with a custom image  to any website you have, and use that instead

if you have your own metadatajson file and image, but no website, and you would like me to add your custom token metadata to the main website list, contact me via github or in the comments

just so you know, this last field is to connect to the solana blockhain mainnet, just leave it like that

now we can run the fourth command
node token22.js
press enter and wait


once we see Success, it should have uploaded the metadata

so lets go to the fith command, that setups the
token accounts protocol, for sending and receiving the coin
spl-token create-account then your TOKEN_ADDRESS 
the same from before

and finally the last step, the reward
pay yourself some new tokens, with this last command


spltoken mint token-address 1000
same as before, replace the TOKEN_ADRESS text with your token code
and the last value is the amount of coins that you will receive in your wallet

in this case ill put 20000, and press enter

