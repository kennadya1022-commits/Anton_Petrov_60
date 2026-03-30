export type MusicEntry = {
  id: string;
  artist: string;
  album?: string;
  coverSrc?: string;
};

// Reference list: Queen, The Beatles, Pink Floyd, AC/DC, The Rolling Stones, Smash TV Series soundtrack.
// Music section is populated from public/images/music/ via npm run music:generate.
const placeholder = "/images/placeholder.svg";

export const musicEntries: MusicEntry[] = [
  { id: "1", artist: "Queen", album: "Greatest Hits", coverSrc: placeholder },
  { id: "2", artist: "The Beatles", album: "Abbey Road", coverSrc: placeholder },
  { id: "3", artist: "Pink Floyd", album: "", coverSrc: placeholder },
  { id: "4", artist: "AC/DC", album: "Back in Black", coverSrc: placeholder },
  { id: "5", artist: "The Rolling Stones", album: "Sticky Fingers", coverSrc: placeholder },
  { id: "6", artist: "Smash TV Series", album: "Soundtrack", coverSrc: placeholder },
];
