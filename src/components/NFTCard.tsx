import * as React from "react";
import Image from "next/image";
import { Download, Stamp } from "lucide-react";
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
    "image.webp": {
      $b: string;
    };
  };
  targetVector: string;
  targethash: string;
}

const NFTCard = ({ data }: { data: INFTModal[] }) => {
  return (
    <div className="mt-4 p-4 grid new-feed-cols justify-stretch justify-items-stretch gap-4 w-full">
      {data && data.map((nftModal, index) => (
        <div key={index} className="w-full flex flex-col items-center border-2">
          {nftModal.data["image.webp"]?.$b ? (
            <Image
              src={`data:image/webp;base64, ${Buffer.from(
                nftModal.data["image.webp"].$b !== undefined
                  ? nftModal.data["image.webp"].$b
                  : "",
                "hex"
              ).toString("base64")}`}
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
            <Button variant={'outline'} className="h-8 w-full border-b-0 border-l-0">
              <Download className="flex justify-center items-center h-4 w-6  " />
            </Button>
            <Button variant={'outline'} className="h-8 w-full border-b-0 border-r-0">
              <Stamp className="flex justify-center items-center h-4 w-6  " />
            </Button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default NFTCard;
