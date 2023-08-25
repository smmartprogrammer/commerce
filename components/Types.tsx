import { type } from "os";


export interface NavbarItemTypes {
  label: string;
  href: string;
}

export const NavbarArray: Array<NavbarItemTypes> = [
  { label: "Female", href: "/gender/female" },
  { label: "Male", href: "/gender/male" },
  { label: "Kids", href: "/gender/kids" },
  { label: "All Products", href: "/products" },
];

export interface slugType {
  _type: string,
  type: string,
  current: string,
};



export interface assetImageType {
  _type: string,
  _ref: string,
};

export interface Image_2 {
  key: string,
};


export interface imagesType {
  asset: assetImageType,
  type: string,
  _type: string,
  alt: string,
  _key: string,
  [key: string]: any,

}


export interface oneProductType {
  slug: slugType,
  image: Array<imagesType>,
  _rev: string,
  current: string,
  category: string,
  title: string,
  _updatedAt: string,
  price: number,
  _createdAt: string,
  _type: string,
  description: string,
  _id: string,
}

export interface responseType {
  result: Array<oneProductType>
}
