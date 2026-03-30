type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`mb-10 md:mb-14 ${className}`}>
      <h1 className="text-3xl font-light tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg font-light text-[var(--foreground)]/80">
          {subtitle}
        </p>
      )}
    </header>
  );
}
