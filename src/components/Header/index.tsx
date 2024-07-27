import React from "react";
import Image from "next/image";
import ConnectWallet from "../ConnectWallet";
import { LightMode } from "../LightMode";
import { menuItems } from "@/contants/menuItems";
const Header = () => {
  const handleClickMenu = (item: string) => { };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2 md:px-4 py-3">
        <div className="flex flex-row items-center justify-center gap-4 w-12">
          <Logo />
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
