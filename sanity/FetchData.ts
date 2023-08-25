import React from 'react'
import { client } from './lib/client'

export default  async function FetchData() {

    const data = await client.fetch(`*[_type == "products" ]`)
    return data
       
      
}
