
import SmallHeroSection from "@/components/(sheared)/SmallHeroSection";
import BlogCard from "./blogCard";


export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "How Fleet Management is Changing in 2025",
      description:
        "New technology, AI, and automation are transforming the logistics industry faster than ever.",
      img: "https://picsum.photos/800/500?random=1",
      author: "John Doe",
      date: "Jan 15, 2025",
    },
    {
      id: 2,
      title: "Top 5 Ways to Optimize Delivery Routes",
      description:
        "Learn how businesses can save time, fuel, and cost by optimizing their delivery routes.",
      img: "https://picsum.photos/800/500?random=2",
      author: "Sarah Lee",
      date: "Jan 10, 2025",
    },
    {
      id: 3,
      title: "Why Tracking Software is Essential in 2025",
      description:
        "Tracking solutions help companies improve transparency and efficiency across operations.",
      img: "https://picsum.photos/800/500?random=3",
      author: "Michael Smith",
      date: "Jan 5, 2025",
    },
  ];

  return (
    <>
     

      <SmallHeroSection title="Our Blog" subtitle="Latest insights, updates, tips, and articles to help you grow your business." />

      {/* BLOG GRID */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} item={blog} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
