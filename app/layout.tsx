import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Juan Manuel Grehuello | Full Stack Developer",
  description:
    "Full Stack Developer specializing in PHP, WordPress, React, Next.js, and modern web technologies. Based in Argentina.",
  keywords: [
    "Full Stack Developer",
    "PHP Developer",
    "WordPress Developer",
    "React Developer",
    "Next.js",
    "Argentina",
  ],
  authors: [{ name: "Juan Manuel Grehuello" }],
  openGraph: {
    title: "Juan Manuel Grehuello | Full Stack Developer",
    description:
      "Full Stack Developer specializing in PHP, WordPress, React, Next.js, and modern web technologies.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
