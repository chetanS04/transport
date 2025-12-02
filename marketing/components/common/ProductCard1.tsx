"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProductItem = {
  images: string[];
  title: string;
  category: string;
  price: string;
  sales: number;
};

export default function ProductCard1({ item }: { item: ProductItem }) {
  return (
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
            w-full py-2 border border-primary text-primary 
            rounded-md font-medium 
            hover:bg-primary 
            transition
          ">
            button1
          </button>

          <button className="
            w-full py-2 border border-primary text-primary 
            rounded-md font-medium 
            hover:bg-primary 
            transition
          ">
            button2
          </button>
        </div>

        {/* Sales Count */}
        <p className="text-sm text-gray-500 mt-1">{item.sales} Sales</p>
      </div>
    </div>
  );
}
