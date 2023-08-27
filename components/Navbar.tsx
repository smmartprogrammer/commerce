import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { NavbarArray, NavbarItemTypes } from "./Types";
import Link from "next/link";
import { AlignRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ButtonWithIcon } from "./Header";

const Navbar = () => {
  // const cartValue = useSelector(
  //   (state: RootState) => state.cart.totalQuantity
  // );




  return (
    <div className="flex justify-between xs:px-8 xs:py-8 sm:px-16 sm:py-16 md:items-center md:py-9 md:px-24 py-10 lg:px-32 lg:py-10 xl:px-40 xl:py-11  ">
      <Link href="/">
        <div className="w-36 flex shrink-0 ">
          <Image src={Logo} alt="LOGO" />{" "}
        </div>
      </Link>
      <div className="">
        <ul className="md:flex md:justify-evenly items-center gap-x-7  md:block xs:hidden ">
          {NavbarArray.map((items: NavbarItemTypes, index: number) => (
            <div key={index} >
              <li  className="font-normal text-base ">
                <Link href={items.href} > {items.label}</Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <div className="xs:hidden border flex items-center   text-gray-900 px-3 rounded-md sm:hidden md:border md:flex md:items-center md:text-gray-900 md:px-3 md:rounded-md ">
          <Search className="w-4 h-4 pl-0" />
          <input
            type="search"
            className="pl-1 pr-5 py-1 w-72 text-sm font-light   "
            placeholder="What you looking for "
          />
        </div>
      </div>
      
      <div className="xs:hidden h-11 w-11 relative rounded-full bg-gray-200 md:flex md:justify-center md:items-center sm:hidden md:block   ">
        <span className="h-4 w-4 absolute top-1 right-2 rounded-full bg-red-300 text-sm flex justify-center items-center  font-semibold">
          {/* {cartValue} */}
        </span>
        <ShoppingCart />
        
      </div>
      <ButtonWithIcon  />
      <Sheet>
        <SheetTrigger className="md:hidden    ">
          <AlignRight className="" />
        </SheetTrigger>
        <SheetContent className=" w-full ">
          <div className="flex justify-center py-2 ">
            <div className="h-10 w-10 relative mt-48  rounded-full bg-gray-200 flex justify-center items-center    ">
              <span className="h-4 w-4 absolute top-1 right-2 rounded-full bg-red-300 text-sm flex justify-center items-center font-light">
                {/* {cartValue} */}
              </span>
              <ShoppingCart />
            </div>
          </div>
          <div>
            <ul className="flex flex-col items-center gap-y-3   ">
              {NavbarArray.map((item: NavbarItemTypes, index: number) => (
                <div key={index}>
                  <li className="font-normal text-base text-gray-700 ">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>{" "}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
