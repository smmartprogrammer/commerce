import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <div className="relative text-center space-y-4 h-[80vh] flex flex-col justify-center items-center text-gray-800">
      <h1 className="absolute text-[22vh] font-bold text-gray-100 mx-auto -z-50 ">Newsletter</h1>
      <h1 className="font-bold text-3xl md:text-4xl  tracking-normal">
        Subscribe our Newsletter
      </h1>
      <p className="max-w-[16rem] text-lg font-light tracking-normal ">
        Get the latest information and promo offers directly
      </p>
      <div className="md:flex md:gap-4 md:items-center md:justify-center   ">
        <Input
          className="rounded-none font-normal rounded-non"
          type="email"
          placeholder="Input email address"
        />
        <Button
          className=" rounded-none px-6 py-2 text-center bg-[#000000] text-white"
          type="submit"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
