import React from 'react';
import Image from "next/image";
import ConnectWallet from '../ConnectWallet';
import { LightMode } from '../LightMode';
import { menuItems } from "@/contants/menuItems";

const Header = () => {

    const handleClickMenu = (item: string) => {
        console.log(item);
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-3 md:px-20 py-3">
                <div className="logo w-8 h-auto">
                    <Image
                        src="/favicon.ico"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="logo"
                    />
                </div>

                <div className="menu hidden md:flex items-center justify-between">
                    {menuItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={handleClickMenu(item.name)}
                                className="px-10 py-2 text-primary cursor-default"
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center gap-2">
                    <LightMode />
                    <ConnectWallet />
                </div>
            </div>
        </div>
    );
}

export default Header;