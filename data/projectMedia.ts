import projectsFromImages from "./projectsFromImages.json";

export type ProjectImageItem = {
  type: "image";
  id: string;
  title: string;
  year: string;
  src: string;
  hideLabel?: boolean;
};

export type ProjectVideoItem = {
  type: "video";
  id: string;
  src: string;
  title: string;
};

export type ProjectMediaItem = ProjectImageItem | ProjectVideoItem;

const HIDE_LABEL_IDS = [
  "Award 1978.png",
  "Certificate 1979.png",
  "Diploma 1979.png",
  "Gramota 1980.png",
  "Honor 1980.png",
  "Sport 1984.png",
];

const imageProjects = (projectsFromImages as { id: string; title: string; year: string; src: string }[]).map(
  (p) =>
    ({
      type: "image" as const,
      id: p.id,
      title: p.title,
      year: p.year,
      src: p.src,
      hideLabel: HIDE_LABEL_IDS.includes(p.id),
    })
);

const videoItems: ProjectVideoItem[] = [
  { type: "video", id: "video-anton-work", src: "/videos/Project%20video/anton-work.kreat.mp4", title: "Видео" },
  { type: "video", id: "video-anton-2work", src: "/videos/Project%20video/anton-2work.kreat.mp4", title: "Видео" },
  { type: "video", id: "video-anton-3work", src: "/videos/Project%20video/anton-3work.kreat.mp4", title: "Видео" },
];

/** Mixed order: interleave videos among image projects for a natural portfolio feel. */
export function getProjectMedia(): ProjectMediaItem[] {
  const items: ProjectMediaItem[] = [];
  let imgIdx = 0;
  const insertImage = () => {
    if (imgIdx < imageProjects.length) {
      items.push(imageProjects[imgIdx]);
      imgIdx++;
    }
  };
  const insertVideo = (v: ProjectVideoItem) => items.push(v);

  insertImage();
  insertImage();
  insertImage();
  insertVideo(videoItems[0]);
  insertImage();
  insertImage();
  insertImage();
  insertImage();
  insertImage();
  insertImage();
  insertImage();
  insertVideo(videoItems[1]);
  insertImage();
  insertImage();
  insertImage();
  insertImage();
  insertVideo(videoItems[2]);
  while (imgIdx < imageProjects.length) {
    insertImage();
  }
  return items;
}
