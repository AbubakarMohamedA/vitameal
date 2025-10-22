"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-[var(--shadow-navy)] border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              
              className="flex items-center gap-3 group"
            >
              <img
                src="/vitameals-logo.webp"
                alt="Vitameals Africa"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-lg transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  Vitameals Africa
                </div>
                <div
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                    isScrolled
                      ? "text-muted-foreground"
                      : "text-primary-foreground/80"
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
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-primary" : "bg-accent"
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
                    ? "text-foreground hover:text-primary hover:bg-primary/10"
                    : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className={`inline-flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300 shadow-[var(--shadow-navy)] hover:shadow-[var(--shadow-navy-lg)] ${
                  isScrolled
                    ? "bg-primary hover:bg-primary-light text-primary-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-24 px-4">
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+254750000020"
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="flex items-center justify-center w-full px-4 py-3 bg-primary hover:bg-primary-light text-primary-foreground rounded-md shadow-[var(--shadow-navy)] transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm font-medium text-muted-foreground mb-2">Quick Contact</p>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+254750000020"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Phone className="w-4 h-4" />
                  +254750 000020
                </a>
                <a
                  href="mailto:info@vitameals.co"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
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
  );
};
