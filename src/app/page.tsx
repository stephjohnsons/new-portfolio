import './globals.css'
import './styles/fonts.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from "../components/Sidebar"
import Home from '@/app/home/page';
import About from '@/app/about/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div className={inter.className}>
    <div className="basis-1/6 transition-all duration-300">
      <Sidebar />
    </div>
    <div className="basis-5/6">
      <Home />
    </div>
  </div>
  )
}
