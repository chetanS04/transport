"use client";

import { Truck, Star, MapPin, Users, ArrowUpRight } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "1 Lakh +",
    label: "Transporters",
    icon: <Truck size={22} />,
    tag: "Logistics"
  },
  {
    id: 2,
    value: "4.5★",
    label: "Playstore Rating",
    icon: <Star size={22} />,
    tag: "Reviews"
  },
  {
    id: 3,
    value: "100+",
    label: "Cities Covered",
    icon: <MapPin size={22} />,
    tag: "Coverage"
  },
  {
    id: 4,
    value: "3.23K",
    label: "Total Users",
    icon: <Users size={22} />,
    tag: "Community"
  },
];

export default function ModernStatsSection() {
  return (
    <section className="w-full py-24 bg-gray-50">

      {/* ---- SECTION HEADER ---- */}
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Why Choose Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            We are committed to delivering excellence in logistics with a focus on
            reliability, safety, and customer satisfaction.
          </p>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
            Our Business Stats <ArrowUpRight size={16} />
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            How We’re Transforming
            <br /> Businesses and
            <br /> Unlocking Potential
          </h2>

          <button className="
            w-fit px-6 py-3 rounded-xl 
            bg-primary text-white font-semibold text-sm shadow-lg
            hover:scale-105 hover:shadow-xl transition-all duration-300
          ">
            Get Started Now
          </button>
        </div>

        {/* RIGHT SIDE FLOATING STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-3xl p-6 shadow-md hover:shadow-xl
                transition-all duration-300 relative
              "
            >
              {/* Icon Badge */}
              <div className="
                h-10 w-10 flex items-center justify-center rounded-xl 
                bg-primary/10 text-primary mb-4
              ">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>

              {/* Label */}
              <p className="font-semibold text-gray-700 mt-1 mb-7">{item.label}</p>



              {/* Tag (bottom left) */}
              <span className="
                absolute bottom-4 left-4 
                text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600
                font-medium
              ">
                {item.tag}
              </span>

              {/* Arrow (bottom right) */}
              <span className="
                absolute bottom-4 right-4 p-2 rounded-full bg-gray-100
                text-gray-700 hover:bg-gray-200 transition
              ">
                <ArrowUpRight size={16} />
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
