export default function Footer() {
  return (
    <footer className="glass border-t border-[var(--border)]">
      <div className="mx-auto max-w-2xl px-4 py-14 sm:py-16 sm:px-6 text-center">
        <p className="text-lg sm:text-xl font-light text-[var(--foreground)] tracking-wide">
          С любовью создано дочкой Надей.
        </p>
        <p className="mt-5 text-base sm:text-[0.9375rem] font-light text-[var(--foreground)]/80 leading-relaxed">
          А за вклад и ценные воспоминания — спасибо семье, которая помогла собрать эту историю.
        </p>
        <p className="mt-6 text-sm sm:text-base font-light text-[var(--accent)] tracking-[0.12em]">
          Питер Пен · 60 лет
        </p>
      </div>
    </footer>
  );
}
