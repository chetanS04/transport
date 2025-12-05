
import Heading from "../ui/heading";
import ProductCard from "./ProductCard";

export default function CardGrid() {
  const products = [
    {
      description: "Archevia - Engineering & Industrial",
      title: "Tokotema",

      images: [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=2",
        "https://picsum.photos/600/400?random=3",
      ],
      numberByUse: "10"
    },
    {
      description: "Construction Pro Theme",
      title: "BuildTech",

      images: [
        "https://picsum.photos/600/400?random=4",
        "https://picsum.photos/600/400?random=5",
      ],
      numberByUse: "20"
    },
    {
      description: "Industrial UI Kit",
      title: "DesignHub",

      images: [
        "https://picsum.photos/600/400?random=6",
        "https://picsum.photos/600/400?random=7",
      ],
      numberByUse: "15"
    },
  ];

  return (

    <div className="w-full mx-auto px-6 py-10 dark:bg-gray-200">

      <Heading
        title="Pick a Web22"
        highlight="Page"
        description="Powerful tools designed to help businesses manage their fleet, deliveries, drivers, and operations all in one smart platform."
        align="center"
      />
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
