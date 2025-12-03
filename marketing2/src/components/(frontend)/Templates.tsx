"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard1 from "./ProductCard1";

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
      description: "Premium gym supplements theme with modern design",
      numberByUse: 58,
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
      description: "Elegant fashion store theme for online retailers",
      numberByUse: 80,
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
      description: "Colorful and playful theme for kids products",
      numberByUse: 112,
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
          Pick a Web <span className="text-green-700">Page</span>
        </h2>

        <p className="text-lg text-gray-600">
          Powerful tools designed to help businesses manage their fleet, deliveries,
          drivers, and operations all in one smart platform.
        </p>
      </div>
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard1 item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
