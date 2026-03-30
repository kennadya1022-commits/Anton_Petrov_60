type CongratulationsCardProps = {
  author: string;
  text: string;
};

export default function CongratulationsCard({ author, text }: CongratulationsCardProps) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm transition-shadow hover:shadow-md">
      <p className="font-medium text-[var(--accent-deep)]">{author}</p>
      <p className="mt-2 leading-relaxed text-[var(--foreground)]/90">{text}</p>
    </article>
  );
}
