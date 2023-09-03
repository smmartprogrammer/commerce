import Hero from '@/components/Hero'
import Jewellery from '@/components/Jewellery'
import Newsletter from '@/components/Newsletter'
import Promotion from '@/components/Promotion'
import Product from '@/components/Product'



export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero />
        <Promotion />
        <Jewellery/>
        <Product />
        <Newsletter/>

        
      </div>
    </main>
  )
}
