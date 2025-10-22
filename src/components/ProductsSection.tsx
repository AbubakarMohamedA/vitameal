
"use client"
import { useState } from "react";
import {
  Pill,
  Leaf,
  Dumbbell,
  Package,
  Sparkles,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

interface Product {
  id: string;
  icon: any;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "fortification",
    icon: Pill,
    title: "Food Fortification & Nutrition",
    description:
      "Customized vitamin and mineral premix blends, single micronutrients, and encapsulated nutrients designed for  fortification of staple foods like wheat flour, maize meal,  edible oils, dairy products, and sugars.",
    image: "/product-fortification.jpg",
    features: ["Vitamin & Mineral Premix Blends", "Single Micronutrients", "Encapsulated Nutrients", "Staple Food Fortification"],
  },
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agricultural & Animal Nutrition",
    description:
      "Animal feed fortificants, soil and plant nutrients, including  fortified premixes, fertilizers, and micronutrient blends for  poultry, livestock, aquaculture, and crop production.",
    image: "/product-agriculture.jpg",
    features: ["Animal Feed Fortificants", "Soil & Plant Nutrients", "Fortified Premixes", "Livestock & Aquaculture Solutions"],
  },
  {
    id: "sports",
    icon: Dumbbell,
    title: "Human & Sports Nutrition",
    description:
      "Dietary supplements, functional ingredients, sports nutrition products, and specialty health ingredients including proteins, amino acids, probiotics, omega-3 fatty  acids, collagen, antioxidants, and adaptogens.",
    image: "/product-sports.jpg",
    features: ["Dietary Supplements", "Sports Nutrition Products", "Functional Ingredients", "Specialty Health Ingredients"],
  },
  {
    id: "commodities",
    icon: Package,
    title: "Commodities & Raw Materials",
    description:
      "Bulk supplies of grains, cereals, pulses, dairy products,  edible oils, sweeteners, and industrial additives, with global  market expertise and competitive pricing.",
    image: "/product-commodities.jpg",
    features: ["Bulk Grains & Cereals", "Dairy Products", "Edible Oils & Sweeteners", "Industrial Additives"],
  },
  {
    id: "specialty",
    icon: Sparkles,
    title: "Specialty & Functional Ingredients",
    description:
      "Natural extracts, botanical powders, sugar alternatives,  prebiotics, probiotics, emulsifiers, stabilizers, preservatives,  and antioxidants for specialized food and industrial  applications.",
    image: "/product-specialty.jpg",
    features: ["Natural Extracts", "Sugar Alternatives", "Prebiotics & Probiotics", "Emulsifiers & Stabilizers"],
  },
  {
    id: "pharmaceutical",
    icon: FlaskConical,
    title: "Pharmaceutical & Industrial Ingredients",
    description:
      "High-grade active pharmaceutical ingredients (APIs), excipients, binders, and nutraceutical ingredients for drug  manufacturing and specialized formulations.",
    image: "/product-pharmaceutical.jpg",
    features: ["Active Pharmaceutical Ingredients", "Excipients & Binders", "Nutraceutical Ingredients", "Specialized Formulations"],
  },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];
  const Icon = activeProduct.icon;

  return (
    <section id="products" className="relative py-12 lg:py-20 bg-[#1C505D] overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comprehensive Range of{" "}
            <span className="bg-clip-text text-transparent bg-[#789FB3] from-secondary to-primary">
              Nutritional Products
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed">
            From fortification to pharmaceuticals, explore our diverse portfolio 
            of premium nutritional commodities and specialized ingredients.
          </p>
        </div>

        {/* Custom Tab Navigation */}
<div className="flex justify-center mb-12">
  <div className="overflow-x-auto pb-4">
    <div className="inline-flex w-full min-w-max lg:w-auto bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl">
      {products.map((product) => {
        const TabIcon = product.icon;
        const isActive = product.id === activeTab;
        return (
          <button
            key={product.id}
            onClick={() => setActiveTab(product.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white/70 whitespace-nowrap transition-all duration-300
              ${isActive ? "bg-[#1C508D] text-[hsl(var(--navy))] shadow-lg" : ""}
            `}
          >
            <TabIcon className="w-4 h-4" />
            <span className="hidden sm:inline">
              {product.title.split("&")[0].trim()}
            </span>
            <span className="sm:hidden">
              {product.title.split(" ")[0]}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</div>

        {/* Custom Tab Content */}
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-navy)]">
                <img
                  src={activeProduct.image}
                  alt={`${activeProduct.title} products by Vitameals Africa`}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-dark))]/80 to-transparent opacity-60" />

              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                  {activeProduct.title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Offerings:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeProduct.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
