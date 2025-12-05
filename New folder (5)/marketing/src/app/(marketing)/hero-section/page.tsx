"use client";

import "swiper/css";
import "swiper/css/pagination";


export default function HeroSection() {
    return (
        <>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-none">
                        <span className="text-pri">AI-powered</span>{" "}
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
        </>

    );
}
