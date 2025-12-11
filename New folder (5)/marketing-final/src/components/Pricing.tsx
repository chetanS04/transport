"use client";

import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "₹499",
      desc: "Best for individuals and small teams getting started.",
      features: ["5 Vehicles Tracking", "Basic Dashboard Access", "Email Support", "1 Admin User"],
      highlight: false,
    },
    {
      title: "Business",
      price: "₹999",
      desc: "Perfect for growing businesses needing advanced control.",
      features: ["20 Vehicles Tracking", "Advanced Reports", "Priority Support", "5 Admin Users"],
      highlight: true, // ⭐ MOST POPULAR
    },
    {
      title: "Enterprise",
      price: "₹1,999",
      desc: "For large companies requiring powerful tools & support.",
      features: ["Unlimited Vehicles", "Full Analytics Suite", "24/7 Phone Support", "Unlimited Admins"],
      highlight: false,
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* ---- HEADING ---- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Select the plan that best fits your business needs and scale with ease.
          </p>
        </div>

        {/* ---- PRICING CARDS ---- */}
        <div className="grid md:grid-cols-3 gap-10 place-items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[35px] shadow-xl border border-gray-200 
                p-8 w-[350px] md:w-[420px] 
                relative overflow-hidden hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* Glow Background */}
              <div
                className={`
                  absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 
                  blur-3xl opacity-30 
                  ${plan.highlight ? "bg-primary" : "bg-purple-300"}
                `}
              ></div>

              {/* Top Row */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                  <Zap size={22} className="text-primary" />
                </div>

                {plan.highlight && (
                  <span className="
                    bg-blue-100 text-primary text-xs font-semibold 
                    px-3 py-1 rounded-full shadow-sm
                  ">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 relative z-10">{plan.title}</h3>
              <p className="text-gray-600 mt-1 relative z-10">{plan.desc}</p>

              {/* Price */}
              <div className="flex items-end justify-between mt-5 relative z-10">
                <h2 className="text-4xl font-bold text-gray-900">{plan.price}</h2>
                <p className="text-gray-400 text-sm leading-tight text-right">
                  Cancel or pause <br /> anytime
                </p>
              </div>
              <p className="-mt-1 text-gray-500 text-sm relative z-10">/month</p>

              {/* Features */}
              <div
                className="
                  bg-white rounded-3xl shadow-inner border border-gray-200 
                  p-6 mt-6 space-y-4 relative z-10
                "
              >
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                    <Check size={18} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="
                  w-full mt-8 
                  bg-gradient-to-r from-primary to-primary-dark
                  text-white text-sm font-semibold py-3 rounded-full 
                  shadow-lg hover:shadow-xl transition-all relative z-10
                "
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
