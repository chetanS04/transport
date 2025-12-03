
import Navbar from "@/components/layout/Navbar";
import CardGrid from "@/components/common/CardGrid";
import Card2 from "@/components/common/card2";
import Footer from "@/components/layout/Footer";
import CardCarousel from "@/components/common/cardCarousel";
import CarouselSection from "@/components/common/CarouselSection";



export default function Home() {
  return (
    <>
      <Navbar />

      <section className="w-full py-10 md:py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none">
              <span className="text-green-700">AI-powered</span>{" "}
              delivery management and customer experience
            </h1>

            <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-lg dark:text-gray-300">
              Streamline deliveries, build loyalty, and grow your business with our
              AI-powered delivery management platform.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6 text-gray-700 font-medium">
              <span className="text-lg dark:text-gray-300">4.7</span>
              ⭐
              <span className="text-gray-500 dark:text-gray-400">5,000+ customers</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="btn-primary">
                Get started free
              </button>
              <button className="btn-secondary">
                Book a demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + FLOATING CARDS */}
          <div className=" flex justify-center">
            {/* Fake API Chef Image */}
            <img
              src="https://picsum.photos/600/450?random=12"
              alt="Chef"
              className="rounded-4xl w-full object-cover shadow-lg"
              width={600}
              height={450}
            />
          </div>
        </div>
      </section>

      <div className="w-full mx-auto px-6 py-10 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            What We <span className="text-green-700">Provide</span>
          </h2>

          <p className="text-lg text-gray-600">
            Powerful tools designed to help businesses manage their fleet, deliveries,
            drivers, and operations all in one smart platform.
          </p>
        </div>
        <CardCarousel />

      </div>
      <Card2 />

      <div className="w-full mx-auto px-6 py-10 ">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-black dark:text-white mb-3">
            Pick a Web <span className="text-green-700">Page</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Powerful tools designed to help businesses manage their fleet, deliveries,
            drivers, and operations all in one smart platform.
          </p>
        </div>
        <main className="container mx-auto px-4 py-10">
          <CardGrid />
        </main>
      </div>

      <div className="w-full mx-auto px-6 py-10 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-12">
           <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            Pick a Web <span className="text-green-700">Page</span>
          </h2>

          <p className="text-lg text-gray-600">
            Powerful tools designed to help businesses manage their fleet, deliveries,
            drivers, and operations all in one smart platform.
          </p>
        </div>
        <CarouselSection />

      </div>
      <Footer />

    </>
  );
}

/* Removed duplicate default export `CardGrid`. This file should only export the `Home` default component. */
