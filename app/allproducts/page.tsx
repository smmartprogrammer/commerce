import FetchData from "@/sanity/FetchData";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default async function page() {
    const data = await FetchData()
    // console.log("data", data[0].slug);

    return (
        <div className="flex gap-5 max-w-6xl m-auto text-black ">
            {data.map((product: any, index: number) => (
                <Link href={`/product/${product.slug.current}`} className="w-1/4 border border-black p-2" key={index}>
                    <img src={urlForImage(product.image).url()} width={100} height={100}  alt="images" className="w-full h-60 object-cover object-top" />
                    <h1 className="text-3xl font-bold mt-2">{product.title} </h1>
                    <h1 className="">{product.description} </h1>
                    <h1 className="text-xl font-semibold">{product.category} </h1>
                    <h1 className="text-xl font-semibold">{product.price} </h1>

                </Link>
            ))}

        </div>
    )
}