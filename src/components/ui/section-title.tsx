interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 ${className}`}>
      {title}
    </h2>
  );
}