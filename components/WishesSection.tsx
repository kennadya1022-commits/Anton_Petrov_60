import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import type { WishTextItem, WishVideoItem } from "@/data/wishes";

type WishesSectionProps = {
  textItems: WishTextItem[];
  videoItems: WishVideoItem[];
};

export default function WishesSection({ textItems, videoItems }: WishesSectionProps) {
  return (
    <section id="congratulations" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] md:text-4xl">
            Поздравления
          </h2>
          <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-[var(--foreground)]/75 sm:text-lg">
            Теплые слова и видеопоздравления
          </p>
        </header>

        <div className="space-y-10 md:space-y-12">
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {textItems.map((item) => (
                <article
                  key={item.id}
                  className="glass flex h-full flex-col rounded-2xl p-5 sm:p-6"
                >
                  <div className="mb-4">
                    <p className="text-lg font-light text-[var(--foreground)]">{item.name}</p>
                  </div>
                  <p className="whitespace-pre-line text-sm font-light leading-7 text-[var(--foreground)]/85 sm:text-base">
                    {item.message}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videoItems.map((item) => (
                <article key={item.id} className="glass overflow-hidden rounded-2xl">
                  <div className="relative aspect-video w-full overflow-hidden bg-[var(--accent-soft)]/20">
                    {item.videoUrl ? (
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src={withBasePath(item.videoUrl)} type="video/mp4" />
                      </video>
                    ) : (
                      <>
                        <Image
                          src={withBasePath(item.thumbnail)}
                          alt={item.title}
                          fill
                          className="object-cover opacity-65"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-white/70">
                            <svg className="ml-0.5 h-6 w-6 text-[var(--foreground)]/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M8 5v14l11-7L8 5z" />
                            </svg>
                          </span>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="space-y-1 p-5">
                    <p className="text-base font-light text-[var(--foreground)]">{item.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
