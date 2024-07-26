"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

const ConnectWallet = () => {
    const handleConnect = () => { console.log('wallet click!') }

    return (
        <Button onClick={handleConnect} variant={"secondary"} className="text-primary">
            <span>Connect Wallet</span>
        </Button>
    )
}

export default ConnectWallet;