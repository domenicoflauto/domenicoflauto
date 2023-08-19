import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { createClient } from '@/prismicio'

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

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('homepage');
  return {
    title: page.data.meta_title || 'Domenico Flauto - Product Designer',
    description: page.data.meta_description
      || 'Hey, I am Dom, a Product Designer based in London.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ibmplexsans.className}>
      <body>{children}</body>
    </html>
  )
}
