import { useQuery } from "@tanstack/react-query";
import { researchProvider } from "@/lib/research/provider";
import type { Article } from "@/lib/research/types";

const STALE_MS = 5 * 60 * 1000; // 5 minutes
const GC_MS = 30 * 60 * 1000;

export function useResearchArticles() {
  return useQuery<Article[]>({
    queryKey: ["research", "articles"],
    queryFn: () => researchProvider.listArticles(),
    staleTime: STALE_MS,
    gcTime: GC_MS,
    refetchOnWindowFocus: false,
  });
}

export function useResearchArticle(slug: string | undefined) {
  return useQuery<Article | null>({
    queryKey: ["research", "article", slug],
    queryFn: () => (slug ? researchProvider.getArticle(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: STALE_MS,
    gcTime: GC_MS,
    refetchOnWindowFocus: false,
  });
}
