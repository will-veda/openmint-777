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
        <Card className="w-11/12 mx-auto mt-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{atomicalData.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        {/* Display image */}
                        <Image className="w-44 md:w-72" src={imageUrl} width={512} height={512} alt="Atomical Image" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        {/* Display description */}
                        <CardDescription className="text-primary">
                            {desc}
                        </CardDescription>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        {/* Display additional details */}
                        <div>
                            <strong>Items:</strong> {dmint.items}
                        </div>
                        <div>
                            <strong>Mint Height:</strong> {dmint.mint_height}
                        </div>
                        <div>
                            <strong>Merkle:</strong> {dmint.merkle}
                        </div>
                        <div>
                            <strong>License:</strong> {legal.license}
                        </div>
                        <div>
                            <strong>Terms:</strong> {legal.terms}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        {/* Display links */}
                        <a href={links.website.v} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                            Website
                        </a>
                        <a href={links.x.v} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                            Twitter
                        </a>
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
