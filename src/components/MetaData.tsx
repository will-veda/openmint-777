import * as React from "react";
import { Button } from "@/components/ui/button";
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

const AtomicalCard = ({ atomicalData, additionalData }: { atomicalData: any, additionalData: any }) => {
    // Fallback for additionalData in case it's null or undefined
    const imageUrl = additionalData || '/placeholder-image.png';
    const { desc, dmint, legal, links, name } = atomicalData.state.latest


    return (
        <Card className="w-full lg:w-2/3 mx-auto border-0 shadow-none">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center md:text-start">{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col md:flex-row  space-y-1.5">
                        {/* Display image */}
                        <div className="flex justify-center md:justify-start">
                            <Image className="w-44 md:w-72 rounded-xl" src={imageUrl} width={512} height={512} alt="Atomical Image" />
                        </div>

                        <CardDescription className="text-primary py-2 md:p-4 md:py-0 overflow-hidden break-word flex flex-col justify-between">
                            <p className="text-lg">{desc}</p>
                            <p className="text-secondary">{dmint.items} items</p>


                        </CardDescription>
                    </div>

                    <div className="flex flex-col space-y-1.5">

                        {links &&
                            <div className="flex flex-col space-y-1.5">
                                {/* Display links dynamically */}
                                {Object.keys(links).map((key) => (
                                    <a
                                        key={key}
                                        href={links[key].v}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary"
                                    >
                                        {links[key].v}
                                    </a>

                                ))}
                            </div>
                        }

                        <div>
                            <span className="font-bold">Mint Height Block:</span> {dmint.mint_height === 0 ? 'OPEN' : dmint.mint_height}
                        </div>

                        {
                            legal.terms && (
                                <div>
                                    <span className="font-bold">License & Terms:</span> {legal.license} - {legal.terms}
                                </div>
                            )

                        }


                    </div>


                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
};

export default AtomicalCard;
