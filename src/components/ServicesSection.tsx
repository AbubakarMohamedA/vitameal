"use client"

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Globe2,
  Boxes,
  FlaskConical,
  Factory,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Food Fortification Solutions",
    description: "Customized vitamin & mineral premix blends, technical consultation on fortification.",
    color: "from-green-500 to-emerald-600",
    angle: 0,
    image: "/service-formulation.jpg",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Regulatory & Quality Assurance Support",
    description: "Compliance advisory, product testing and certification for traceability.",
    color: "from-blue-500 to-indigo-600",
    angle: 60,
    image: "/service-quality.jpg",
  },
  {
    id: 3,
    icon: Globe2,
    title: "International Trade & Sourcing",
    description: "Global procurement of raw materials, optimized supply chain management.",
    color: "from-purple-500 to-fuchsia-600",
    angle: 120,
    image: "/service-sourcing.jpg",
  },
  {
    id: 4,
    icon: Boxes,
    title: "Bulk Supply & Distribution",
    description: "Wholesale trading, packaging and inventory management.",
    color: "from-green-500 to-emerald-600",
    angle: 180,
    image: "/service-distribution.jpg",
  },
  {
    id: 5,
    icon: FlaskConical,
    title: "Custom Formulation & Blending",
    description: "Nutritional blends for food and beverage applications, flexible supply options.",
    color: "from-blue-500 to-indigo-600",
    angle: 240,
    image: "/service-formulation.jpg",
  },
  {
    id: 6,
    icon: Factory,
    title: "Turnkey Factory Development",
    description: "Factory setup, process optimization and workforce training for food fortification.",
    color: "from-purple-500 to-fuchsia-600",
    angle: 300,
    image: "/service-factory.jpg",
  },
];

const ServicesSection = () => {
  const radius = 200; // SVG coordinate radius
  const centerX = 300;
  const centerY = 300;

  return (
    <section id="services" className="relative py-12 lg:py-20 bg-[#1C506D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/services-pattern.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] leading-tight">
            Comprehensive Solutions for{" "}
            <span className="bg-clip-text text-transparent bg-[#789FB3]">
              Global Nutrition
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From fortification to distribution, we provide end-to-end services that
            ensure optimal nutritional quality across the entire value chain.
          </p>
        </div>

        {/* SVG Hexagon + Lines (Background Visual) */}
        <div className="relative w-full max-w-4xl mx-auto ">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Hexagon outline — corrected */}
<polygon
  points="500,300 400,126.7949 200,126.7949 100,300 200,473.2051 400,473.2051"
  fill="none"
  stroke="url(#hexGradient)"
  strokeWidth="2"
  opacity="0.3"
/>

            {/* Spokes from center to each service point */}
            {services.map((service) => {
  const rad = (service.angle * Math.PI) / 180;
  const x = Number((centerX + radius * Math.cos(rad)).toFixed(4));
  const y = Number((centerY + radius * Math.sin(rad)).toFixed(4));

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
  );
})}
          </svg>

          {/* Center Circle (on top of SVG) */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-blue-600 shadow-2xl flex items-center justify-center z-10"
            style={{ pointerEvents: 'none' }}
          >
            <div className="text-white text-center">
              <div className="text-2xl font-bold">6</div>
              <div className="text-xs opacity-90">Services</div>
            </div>
          </div>

          {/* Service Cards (positioned absolutely over SVG) */}
          {services.map((service) => {
            const rad = (service.angle * Math.PI) / 180;
            // Convert SVG coordinates to percentage for absolute positioning
            const xPct = Number((((centerX + radius * Math.cos(rad)) / 600) * 100).toFixed(4));
const yPct = Number((((centerY + radius * Math.sin(rad)) / 600) * 100).toFixed(4));

            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}
              >
                <div className="relative">
                  {/* Image Card */}
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border-4 border-white dark:border-[#1C506D]">
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

                  {/* Icon Badge */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform duration-300 border-4 border-white dark:border-[#1C506D]`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg">
                      {service.title} <br/>
                      {service.description}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45" />
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative mt-20 bg-gradient-to-r from-[#1C506D] to-[#2A7090] rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/services-pattern.jpg" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Transform Your Nutrition Solutions?
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Partner with Vitameals Africa for comprehensive food fortification and
                commodity trading services backed by science and global expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[hsl(var(--navy))] font-semibold bg-[#789FB3] transition-all group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/30 text-white hover:bg-[#789FB3] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;