"use client"
import Link from 'next/link';
import ImportantLinks from './ImportantLinks';
import MetadataFiles from './MetadataFiles';

export default function Tutorial() {
    const COMMANDLIST = [
        "node secretgen.js SECRET_KEY",
        "spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb keypair.json",
        "npm i",
        "node token22.js",
        "spl-token create-account TOKEN_ADDRESS keypair.json",
    ]
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }
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
    <p className=" tx-lg tx-center px-4 mb-0 tx-bold">Create a token on the Solana blockchain</p>
    <div className="tx-gray flex-col">
        <p className="w-max-400px w-90 tx-center  pa-4 bord-r-25"
    style={{background: "linear-gradient(180deg, #00000000, #00000044,  #00000000)"}}
    >Resources for the Solana Token22 Program &amp; the Metaplex Protocol that allow you to create and manage your tokens on the Solana blockchain.</p>
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
    <div className="w-95 w-max-700px bord-r-25 flex-col py-100 bg-b-50 mt-8" id="commandsList">
    <div className=" flex-col gap-4 flex-align-stretch">
        <div className="tx-mdl opaci-75 tx-ls-3 mb-2 tx-center" >Command List</div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#1</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">node secretgen.js SECRET_KEY</div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[0])}>Copy <span className="Q_xs">Command #1</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#2</div>
            <div className="flex-1 tx-xsm tx-center bg-black tx-white border-white-50 px-1 py-2 bord-r-15">spl-token create-token  --program-id <small className="tx-xs">TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb</small> <small className="tx-xs">keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[1])}>Copy <span className="Q_xs">Command #2</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#3</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">npm i</div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[2])}>Copy <span className="Q_xs">Command #3</span></div>
        </div>
        <div className="flex-row gap-4">
            <hr className="flex-1 opaci-10 " />
            <div className="tx-sm">.envExample <span className="px-4 opaci-50 tx-mdl">→</span> .env</div>
            <hr className="flex-1 opaci-10 " />
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#4</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">node token22.js</div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[3])}>Copy <span className="Q_xs">Command #4</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#5</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token create-account TOKEN_ADDRESS <small className="tx-xs">keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[4])}>Copy <span className="Q_xs">Command #5</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#6</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token mint TOKEN_ADDRESS 10000 <small className="tx-xs">--fee-payer keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(COMMANDLIST[5])}>Copy <span className="Q_xs">Command #6</span></div>
        </div>
    </div>
</div>



<hr className="Q_md_x mt-100 invisible " />
<hr className="my-8 invisible " />

    <div className="bord-r-25 flex-col py-100 bg-w-10 w-95 mt-8   w-max-700px bg-glass-10" id="ddddd"
    // style={{marginLeft: "5%"}}
    >
        <Link href="/image.png" target="_blank" className="flex-col nodeco tx-white">
        <div className="tx-mdl opaci-75 tx-ls-3 mb-1" >Example Image</div>
        <div className="tx-sm underline opaci-50 tx-ls-1  mb-4" >sol22.vercel.app/image.png</div>
            <img src="/image.png" alt="Solana Token22 Helper" className="w-100px " />
        </Link>
    <hr className="w-90 w-max-700px opaci-10 my-8 " />
    <Link href="/metadata.json" target="_blank" className="flex-col nodeco tx-white">
    <div className="tx-mdl opaci-75 tx-ls-3 mb-1" >Example JSON</div>
    <div className="tx-sm underline opaci-50 tx-ls-1  mb-4" >sol22.vercel.app/metadata.json</div>
         <div className="tx-xl">🧾</div>
    </Link>
    <hr className="w-90 w-max-700px opaci-10 my-8 " />
    <div>
        <div className="tx-mdl opaci-75 tx-ls-3 mb-2 tx-center" >Metaplex Metadata</div>
        <div className="tx-mdl opaci-75 tx-ls-3 mb-2 tx-center" >JSON Structure</div>
        
    <div className="flex-col ">
        <button data-click="copyJson" className="border-white px-8 py-2 tx-white bord-r-15 bg-trans opaci-chov--50">
            Copy
        </button>
</div>
        <pre className="ma-0 w-100">
            <code className="w-250px tx-black block autoverflow-x bg-w-90 bord-r-15 pl-4 py-4 my-4">
{`{
    "name": "Newest Coin Token",
    "symbol": "NEWCOIN",
    "description": "This is a token program on the Solana blockchain, defining a common implementation for fungible tokens",
    "image": "https://sol22.vercel.app/image.png"
}`}
            </code>
        </pre>        

    </div>

</div>
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

