import './globals.css'
import './styles/fonts.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Cursor from '@/components/Cursor'
import Sidebar from "../components/Sidebar"
import Home from '@/app/home/page';
import About from '@/app/about/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Tseu',
  description: 'Web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div className={inter.className}>
    <Cursor />
    <div className="basis-5/6">
      { children }
    </div>
  </div>
  )
}
