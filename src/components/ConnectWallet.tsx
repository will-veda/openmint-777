"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const ConnectButton = (props: any) => {
  return <Button {...props} />;
};

const ConnectWallet = () => {
  const [connectedAddress, setConnectedAddress] = React.useState<string | null>(
    null
  );

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
      } catch (e) {
        console.log("connect failed");
        setConnectedAddress(null);
      }
    } else {
      console.log("Wizz Wallet is not installed");
      setConnectedAddress(null);
    }
  };

  const disconnectWallet = () => {
    setConnectedAddress(null)
  };

  return (
    <ConnectButton className="" onClick={connectedAddress ? disconnectWallet : handleConnect}>
      {connectedAddress
        ? `${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`
        : "Connect"}
    </ConnectButton>
  );
};

export default ConnectWallet;
