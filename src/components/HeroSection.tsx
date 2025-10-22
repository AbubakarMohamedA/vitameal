import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="African farmers in golden wheat fields representing Vitameals Africa's mission"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1C506D]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-white">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Empowering Healthy Generations</h1>

            {/* Subheading */}
            <p className="text-l md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Transforming nutrition across Africa through innovative food fortification solutions and comprehensive
              commodity trading services.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#789FB3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Global Network</h3>
                  <p className="text-white/80 text-sm">Connecting producers worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#789FB3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Science-Backed</h3>
                  <p className="text-white/80 text-sm">Evidence-based fortification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#789FB3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Regulatory Compliance</h3>
                  <p className="text-white/80 text-sm">Meeting global standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#789FB3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Custom Solutions</h3>
                  <p className="text-white/80 text-sm">Tailored to your needs</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium bg-white text-[#1C506D] rounded-md shadow-md transition-all group hover:bg-slate-100"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-white text-white rounded-md hover:bg-white hover:text-[#1C506D] transition-all"
              >
                Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/hero-banner.jpg"
              alt="African farmers in golden wheat fields representing Vitameals Africa's mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
