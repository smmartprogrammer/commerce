import FetchData from "@/sanity/FetchData";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default async function page() {
    const data = await FetchData()
    // console.log("data", data[0].slug);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 md:py-9 md:px-40 rounded ">
        
            {data.map((product: any, index: number) => (
                <Link href={`/product/${product.slug.current}`}  key={index}>
                    <div className="space-y-3 mt-10">
                    <img src={urlForImage(product.image).url()}  alt="images" className="w-80 h-50" />
                    <h1 className="text-2xl font-bold ">{product.title} </h1>
                    <h1 className="text-[#888888] text-2xl font-medium   ">{product.description} </h1>
                    <h1 className="text-2xl font-bold">${product.price} </h1>
                    </div>
                </Link>
            ))}

        </div>
    )
}