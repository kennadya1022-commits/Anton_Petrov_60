export type Story = {
  id: string;
  author: string;
  role?: string;
  text: string;
};

// TODO: Add real stories from family and friends.
export const stories: Story[] = [
  {
    id: "1",
    author: "Дочь",
    role: "дочь",
    text: "Короткое воспоминание о том, как папа объяснял сложные вещи просто. Он всегда говорил с нами на равных.",
  },
  {
    id: "2",
    author: "Сын",
    role: "сын",
    text: "Воспоминание о поддержке и ответственности. Он никогда не оставлял проблемы нерешёнными.",
  },
];
