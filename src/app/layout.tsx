import type React from "react"
import "./globals.css"
import {Navbar} from "@/components/Navbar"

export const metadata = {
  title: "Vitameals Africa",
  description: "Empowering Healthy Generations",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Full-width white sticky bar to prevent background bleed */}
        <div className="sticky top-0 z-50 bg-white">
          <Navbar />
        </div>
        <main className="w-full">{children}</main>
      </body>
    </html>
  )
}
