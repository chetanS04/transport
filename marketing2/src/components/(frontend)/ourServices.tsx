"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "../ui/card";


export default function OurServices() {
  const data = Array.from({ length: 9 }).map((_, index) => ({
    id: index,
    title: `Heading ${index + 1}`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: `https://picsum.photos/600/400?random=${index + 1}`,
  }));

  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
          What We <span className="text-green-700">Provide</span>
        </h2>

        <p className="text-lg text-gray-600">
          Powerful tools designed to help businesses manage their fleet, deliveries,
          drivers, and operations all in one smart platform.
        </p>
      </div>
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
        pagination={{ clickable: true }}
        className="container mx-auto pb-10"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="overflow-hidden rounded-xl shadow-lg relative h-100 flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 w-full text-center text-white px-4 pb-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>

                <div className="flex justify-center gap-3 mt-3">
                  <button className="px-4 py-2 text-sm bg-white text-black rounded-md font-medium hover:bg-gray-200 cursor-pointer transition">
                    Button 1
                  </button>
                  <button className="px-4 py-2 text-sm border border-white rounded-md font-medium hover:bg-white hover:text-black cursor-pointer transition">
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
