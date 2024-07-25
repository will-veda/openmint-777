import { LightMode } from "@/components/LightMode";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">

      <div className="absolute top-4 right-4">
        <LightMode />
      </div>

      <h1 className="text-4xl text-primary font-bold">OPEN
        <span className="text-secondary-foreground">MINT</span>
      </h1>


    </div>
  );
}
