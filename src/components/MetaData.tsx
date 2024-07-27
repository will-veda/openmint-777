import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { hexToBase64 } from "@/utils/imageUtils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AtomicalCard = ({ atomicalData, additionalData }: { atomicalData: any, additionalData: any }) => {
    // Fallback for additionalData in case it's null or undefined
    const imageUrl = additionalData || '/placeholder-image.png';
    const { desc, dmint, legal, links, name } = atomicalData.state.latest


    const handleButtonClick = () => {
        const url = `https://ep.wizz.cash/proxy/blockchain.atomicals.get?params=["${atomicalData.atomical_id}"]`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <Card className="rounded-none mx-auto border-0 shadow-none">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center md:text-start">{name}</CardTitle>
                <p className="text-muted-foreground">{dmint.items} items</p>

            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col md:flex-row  space-y-1.5">
                        {/* Display image */}
                        <div className="flex justify-center md:justify-start">
                            <Dialog>
                                <DialogTrigger>
                                    <Image className="w-44 md:w-72 rounded-xl hover:brightness-105 border-4 border-popover-foreground" src={imageUrl} width={512} height={512} alt="Atomical Image" />
                                </DialogTrigger>
                                <DialogContent className="max-w-[90%] md:max-w-[70%] rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>{name}</DialogTitle>
                                        <DialogDescription>
                                            {desc}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>
                    </div>

                    <div className="flex flex-col gap-2">

                        {links &&
                            <div className="flex flex-col space-y-1.5">
                                {/* Display links dynamically */}
                                {Object.keys(links).map((key) => (
                                    <a
                                        key={key}
                                        href={links[key].v}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold"
                                    >
                                        <Button variant="outline" className="w-full md:w-72" >

                                            {key.toLocaleUpperCase()}
                                        </Button>

                                    </a>

                                ))}
                            </div>
                        }

                        <div className="text-sm italic">
                            <span className="font-bold">Mint Height Block:</span> {dmint.mint_height === 0 ? 'OPEN' : dmint.mint_height}
                        </div>

                        <div className="text-sm italic">
                            {
                                legal.terms && (
                                    <Dialog>
                                        <DialogTrigger className="hover:underline">
                                            License & Terms
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[90%] md:max-w-[70%] rounded-xl">
                                            <DialogHeader>
                                                <DialogTitle> {legal.license}</DialogTitle>
                                                <DialogDescription>
                                                    {legal.terms}
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                )

                            }
                        </div>

                    </div>


                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="link" size='sm' className="w-full" onClick={handleButtonClick}>
                    Open Atomical Data
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AtomicalCard;
