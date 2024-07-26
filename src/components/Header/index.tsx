import React from "react";
import Image from "next/image";
import ConnectWallet from "../ConnectWallet";
import { LightMode } from "../LightMode";
import { menuItems } from "@/contants/menuItems";
const Header = () => {
  const handleClickMenu = (item: string) => {};

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-3 md:px-20 py-3">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl text-primary font-bold">
            OPEN
            <span className="text-secondary-foreground dark:text-white ">
              MINT
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <LightMode />
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
