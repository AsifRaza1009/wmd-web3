import './globals.css'

export const metadata = {
  title: 'Social Wallet',
  description: 'Social Wallet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-teal-50 to-green-200">
        {children}
        </body>
    </html>
  )
}
