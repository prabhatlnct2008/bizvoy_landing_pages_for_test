import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bizvoy - Connectivity & Terroir Solutions',
  description: 'Professional communication and terroir insights services',
  keywords: 'connectivity, data, phone rental, SIM cards, terroir, insights, wine, vineyard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
