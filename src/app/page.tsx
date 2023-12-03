import './globals.css'
import './styles/fonts.css'

import Cursor from '@/components/Cursor'
import Sidebar from '@/components/Sidebar'

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
  <div>
    { children }
  </div>
  )
}
