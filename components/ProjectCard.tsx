import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";

type ProjectCardProps = {
  title: string;
  year: string;
  src: string;
  hideLabel?: boolean;
};

export default function ProjectCard({ title, year, src, hideLabel }: ProjectCardProps) {
  const isChildProject = ["Andgie", "Gleb", "Nadya", "Xenia", "Саша"].includes(title);
  const displayYear = isChildProject ? "" : year;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl glass transition-shadow hover:shadow-[var(--glow)]">
      <div
        className="relative w-full overflow-hidden rounded-t-2xl bg-[var(--accent-soft)]/20 aspect-[4/5]"
      >
        <Image
          src={withBasePath(src)}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {!hideLabel && (
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-light text-[var(--foreground)]">{title}</h3>
          {displayYear && (
            <p className="mt-1 text-sm font-light text-[var(--accent)]">{displayYear}</p>
          )}
        </div>
      )}
    </div>
  );
}
