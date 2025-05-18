
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
 and the second one is to run that installer 
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

then lets open a new command terminal inside the "sol22 main"   
folder you downloaded and extracted earlier
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
the next commands and transactions which will eventually create the token

remember you need some solana balance 
to  run the next commands, so send some SOL to the public adress 
of that wallet you selected
im going to send 5 dollars which should cover for all steps




great, lets keep going


the third command setups the solana
cli configuration to use that newly generated file
so copy the command number three
solana config set "dash u space m" which means to deploy to mainnet
and this part at the end 
specifies the name of the file for your accounts private key
which you already know is keypair.json
so go to the terminal, paste the command
and hit enter
and when we see the commitment as confirmed
we are good







## step 3 token

now, that the intial config is done
lets continue
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








then open it with a notepad or something similar
and this is where you have to paste your new token
address that you saved before

so just replace this with your own token address

and also, lets take a look at this metadata uri field, so open this link
sol22 vercel app /metadata.json

this is how you can update the name, symbol, and image of the token

lets see the difference between name and symbol
for example if you open the phantom wallet you can see that  
this main token label is Solana which is the name, 
but the symbol is just SOL "s o l"
meaning its kind of the abbreviation of the name




you can upload your own metadatajson file
with a custom image
to any website, server or hosting you want



so lets change the name and symbol
the metadata file has to be online
ill use one of the templates i uploaded 




first select a metadata.json file,
lets use one from the example list that i have generated here at the website,
for example lets take YES, this will create
a new token called "yes coin"
if you click this option and open it

you can see the details
so go copy the url

sol22 vercel app
gen/y/metadata_yes.json
go to the notepad with the opened .env file again

and paste the correct  metadata  uri value of the json
in my case is this one

and for this scenario
the image is a generic coin image emoji that i set as default
 for all tokens for now,
again, located in  the same base url 
sol22 vercel app then /image.png

but you can upload your own metadatajson file, 
with a custom image  to any image hosting website or you own,
and use that instead as uri and image instead
now we are done with the environment file








and we can proceed to run the fifth command
node token00.js
copy, paste it, press enter and wait
once we see Success, it should have created the metadata

now we can run the sixth command which is pretty much the same, 
node token22.js
press enter and wait
again
once we see Success, it should have updated everything on the blockchain


## step 4 cryptocurrency

next command, this one setups the
token accounts protocol, for sending and receiving the coin
spl-token create-account then your TOKEN_ADDRESS
copypaste it, replace address,  and run


and finally the last step, the reward
pay yourself some new tokens, with this last command
spltoken mint token-address and the amount
again, replace the TOKEN_ADRESS text with your own token code
and the last value is the amount of coins that you will receive in your wallet

in this case ill put 20000, and press enter
and thats pretty much it,
you now have sent yourself some freshly created tokens of your 
new coin 






lets open the phantom wallet to check it out
scroll down, and perfect
 here at the end, the yes Coin
and i have exactly 20 thousand of it, 
lets look at the token on a solana blockchain explorer
copy the token adress 
go to google  and search solana explorer

and as you can see, we have the token page with the correct name
symbol and image
and we can also test sending some tokens to another wallet

there you go
our own balance is less than before, its no longer 20000
so we did spend some

and if we go to the other phnatom account|,
you can see it has 339 which is the amount i sent before
so everything is working pefectly

and if we go to the explorer again and refresh the page,
the last transaction is the one that i just made to send the 
tokens to the other wallet, a few seconds ago
and here, you see the exact amount
now anyone in the solana blockchain  can now send receive and hold your coin




## step 5 recap


finally, one last very important step
it setting up  a liquidity pool for people to buy or trade your coin
 lets enable this feature using a popular website called fluxbeam xyz
just go to this url at the create liquidity pool section
and add your token address at the end
in my case it would result in this url
fluxbeam.xyz/app/pools/create?inMint=So11111111111111111111111111111111111111112&outMint=2xa2uWroavdwhxmxYydY9mNHsx6f256MSX8fr59dK72d

now in this page, connect your wallet
then, at this input, where your token is shown, add some of your coins,
for example ill add half, 10 thousand
then over here a bit of solana to balance the price, 
lets put .001 instead for testing
and this is the calculation that tells you the would be initial selling price


so, click create pool, and confirm the transaction,
then wait a moment, and you are done
now if you go to the swap section, here on the left sidebar
you will get your public trading link, 
this is where users can come
to buy your tokens which will in turn make the price go up


## step 6 recap

you can now use this token in many ways
from a website, or a telegram mini app, and even in web games
if you wanna know how to use this coin for all that
we have more tutorials on how to add a connect your wallet button
to all your sites, and show the amonut of tokens the user has
along other details
which give way to implement features like restricting access 
with a minimum balance for users
giving perks to some holders, or even ai agent token control
for more information, go to uor channel webpov
or follow my x account at webduno for daily 
tips on web3 and game development