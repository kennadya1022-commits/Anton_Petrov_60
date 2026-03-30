import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import PersonLessonCard from "@/components/PersonLessonCard";
import MusicCard from "@/components/MusicCard";
import WishesSection from "@/components/WishesSection";
import { biographyNarrative } from "@/data/biography";
import { getProjectMedia } from "@/data/projectMedia";
import { galleryImages } from "@/data/gallery";
import { personLessons } from "@/data/lessons";
import musicFromImages from "@/data/musicFromImages.json";
import { familyImages } from "@/data/familyImages";
import { wishesText, wishesVideo } from "@/data/wishes";

export default function Home() {
  return (
    <>
      {/* 1. Home */}
      <section id="home" className="flex min-h-[72vh] flex-col items-center justify-center bg-gradient-to-b from-white via-[#f7fbff] to-white px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="hero-fade-1 text-sm font-light tracking-wide text-[var(--foreground)]/70 sm:text-base">
            Anton Petrov
          </p>
          <h1 className="hero-fade-2 mt-4 text-3xl font-extralight tracking-[0.04em] text-[var(--foreground)] sm:mt-5 sm:text-[2.9rem] md:text-[3.6rem]">
            The Story of Our Dad
          </h1>
          <p className="hero-fade-3 mt-2 text-xs font-light text-[var(--foreground)]/55 sm:mt-3 sm:text-base">
            (son · husband · brother · friend)
          </p>
          <p className="hero-fade-4 mt-8 text-lg font-light tracking-wide text-[var(--accent)] sm:text-xl">
            60 Years · 1 Remarkable Life
          </p>
          <p className="hero-fade-5 mt-4 text-xl font-light tracking-wide text-[var(--foreground)]/80 sm:text-2xl">
            В честь 60-летия
          </p>
          <a
            href="#biography"
            className="hero-fade-6 btn-glass mt-8 inline-flex w-full justify-center rounded-[40px] border-2 border-[var(--accent)] bg-[var(--accent-soft)]/40 px-6 py-4 text-lg font-medium shadow-[var(--glow)] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[var(--accent-soft)]/60 sm:mt-10 sm:w-auto sm:rounded-[48px] sm:px-20 sm:py-7 sm:text-2xl"
          >
            Начать путешествие
          </a>
        </div>
      </section>

      {/* 2. Biography */}
      <section id="biography" className="scroll-mt-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <Hero
            title="Антон Петров"
            tagline="Питер Пен"
            subtitle="Октябренок · Пионер · Комсомолец · Студент · Морской офицер · Авантюрист · Предпрениматель · Отец · Бизнесмен"
            mainLine="Жизнь, построенная на идеях, рисках и заботе о других."
            imageSrc="/images/about-hero.png"
            imageAlt="Антон Петров в детстве"
          />
          <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 sm:pb-12">
            <div className="glass rounded-2xl p-5 sm:p-10">
              <p className="whitespace-pre-line text-base font-light leading-8 text-[var(--foreground)]/90 sm:text-lg sm:leading-relaxed">
                {biographyNarrative}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects */}
      <section id="projects" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeader
            title="Project"
            subtitle="Проекты его жизни. Над которыми он работал сам, со своими командами или семьей."
          />
          <ProjectsGrid items={getProjectMedia()} />
        </div>
      </section>

      {/* 4. Music */}
      <section id="music" className="scroll-mt-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeader
            title="Music"
            subtitle="Музыкальный вкус часто может сказать о человеке многое, и его музыкальный вкус говорит сам за себя."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(musicFromImages as { id: string; title: string; src: string }[]).map((item) => (
              <MusicCard key={item.id} title={item.title} src={item.src} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Family */}
      <section id="family" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeader
            title="Family"
            subtitle="Один из важных проектов в его жизни — семья."
          />
          <p className="mb-8 max-w-4xl text-base font-light leading-8 text-[var(--accent)] sm:mb-10 sm:text-lg">
            Он воспитал пятерых детей.
            <br />
            Внимательный и заботливый, всегда придет на помощь, знает всё на свете и научит словом или своим примером.
            <br />
            Он замечательный отец, сын, муж, брат и друг для всех.
          </p>
          {familyImages.length > 0 && <GalleryGrid images={familyImages} showNumbers />}
        </div>
      </section>

      {/* 6. 60 Lessons */}
      <section id="lessons" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--accent-soft)]/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeader
            title="60 Lessons from Dad"
            subtitle="Вещи, которым он научил нас — иногда словами, а иногда просто своим примером."
          />
          <div className="mb-12 text-center">
            <p className="text-xl font-light tracking-wide text-[var(--accent)] sm:text-2xl">
              60 years · 60 ideas · 1 remarkable life
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personLessons.map((person) => (
              <PersonLessonCard
                key={person.id}
                name={person.name}
                relation={person.relation}
                lessons={person.lessons}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Photo (Gallery) */}
      <section id="gallery" className="scroll-mt-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeader title="Memories" subtitle="Моменты запечатленные на камеру его увлекательной и невероятно насыщенной жизни" />
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* 8. Happy Birthday */}
      <WishesSection textItems={wishesText} videoItems={wishesVideo} />

      {/* 9. Happy Birthday */}
      <section id="happy-birthday" className="scroll-mt-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="text-center text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
            Happy Birthday
          </h2>
          <div className="mt-10 space-y-6 text-center text-base font-light leading-8 text-[var(--foreground)]/90 sm:mt-14 sm:text-lg sm:leading-relaxed">
            <p>Папа, мы все тебя очень любим и ценим!</p>
            <p>
              Мы очень благодарны тебе за всё, что ты для нас делаешь.<br />
              Ты невероятный сын, отец, муж, брат и просто замечательный человек.
            </p>
            <p>
              Желаем тебе здоровья, продуктивности, энергии и светлого настроения.<br />
              Пусть новые креативные идеи никогда не заканчиваются,<br />
              интерес к освоению неизведанного только растёт,<br />
              а работа приносит удовольствие.
            </p>
            <p>
              Радуйся каждому дню и находи счастье в мелочах —<br />
              ведь именно в них оно и живёт.
            </p>
          </div>
          <blockquote className="relative mx-auto mt-12 max-w-lg overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--accent-soft)]/12 px-5 py-10 shadow-[var(--shadow)] backdrop-blur-[8px] sm:mt-16 sm:px-12 sm:py-14">
            <div className="flex flex-col items-center gap-6">
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
                <span aria-hidden className="quote-serif text-2xl sm:text-3xl font-normal text-[var(--accent)]/80 leading-none select-none">
                  &ldquo;
                </span>
                <span className="quote-serif text-3xl sm:text-4xl md:text-5xl font-light italic tracking-[0.12em] text-[var(--accent)]">
                  Carpe Diem
                </span>
                <span aria-hidden className="quote-serif text-2xl sm:text-3xl font-normal text-[var(--accent)]/80 leading-none select-none">
                  &rdquo;
                </span>
              </p>
              <cite className="mt-2 self-end text-right text-sm sm:text-base font-medium tracking-wide text-[var(--foreground)]/85 not-italic">
                John Keating (Robin Williams)
              </cite>
            </div>
          </blockquote>
        </div>
      </section>
    </>
  );
}
