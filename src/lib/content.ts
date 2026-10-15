import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");
const PUBLIC_WORK_DIR = path.join(process.cwd(), "public/work");

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  hasImages: boolean;
  /** Position on the home page grid. */
  order: number;
  /** Caption shown under the cover on the home page grid. */
  cardTitle: string;
  /** Cover image for the home page grid. */
  cover: string;
  content: string;
}

export function getAllCaseStudySlugs(): string[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("."))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getCaseStudy(slug: string): CaseStudy {
  const filePath = path.join(WORK_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    hasImages: Boolean(data.hasImages),
    order: Number(data.order ?? Infinity),
    cardTitle: (data.cardTitle as string) ?? (data.title as string),
    cover: `/covers/${slug}.webp`,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return getAllCaseStudySlugs()
    .map(getCaseStudy)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getCaseStudyImages(slug: string): string[] {
  const dir = path.join(PUBLIC_WORK_DIR, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/work/${slug}/${file}`);
}
