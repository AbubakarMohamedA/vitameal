'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect screen size
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsVideoLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video / Image */}
      {/* {isMobile ? (
        // ✅ Static image for mobile (faster load)
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-fallback.jpg')" }}
        />
      ) : (
        // ✅ Desktop video background
        // <video
        //   autoPlay
        //   loop
        //   muted={isMuted}
        //   playsInline
        //   className="absolute inset-0 w-full h-full object-cover z-0"
        //   onLoadedData={() => setIsVideoLoaded(true)}
        // >
        //   <source src="/hero-video.mp4" type="video/mp4" />
        // </video>
        
      )} */}
<div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-fallback.jpg')",
        }}
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6 sm:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVideoLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Title + Description */}
          <h1 className="text-white  text-4xl sm:text-6xl leading-tight mb-4">
            Nourishing Lives Through Science
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Innovative food fortification and nutritional solutions for a healthier world.
          </p>
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#about"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#0f4c81] hover:bg-[#0f4c81] text-white font-medium rounded-full transition-all duration-300 text-base"
            >
              <span>Discover Our World</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/#products"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#0f4c81] text-white hover:bg-[#0f4c81] hover:text-white font-medium rounded-full transition-all duration-300 text-base"
            >
              <span>Explore Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
