export interface Article {
  slug: string;
  title: string;
  summary: string;
  author: string;
  publishedDate: string; // ISO string or original string
  category: string;
  coverImage: string;
  content: string;
  readingTimeMinutes: number;
}

export interface ResearchProvider {
  listArticles(): Promise<Article[]>;
  getArticle(slug: string): Promise<Article | null>;
}

export const RESEARCH_CATEGORIES = [
  "Research Reports",
  "Industry Insights",
  "AI & Workplace",
  "Leadership",
  "Learning & Development",
  "HR",
  "Corporate Training",
  "Case Studies",
  "Whitepapers",
  "Future of Work",
] as const;
