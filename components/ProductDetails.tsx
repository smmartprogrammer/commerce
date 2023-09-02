"use client";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { urlForImage } from "@/sanity/lib/image";
import { ShoppingCart } from "lucide-react";



export default function ProductDetails({
  filteredData,
}: {
  filteredData: any;
}) {
  const { userId } = useAuth();
  console.log(userId);

  const [quantity, setQuantity] = useState(1);
  // console.log(filteredData);


  // console.log("filteredData", filteredData);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  async function handleAddToCart() {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_id: filteredData._id,
          product_title: filteredData.title,
          product_price: filteredData.price * quantity,
          product_quantity: quantity,
          image_url: urlForImage(filteredData.image).url(),
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="">
                <h1 className="text-3xl font-normal leading-8 text-[#212121]">
                  {filteredData?.title}
                </h1>
                <p className="text-xl font-semibold text-[#B0B0B0]">
                  {/* Rs {filteredData?.price} */}
                  {filteredData?.description}
                </p>
                <p className="mt-14 text-base leading-4 font-bold tracking-widest   ">
                  {" "}
                  SELECT SIZE{" "}
                </p>
                <div className="mt-5 space-x-4">
                  <button className=" h-12 w-12 rounded-full text-lg  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                    XS
                  </button>
                  <button className=" h-12 w-12 rounded-full text-lg  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                    S
                  </button>
                  <button className=" h-12 w-12 rounded-full text-lg  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                    M
                  </button>
                  <button className=" h-12 w-12 rounded-full text-lg  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                    L
                  </button>
                  <button className=" h-12 w-12 rounded-full text-lg  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                    XL
                  </button>
                  <div className="flex mt-10 space-x-6  items-center">
                    <p className="text-base font-bold tracking-widest">Quantity:</p>
                    <div className="space-x-4 text-2xl flex justify-center items-center  ">
                      <button onClick={() => handleDecrement()}
                        disabled={quantity === 1}
                        className="h-11 w-11 rounded-full bg-[#F1F1F1]  ">
                        -
                      </button>
                      {quantity}
                      <button onClick={() => handleIncrement()} className="h-11 w-11 rounded-full  border-2 border-black">
                        +
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="mt-8 lg:col-span-6 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div>
                {filteredData && filteredData.image && (
                  <img
                    key={filteredData._id}
                    src={urlForImage(filteredData.image).url()}
                    alt={filteredData.title}
                    width={600}
                    height={600}
                  />
                )}
              </div>
            </div>
            <div className="mt-5 lg:col-span-6">

              <div className="flex justify-start items-center text-lg font-semibold mt-3">

                <button onClick={handleAddToCart} className=" space-x-2 flex justify-evenly items-center  w-48 text-center text-white bg-black py-2 ">
              
              <ShoppingCart className="h-9 w-9" /> 
               Add to Cart 
                </button>
                <div className="font-bold px-2" />
              $ {filteredData?.price}.00
            </div>


              </div>


            </div>



            <div className="mt-10">
              

          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}