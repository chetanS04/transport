"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing1() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [animating, setAnimating] = useState(false);

  const toggleBilling = () => {
    setAnimating(true);
    setTimeout(() => {
      setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
      setAnimating(false);
    }, 250); // timing matches animation
  };

  const plans = [
    {
      name: "Basic Pack",
      monthly: 499,
      yearly: 499 * 10,
      features: ["5 Vehicles Tracking", "Basic Dashboard Access", "Email Support", "1 Admin User"],
    },
    {
      name: "Standard Pack",
      monthly: 999,
      yearly: 999 * 10,
      features: ["20 Vehicles Tracking", "Advanced Reports", "Priority Support", "5 Admin Users"],
    },
    {
      name: "Premium Pack",
      monthly: 1999,
      yearly: 1999 * 10,
      features: ["Unlimited Vehicles", "Full Analytics Suite", "24/7 Phone Support", "Unlimited Admins"],
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Choose Your Pricing Plan</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Pick a plan that suits your logistics and fleet management needs.
          </p>
        </div>

        {/* Billing Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white shadow-lg px-4 py-2 rounded-full gap-4">
            <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-primary" : "text-gray-400"}`}>
              Monthly
            </span>

            <button onClick={toggleBilling} className="relative w-16 h-7 bg-gray-300 rounded-full transition-all duration-300">
              <div className={`
                absolute top-1 left-1 w-5 h-5 bg-primary rounded-full shadow-md transition-all 
                duration-300 ${billingCycle === "yearly" ? "translate-x-9" : ""}
              `}></div>
            </button>

            <span className={`text-sm font-semibold ${billingCycle === "yearly" ? "text-primary" : "text-gray-400"}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => {
            const price = billingCycle === "monthly" ? plan.monthly : plan.yearly;
            const period = billingCycle === "monthly" ? "/month" : "/year";

            return (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-8 pt-16 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                
                {/* Animated Price Badge */}
                <div className="
                  absolute -top-8 right-0 -translate-x-1/2 
                  w-32 h-32 bg-primary text-white rounded-full 
                  flex flex-col items-center justify-center 
                  shadow-xl border-4 border-white select-none overflow-hidden
                ">
                  <div
                    className={`
                      transition-all duration-300 
                      ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
                    `}
                  >
                    <span className="text-2xl font-bold">₹{price}</span>
                    <span className="text-xs opacity-90">{period}</span>
                  </div>
                </div>

                {/* Side Accent */}
                <div className="absolute left-0 top-16 h-40 w-3 rounded-r-full bg-primary"></div>

                {/* Title */}
                <h3 className="text-lg font-bold uppercase tracking-wide text-primary">{plan.name}</h3>

                <h4 className="mt-5 text-xl font-semibold text-gray-900">
                  {billingCycle === "monthly" ? "Monthly Purchase" : "Yearly Purchase"}
                </h4>

                {/* Features */}
                <ul className="mt-5 space-y-3">
                  {plan.features.map((f, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <Check size={18} className="text-primary" /> {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="
                  mt-8 w-full py-3 text-center text-sm font-bold 
                  rounded-lg border-2 border-primary text-primary
                  hover:bg-primary hover:text-white transition-all
                ">
                  Order Now →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
