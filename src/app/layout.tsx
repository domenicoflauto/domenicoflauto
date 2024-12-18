import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import localFont from 'next/font/local'
import Script from 'next/script';

// Font files can be colocated inside of `app`
const ibmplexsans = localFont({
  src: [
    {
      path: 'fonts/IBM_Plex_Sans_Variable/ttf/IBM Plex Sans Var-Roman.ttf',
      style: 'normal',
    },
    {
      path: 'fonts/IBM_Plex_Sans_Variable/ttf/IBM Plex Sans Var-Italic.ttf',
      style: 'italic',
    },
    {
      path: 'fonts/IBM_Plex_Sans_Variable/woff/IBM Plex Sans Var-Roman.woff',
      style: 'normal',
    },
    {
      path: 'fonts/IBM_Plex_Sans_Variable/woff2/IBM Plex Sans Var-Roman.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
})

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
    <>
      <Script
        defer
        src="https://umami.domenicoflauto.com/script.js"
        data-website-id="b9bfdb26-fe49-4ef5-8f7f-8543b5ed2887"
      />
      <html lang="en" className={ibmplexsans.className}>
        <body>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  )
}
