
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-black text-white">
      <body>
        {children}
      </body>
    </html>
  )
}
