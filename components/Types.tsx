import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export interface NavbarItemTypes {
  label: string;
  href: string;
}

export interface oneProductType {
  _id: string;
  quantity:number,
  _rev: String,
  _type:string,
  productName:string,
  _creditAt:string,
  _id:string,
  _updateAt: string,
  image:Array<imageType,>
  name: string;
  title:string;
  price: number;
  img: image | string | StaticImageData;
  category: string;
  gender?: string;
  href?: string;
  item: any
}



export interface Product {
  id: string;
  name: string;
  title:string;
  price: number;
  img: image | string | StaticImageData;
  category: string;
  gender?: string;
  href?: string;
  item: any
}

export const NavbarArray: Array<NavbarItemTypes> = [
  { label: "Female", href: "/gender/female" },
  { label: "Male", href: "/gender/male" },
  { label: "Kids", href: "/gender/kids" },
  { label: "All Products", href: "/allproducts" },
];

export const ProductsList = [];
