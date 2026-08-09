import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thrive Health & Fitness | Become Your Strongest Self',
  description: 'Train with intention. Move with purpose. Thrive with personalized fitness and nutrition guidance.',
  generator: 'm9Tech',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1116',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
