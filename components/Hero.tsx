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
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-14 md:grid-cols-2 md:items-start md:py-24">
      <div className="order-1 md:order-1">
        {imageSrc ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl glass md:max-w-md">
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
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl glass text-sm font-light text-[var(--foreground)]/40 md:max-w-md">
            Фото
          </div>
        )}
      </div>
      <div className="order-2 pt-2 text-center md:order-2 md:pt-16 md:text-left">
        <h2 className="mb-2 text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl md:mb-3 md:text-5xl">
          {title}
        </h2>
        {tagline && (
          <p className="mb-3 text-sm font-extralight italic tracking-wide text-[var(--foreground)] opacity-70 sm:text-lg md:mb-4">
            {tagline}
          </p>
        )}
        <p className="mb-4 mt-5 text-base font-light leading-[1.8] text-[#555] sm:text-xl md:mb-5 md:mt-7">
          {subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-[420px] text-base font-light leading-[1.7] text-[var(--accent)] sm:text-lg md:mx-0 md:mt-5 md:leading-[1.5]">
          {mainLine}
        </p>
      </div>
    </div>
  );
}
