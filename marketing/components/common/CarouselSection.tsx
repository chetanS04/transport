"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import ProductCard1 from "./ProductCard1";

export default function CarouselSection() {
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Best Selling Themes
        </h2>

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
