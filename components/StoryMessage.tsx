type StoryMessageProps = {
  author: string;
  role?: string;
  text: string;
};

export default function StoryMessage({ author, role, text }: StoryMessageProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <span className="font-light text-[var(--foreground)]">{author}</span>
        {role && (
          <span className="text-sm font-light text-[var(--foreground)]/60">{role}</span>
        )}
      </div>
      <div className="rounded-2xl rounded-tl-sm glass px-4 py-3">
        <p className="whitespace-pre-line font-light leading-relaxed text-[var(--foreground)]/90">{text}</p>
      </div>
    </div>
  );
}
