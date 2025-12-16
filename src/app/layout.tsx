
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Explore from '../components/shared/Explore'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nestly Website',
  description: 'A website for buying real estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={urbanist.variable}>
<body className={`${urbanist.className} min-h-screen bg-white text-gray-900 flex flex-col antialiased`}>        
       <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Explore/>
        <Footer />
      </body>
    </html>
  )
}