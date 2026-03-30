export type Project = {
  id: string;
  title: string;
  year: string;
  description: string;
  coverImage?: string;
  link?: string;
  era?: "early" | "console" | "startup" | "current";
};

// TODO: Add real project titles, years, covers. Placeholder entries below.
export const projects: Project[] = [
  {
    id: "1",
    title: "Проект (пример)",
    year: "1990-е",
    description: "Описание проекта. Игры и цифровые продукты.",
    era: "early",
  },
  {
    id: "2",
    title: "Консольная игра (пример)",
    year: "2000-е",
    description: "Разработка консольных игр в России.",
    era: "console",
  },
  {
    id: "3",
    title: "Мобильное приложение (пример)",
    year: "2016",
    description: "Стартап: мобильное приложение или игра.",
    era: "startup",
  },
  {
    id: "4",
    title: "Симулятор спортивных дронов",
    year: "Сейчас",
    description: "Разработка на Unreal Engine, исследование интеграции ИИ.",
    link: "#",
    era: "current",
  },
];
