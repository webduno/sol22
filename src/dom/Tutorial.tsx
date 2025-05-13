import Link from 'next/link';

export default function Tutorial() {
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
        
        <ul className="flex-wrap flex-align-start gap-8 w-80 ">
            <li>
                <ul className="ma-0 pa-0">
                  <li><Link className=" py-2 tx-ls-1 opaci-chov--50 nodeco block" href="https://github.com/webduno/sol22" 
                  target="_blank">🗂️ github.com/webduno/Sol22</Link></li>
                  <hr className="opaci-20" />
                  <li><Link className=" py-2 opaci-chov--50 nodeco block" href="https://phantom.com/" 
                  target="_blank">👾 phantom.com (wallet)</Link></li>
                  <li><Link className=" py-2 opaci-chov--50 nodeco block" href="https://nodejs.org/" 
                  target="_blank">📗 nodejs.org</Link></li>
                  <li><Link className=" py-2 opaci-chov--50 nodeco block" href="https://docs.solanalabs.com/cli/install" 
                  target="_blank">🔍 docs.solanalabs.com/cli/install</Link></li>

                  <hr className="opaci-20" />
                  <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://fluxbeam.xyz/app/liquidity" 
                  target="_blank">💧 fluxbeam.xyz</Link></li>
                  <hr className="opaci-20" />
                  <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://docs.anza.xyz/cli/install/" 
                  target="_blank">📟 docs.anza.xyz (cli)</Link></li>
                  <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://spl.solana.com/token-2022" 
                  target="_blank">💻 spl.solana.com/token-2022</Link></li>
                </ul>
            </li>
        </ul>
        <hr className="w-90 w-max-700px opaci-10 my-8" />
        <div className="tx-mdl opaci-75 tx-ls-3 mb-1" >JSON Metadata Files</div>
        <ul className="flex-wrap flex-align-start gap-8 w-80 ">
            <li>
                <strong className="tx-bold-2 tx-lg ">A</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/A/metadata_ALL.json" target="_blank">ALL</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/A/metadata_AND.json" target="_blank">AND</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/A/metadata_ARE.json" target="_blank">ARE</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/A/metadata_ANY.json" target="_blank">ANY</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/A/metadata_ASK.json" target="_blank">ASK</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">C</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/C/metadata_CAN.json" target="_blank">CAN</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/C/metadata_CAT.json" target="_blank">CAT</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/C/metadata_CUT.json" target="_blank">CUT</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">F</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/F/metadata_FOR.json" target="_blank">FOR</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/F/metadata_FAR.json" target="_blank">FAR</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/F/metadata_FUN.json" target="_blank">FUN</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">H</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/H/metadata_HAD.json" target="_blank">HAD</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/H/metadata_HAS.json" target="_blank">HAS</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/H/metadata_HER.json" target="_blank">HER</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/H/metadata_HIS.json" target="_blank">HIS</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/H/metadata_HOW.json" target="_blank">HOW</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">M</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/M/metadata_MAN.json" target="_blank">MAN</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/M/metadata_MAP.json" target="_blank">MAP</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/M/metadata_MAY.json" target="_blank">MAY</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">O</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/O/metadata_OUT.json" target="_blank">OUT</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/O/metadata_ONE.json" target="_blank">ONE</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/O/metadata_OUR.json" target="_blank">OUR</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">S</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/S/metadata_SHE.json" target="_blank">SHE</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/S/metadata_SEE.json" target="_blank">SEE</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/S/metadata_SAY.json" target="_blank">SAY</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">T</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/T/metadata_THE.json" target="_blank">THE</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/T/metadata_TWO.json" target="_blank">TWO</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/T/metadata_TRY.json" target="_blank">TRY</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">W</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/W/metadata_WAS.json" target="_blank">WAS</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/W/metadata_WHO.json" target="_blank">WHO</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/W/metadata_WHY.json" target="_blank">WHY</a></li>
                </ul>
            </li>
            <li>
                <strong className="tx-bold-2 tx-lg ">Y</strong>
                <ul className="ma-0 pa-0">
                    <li><a className="tx-gray py-1 block" href="/gen/Y/metadata_YOU.json" target="_blank">YOU</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/Y/metadata_YES.json" target="_blank">YES</a></li>
                    <li><a className="tx-gray py-1 block" href="/gen/Y/metadata_YET.json" target="_blank">YET</a></li>
                </ul>
            </li>
        </ul>
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
            <div className="underline pointer px-2 tx-link" data-click="copyCommand1">Copy <span className="Q_xs">Command #1</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#2</div>
            <div className="flex-1 tx-xsm tx-center bg-black tx-white border-white-50 px-1 py-2 bord-r-15">spl-token create-token  --program-id <small className="tx-xs">TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb</small> <small className="tx-xs">keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" data-click="copyCommand2">Copy <span className="Q_xs">Command #2</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#3</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">npm i</div>
            <div className="underline pointer px-2 tx-link" data-click="copyCommand3">Copy <span className="Q_xs">Command #3</span></div>
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
            <div className="underline pointer px-2 tx-link" data-click="copyCommand4">Copy <span className="Q_xs">Command #4</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#5</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token create-account TOKEN_ADDRESS <small className="tx-xs">keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" data-click="copyCommand5">Copy <span className="Q_xs">Command #5</span></div>
        </div>
        <div className="Q_xs py-2"></div>
        <div className="flex-row Q_xs_flex-col gap-1" >
            <div className="px-2 tx-gray tx-bold Q_sm_x" >#6</div>
            <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token mint TOKEN_ADDRESS 10000 <small className="tx-xs">--fee-payer keypair.json</small></div>
            <div className="underline pointer px-2 tx-link" data-click="copyCommand6">Copy <span className="Q_xs">Command #6</span></div>
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

