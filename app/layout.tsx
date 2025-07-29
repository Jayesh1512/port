import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-space-grotesk',   
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jayesh Shete",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
