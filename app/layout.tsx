import type { Metadata, Viewport } from 'next'
import { Poppins, Noto_Sans } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const _notoSans = Noto_Sans({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'UDBHAV - Smart Agriculture Platform',
  description:
    'AI-powered plant disease detection, yield prediction, and smart farming insights for modern agriculture.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#003200',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_poppins.variable} ${_notoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
