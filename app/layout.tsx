import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

const inter = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MuyiEth',
  description: 'Muyi product in ethereum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
