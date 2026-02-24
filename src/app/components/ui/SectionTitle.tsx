type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}