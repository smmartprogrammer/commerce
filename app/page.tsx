import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Jewellery from '@/components/Jewellery'
import Newsletter from '@/components/Newsletter'
import Promotion from '@/components/Promotion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero />
        <Promotion />
        <Jewellery/>
        <Newsletter/>
        <Footer/>

        
      </div>
    </main>
  )
}
