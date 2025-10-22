import { Target, Globe } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="relative py-12 lg:py-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#789FB3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C506D]/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Content */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="/about-lab.jpg"
                alt="Food science laboratory at Vitameals Africa analyzing nutritional samples"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C506D]/60 to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 text-slate-900">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
              Pioneering Nutritional Excellence
            </h2>

            {/* Main Description */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed animate-fade-in">
              Vitameals Africa is a Kenyan-based company that has carved a niche in the global nutritional commodities
              market. We specialize in facilitating food fortification and providing comprehensive solutions in
              commodity trading.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed animate-fade-in">
              By leveraging science-backed processes and a robust global network, Vitameals supports clients worldwide,
              from producers and processors to manufacturers and wholesalers, in achieving optimal nutritional quality
              and ensuring regulatory compliance.
            </p>

            {/* Key Values */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="group p-6 rounded-2xl bg-white border border-[#789FB3]/30 hover:border-[#1C506D] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Target className="w-10 h-10 text-[#1C506D] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-sm">
                  Empowering healthier communities through innovative food fortification solutions
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-white border border-[#789FB3]/30 hover:border-[#1C506D] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Globe className="w-10 h-10 text-[#789FB3] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Global Reach</h3>
                <p className="text-slate-600 text-sm">
                  Connecting markets worldwide with quality nutritional commodities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
