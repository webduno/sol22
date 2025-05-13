"use client"
import Link from 'next/link';

export default function ExampleData() {
    return (
        <div className="bord-r-25 flex-col py-100 bg-w-10 w-95 mt-8 w-max-700px bg-glass-10" id="exampleData">
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
    )
} 