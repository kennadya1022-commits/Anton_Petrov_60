"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/biography", label: "About his Life" },
  { href: "/timeline", label: "Таймлайн" },
  { href: "/family", label: "Family" },
  { href: "/projects", label: "Project" },
  { href: "/gallery", label: "Галерея" },
  { href: "/stories", label: "Memory" },
  { href: "/congratulations", label: "Happy Birthday" },
  { href: "/lessons", label: "60 Lessons from Dad" },
  { href: "/music", label: "Music" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-light tracking-tight text-[var(--foreground)] hover:text-[var(--accent)]"
        >
          Антон Петров Борисовчи
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.slice(1, 7).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded px-2 py-1.5 text-sm font-light transition-colors ${
                  pathname === item.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)]/75 hover:text-[var(--accent)] hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="rounded p-2 text-[var(--foreground)] hover:bg-white/20 md:hidden"
        >
          <span className="sr-only">Меню</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`glass border-t border-[var(--border)] md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-sm font-light ${
                  pathname === item.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)]/75 hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
