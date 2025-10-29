"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ShieldCheck, Globe2, Boxes, FlaskConical, Factory, ArrowRight } from "lucide-react"
import { ChevronRight } from "lucide-react"
const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Food Fortification Solutions",
    description: "Customized vitamin & mineral premix blends, technical consultation on fortification.",
    color: "from-[#1C506D] to-[#789FB3]",
    angle: 0,
    image: "/service-formulation.jpg",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Regulatory & Quality Assurance Support",
    description: "Compliance advisory, product testing and certification for traceability.",
    color: "from-[#789FB3] to-[#1C506D]",
    angle: 60,
    image: "/service-quality.jpg",
  },
  {
    id: 3,
    icon: Globe2,
    title: "International Trade & Sourcing",
    description: "Global procurement of raw materials, optimized supply chain management.",
    color: "from-[#1C506D] to-[#789FB3]",
    angle: 120,
    image: "/service-sourcing.jpg",
  },
  {
    id: 4,
    icon: Boxes,
    title: "Bulk Supply & Distribution",
    description: "Wholesale trading, packaging and inventory management.",
    color: "from-[#789FB3] to-[#1C506D]",
    angle: 180,
    image: "/service-distribution.jpg",
  },
  {
    id: 5,
    icon: FlaskConical,
    title: "Custom Formulation & Blending",
    description: "Nutritional blends for food and beverage applications, flexible supply options.",
    color: "from-[#1C506D] to-[#789FB3]",
    angle: 240,
    image: "/service-formulation.jpg",
  },
  {
    id: 6,
    icon: Factory,
    title: "Turnkey Factory Development",
    description: "Factory setup, process optimization and workforce training for food fortification.",
    color: "from-[#789FB3] to-[#1C506D]",
    angle: 300,
    image: "/service-factory.jpg",
  },
]



const ServicesSection = () => {
  const radius = 200
  const centerX = 300
  const centerY = 300
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-12 lg:py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/services-pattern.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#789FB3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1C506D]/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C506D] leading-tight">
            Comprehensive Solutions for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1C506D] to-[#789FB3]">
              Global Nutrition
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From fortification to distribution, we provide end-to-end services that ensure optimal nutritional quality
            across the entire value chain.
          </p>
        </div>

        {/* SVG Hexagon + Lines */}

      {/* Desktop View (hidden on mobile) */}
      <div className="hidden md:block relative w-full">
        <svg viewBox="0 0 600 600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C506D" />
              <stop offset="100%" stopColor="#789FB3" />
            </linearGradient>
          </defs>

          <polygon
            points="500,300 400,126.7949 200,126.7949 100,300 200,473.2051 400,473.2051"
            fill="none"
            stroke="url(#hexGradient)"
            strokeWidth="2"
            opacity="0.3"
          />

          {services.map((service) => {
            const rad = (service.angle * Math.PI) / 180
            const x = Number((centerX + radius * Math.cos(rad)).toFixed(4))
            const y = Number((centerY + radius * Math.sin(rad)).toFixed(4))

            return (
              <line
                key={`line-${service.id}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="url(#hexGradient)"
                strokeWidth="1"
                opacity="0.2"
              />
            )
          })}
        </svg>

        {/* Center Circle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#1C506D] to-[#789FB3] shadow-2xl flex items-center justify-center z-10"
          style={{ pointerEvents: "none" }}
        >
          <div className="text-white text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-xs opacity-90">Services</div>
          </div>
        </div>

        {/* Service Cards */}
        {services.map((service) => {
          const rad = (service.angle * Math.PI) / 180
          const xPct = Number((((centerX + radius * Math.cos(rad)) / 600) * 100).toFixed(4))
          const yPct = Number((((centerY + radius * Math.sin(rad)) / 600) * 100).toFixed(4))

          const IconComponent = service.icon

          return (
            <div
              key={service.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
            >
              <div className="relative">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border-4 border-white">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform duration-300 border-4 border-white`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                  <div className="bg-slate-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg">
                    {service.title} <br />
                    {service.description}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile View (hidden on desktop) */}
      <div className="md:hidden">
        <div className="space-y-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isExpanded = expandedId === service.id

            return (
              <div
                key={service.id}
                className="group"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                    isExpanded ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                          {/* <p className="text-sm text-white/80">{service.description}</p> */}
                        </div>
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                          {isExpanded ? "Less" : "More"}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 text-white transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 animate-in fade-in duration-300">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-blue-400">Key Features</h4>
                          <p className="text-sm text-white/80">{service.description}</p>
                        </div>
                        {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm">
                          Learn More
                        </button> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    


        {/* CTA Section */}
        <div className="relative mt-20 bg-gradient-to-r from-[#1C506D] to-[#789FB3] rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/services-pattern.jpg" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Nutrition Solutions?</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Partner with Vitameals Africa for comprehensive food fortification and commodity trading services backed
                by science and global expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[#1C506D] font-semibold bg-white hover:bg-slate-100 transition-all group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
