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
                raghunathji
                <h1>Title:{filteredData.title} </h1>
                <h1>    description:{filteredData.description} </h1>
                <h1>category:{filteredData.category} </h1>
                <h1>price   :{filteredData.price} </h1>
            </div>
            </div>
    )
}

