"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type ProductItem = {
  images: string[];
  title: string;
  description: string;
  
  numberByUse: string;
};

export default function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div className="group ">
      <style jsx>{`
        .product-card-swiper .swiper-button-next,
        .product-card-swiper .swiper-button-prev {
          background: rgba(255, 255, 255, 0.9);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .product-card-swiper:hover .swiper-button-next,
        .product-card-swiper:hover .swiper-button-prev {
          opacity: 1;
        }
        
        .product-card-swiper .swiper-button-next:after,
        .product-card-swiper .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
          color: var(--primary);
        }
        
        .product-card-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .product-card-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30 backdrop-blur-sm">
        {/* Image Slider with Gradient Overlay */}
        <div className="relative w-full h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-50">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full z-10"></div>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation
            pagination={{ clickable: true }}
            loop={item.images.length > 1}
            className="h-full product-card-swiper"
          >
            {item.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt={`${item.title} - ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Badge */}
          <div className="absolute top-4 left-4 z-20 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
            Featured
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">

            {/* Heading */}
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {item.title}
            </h3>

            {/* Author + Category */}
            <p className="text-sm text-gray-500">
             {item.description}
            </p>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-900 mt-2">
              $Free
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 mt-2">

              {/* Cart Button */}
              <button className="p-2 border rounded-md hover:bg-gray-100 transition cursor-pointer">
                🛒
              </button>

              {/* Live Preview */}
              <button className="px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary cursor-pointer transition">
                Live Preview
              </button>
            </div>

            {/* Sales Count */}
            <p className="text-sm text-gray-500 mt-1">Use by {item.numberByUse}</p>
          </div>

        </div>

        {/* Bottom decorative element */}
        <div className="h-1 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-500"></div>
      </div>
    </div>
  );
}
