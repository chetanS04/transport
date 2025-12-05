// "use client";

// import "swiper/css";
// import "swiper/css/pagination";


// export default function HeroSection() {

//     return (
//         <>

//             <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//                 {/* LEFT CONTENT */}
//                 <div>
//                     <h1 className="text-5xl md:text-7xl font-bold leading-none">
//                         <span className="text-pri">AI-powered</span>{" "}
//                         delivery management and customer experience
//                     </h1>

//                     <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-lg dark:text-gray-300">
//                         Streamline deliveries, build loyalty, and grow your business with our
//                         AI-powered delivery management platform.
//                     </p>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2 mt-6 text-gray-700 font-medium">
//                         <span className="text-lg dark:text-gray-300">4.7</span>
//                         ⭐
//                         <span className="text-gray-500 dark:text-gray-400">5,000+ customers</span>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-wrap gap-4 mt-8">
//                         <button className="btn-primary">
//                             Get started free
//                         </button>
//                         <button className="btn-secondary">
//                             Book a demo
//                         </button>
//                     </div>
//                 </div>

//                 {/* RIGHT IMAGE + FLOATING CARDS */}
//                 <div className=" flex justify-center">
//                     {/* Fake API Chef Image */}
//                     <img
//                         src="https://picsum.photos/600/450?random=12"
//                         alt="Chef"
//                         className="rounded-4xl w-full object-cover shadow-lg"
//                         width={600}
//                         height={450}
//                     />
//                 </div>
//             </div>
//         </>

//     );
// }


"use client";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { heroSectionService, HeroSectionData } from "@/services/heroSection.service";

// Default hero section data
const defaultHeroData: HeroSectionData = {
    id: 0,
    title: "delivery management and customer experience",
    subtitle: "AI-powered",
    description: "Streamline deliveries, build loyalty, and grow your business with our AI-powered delivery management platform.",
    rating: 4.7,
    customers_count: "5,000",
    button1_text: "Get started free",
    button1_url: "#",
    button2_text: "Book a demo",
    button2_url: "#",
    image: "https://picsum.photos/600/450?random=12",
    status: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
};

export default function HeroSection() {
    const [heroData, setHeroData] = useState<HeroSectionData>(defaultHeroData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroSection = async () => {
            try {
                setLoading(true);
                const response = await heroSectionService.getAllHeroSections({ page: 1, limit: 1 });
                if (response.data && response.data.length > 0) {
                    // Get the first active hero section
                    const activeHero = response.data.find((hero: HeroSectionData) => hero.status) || response.data[0];
                    setHeroData(activeHero);
                } else {
                    // No data from API, use default data
                    setHeroData(defaultHeroData);
                }
            } catch (err) {
                console.error("Error fetching hero section:", err);
                // On error, use default data instead of showing error
                setHeroData(defaultHeroData);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroSection();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-20">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pri"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-none">
                        {heroData.subtitle ? (
                            <>
                                <span className="text-pri">{heroData.subtitle}</span>{" "}
                                {heroData.title}
                            </>
                        ) : (
                            heroData.title
                        )}
                    </h1>

                    {heroData.description && (
                        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-lg dark:text-gray-300">
                            {heroData.description}
                        </p>
                    )}

                    {/* Rating */}
                    {heroData.rating && (
                        <div className="flex items-center gap-2 mt-6 text-gray-700 font-medium">
                            <span className="text-lg dark:text-gray-300">{heroData.rating}</span>
                            ⭐
                            {heroData.customers_count && (
                                <span className="text-gray-500 dark:text-gray-400">
                                    {heroData.customers_count}+ customers
                                </span>
                            )}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {heroData.button1_text && (
                            <button 
                                className="btn-primary"
                                onClick={() => heroData.button1_url && window.open(heroData.button1_url, '_blank')}
                            >
                                {heroData.button1_text}
                            </button>
                        )}
                        {heroData.button2_text && (
                            <button 
                                className="btn-secondary"
                                onClick={() => heroData.button2_url && window.open(heroData.button2_url, '_blank')}
                            >
                                {heroData.button2_text}
                            </button>
                        )}
                    </div>
                </div>

                {/* RIGHT IMAGE + FLOATING CARDS */}
                <div className="flex justify-center">
                    {heroData.image ? (
                        <img
                            src={heroData.image.startsWith('http') 
                                ? heroData.image 
                                : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}${heroData.image}`
                            }
                            alt={heroData.title}
                            className="rounded-4xl w-full object-cover shadow-lg"
                            width={600}
                            height={450}
                        />
                    ) : (
                        <img
                            src="https://picsum.photos/600/450?random=12"
                            alt="Hero"
                            className="rounded-4xl w-full object-cover shadow-lg"
                            width={600}
                            height={450}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
