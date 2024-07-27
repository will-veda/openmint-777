"use client";
import * as React from "react";
import Image from "next/image";
import { Download, Pickaxe, Stamp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface INFTModalProof {
  p: boolean;
  d: string;
}

export interface INFTModal {
  mainHash: string;
  data: {
    args: {
      request_dmitem: string;
      main: string;
      i: boolean;
      proof: INFTModalProof[];
    };
    [key: string]: {
      $b?: string;
    };
  };
  targetVector: string;
  targethash: string;
}

const NFTCard = ({ atomicalData, data }: { atomicalData: any, data: INFTModal[] }) => {

  const handleMint = async (dmitem: Record<string, any>) => {
    console.log("dmint :", dmitem);

    try {
      const response = await window.wizz.requestMint({
        type: 'mint_dmitem',
        dmitem,
        atomicalId: atomicalData.atomical_id
      });
      console.log('Mint response:', response);
    } catch (error) {
      console.error('Mint error:', error);
    }
  };

  const handleDownload = (nftModal: INFTModal) => {
    const content = nftModal;
    const jsonBlob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `item-${nftModal.data.args.request_dmitem}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getImageBase64 = (data: { [key: string]: { $b?: string } }) => {
    for (const key in data) {
      if (data[key].$b) {
        return Buffer.from(data[key].$b, "hex").toString("base64");
      }
    }
    return null;
  };

  return (
    <div className="mt-4 p-4 grid new-feed-cols justify-stretch justify-items-stretch gap-4 w-full">
      {data && data.map((nftModal, index) => (
        <div key={index} className="w-full flex flex-col items-center border-2">
          {getImageBase64(nftModal.data) ? (
            <Image
              src={`data:image/png;base64, ${getImageBase64(nftModal.data)}`}
              width={144}
              height={144}
              className="w-34 h-auto rounded-lg"
              alt="NFT"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex justify-center items-center">
              <p>Loading...</p>
            </div>
          )}
          <div className="flex flex-row justify-center items-center w-full">
            <Button
              variant={'outline'}
              className="h-8 w-full border-b-0 border-l-0"
              onClick={() => handleDownload(nftModal)}
            >
              <Download className="flex justify-center items-center h-4 w-6" />
            </Button>
            <Button
              variant={'outline'}
              className="h-8 w-full border-b-0 border-r-0"
              onClick={() => handleMint(nftModal)}
            >
              <Pickaxe className="flex justify-center items-center h-4 w-6" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
