"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Card } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { OurServiceData } from "@/common/interface";
import { ourServiceService } from "@/services/ourServices.service";

const imageBaseUrl = process.env.NEXT_PUBLIC_UPLOAD_BASE || "http://localhost:8080";

export default function OurServices() {
    const [ourServiceData, setOurServiceData] = useState<OurServiceData[]>([]);

    useEffect(() => {
        ourServiceService
            .getAllOurServices({ page: 1, limit: 100 })
            .then((response) => {
                if (response.data) setOurServiceData(response.data);
            })
            .catch((err) => {
                console.error("Error fetching our services:", err);
            });
    }, []);

    return (
        <>
            <Heading
                title="What We Provide"
                description="Powerful tools designed to help businesses manage their fleet, deliveries, drivers, and operations all in one smart platform."
            />

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                style={
                    {
                        ["--swiper-pagination-color"]: "rgb(13, 148, 136)",      // Tailwind primary
                        ["--swiper-pagination-bullet-inactive-color"]: "#d1d5db",
                        ["--swiper-pagination-bullet-size"]: "12px",
                        ["--swiper-pagination-bullet-inactive-opacity"]: "0.7",
                        paddingBottom: "3rem",
                    } as React.CSSProperties
                }
                loop={true}
                className="container mx-auto pb-16"
            >

                {ourServiceData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card
                            className="
                            group relative h-80 overflow-hidden rounded-2xl shadow-xl 
                            bg-gray-900/10 backdrop-blur-xl border border-white/10
                            transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                            "
                        >

                            {/* Background Image */}
                            <div
                                className="
                                absolute inset-0 bg-cover bg-center 
                                transition-transform duration-700 
                                group-hover:scale-110
                            "
                                style={{ backgroundImage: `url(${imageBaseUrl}${item.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 w-full px-5 pb-6 text-white">
                                <h3 className="text-xl text-center font-semibold drop-shadow-md">
                                    {item.title || "No Title"}
                                </h3>

                                <p className="text-sm mt-1 text-center opacity-90 line-clamp-2">
                                    {item.description || "No Description"}
                                </p>

                                {/* Buttons */}
                                <div className="flex justify-center gap-3 mt-4">

                                    {/* Primary Button */}
                                    <button
                                        onClick={() =>
                                            window.open(
                                                item?.button1_url || "#",
                                                item?.button1_url && item?.button1_url !== "#" ? "_blank" : "_self"
                                            )
                                        }
                                        className="
                                                px-4 py-2 text-sm font-medium rounded-lg 
                                                bg-white/90 text-gray-900 
                                                hover:bg-white transition
                                                shadow-md backdrop-blur-lg
                                            "
                                    >
                                        {item.button1_text || "Button 1"}
                                    </button>

                                    {/* Secondary Button */}
                                    <button
                                        onClick={() =>
                                            window.open(
                                                item?.button2_url || "#",
                                                item?.button2_url && item?.button2_url !== "#" ? "_blank" : "_self"
                                            )
                                        }
                                        className="
                                            px-4 py-2 text-sm font-medium rounded-lg
                                            border border-white/70 text-white 
                                            hover:bg-white hover:text-black 
                                            transition shadow-md
                                        "
                                    >
                                        {item.button2_text || "Button 2"}
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    );
}
