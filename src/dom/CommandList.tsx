"use client"

interface CommandListProps {
    commands: string[]
}

export default function CommandList({ commands }: CommandListProps) {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className="w-95 w-max-700px bord-r-25 flex-col py-100 bg-b-50 mt-8" id="commandsList">
            <div className=" flex-col gap-4 flex-align-stretch">
                <div className="tx-mdl opaci-75 tx-ls-3 mb-2 tx-center" >Command List</div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#3</div>
                    <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">npm i</div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[0])}>Copy <span className="Q_xs">Command #1</span></div>
                </div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#1</div>
                    <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">node secretgen.js PRIVATE_KEY</div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[1])}>Copy <span className="Q_xs">Command #2</span></div>
                </div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#1</div>
                    <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">solana config set -u m --keypair keypair.json</div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[2])}>Copy <span className="Q_xs">Command #3</span></div>
                </div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#2</div>
                    <div className="flex-1 tx-xsm tx-center bg-black tx-white border-white-50 px-1 py-2 bord-r-15">spl-token create-token  --program-id <small className="tx-xs">TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb</small></div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[3])}>Copy <span className="Q_xs">Command #4</span></div>
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
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[4])}>Copy <span className="Q_xs">Command #5</span></div>
                </div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#5</div>
                    <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token create-account TOKEN_ADDRESS</div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[5])}>Copy <span className="Q_xs">Command #6</span></div>
                </div>
                <div className="Q_xs py-2"></div>
                <div className="flex-row Q_xs_flex-col gap-1" >
                    <div className="px-2 tx-gray tx-bold Q_sm_x" >#6</div>
                    <div className="flex-1 tx-xsm bg-black tx-white border-white-50 px-4 py-2 bord-r-15">spl-token mint TOKEN_ADDRESS 10000 </div>
                    <div className="underline pointer px-2 tx-link" onClick={() => copyToClipboard(commands[6])}>Copy <span className="Q_xs">Command #7</span></div>
                </div>
            </div>
        </div>
    )
} 