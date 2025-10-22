import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation & Needs Assessment",
    description:
      "An initial discussion to determine fortification requirements, commodity specifications, or factory development needs; supported by market and regulatory analysis.",
    image: "/sourcing.jpg",
  },
  {
    number: "02",
    title: "Sourcing & Procurement",
    description:
      "Leveraging a global network to procure the highest quality raw materials and ingredients while ensuring transparent supplier verification.",
    image: "/sourcing.jpg",
  },
  {
    number: "03",
    title: "Custom Formulation & Blending",
    description:
      "Tailoring nutritional blends with extensive lab testing for stability, bioavailability, and compliance with international standards.",
    image: "/formulation.jpg",
  },
  {
    number: "04",
    title: "Quality Assurance & Compliance",
    description:
      "Implementation of rigorous testing protocols, documentation support, and third-party certification to meet all regulatory mandates.",
    image: "/quality.jpg",
  },
  {
    number: "05",
    title: "Logistics & Delivery",
    description:
      "Utilizing streamlined global shipping practices and inventory management systems to ensure timely delivery and efficiency.",
    image: "/logistics.jpg",
  },
  {
    number: "06",
    title: "Implementation & Ongoing Support",
    description:
      "For factory setups, this includes turnkey installation, process optimization, comprehensive training, and continuous after-sales support, ensuring long-term client success.",
    image: "/implementation.jpg",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#1C506D]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Process and Value Chain
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-[1C506D] transform -translate-x-1/2 hidden md:block" />
              )}

              <div className="relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-navy)] hover:shadow-[var(--shadow-navy-lg)] transition-all duration-500 border border-[#1C506D]">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="text-6xl font-bold text-[#1C506D] bg-[#789FB3]">
                        {step.number}
                      </span>
                      <CheckCircle2 className="w-8 h-8 text-[#789FB3]" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-[#789FB3] transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    
                  </div>

                  {/* Image Side */}
                  <div
                    className={`relative h-64 md:h-auto overflow-hidden ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[var(--gradient-navy)] opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Step number overlay */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#1C506D] backdrop-blur-sm flex items-center justify-center z-20">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-[var(--gradient-navy)] text-primary-foreground">
            <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
            <p className="text-primary-foreground/80 max-w-2xl">
              Our comprehensive process ensures excellence at every step, from initial consultation to ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
