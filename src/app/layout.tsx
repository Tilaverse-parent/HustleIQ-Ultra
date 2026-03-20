import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HustleIQ Ultra — $10B Architecture Blueprint',
  description:
    "The world's first Entrepreneurial Operating System — complete system architecture, AI intelligence stack, revenue engine, and $10B execution roadmap.",
  openGraph: {
    title: 'HustleIQ Ultra — $10B Blueprint',
    description: 'Entrepreneurial Operating System for 1.1B hustlers.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
