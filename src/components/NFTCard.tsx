import * as React from "react";
import Image from "next/image";
import nftModal1 from '@/jsons/1.json';

interface INFTModalProof {
    "p": boolean,
    "d": string
}

export interface INFTModal {
    "mainHash": string,
    "data": {
        "args": {
            "request_dmitem": string,
            "main": string,
            "i": boolean,
            "proof": INFTModalProof[]
        },
        "image.webp": {
            "$b": string
        }
    },
    "targetVector": string,
    "targethash": string
}

const NFTCard = (props: INFTModal) => {
    return (
        <div className='w-56 h-auto bg-[#69696969] rounded-2xl'>
            <div className="logo flex flex-col">
                <Image
                    src={`data:image/webp;base64, ${Buffer.from(props.data["image.webp"]['$b'], 'hex').toString('base64')}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderStartEndRadius: '16px', borderStartStartRadius: '16px' }}
                    alt="logo"
                />
                <div className="flex items-center gap-3 p-2">
                    <span className="text-lg">Name: </span>
                    <span className="text-lg">{props.data.args.request_dmitem}</span>
                </div>
            </div>
        </div>
    )
}

export default NFTCard;