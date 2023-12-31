import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "../components/navbar/Navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Simpsons',
  description: 'Welcome to my first NextJs and TypeScript App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
