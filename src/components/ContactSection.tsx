import { Mail, Phone, Globe, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";


const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254750 000020",
    href: "tel:+254750000020",
    color: "text-accent",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254715 100 100",
    href: "https://wa.me/254715100100",
    color: "text-accent",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vitameals.co",
    href: "mailto:info@vitameals.co",
    color: "text-accent",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.vitameals.co",
    href: "https://www.vitameals.co",
    color: "text-accent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Office Suites, Parklands, Nairobi Kenya",
    href: "https://maps.google.com/?q=Parklands,Nairobi,Kenya",
    color: "text-accent",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 h-[500px]">
        <div className="absolute inset-0 bg-[#1C505D] opacity-95 z-10" />
        <img
          src="/contact-hero.jpg"
          alt="Contact Vitameals Africa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="pt-20 pb-32 text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Whether you have a query, need more information, or are ready to kickstart your project, we are just a message away.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-16 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.label}
                className="group p-8 bg-white dark:bg-[#1C506D] rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-[var(--shadow-navy-lg)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={contact.href}
                  target={
                    contact.label === "Website" || contact.label === "Location"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.label === "Website" || contact.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon
                        className={`w-6 h-6 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Section with Image and CTA */}
        <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-navy-lg)] animate-fade-in">
            <div className="absolute inset-0 bg-[var(--gradient-navy)] opacity-10 z-10" />
            <img
              src="/communication.jpg"
              alt="Professional Communication"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CTA Side */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experts is ready to help you with your food
              fortification and nutritional commodity needs. Reach out today and
              let's discuss how we can support your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <Link
    href="mailto:info@vitameals.co"
    className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-[#1C505D] hover:bg-primary-light text-white rounded-md shadow-[var(--shadow-navy)] hover:shadow-[var(--shadow-navy-lg)] transition-all duration-300"
  >
    <Mail className="mr-2 w-5 h-5" />
    Send us an Email
  </Link>

  <Link
    href="https://wa.me/254715100100"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-[#1C506D] text-accent hover:bg-[#1C505D] hover:text-white rounded-md transition-all duration-300"
  >
    <MessageCircle className="mr-2 w-5 h-5" />
    Chat on WhatsApp
  </Link>
</div>


            {/* Business Hours */}
            <div className="p-6 bg-[#1C505D] border border-primary/10 rounded-lg mt-8">
              <h3 className="font-semibold text-lg text-primary mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-foreground">
                    8:00 AM - 6:00 PM EAT
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-foreground">
                    9:00 AM - 2:00 PM EAT
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
