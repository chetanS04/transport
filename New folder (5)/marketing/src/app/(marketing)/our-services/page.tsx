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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOurServices = async () => {
            try {
                setLoading(true);
                const response = await ourServiceService.getAllOurServices({ page: 1, limit: 100 });
                if (response.data) {
                    setOurServiceData(response.data);
                }
            } catch (err) {
                console.error("Error fetching our services:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOurServices();
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
            <Heading
                title="What We"
                highlight="Provide"
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
                loop={true}
                className="container mx-auto pb-16"
                style={{ paddingBottom: "3rem" }}
            >

                {ourServiceData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card className="overflow-hidden rounded-xl shadow-lg relative h-100 flex flex-col justify-end">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${imageBaseUrl}${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute bottom-0 w-full text-center text-white px-4 pb-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm opacity-90">{item.description}</p>

                                <div className="flex justify-center gap-3 mt-3">
                                    <button className="px-4 py-2 text-sm bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                                        Button 1
                                    </button>
                                    <button className="px-4 py-2 text-sm border border-white rounded-md font-medium hover:bg-white hover:text-black transition">
                                        Button 2
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
