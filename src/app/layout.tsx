import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import UmamiProvider from 'next-umami'
import { Inter, JetBrains_Mono } from 'next/font/google'

import { Header } from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  variable: '--font-inter',
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Domenico Flauto - Product Designer',
  description: 'Hey, I am Dom, a Product Designer based in London.',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Domenico Flauto - Product Designer',
    description: 'Hey, I am Dom, a Product Designer based in London.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DomenicoFlauto',
    title: 'Domenico Flauto - Product Designer',
    description: 'Hey, I am Dom, a Product Designer based in London.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains_mono.variable} antialiased`}>
      <head>
        <UmamiProvider websiteId="2b70018c-c9f4-4952-b402-cc14dbdfe681" />
      </head>
      <body style={{ minHeight: "calc(100vh + 40px" }} className='bg-[#090A0B]'>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
