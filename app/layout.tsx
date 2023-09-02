import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Copyrights from '@/components/Copyrights'
import Footer from '@/components/Footer'
const Soraa = Sora({ subsets: ['latin'] })

const sora = Sora({
  weight: ['300', '600', '700'],
   subsets: ['latin'],

})



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body className={sora.className}>
        
        <Navbar />
          {children}
          <Footer />
          <Copyrights />
          </body>
      </html>
    </ClerkProvider>
  )
}
