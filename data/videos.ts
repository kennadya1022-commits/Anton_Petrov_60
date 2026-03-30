export type VideoItem = {
  id: string;
  src: string;
  title?: string;
};

export const galleryVideos: VideoItem[] = [
  { id: "video-1", src: "/videos/anton-work.kreat.mp4", title: "Video 1" },
  { id: "video-2", src: "/videos/anton-2work.kreat.mp4", title: "Video 2" },
  { id: "video-3", src: "/videos/anton-3work.kreat.mp4", title: "Video 3" },
];
