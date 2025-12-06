"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "../ui/heading";

export default function Templates() {
  const data = [
    {
      images: [
        "https://picsum.photos/seed/1/600/400",
        "https://picsum.photos/seed/11/600/400",
        "https://picsum.photos/seed/111/600/400",
      ],
      title: "Ap Nutreko – Gym Supplements Shopify Theme",
      category: "apolloTheme in Health & Beauty",
      price: "$48",
      sales: 58,
    },
    {
      images: [
        "https://picsum.photos/seed/2/600/400",
        "https://picsum.photos/seed/22/600/400",
      ],
      title: "Fashion Store – eCommerce Shopify Theme",
      category: "Nova Creative in Fashion",
      price: "$39",
      sales: 80,
    },
    {
      images: [
        "https://picsum.photos/seed/3/600/400",
        "https://picsum.photos/seed/33/600/400",
      ],
      title: "Modern Kids Store Shopify Theme",
      category: "UIForward in Kids",
      price: "$56",
      sales: 112,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <Heading
        title="Pick a Web Page"
        description="Powerful tools designed to help businesses manage their fleet, deliveries, drivers, and operations all in one smart platform."
      />

      <div className="container mx-auto px-6 relative">

        {/* ---------- Custom Navigation Buttons (Parent Slider) ---------- */}
        <button
          className="
            parent-prev absolute top-1/2 -left-4 z-20 
            w-8 h-8 flex items-center justify-center 
            bg-white shadow-md rounded-full 
            hover:bg-primary hover:text-white transition
          "
        >
          ‹
        </button>

        <button
          className="
            parent-next absolute top-1/2 -right-4 z-20 
            w-8 h-8 flex items-center justify-center 
            bg-white shadow-md rounded-full 
            hover:bg-primary hover:text-white transition
          "
        >
          ›
        </button>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          navigation={{
            nextEl: ".parent-next",
            prevEl: ".parent-prev",
          }}
          pagination={{ clickable: true }}
          style={
            {
              ["--swiper-pagination-color"]: "rgb(13, 148, 136)",      // Tailwind primary
              ["--swiper-pagination-bullet-inactive-color"]: "#d1d5db",
              ["--swiper-pagination-bullet-size"]: "8px",
              ["--swiper-pagination-bullet-inactive-opacity"]: "0.5",
            } as React.CSSProperties
          }
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  bg-white rounded-2xl border shadow-sm 
                  hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-500 overflow-hidden
                "
              >
                {/* ---------- Inner Image Slider ---------- */}
                <div className="relative h-56 group">

                  {/* Inner Slider Buttons */}
                  <button
                    className="
                      inner-prev absolute top-1/2 left-2 z-20
                      w-7 h-7 flex items-center justify-center
                      bg-white shadow rounded-full
                      hover:bg-primary hover:text-white transition
                    "
                  >
                    ‹
                  </button>

                  <button
                    className="
                      inner-next absolute top-1/2 right-2 z-20
                      w-7 h-7 flex items-center justify-center
                      bg-white shadow rounded-full
                      hover:bg-primary hover:text-white transition
                    "
                  >
                    ›
                  </button>

                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      nextEl: ".inner-next",
                      prevEl: ".inner-prev",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2600 }}
                    loop
                    className="h-full"
                  >
                    {item.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          className="
                            w-full h-56 object-cover 
                            transition-transform duration-700 
                            group-hover:scale-110
                          "
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* ---------- Content ---------- */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-1">
                    by{" "}
                    <span className="font-medium text-gray-700">{item.category}</span>
                  </p>

                  <p className="text-2xl font-bold text-primary">{item.price}</p>

                  <div className="flex items-center justify-between gap-3 mt-4">
                    <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition">
                      Button 1
                    </button>
                    <button className="px-4 py-2 text-sm border border-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition">
                      Button 2
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Use by {item.sales}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
