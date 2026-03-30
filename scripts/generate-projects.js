/**
 * Scans public/images/projects/ and generates data/projectsFromImages.json
 * from filenames. Expected format: "Project Title (Year).ext" or "Project Title - Year.ext"
 * Reads image dimensions so cards can keep original aspect ratio (no cropping).
 */

const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

const PROJECTS_DIR = path.join(__dirname, "..", "public", "images", "projects");
const OUT_FILE = path.join(__dirname, "..", "data", "projectsFromImages.json");

function parseFilename(filename) {
  const base = path.basename(filename);
  const ext = path.extname(base);
  const nameWithoutExt = base.slice(0, -ext.length);

  // Year in parentheses: "Title (2020)"
  let match = nameWithoutExt.match(/^(.+?)\s*\((\d{4})\)\s*$/);
  if (match) {
    return { title: match[1].trim(), year: match[2] };
  }

  // Year after " - ": "Title - 2020"
  match = nameWithoutExt.match(/^(.+?)\s*-\s*(\d{4})\s*$/);
  if (match) {
    return { title: match[1].trim(), year: match[2] };
  }

  // Year at end (4 digits): "Title 2020"
  match = nameWithoutExt.match(/^(.+?)\s+(\d{4})\s*$/);
  if (match) {
    return { title: match[1].trim(), year: match[2] };
  }

  // No year found: use whole name as title, year empty
  return { title: nameWithoutExt, year: "" };
}

if (!fs.existsSync(PROJECTS_DIR)) {
  fs.mkdirSync(PROJECTS_DIR, { recursive: true });
}

let files = [];
try {
  files = fs.readdirSync(PROJECTS_DIR).filter((f) => {
    const p = path.join(PROJECTS_DIR, f);
    return fs.statSync(p).isFile() && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f);
  });
} catch {
  files = [];
}

const projects = files
  .sort()
  .map((file) => {
    const { title, year } = parseFilename(file);
    const filePath = path.join(PROJECTS_DIR, file);
    let width = null;
    let height = null;
    try {
      const buffer = fs.readFileSync(filePath);
      const dims = (sizeOf.default || sizeOf)(buffer);
      if (dims && dims.width && dims.height) {
        width = dims.width;
        height = dims.height;
      }
    } catch (_) {}
    return {
      id: file,
      title,
      year,
      src: `/images/projects/${file}`,
      ...(width && height ? { width, height } : {}),
    };
  });

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(projects, null, 2), "utf8");
console.log(`Wrote ${projects.length} project(s) to data/projectsFromImages.json`);
