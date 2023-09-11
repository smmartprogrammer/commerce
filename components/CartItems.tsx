"use client";
import { useAuth } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function CartItems() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();
  //   console.log("user_id", uid);
  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

  async function deleteProduct(product_title: any) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setState(!state);
    // console.log('working')
  }

  async function handleIncrement(user_id: any, product_quantity: number, product_title: string) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,
        }),
      })
      setState(!state);

    } catch (error) {
      console.log("error", error);
    }
    console.log("testing increment");
  }

  async function handleDecrement(user_id: any, product_quantity: number, product_title: string) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,
        }),
      })
      setState(!state);

    } catch (error) {
      console.log("error", error);
    }
    console.log("testing increment");
  }



  return (
    <div>
      <div className="flex-1  ">
        <h1 className="px-40 text-3xl font-black py-8 mt-20">Shopping Cart</h1>
        {isSignedIn ? (
          <div className="grid gap-14 px-40">
            {products?.map((item: any, index: number) => (
              <div className="flex" key={index}>
                <img
                  src={item.image_url}
                  alt=""
                  className="w-56 h-56 rounded"
                  width={500}
                  height={500}
                />
                <div className="">
                  <div className="ml-10 space-y-4">
                    <div className="grid grid-cols-2 gap-x-11 place-content-between  items-center">
                      <h1 className="text-2xl font-light text-[#212121]">{item.product_title}</h1>
                      <button className="flex justify-end" ><Trash2 onClick={() => deleteProduct(item.product_title)} className="w-8 h-8 pointer " /> </button>
                    </div>
                    <h1 className="text-2xl font-light text-[#212121]">{item.product_description}</h1>
                    <h1 className="text-base font-semibold text-[#666666] ">Delivery Estimation</h1>
                    <h1 className="text-xl font-semibold text-[#ffc700] ">5 Working Days</h1>

                    <div className="grid grid-cols-2 gap-x-11 place-content-between  items-center">
                      <h1 className="text-lg font-bold text-[#212121] ">${item.product_price}</h1>
                      <div className="flex justify-end  ">
                         <button onClick={() => handleDecrement(item.user_id, item.product_quantity - 1,
                          item.product_title,
                        )
                        } className={`text-base font-medium px-3 py-1 text-center hover:bg-gray-200 bg-gray-200 rounded-full`}>
                          -
                        </button>
                        <div className="px-3 py-1 text-center  text-base font-normal">
                          {item.product_quantity}
                        </div>
                        <button onClick={() => handleIncrement(item.user_id, item.product_quantity + 1,
                          item.product_title,
                        )
                        }

                          className=" text-base font-medium rounded-full bg-gray-white border-2 border-zinc-950 px-3 py-1 text-center">
                          +
                        </button>
                      </div>

                    </div>
                    {/* <button
                    onClick={() => deleteProduct(item.product_title)}
                    className="bg-black text-white py-1 px-5 rounded-md mt-10 font-semibold"
                  >
                    DELETE
                  </button> */}
                  </div>

                </div>
                <div >
                  <div className='flex-1 px-24 '>
                    <div className='bg-[#FBFCFF] '>
                      <h1 className='text-xl font-bold text-[#000000] mb-3 '>Order Summary</h1>
                      <div className='flex py-3'>
                        <p className='text-xl font-normal '>Quantity</p>
                        <p className='text-xl font.369*963.3..336699**********************************++-normal '>{ } Product</p>
                      </div>
                      <div className='flex py-3'>
                        <p className='text-xl font-normal '>Sub Total</p>
                        <p className='text-xl font-normal '>${ } </p>
                      </div>
                      <Button className="bg-black text-white font-bold px-6 rounded-none">Proceed to CheckOut</Button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (
          <div>
            <h1>Please Login First</h1>
          </div>
        )}
      </div>
    </div >
  );
}