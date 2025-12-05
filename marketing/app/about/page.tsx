import LogoSlider from "@/components/common/LogoSlider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gray-100 py-16 px-6 sm:px-8 overflow-hidden">

        {/* SUBTLE DOT BACKGROUND */}
        <div className="absolute inset-0 w-full h-full -z-10 opacity-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="dots"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <circle cx="10" cy="10" r="2" fill="#cbd5e1" />
              </pattern>
            </defs>
            <rect width="1440" height="800" fill="url(#dots)" />
          </svg>
        </div>

        {/* GRID SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT BOX */}
          <div className="p-6 sm:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              About Us
            </h2>

            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              We craft innovative digital experiences that elevate your brand and inspire your audience.
              Our passionate team leverages creativity and technology to bring your vision to life.
            </p>

            <div className="space-y-6">
              <FeatureCard
                icon={<FaUser className="w-6 h-6 text-primary" />}
                title="Dedicated Team"
                text="A passionate group of experts committed to delivering excellence."
              />

              <FeatureCard
                icon={<FaUser className="w-6 h-6 text-primary" />}
                title="Innovative Approach"
                text="We use creativity and technology to craft unique and powerful solutions."
              />

              <FeatureCard
                icon={<FaUser className="w-6 h-6 text-primary" />}
                title="Customer Focused"
                text="We listen, adapt, and deliver exactly what your business needs."
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="rounded-xl shadow-xl object-cover w-full h-full hover:opacity-90 transition"
            />
          </div>
        </div>
      </section>

      <LogoSlider />

      <Footer />
    </>
  );
}

/* FEATURE CARD */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <div className="p-3 bg-gray-100 rounded-full shadow">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}
