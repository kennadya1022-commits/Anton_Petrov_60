type TimelineBlockProps = {
  year: string;
  label: string;
  description?: string;
  isLast?: boolean;
};

export default function TimelineBlock({
  year,
  label,
  description,
  isLast = false,
}: TimelineBlockProps) {
  return (
    <div className="relative flex gap-6 pb-8 md:gap-8">
      {!isLast && (
        <div
          className="absolute left-[11px] top-8 bottom-0 w-px bg-[var(--border)] md:left-[15px]"
          aria-hidden
        />
      )}
      <div
        className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur md:h-8 md:w-8"
        aria-hidden
      />
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm font-light text-[var(--accent)]">{year}</p>
        <h3 className="mt-1 text-lg font-light text-[var(--foreground)]">
          {label}
        </h3>
        {description && (
          <p className="mt-2 font-light text-[var(--foreground)]/80">{description}</p>
        )}
      </div>
    </div>
  );
}
