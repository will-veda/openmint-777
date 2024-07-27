import React from "react";
import Image from "next/image";
import ConnectWallet from "../ConnectWallet";
import { LightMode } from "../LightMode";
import { menuItems } from "@/contants/menuItems";
import { Logo } from "../ui/Logo";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
const Header = () => {
  const handleClickMenu = (item: string) => { };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2 md:px-4 py-3">

        <Dialog>
          <DialogTrigger>
            <div className="flex flex-row items-center justify-center gap-4 ">
              <h1 className="text-2xl text-primary font-bold">
                OPEN
                <span className="text-secondary-foreground">MINT</span>
              </h1>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90%] md:max-w-fit">
            <DialogHeader>
              <DialogTitle>ABOUT MORE DECENTRALISATION</DialogTitle>
              <DialogDescription>
                OPENMINT is an open-source project built for Bitcoin.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>



        <div className="flex items-center gap-2">
          <LightMode />
          <ConnectWallet />
        </div>

      </div>
    </div>
  );
};

export default Header;
