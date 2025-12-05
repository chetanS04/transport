interface SectionHeadingProps {
  title: string;
  highlight: string;
  description: string;
  align?: "center" | "left" | "right";
}

export default function Heading({
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        max-w-3xl mx-auto mb-12
        text-${align}
      `}
    >
      <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3 dark:text-black">
        {title}{" "}
        <span className="text-primary dark:text-primary-dark">
          {highlight}
        </span>
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
