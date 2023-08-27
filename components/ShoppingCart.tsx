import React from 'react'
import { Button } from './ui/button'

const ShoppingCart = () => {
    return (
        <div className='flex-1'>
            {/* left */}
            {/* right */}
            <div className='bg-[#FBFCFF] '>
                <h1 className='text-xl text-[#000000] mb-3 '>Order Summary</h1>
                <div className='flex py-3'>
                    <p className='text-xl font-normal '>Quantity</p>
                    <p className='text-xl font.369*963.3..336699**********************************++-normal '>{ } Product</p>
                </div>
                <div className='flex py-3'>
                    <p className='text-xl font-normal '>Sub Total</p>
                    <p className='text-xl font-normal '>${ } </p>
                </div>
                <Button className="bg-black text-white font-bold px-6">Proceed to CheckOut</Button>

            </div>
        </div>
    )
}

export default ShoppingCart