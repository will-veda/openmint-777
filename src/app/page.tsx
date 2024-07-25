"use client";
import { LightMode } from "@/components/LightMode";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import Image from "next/image";

const ConnectButton = (props: any) => {
  return <Button {...props} />;
};

export default function Home() {
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    if (typeof window.wizz !== "undefined") {
      console.log("Wizz Wallet is installed!");
      try {
        let accounts = await window.wizz.requestAccounts();
        const connectedAddress = accounts[0];
        setConnectedAddress(connectedAddress);
        console.log("connect success", connectedAddress);
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
    <div className="flex items-center justify-center h-full">
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
    </div>
  );
}
