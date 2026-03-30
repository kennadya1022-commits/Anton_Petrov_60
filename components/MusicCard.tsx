import Image from "next/image";

type MusicCardProps = {
  title: string;
  src: string;
};

export default function MusicCard({ title, src }: MusicCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl glass transition-shadow hover:shadow-[var(--glow)]">
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--accent-soft)]/20">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <p className="font-light text-[var(--foreground)]/90">{title}</p>
      </div>
    </article>
  );
}
