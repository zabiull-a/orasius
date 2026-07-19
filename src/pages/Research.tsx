import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import ResearchCard from "@/components/research/ResearchCard";
import { useResearchArticles } from "@/hooks/useResearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

const Research = () => {
  const { data: articles = [], isLoading, isError } = useResearchArticles();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.category && set.add(a.category));
    return ["All", ...Array.from(set).sort()];
  }, [articles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (category !== "All" && a.category !== category) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
      );
    });
  }, [articles, query, category]);

  const featured = filtered[0];
  const rest = filtered.slice(1, visible);
  const hasMore = filtered.length > visible;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ORASIUS AI & Research",
    description:
      "Original research, industry insights, whitepapers, AI-assisted analysis and business frameworks from ORASIUS on Learning & Development, HR, Leadership and Corporate Training.",
    url: "https://www.orasius.com/research",
  };

  return (
    <Layout>
      <SEO
        title="AI & Research | ORASIUS Knowledge Hub"
        description="Original research, industry insights, whitepapers and AI-assisted analysis on Learning & Development, HR, Leadership, Corporate Training and the Future of Work."
        path="/research"
        jsonLd={jsonLd}
      />

      <section className="bg-primary py-20 md:py-24">
        <div className="container">
          <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-4">
            AI &amp; Research
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground uppercase tracking-tight max-w-4xl">
            Insights for the Future of Work
          </h1>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
            Original research, industry insights and AI-assisted analysis on Learning &amp;
            Development, HR, Leadership and Corporate Training — reviewed by the ORASIUS team.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Search + filters */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="relative max-w-xl">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <Input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search by title, keyword or category…"
                className="pl-10 h-11"
                aria-label="Search research articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c);
                    setVisible(PAGE_SIZE);
                  }}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                    category === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground border-border hover:border-primary/50"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {isLoading && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-lg border border-border bg-card overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-16 text-muted-foreground">
              We couldn't load research articles right now. Please try again shortly.
            </div>
          )}

          {!isLoading && !isError && filtered.length === 0 && (
            <div className="text-center py-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                {articles.length === 0
                  ? "Publications coming soon"
                  : "No articles match your search"}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {articles.length === 0
                  ? "The ORASIUS Research Center is being curated. New publications on leadership, L&D, HR and the future of work will appear here soon."
                  : "Try a different keyword or clear the category filter to see all publications."}
              </p>
            </div>
          )}

          {!isLoading && !isError && featured && (
            <>
              <h2 className="sr-only">Featured article</h2>
              <div className="mb-12">
                <ResearchCard article={featured} featured />
              </div>

              {rest.length > 0 && (
                <>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Latest publications
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((a) => (
                      <ResearchCard key={a.slug} article={a} />
                    ))}
                  </div>
                </>
              )}

              {hasMore && (
                <div className="mt-12 flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  >
                    Load more
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Research;
