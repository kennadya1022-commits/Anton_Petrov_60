import Image from "next/image";

type HeroProps = {
  title: string;
  tagline?: string;
  subtitle: string;
  mainLine: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  title,
  tagline,
  subtitle,
  mainLine,
  imageSrc,
  imageAlt = "Portrait",
}: HeroProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-start md:py-24">
      <div className="order-2 md:order-1">
        {imageSrc ? (
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl glass">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="aspect-[4/5] max-w-md rounded-2xl glass flex items-center justify-center text-[var(--foreground)]/40 text-sm font-light">
            Фото
          </div>
        )}
      </div>
      <div className="order-1 md:order-2 pt-6 md:pt-0 md:pt-16">
        <h2 className="mb-3 text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {tagline && (
          <p className="mb-4 text-base font-extralight italic tracking-wide text-[var(--foreground)] opacity-70 sm:text-lg">
            {tagline}
          </p>
        )}
        <p className="mb-5 mt-7 text-lg font-light leading-[1.6] text-[#555] sm:text-xl">
          {subtitle}
        </p>
        <p className="mt-5 max-w-[420px] text-lg font-light leading-[1.5] text-[var(--accent)]">
          {mainLine}
        </p>
      </div>
    </div>
  );
}
