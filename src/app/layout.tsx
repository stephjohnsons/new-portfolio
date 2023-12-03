import Sidebar from "@/components/Sidebar"
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
    <html lang="en">
      <body>
        <div className="basis-5/6">
          { children }
        </div>
        <div className="basis-1/6">
          <Sidebar />
        </div>
      </body>
    </html>
  )
}
