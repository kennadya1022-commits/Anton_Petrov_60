export type WishTextItem = {
  id: string;
  name: string;
  role?: string;
  message: string;
};

export type WishVideoItem = {
  id: string;
  name: string;
  role?: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
};

export const wishesText: WishTextItem[] = [
  {
    id: "wish-text-1",
    name: "Alexandr Miala",
    role: "Коллега",
    message:
      "Антон, с юбилеем! 60 лет — солидная дистанция, и я искренне рад поздравить Вас с этой датой.\n\nПрошло уже около 25 лет с тех пор, как мы работали вместе в «Крейте». Для Вас это был один из этапов руководства, а для меня — самое начало пути, когда я только пробовал себя в роли аниматора. Хочу сказать спасибо за ту школу и атмосферу, которую Вы создавали. Для молодого парня тогда это был бесценный опыт и отличный старт.\n\nЖелаю Вам крепкого здоровья, бодрости духа и чтобы энергия, которой Вы заряжали команду «Крейта», возвращалась к Вам в двойном объеме. Пусть каждый день приносит удовольствие, а рядом всегда будут близкие и верные люди.\n\nС днем рождения!",
  },
  {
    id: "wish-text-2",
    name: "Юра",
    role: "Друг",
    message:
      "Словами передай от меня: как так случилось что нам вечно молодым уже по 60...?\nКонь-стантин Сергеич Станиславский выразился однозначно..))\nИ тем не менее это факт! с чем искренне поздравляю!!! Ура!!!",
  },
  {
    id: "wish-text-3",
    name: "Fedor Gilmutdinov",
    role: "Друг",
    message:
      "Антон, поздравляю тебя с \"золотым\" юбилеем! 60 лет — возраст, когда за спиной опыт, но есть еще силы для нового.\n\nЖелаю тебе бодрости духа и неисчерпаемой энергии. Достаток — стабильным, здоровье — крепким, а в семье — забота и поддержка! 🥂🎁🍾",
  },
];

export const wishesVideo: WishVideoItem[] = [
  {
    id: "wish-video-1",
    name: "Dmitry Kholodov",
    role: "",
    title: "Видеопоздравление от Дмитрия",
    thumbnail: "/images/placeholder.svg",
    videoUrl: "/videos/congratulations/dmitry-kholodov.mp4",
  },
  {
    id: "wish-video-2",
    name: "Anton Lomakin",
    role: "",
    title: "Видеопоздравление от Антона",
    thumbnail: "/images/placeholder.svg",
    videoUrl: "/videos/congratulations/anton-lomakin.mp4",
  },
];
