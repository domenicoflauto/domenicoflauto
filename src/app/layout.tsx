import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domenico Flauto - Product Designer',
  description: 'Hey, I am Dom, a Product Designer based in London.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
