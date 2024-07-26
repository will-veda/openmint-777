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

const NFTCard = (props: INFTModal) => {
  console.log("INFTModal:", props);
  return (
    <div className="w-56 h-auto bg-[#69696969] rounded-2xl">
      <div className="flex justify-center items-center p-0 relative group">
        <Image
          src={`data:image/webp;base64, ${Buffer.from(
            props.data["image.webp"]["$b"],
            "hex"
          ).toString("base64")}`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-[16px]"
          alt="NFT"
        />
        <div className="absolute flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-fit my-2">
            <Download className="flex justify-center items-center h-4 w-6 text-white dark:text-gray-800" />
          </Button>
          <Button className="w-fit my-2">
            <Stamp className="flex justify-center items-center h-4 w-6 text-white dark:text-gray-800" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
