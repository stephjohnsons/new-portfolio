import './globals.css'
import './styles/fonts.css'

import Cursor from '@/components/Cursor'

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
    <Cursor />
    <div className="basis-5/6">
      { children }
    </div>
  </div>
  )
}
