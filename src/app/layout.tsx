import './globals.css'
import './styles/fonts.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from "../components/Sidebar"
import CustomCursor from "../components/Cursor";
import Home from './index';
import About from './about';

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
          <div className="basis-1/6 transition-all duration-300">
            <Sidebar />
          </div>
          <div className="basis-5/6">
            <Home />
          </div>
        </main>
      </body>
    </html>
  )
}
