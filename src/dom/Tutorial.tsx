"use client"
import Link from 'next/link';
import ImportantLinks from './ImportantLinks';
import MetadataFiles from './MetadataFiles';
import CommandList from './CommandList';
import ExampleData from './ExampleData';

export default function Tutorial() {
    const COMMANDLIST = [
        "node secretgen.js SECRET_KEY",
        "spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb keypair.json",
        "npm i",
        "node token22.js",
        "spl-token create-account TOKEN_ADDRESS keypair.json",
    ]
    return (
        <div className="flex-col pt-8 w-90 tx-white pb-100 ">
            
    <Link href="/" className="flex-col nodeco tx-white  py-4 bord-r-50 w-90 w-max-700px"
    style={{background: "linear-gradient(0deg, #00000000, #00000077)"}}
    >
        <h1 className="tx-mdl  tx-ls-3 mb-1" >Solana Token22 Guide</h1>
        <div className="tx-sm underline  tx-ls-3 tx-gray mb-4" >sol22.vercel.app</div>
        <div className="spin-60 flex tx-pink pos-abs z-100 tx-lx mt-8" style={{filter: "brightness(200%) saturate(250%)"}}>
                        
                <div className="tx-lgtx-bold-8 spin-9 paci-50 px-2 tx-pink blur-2">. <i className="paci-10 tx-mm blur-5">.</i> 
                    <span className="tx-green">.</span>
                </div>
                <div className="spin-20 paci-50 flex tx-mm px-1 blur-2">
                <span className="tx-red tx-sm">.</span>
                <div className="tx-lx tx-bold-8 spin-3 paci-50 px-2 tx-cyan">. <i className="paci-10 tx-green blur-1 tx-xsm">.</i> 
                    <span className="tx-mm tx-xxl blur-5">.</span>
                </div>
                .
            </div>
            .
        </div>
        <img  style={{boxShadow: "0 0 30px #aaddff44"}} 
        src="/page/solana.png" alt="Solana Token22 Helper" className="w-100px bord-r-100p spin-60" />
    </Link>






    <hr className="w-90 w-max-700px opaci-10 mt-8" />
    <p className=" tx-lg tx-center px-4 mb-0 tx-bold">Create a token on Solana with Liquidity</p>
    <div className="tx-gray flex-col">
        <p className="w-max-400px w-90 tx-center  pa-4 bord-r-25"
    style={{background: "linear-gradient(180deg, #00000000, #00000044,  #00000000)"}}
    >Resources for the Solana Token22 Program &amp; the Metaplex Protocol that allow you to create and manage your tokens on the Solana blockchain and adding liquidity pools and providers to allow public trading.</p>
    </div>
    
    <div className="bord-r-25 flex-col py-8 bg-b-50 mt-8 border-white-50 bg-glass-10" id="exampleList">
        <div className="tx-mdl opaci-75 tx-ls-3 mb-1" >Important Links</div>
        <ImportantLinks />
        <hr className="w-90 w-max-700px opaci-10 my-8" />
        <div className="tx-mdl opaci-75 tx-ls-3 mb-1" >JSON Metadata Files</div>
        <MetadataFiles />
    </div>
    <hr className="Q_md_x mt-100 invisible " />





    <hr className="my-8 invisible " />
    <CommandList commands={COMMANDLIST} />



<hr className="Q_md_x mt-100 invisible " />
<hr className="my-8 invisible " />

    <ExampleData />

<div className="flex-col mt-100">
    <Link href="https://github.com/webduno/Sol22" target="_blank" className="flex-col nodeco tx-white">
        <h1 className="tx-mdl  tx-ls-3 mb-1" >Github Repository</h1>
        <div className="tx-sm underline  tx-ls-1 mb-4" >github.com/webduno/Sol22</div>
        <img  
        src="/page/git.png" alt="Solana Token22 Helper" className="w-100px pa-1 bg-white block bord-r-100p" />
    </Link>
</div>
</div>




    )
}

