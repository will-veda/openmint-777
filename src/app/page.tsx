"use client";
import { LightMode } from "@/components/LightMode";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import AtomicalCard from "@/components/MetaData";
import { fetchAtomicalsData } from "@/utils/fetchAtomicalData";
import { fetchAdditionalData } from "@/utils/imageUtils";
import Dashobard from '@/app/home/page';

const ConnectButton = (props: any) => {
  return <Button {...props} />;
};



export default function Home() {
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const [atomicalImageData, setAtomicalImageData] = useState<any>(null);
  const [additionalData, setAdditionalData] = useState<any>(null);

  const handleConnectWallet = async () => {
    if (typeof window.wizz !== "undefined") {
      console.log("Wizz Wallet is installed!");
      try {
        let accounts = await window.wizz.requestAccounts();
        const connectedAddress = accounts[0];
        setConnectedAddress(connectedAddress);
        console.log("connect success", connectedAddress);

        // Fetch Atomicals data
        const data = await fetchAtomicalsData('0420061a2d324d59df226281a33e973cca4e3a652ef2f49c360e842e4557f886i0');
        const image = await fetchAdditionalData(data);

        console.log("Atomicals data: ", data);

        setAtomicalImageData(data);
        setAdditionalData(image);
      } catch (e) {
        console.log("connect failed");
        setConnectedAddress(null);
      }
    } else {
      console.log("Wizz Wallet is not installed");
      setConnectedAddress(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full gap-8 pt-20">
      <div className="absolute top-4 right-4">
        <LightMode />
        <ConnectButton className="mx-4" onClick={handleConnectWallet}>
          {connectedAddress
            ? `${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`
            : "Connect"}
        </ConnectButton>
      </div>

      <h1 className="text-4xl text-primary font-bold">
        OPEN
        <span className="text-secondary-foreground">MINT</span>
      </h1>

      <Dashboard />
      {atomicalImageData && <AtomicalCard atomicalData={atomicalImageData} additionalData={additionalData} />}
    </div>
  );
}
