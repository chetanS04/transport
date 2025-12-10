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
      highlight: true,
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
       <section
            className="relative text-white py-12 sm:py-16 md:py-20 "
            style={{
                backgroundImage: `url(${"/images/pricing-hero.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-900/80 via-slate-900/80 to-slate-800/80"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                       Pricing
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl opacity-90 px-4">
                        Choose the best plan for your needs
                    </p>
                </div>
            </div>
        </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">



          {/* ---- SECTION HEADER ---- */}
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Pricing Plans
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Select the plan that best fits your business needs and scale with ease.
            </p>
          </div>

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

                <p className="text-gray-600 dark:text-gray-200 mt-3 text-sm">
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
                  className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold transition-colors duration-150 hover:bg-primary-dark w-full mt-6"
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
