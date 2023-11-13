import Sidebar from "@/components/Sidebar"

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
        <div className="basis-1/6 transition-all duration-300">
          <Sidebar />
        </div>
        <div className="basis-5/6">
          { children }
        </div>
      </body>
    </html>
  )
}
