import type { Article, ResearchProvider } from "./types";
import { parseCsv } from "./csv";

/**
 * Data layer for research articles.
 *
 * Currently backed by a public Google Sheet (published as CSV via the gviz
 * endpoint). Frontend components should only import `researchProvider` from
 * this module — swapping to Supabase later means implementing the
 * `ResearchProvider` interface and re-exporting a new instance from here.
 */

const SHEET_ID = "1QhvseS2eGvSDAGpEum1J8afvyRhBKBZl6K4gqQnTk9U";
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

const WORDS_PER_MINUTE = 220;

function normalizeKey(key: string) {
  return key.trim().toLowerCase().replace(/\s+/g, "_");
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toIsoDate(raw: string): string {
  const s = raw.trim();
  if (!s) return "";
  // Try Date parsing directly first (handles "2026-01-15", "Jan 15, 2026")
  const parsed = new Date(s);
  if (!isNaN(parsed.getTime())) return parsed.toISOString();
  // Fallback: dd/mm/yyyy or dd-mm-yyyy
  const m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const [, d, mo, y] = m;
    const year = y.length === 2 ? 2000 + Number(y) : Number(y);
    const dt = new Date(year, Number(mo) - 1, Number(d));
    if (!isNaN(dt.getTime())) return dt.toISOString();
  }
  return s;
}

function rowToArticle(headers: string[], values: string[]): Article | null {
  const get = (name: string) => {
    const idx = headers.indexOf(name);
    return idx >= 0 ? (values[idx] ?? "").trim() : "";
  };

  const title = get("title");
  if (!title) return null;

  const rawSlug = get("slug");
  const slug = rawSlug ? slugify(rawSlug) : slugify(title);
  const content = get("content");

  return {
    slug,
    title,
    summary: get("summary"),
    author: get("author") || "Orasius Research Team",
    publishedDate: toIsoDate(get("date") || get("published_date")),
    category: get("category") || "Industry Insights",
    coverImage: get("cover_image") || get("coverimage") || "",
    content,
    readingTimeMinutes: estimateReadingTime(content || get("summary")),
  };
}

async function fetchSheetArticles(): Promise<Article[]> {
  const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load research sheet: ${res.status}`);
  const text = await res.text();
  const rows = parseCsv(text).filter((r) => r.some((c) => c.trim().length));
  if (rows.length < 2) return [];
  const headers = rows[0].map(normalizeKey);
  const articles: Article[] = [];
  const seen = new Set<string>();
  for (let i = 1; i < rows.length; i++) {
    const article = rowToArticle(headers, rows[i]);
    if (!article) continue;
    let slug = article.slug;
    let n = 2;
    while (seen.has(slug)) slug = `${article.slug}-${n++}`;
    seen.add(slug);
    articles.push({ ...article, slug });
  }
  // Sort newest first
  articles.sort((a, b) => {
    const at = new Date(a.publishedDate).getTime() || 0;
    const bt = new Date(b.publishedDate).getTime() || 0;
    return bt - at;
  });
  return articles;
}

class GoogleSheetsResearchProvider implements ResearchProvider {
  async listArticles(): Promise<Article[]> {
    return fetchSheetArticles();
  }
  async getArticle(slug: string): Promise<Article | null> {
    const all = await this.listArticles();
    return all.find((a) => a.slug === slug) ?? null;
  }
}

export const researchProvider: ResearchProvider = new GoogleSheetsResearchProvider();
