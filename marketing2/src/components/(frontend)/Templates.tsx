"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
              <div
                className="
        bg-white rounded-2xl border shadow-sm 
        hover:shadow-2xl hover:-translate-y-2
        transition-all duration-500 overflow-hidden
      "
              >
                {/* Top Section: Image Swiper */}
                <div className="relative h-56 group">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
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

                  {/* Subtle overlay on hover */}
                  <div className="
          absolute inset-0 bg-linear-to-t 
          from-black/20 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        "></div>
                </div>

                {/* Bottom Content */}
                <div className="p-5 space-y-3">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Category */}
                  <p className="text-sm text-gray-500 line-clamp-1">
                    by <span className="font-medium text-gray-700">{item.category}</span>
                  </p>

                  {/* Price */}
                  <p className="text-2xl font-bold text-primary">{item.price}</p>

                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-3 mt-4">
                    <button className="
          btn-primary w-full
          cursor-pointer transition          
          ">
                      button1
                    </button>

                    <button className="
          btn-secondary w-full
          cursor-pointer transition
          ">
                      button2
                    </button>
                  </div>

                  {/* Sales Count */}
                  <p className="text-sm text-gray-500 mt-1">Use by {item.sales} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
