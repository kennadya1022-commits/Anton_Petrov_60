export type Congratulation = {
  id: string;
  author: string;
  text: string;
};

// TODO: Add real birthday wishes from family and friends (5–15 сообщений).
export const congratulations: Congratulation[] = [
  {
    id: "1",
    author: "Семья",
    text: "С 60-летием! Желаем здоровья, счастья и новых идей. Мы гордимся тобой.",
  },
  {
    id: "2",
    author: "Друзья",
    text: "Поздравляем с юбилеем! Пусть каждый день приносит радость и вдохновение.",
  },
];
