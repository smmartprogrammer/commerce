import FetchData from "@/sanity/FetchData";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Image  from "next/image";

export default async function Product() {
  const data = await FetchData()

  const productChecks = data.slice(0, 3);

  return (
    <div>
      <div className="mt-24 mb-12 text-center  space-y-1 md:py-9 md:px-32">
        <p className="text-blue-700 flex justify-center font-semibold text-sm   tracking-wider  ">
          PRODUCTS
        </p>
        <h1 className="py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold">
          Check What We Have
        </h1>
      </div>

      <div className="flex">
        <div className="flex justify-center items-center w-full h-full px-24 space-x-10 ">
          {productChecks.map((product: any, index: number) => (
            <Link href={`/product/${product.slug.current}`} key={index}>
              <div className="space-y-3 mt-10">
                <Image width={80} height={80} src={urlForImage(product.image).url()} alt="images" className="w-80 h-50" />
                <h1 className="text-2xl font-bold ">{product.title} </h1>
                <h1 className="text-[#888888] text-2xl font-medium   ">{product.description} </h1>
                <h1 className="text-2xl font-bold">${product.price} </h1>
              </div>
            </Link>
          ))}   </div>
      </div>
    </div>
  );
}
