"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { fetchAtomicalsData } from "@/utils/fetchAtomicalData";
import { fetchAdditionalData } from "@/utils/imageUtils";
import { useState, useEffect } from "react";

const ConnectButton = (props: any) => {
  return <Button {...props} />;
};

const ConnectWallet = () => {
  const [connectedAddress, setConnectedAddress] = React.useState<string | null>(
    null
  );

  const [atomicalImageData, setAtomicalImageData] = useState<any>(null);
  const [additionalData, setAdditionalData] = useState<any>(null);

  const handleConnect = async () => {
    // @ts-ignore
    if (typeof window?.wizz !== "undefined") {
      console.log("Wizz Wallet is installed!");
      try {
        // @ts-ignore
        let accounts = await window?.wizz.requestAccounts();
        const connectedAddress = accounts[0];
        setConnectedAddress(connectedAddress);
        console.log("connect success", connectedAddress);
        const data = await fetchAtomicalsData('0420061a2d324d59df226281a33e973cca4e3a652ef2f49c360e842e4557f886i0');
        const image = await fetchAdditionalData(data);

        console.log("Atomicals data: ", data);

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
    <ConnectButton className="mx-4" onClick={handleConnect}>
      {connectedAddress
        ? `${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`
        : "Connect"}
    </ConnectButton>
  );
};

export default ConnectWallet;
