"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/images/featured-img-1.jpg",
    title: "Road Freight & Trucking Services",
    description:
      "Reliable trucking solutions for domestic and cross-border deliveries with real-time tracking and an advanced fleet.",
  },
  {
    image: "/images/featured-img-1.jpg",
    title: "Express & Same-Day Delivery",
    description:
      "Fast and secure express delivery designed for urgent shipments that must reach the destination within tight deadlines.",
  },
  {
   image: "/images/featured-img-1.jpg",
    title: "Warehousing & Storage Solutions",
    description:
      "State-of-the-art warehousing facilities with temperature-controlled storage, inventory management, and 24/7 security.",
  },
  {
    image: "/images/featured-img-1.jpg",
    title: "Containerized Cargo Transport",
    description:
      "Safe movement of containerized goods using standardized equipment, ensuring efficiency and reduced handling time.",
  },
  {
   image: "/images/featured-img-1.jpg",
    title: "Heavy & Oversized Load Transport",
    description:
      "Specialized trucks and certified operators for transporting construction machinery, oversized goods, and heavy equipment.",
  },
  {
   image: "/images/featured-img-1.jpg",
    title: "E-commerce & Last-Mile Delivery",
    description:
      "Streamlined end-to-end logistics for online businesses with doorstep delivery and optimized distribution routes.",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-10 ">
      {/* ---- SECTION HEADER ---- */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          What We Offer
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Reliable, secure and on-time logistics services designed to move your
          goods with complete confidence and safety.
        </p>
      </div>

      {/* ---- CARDS GRID ---- */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {services.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-lg
                       hover:shadow-3xl transition-all duration-500 
                       border border-gray-200 hover:-translate-y-3"
          >
            {/* Image + Dark Overlay */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-70"></div>
            </div>

            {/* Content */}
            <div className="p-7 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <button
                className="flex items-center gap-2 text-primary font-semibold text-sm
                           group-hover:underline mt-4"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Gradient Glow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 border-[3px] border-primary/40"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
