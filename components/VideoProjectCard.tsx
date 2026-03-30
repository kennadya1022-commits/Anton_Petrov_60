"use client";

import { useState, useRef, useEffect } from "react";
import { withBasePath } from "@/lib/withBasePath";

const VIDEO_SRC = "/videos/reel.mp4";

export default function VideoProjectCard() {
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!fullscreen) return;
    setError(null);
    const video = fullscreenVideoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {
      // Autoplay with sound may be blocked — user will tap Play
    });
  }, [fullscreen]);

  const closeFullscreen = () => {
    fullscreenVideoRef.current?.pause();
    videoRef.current?.pause();
    setFullscreen(false);
  };

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        fullscreenVideoRef.current?.pause();
        videoRef.current?.pause();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setFullscreen(true)}
        className="group flex flex-col overflow-hidden rounded-2xl glass text-left transition-shadow hover:shadow-[var(--glow)]"
      >
        <div className="relative w-full overflow-hidden rounded-t-2xl bg-[var(--accent-soft)]/20 aspect-[4/5]">
          <video
            ref={videoRef}
            src={withBasePath(VIDEO_SRC)}
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
          <h3 className="text-lg font-light text-[var(--foreground)]">Видео</h3>
        </div>
      </button>

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр видео"
          onClick={closeFullscreen}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={closeFullscreen}
            aria-label="Закрыть"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullscreenVideoRef}
              controls
              preload="auto"
              playsInline
              className="max-h-[90vh] w-auto max-w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onError={() => setError("Не удалось загрузить видео")}
              onLoadedData={() => setError(null)}
            >
              <source src={withBasePath(VIDEO_SRC)} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
            {error && (
              <p className="mt-2 text-center text-sm text-red-300">{error}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
