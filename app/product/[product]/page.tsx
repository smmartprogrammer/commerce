import ProductDetails from '@/components/ProductDetails';
import FetchData from '@/sanity/FetchData';
import React from 'react'


export async function generateStaticParams() {
    const dataa = await FetchData();
    return dataa.map((item:any) => ({
        product: item.slug.current, 
    }))
}

export default async function page({ params }: { params: any }) {
    const dataa = await FetchData();
   
    const filteredData = dataa.find((item:any) => 

    item.slug.current  == params.product)
    
        return (
        <div>
            <div>
                <ProductDetails filteredData={filteredData} />
            </div>
            </div>
    )
}

