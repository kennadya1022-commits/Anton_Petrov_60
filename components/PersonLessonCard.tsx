type PersonLessonCardProps = {
  name: string;
  relation: string;
  lessons: string[];
};

export default function PersonLessonCard({
  name,
  relation,
  lessons,
}: PersonLessonCardProps) {
  return (
    <div
      className="rounded-[20px] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-[6px]"
      style={{
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(150,200,255,0.35)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-light tracking-tight text-[var(--foreground)] sm:text-2xl">
          {name}
        </h3>
        <p className="mt-1 text-sm font-light text-[var(--foreground)]/60">
          ({relation})
        </p>
      </div>
      <ul className="flex flex-col gap-4 sm:gap-5">
        {lessons.map((lesson, i) => (
          <li
            key={i}
            className="flex items-baseline gap-4 font-light text-[var(--foreground)]/90 text-base sm:text-lg leading-relaxed"
          >
            <span
              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgba(125,180,255,0.6)]"
              aria-hidden
            />
            <span>{lesson}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
