"use client"
import Link from 'next/link';

export default function ImportantLinks() {
    return (
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
                  <div>
                    <details>
                    <summary className='flex pt-2 pointer '><button className='bg-trans tx-white noborder tx-gray noselect noclick'>▼ View More</button></summary>
                    <ul className='pl-4 pt-4'>
                        <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://fluxbeam.xyz/app/liquidity" 
                        target="_blank">💧 fluxbeam.xyz</Link></li>
                        <hr className="opaci-20" />
                        <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://docs.anza.xyz/cli/install/" 
                        target="_blank">📟 docs.anza.xyz (cli)</Link></li>
                        <li><Link className=" py-2 opaci-chov--50 nodeco tx-gray block" href="https://spl.solana.com/token-2022" 
                        target="_blank">💻 spl.solana.com/token-2022</Link></li>
                    </ul>
                    </details>
                  </div>
                </ul>
            </li>
        </ul>
    )
} 