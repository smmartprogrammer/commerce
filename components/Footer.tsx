import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./index";
import Logo from "@/public/Logo.webp";
import { link } from "fs";

const Footer = () => {
  return (
    <div className="flex md:justify-center flex-col md:flex-row mt-14 md:py-9 md:px-32">
      {/* left side */}
      <div className="flex flex-col  gap-4  ">
        <Image src={Logo} alt="logo" className="object-contain  " />
        <p className="mt-6 font-normal text-[#976866] text-lg flex flex-wrap w-[40%] ">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div></div>
      </div>

      {/* right side */}
      <div className="flex gap-6 flex-col md:flex-row justify-center   ">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className=" font-bold text-[#666666] text-xl ">{link.title} </h3>
            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="mt-4 font-normal text-[#976866] text-lg  flex items-center "
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
