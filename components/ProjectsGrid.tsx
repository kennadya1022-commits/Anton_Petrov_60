"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type { ProjectMediaItem, ProjectImageItem, ProjectVideoItem } from "@/data/projectMedia";
import { withBasePath } from "@/lib/withBasePath";

type ProjectsGridProps = {
  items: ProjectMediaItem[];
};

function ImageCard({
  item,
  onClick,
}: {
  item: ProjectImageItem;
  onClick: () => void;
}) {
  const isChildProject = ["Andgie", "Gleb", "Nadya", "Xenia", "Саша"].includes(item.title);
  const displayYear = isChildProject ? "" : item.year;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col overflow-hidden rounded-2xl glass text-left transition-shadow hover:shadow-[var(--glow)]"
    >
      <div className="relative w-full overflow-hidden rounded-t-2xl bg-[var(--accent-soft)]/20 aspect-[4/5]">
        <Image
          src={withBasePath(item.src)}
          alt={item.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {!item.hideLabel && (
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-light text-[var(--foreground)]">{item.title}</h3>
          {displayYear && (
            <p className="mt-1 text-sm font-light text-[var(--accent)]">{displayYear}</p>
          )}
        </div>
      )}
    </button>
  );
}

function VideoCard({
  item,
  onClick,
}: {
  item: ProjectVideoItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full flex-col overflow-hidden rounded-2xl glass text-left transition-shadow hover:shadow-[var(--glow)]"
    >
      <div className="relative w-full overflow-hidden rounded-t-2xl bg-[var(--accent-soft)]/20 aspect-[4/5]">
        <video
          src={withBasePath(item.src)}
          className="h-full w-full object-cover"
          preload="metadata"
          muted
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[var(--foreground)] shadow-lg">
            <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-lg font-light text-[var(--foreground)]">{item.title}</h3>
      </div>
    </button>
  );
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  const [lightboxImage, setLightboxImage] = useState<ProjectImageItem | null>(null);
  const [openVideo, setOpenVideo] = useState<ProjectVideoItem | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!openVideo) return;
    const v = videoRef.current;
    if (v) {
      v.load();
      v.play().catch(() => {});
    }
  }, [openVideo]);

  const closeVideo = () => {
    videoRef.current?.pause();
    setOpenVideo(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {items.map((item) =>
          item.type === "image" ? (
            <ImageCard
              key={item.id}
              item={item}
              onClick={() => setLightboxImage(item)}
            />
          ) : (
            <VideoCard
              key={item.id}
              item={item}
              onClick={() => setOpenVideo(item)}
            />
          )
        )}
      </div>

      {/* Image lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
            aria-label="Закрыть"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={withBasePath(lightboxImage.src)}
              alt={lightboxImage.title}
              width={800}
              height={600}
              className="max-h-[90vh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

      {/* Video modal — single player; opening another video unmounts this so the previous pauses */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр видео"
          onClick={closeVideo}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={closeVideo}
            aria-label="Закрыть"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={openVideo.id}
              ref={videoRef}
              controls
              preload="auto"
              playsInline
              className="aspect-video max-h-[90vh] w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={withBasePath(openVideo.src)} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
