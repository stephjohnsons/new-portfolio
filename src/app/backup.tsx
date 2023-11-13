import './globals.css'
import './styles/fonts.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from "../components/Sidebar"
import CustomCursor from "../components/Cursor";
import Home from '@/app/home';
import About from '@/app/about';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stephen Tseu',
  description: 'Web Developer • UI/UX Designer • Content Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <main className="flex flex-row">
            { children }
        </main>
      </body>
    </html>
  )
}
