/**
 * Scans public/images/music/ and generates data/musicFromImages.json.
 * Title = filename without extension (album or artist name).
 */

const fs = require("fs");
const path = require("path");

const MUSIC_DIR = path.join(__dirname, "..", "public", "images", "music");
const OUT_FILE = path.join(__dirname, "..", "data", "musicFromImages.json");

if (!fs.existsSync(MUSIC_DIR)) {
  fs.mkdirSync(MUSIC_DIR, { recursive: true });
}

let files = [];
try {
  files = fs.readdirSync(MUSIC_DIR).filter((f) => {
    const p = path.join(MUSIC_DIR, f);
    return fs.statSync(p).isFile() && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f);
  });
} catch {
  files = [];
}

const items = files.sort().map((file) => {
  const base = path.basename(file);
  const ext = path.extname(base);
  const title = base.slice(0, -ext.length);
  return {
    id: file,
    title,
    src: `/images/music/${file}`,
  };
});

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(items, null, 2), "utf8");
console.log(`Wrote ${items.length} music item(s) to data/musicFromImages.json`);
