"use client";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { heroSectionService, } from "@/services/heroSection.service";
import { HeroSectionData } from "@/common/interface";

export default function HeroSection() {
    const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroSection = async () => {
            try {
                setLoading(true);
                const response = await heroSectionService.getAllHeroSections({ page: 1, limit: 1 });
                if (response.data && response.data.length > 0) {
                    const activeHero = response.data.find((hero: HeroSectionData) => hero.status) || response.data[0];
                    setHeroData(activeHero);
                }
            } catch (err) {
                console.error("Error fetching hero section:", err);
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
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-none">
                        {heroData?.title || "AI-powered delivery management and customer experience"}
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-lg dark:text-gray-300">
                        {heroData?.description || "Streamline deliveries, build loyalty, and grow your business with our AI-powered delivery management platform."}
                    </p>

                    <div className="flex items-center gap-2 mt-6 text-gray-700 font-medium">
                        <span className="text-lg dark:text-gray-300">{heroData?.rating || 4.1}</span>
                        ⭐
                        <span className="text-gray-500 dark:text-gray-400">
                            {heroData?.customers_count || "4,000"}+ customers
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <button
                            className="btn-primary"
                            onClick={() => window.open(heroData?.button1_url || "#", heroData?.button1_url && heroData.button1_url !== "#" ? "_blank" : "_self")}
                        >
                            {heroData?.button1_text || "Get Started Free"}
                        </button>

                        <button
                            className="btn-secondary"
                            onClick={() => window.open(heroData?.button2_url || "#", heroData?.button2_url && heroData.button2_url !== "#" ? "_blank" : "_self")}
                        >
                            {heroData?.button2_text || "Book a Demo"}
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={
                            heroData?.image
                                ? (heroData.image.startsWith('http')
                                    ? heroData.image
                                    : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}${heroData.image}`)
                                : "https://picsum.photos/600/450?random=12"
                        }
                        alt={heroData?.title || "Hero Section"}
                        className="rounded-4xl w-full object-cover shadow-lg"
                        width={600}
                        height={450}
                    />
                </div>
            </div>
        </>
    );
}
