"use client"
import Image from "next/image";
import hero from "@/public/hero.webp";
import bazar from "@/public/bazar.webp";
import bustle from "@/public/bustle.webp";
import instyle from "@/public/instyle.webp";
import versace from "@/public/versace.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center md:py-9 md:px-32 sm:mt-1 items-center wrapper py-10 xs:px-8 xs:py-8 sm:px-16 sm:py-7 ">
      {/* flex wrapper justify-between  py-10 xs:px-8 xs:py-8 sm:px-16 sm:py-16 */}
      <div className="lg:w-[50%] xs:mt-px  border-3 border-black">
        <Badge className="rounded bg-gray-200 text-blue-700 py-1 px-6 text-lg ">
          Sale 70%
        </Badge>
        <h1 className="tracking-wide scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mt-10 text-[#212121] ">
          An Industrial Take on Streetwear
        </h1>
        <p className=" w-[100%] tracking-wide mt-6 font-medium	text-gray-500 text-base ">
          Anyone can beat you but no one can beat
          your outfit as long as you wear Dine outfits.
        </p>
        {/* <Link href={AllProducts}> */}
        <Button className="mt-8 bg-[#212121] text-[#ffff] text-lg py-9 gap-x-2 px-6">
          <ShoppingCart className="h-5 w-6" />

          <p className=" leading-tight   ">
            Start
            Shopping
          </p>
        </Button>
        {/* </Link> */}
        <div className="mt-10 md:flex md:justify-between md:items-center   ">
          <Image src={bazar} alt="bazar" />
          <Image src={bustle} alt="bustle" />
          <Image src={versace} alt="versace" />
          <Image src={instyle} alt="instyle" />
        </div>
      </div>

      {/* image container */}

      <div className="hidden md:block ml-32 border-1 border-blue ">
        <div className="rounded-full bg-[#FFECE3]">
          <Image src={hero} alt="heroimage" />
        </div>
      </div>


    </div>


  );
};

export default Hero;
