type LessonCardProps = {
  id: number;
  text: string;
};

export default function LessonCard({ id, text }: LessonCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl glass px-4 py-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-sm font-light text-[var(--accent)]">
        {id}
      </span>
      <p className="pt-0.5 font-light text-[var(--foreground)]/90">{text}</p>
    </div>
  );
}
