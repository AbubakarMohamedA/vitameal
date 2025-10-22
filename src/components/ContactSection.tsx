import { Mail, Phone, Globe, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254750 000020",
    href: "tel:+254750000020",
    color: "text-[#1C506D]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254715 100 100",
    href: "https://wa.me/254715100100",
    color: "text-[#1C506D]",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vitameals.co",
    href: "mailto:info@vitameals.co",
    color: "text-[#1C506D]",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.vitameals.co",
    href: "https://www.vitameals.co",
    color: "text-[#1C506D]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Office Suites, Parklands, Nairobi Kenya",
    href: "https://maps.google.com/?q=Parklands,Nairobi,Kenya",
    color: "text-[#1C506D]",
  },
]

export const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 h-[500px]">
        <div className="absolute inset-0 bg-[#1C506D] opacity-95 z-10" />
        <img src="/contact-hero.jpg" alt="Contact Vitameals Africa" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="pt-20 pb-32 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Whether you have a query, need more information, or are ready to kickstart your project, we are just a
            message away.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-16 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <div
                key={contact.label}
                className="group p-8 bg-white rounded-lg shadow border border-[#789FB3]/30 hover:border-[#1C506D] hover:shadow-lg transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={contact.href}
                  target={contact.label === "Website" || contact.label === "Location" ? "_blank" : undefined}
                  rel={contact.label === "Website" || contact.label === "Location" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#789FB3]/10 group-hover:bg-[#789FB3]/20 transition-colors duration-300">
                      <Icon
                        className={`w-6 h-6 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#1C506D] mb-2 group-hover:text-[#789FB3] transition-colors duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom Section with Image and CTA */}
        <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg animate-fade-in">
            <div className="absolute inset-0 bg-[#1C506D]/10 opacity-10 z-10" />
            <img src="/communication.jpg" alt="Professional Communication" className="w-full h-full object-cover" />
          </div>

          {/* CTA Side */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C506D]">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of experts is ready to help you with your food fortification and nutritional commodity needs.
              Reach out today and let's discuss how we can support your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="mailto:info@vitameals.co"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-[#1C506D] hover:bg-[#1C506D]/90 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send us an Email
              </Link>

              <Link
                href="https://wa.me/254715100100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-[#789FB3] text-[#1C506D] hover:bg-[#789FB3]/10 rounded-md transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Link>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-[#789FB3]/10 border border-[#789FB3]/30 rounded-lg mt-8">
              <h3 className="font-semibold text-lg text-[#1C506D] mb-3">Business Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-slate-900">8:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-slate-900">9:00 AM - 2:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-slate-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
