"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

type GalleryImage = {
  id: string;
  title: string;
  caption?: string;
  src: string;
  /** Если true — элемент отображается как video, а не как картинка */
  isVideo?: boolean;
  /** Путь к видеофайлу; если не задан, используется src */
  videoSrc?: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  showNumbers?: boolean;
};

function buildImageCandidates(src: string): string[] {
  const extMatch = src.match(/\.[^/.]+$/);
  if (!extMatch) return [src];

  const base = src.slice(0, -extMatch[0].length);
  const candidates = [
    src,
    `${base}.webp`,
    `${base}.jpg`,
    `${base}.jpeg`,
    `${base}.png`,
    `${base}.JPG`,
    `${base}.PNG`,
    `${base} (1).webp`,
  ];

  return Array.from(new Set(candidates));
}

function FallbackThumbImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const candidates = useMemo(() => buildImageCandidates(src), [src]);
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [src]);

  const currentSrc = candidates[Math.min(candidateIndex, candidates.length - 1)];

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className="object-cover transition-transform group-hover:scale-105"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      onError={() => {
        setCandidateIndex((prev) => Math.min(prev + 1, candidates.length - 1));
      }}
    />
  );
}

export default function GalleryGrid({ images, showNumbers = false }: GalleryGridProps) {
  const mediaItems = useMemo(
    () =>
      images.map((img) => ({
        id: img.id,
        type: img.isVideo ? ("video" as const) : ("image" as const),
        src: img.isVideo && img.videoSrc ? img.videoSrc : img.src,
        thumbSrc: img.src,
        title: img.title,
        caption: img.caption,
        isVideo: img.isVideo,
      })),
    [images]
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const canGoPrev = lightboxIndex !== null && lightboxIndex > 0;
  const canGoNext = lightboxIndex !== null && lightboxIndex < mediaItems.length - 1;

  const goPrev = () => {
    if (canGoPrev && lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };
  const goNext = () => {
    if (canGoNext && lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        if (lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
      }
      if (e.key === "ArrowRight") {
        if (lightboxIndex < mediaItems.length - 1) setLightboxIndex(lightboxIndex + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, mediaItems.length]);

  const openAtIndex = (index: number) => {
    if (index >= 0 && index < mediaItems.length) {
      setLightboxIndex(index);
    }
  };

  const lightboxItem = lightboxIndex !== null ? mediaItems[lightboxIndex] : null;
  const lightboxImageCandidates = useMemo(
    () =>
      lightboxItem && lightboxItem.type === "image"
        ? buildImageCandidates(lightboxItem.src)
        : [],
    [lightboxItem]
  );
  const [lightboxCandidateIndex, setLightboxCandidateIndex] = useState(0);

  useEffect(() => {
    setLightboxCandidateIndex(0);
  }, [lightboxItem?.id]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {images.map((img, index) =>
          img.isVideo ? (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-xl glass text-left"
              role="button"
              tabIndex={0}
              onClick={() => openAtIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openAtIndex(index);
                }
              }}
            >
              {showNumbers && (
                <span
                  className="absolute left-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-xs font-medium text-white/90 shadow-md"
                  aria-hidden
                >
                  {index + 1}
                </span>
              )}
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={img.videoSrc ?? img.src} type="video/mp4" />
              </video>
            </div>
          ) : (
            <button
              key={img.id}
              type="button"
              onClick={() => openAtIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-xl glass text-left"
            >
              {showNumbers && (
                <span
                  className="absolute left-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-xs font-medium text-white/90 shadow-md"
                  aria-hidden
                >
                  {index + 1}
                </span>
              )}
              <FallbackThumbImage src={img.src} alt={img.caption ?? img.title} />
            </button>
          )
        )}
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр медиа"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-black/55 p-2.5 text-white hover:bg-black/80 shadow-lg transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Закрыть"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {canGoPrev && (
            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-3 md:p-3.5 text-white hover:bg-black/80 shadow-lg md:left-6 transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Предыдущее медиа"
            >
              <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canGoNext && (
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-3 md:p-3.5 text-white hover:bg-black/80 shadow-lg md:right-6 transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Следующее медиа"
            >
              <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <div
            className="relative max-h-[90vh] max-w-4xl px-2 sm:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === "video" ? (
              <video
                className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] memory-modal-enter"
                controls
                playsInline
                preload="metadata"
              >
                <source src={lightboxItem.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={
                  lightboxImageCandidates[
                    Math.min(lightboxCandidateIndex, Math.max(lightboxImageCandidates.length - 1, 0))
                  ] ?? lightboxItem.src
                }
                alt={lightboxItem.caption ?? lightboxItem.title}
                width={800}
                height={600}
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.65)] memory-modal-enter"
                onError={() => {
                  setLightboxCandidateIndex((prev) =>
                    Math.min(prev + 1, Math.max(lightboxImageCandidates.length - 1, 0))
                  );
                }}
              />
            )}
            <p className="mt-4 text-center text-sm sm:text-base font-light text-white/80">
              {showNumbers && (
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-medium">
                  {(lightboxIndex ?? 0) + 1}
                </span>
              )}
              {lightboxItem.title}
              {lightboxItem.caption && ` — ${lightboxItem.caption}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
