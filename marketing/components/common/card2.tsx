"use client";

import { Card } from "../ui/card";


export default function ThreeColumnSection() {
  const data = [
    {
      img: "https://picsum.photos/600/400?random=1",
      title: "Card Title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://picsum.photos/600/400?random=2",
      title: "Card Title 2",
      desc: "Beautiful clean background card design section.",
    },
    {
      img: "https://picsum.photos/600/400?random=3",
      title: "Card Title 3",
      desc: "Modern UI with gradient overlay and centered footer.",
    },
    {
      img: "https://picsum.photos/600/400?random=4",
      title: "Card Title 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://picsum.photos/600/400?random=5",
      title: "Card Title 5",
      desc: "Beautiful clean background card design section.",
    },
    {
      img: "https://picsum.photos/600/400?random=6",
      title: "Card Title 6",
      desc: "Modern UI with gradient overlay and centered footer.",
    },
  ];

  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
          What We <span className="text-green-700 dark:text-green-500">Provide</span>          </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our premium features and modern UI components.
        </p>
      </div>

      {/* 3 Column Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl shadow-lg relative h-80 flex flex-col justify-end group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute bottom-0 w-full text-center text-white px-4 pb-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>

              <div className="flex justify-center gap-3 mt-4">
                <button className="px-4 py-2 text-sm bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                  Button 1
                </button>
                <button className="px-4 py-2 text-sm border border-white rounded-md font-medium hover:bg-white hover:text-black transition">
                  Button 2
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
