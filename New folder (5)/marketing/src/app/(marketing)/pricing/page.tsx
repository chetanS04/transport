import SmallHeroSection from "@/components/(sheared)/SmallHeroSection";
import Heading from "@/components/ui/heading";

export default function PricingSection() {
  const plans = [
    {
      title: "Starter",
      price: "₹499 / month",
      desc: "Best for individuals and small teams getting started.",
      features: [
        "5 Vehicles Tracking",
        "Basic Dashboard Access",
        "Email Support",
        "1 Admin User",
      ],
      highlight: false,
    },
    {
      title: "Business",
      price: "₹999 / month",
      desc: "Perfect for growing businesses needing advanced control.",
      features: [
        "20 Vehicles Tracking",
        "Advanced Reports",
        "Priority Support",
        "5 Admin Users",
      ],
      highlight: true, // middle card highlighted
    },
    {
      title: "Enterprise",
      price: "₹1,999 / month",
      desc: "For large companies requiring powerful tools & support.",
      features: [
        "Unlimited Vehicles",
        "Full Analytics Suite",
        "24/7 Phone Support",
        "Unlimited Admins",
      ],
      highlight: false,
    },
  ];

  return (
    <>
   <SmallHeroSection title="Pricing" subtitle="Choose the best plan for your needs" />
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        
        <Heading title="Our" highlight="Pricing Plans" description="Select the plan that best fits your business needs and scale with ease." />

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                p-8 rounded-2xl border shadow-md bg-white dark:bg-gray-800 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                ${plan.highlight ? "border-primary shadow-xl" : "border-gray-200 dark:border-gray-700"}
              `}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.title}
              </h3>

              <p className="text-primary text-3xl font-bold mt-3">{plan.price}</p>

              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary text-lg">✔</span> {f}
                  </li>
                ))}
              </ul>

              <button
               className="btn-primary w-full mt-6 py-3 rounded-lg font-semibold transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
