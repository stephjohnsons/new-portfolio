import './globals.css'
import './styles/fonts.css'
import { Inter } from 'next/font/google'

import Cursor from '@/components/Cursor'

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
