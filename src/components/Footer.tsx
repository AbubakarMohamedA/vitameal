import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const coreServices = [
  "Food Fortification Solutions",
  "Regulatory & Quality Assurance",
  "International Trade & Sourcing",
  "Bulk Supply & Distribution",
  "Custom Formulation & Blending",
  "Turnkey Factory Development",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#1C506D] text-primary-foreground overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%),
                             radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Vitameals Africa</h3>
              <p className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                EMPOWERING HEALTHY GENERATIONS
              </p>
            </div>

            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              A Kenyan-based company that has carved a niche in the global nutritional commodities market, specializing in food fortification and comprehensive commodity trading solutions.
            </p>

          </div>

          {/* Core Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Core Services</h4>
            <ul className="space-y-3">
              {coreServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm flex items-start group"
                  >
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm flex items-center group"
                  >
                    
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 mt-0.5 text-accent group-hover:scale-110 transition-transform duration-200" />
                <Link
                  href="tel:+254750000020"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm block"
                >
                  +254750 000020
                </Link>
              </li>

              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 mt-0.5 text-accent group-hover:scale-110 transition-transform duration-200" />
                <Link
                  href="mailto:info@vitameals.co"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                >
                  info@vitameals.co
                </Link>
              </li>

              <li className="flex items-start gap-3 group">
                <Globe className="w-5 h-5 mt-0.5 text-accent group-hover:scale-110 transition-transform duration-200" />
                <Link
                  href="https://www.vitameals.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                >
                  www.vitameals.co
                </Link>
              </li>

              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 text-accent group-hover:scale-110 transition-transform duration-200" />
                <span className="text-primary-foreground/80 text-sm">
                  Office Suites, Parklands,
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} Vitameals Africa. All rights reserved.</p>
            <p className="text-center md:text-right">
              Designed with excellence for optimal nutritional quality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
