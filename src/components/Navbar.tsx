"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/vitameals-logo.webp"
                alt="Vitameals Africa"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-lg transition-colors duration-300 ${
                    isScrolled ? "text-[#1C506D]" : "text-white"
                  }`}
                >
                  Vitameals Africa
                </div>
                <div
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                    isScrolled ? "text-slate-600" : "text-white/80"
                  }`}
                >
                  Empowering Healthy Generations
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled ? "text-slate-700 hover:text-[#1C506D]" : "text-white hover:text-[#789FB3]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#1C506D]" : "bg-[#789FB3]"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+254750000020"
                className={`inline-flex items-center px-4 py-2 text-sm rounded-md transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-700 hover:text-[#1C506D] hover:bg-[#789FB3]/10"
                    : "text-white hover:text-[#789FB3] hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#contact")
                }}
                className={`inline-flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300 shadow-md hover:shadow-lg ${
                  isScrolled
                    ? "bg-[#1C506D] hover:bg-[#1C506D]/90 text-white"
                    : "bg-[#789FB3] hover:bg-[#789FB3]/90 text-white"
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-24 px-4">
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-900 hover:bg-[#789FB3]/10 hover:text-[#1C506D] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+254750000020"
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-[#1C506D] text-[#1C506D] rounded-md hover:bg-[#1C506D]/10 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#contact")
                }}
                className="flex items-center justify-center w-full px-4 py-3 bg-[#1C506D] hover:bg-[#1C506D]/90 text-white rounded-md shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 p-4 rounded-lg bg-[#789FB3]/10 border border-[#789FB3]/30">
              <p className="text-sm font-medium text-[#1C506D] mb-2">Quick Contact</p>
              <div className="space-y-2 text-sm">
                <a href="tel:+254750000020" className="flex items-center gap-2 text-slate-700 hover:text-[#1C506D]">
                  <Phone className="w-4 h-4" />
                  +254750 000020
                </a>
                <a
                  href="mailto:info@vitameals.co"
                  className="flex items-center gap-2 text-slate-700 hover:text-[#1C506D]"
                >
                  <Mail className="w-4 h-4" />
                  info@vitameals.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
