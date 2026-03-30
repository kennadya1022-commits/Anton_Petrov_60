"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Главная" },
  { id: "biography", label: "About his Life" },
  { id: "projects", label: "Project" },
  { id: "music", label: "Music" },
  { id: "family", label: "Family" },
  { id: "lessons", label: "60 Lessons" },
  { id: "gallery", label: "Memories" },
  { id: "happy-birthday", label: "Happy Birthday" },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState<string>("home");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed left-0 top-1/2 z-50 -translate-y-1/2"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        className={`flex flex-col gap-2 rounded-r-2xl border-y border-r border-[var(--glass-border)] bg-[var(--glass)] py-4 pl-3 pr-4 shadow-[var(--shadow)] backdrop-blur-xl transition-all duration-200 ${
          expanded ? "w-[180px]" : "w-[52px]"
        }`}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-3 rounded-lg py-2 transition-colors ${
              activeId === id
                ? "text-[var(--foreground)]"
                : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]/90"
            }`}
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                activeId === id ? "bg-[var(--accent)]" : "bg-[var(--foreground)]/30"
              }`}
              aria-hidden
            />
            {expanded && (
              <span className="whitespace-nowrap text-sm font-light">{label}</span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
