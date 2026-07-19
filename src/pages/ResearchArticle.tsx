import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import ArticleContent from "@/components/research/ArticleContent";
import ShareButtons from "@/components/research/ShareButtons";
import ResearchCard from "@/components/research/ResearchCard";
import { useResearchArticles } from "@/hooks/useResearch";
import { formatDate } from "@/lib/research/format";

const SITE_URL = "https://www.orasius.com";

interface Heading {
  id: string;
  text: string;
  level: number;
}

const ArticleNotFound = () => (
  <Layout>
    <SEO
      title="Article Not Found | ORASIUS Research"
      description="The requested research article could not be found."
      path="/research"
    />
    <section className="py-24">
      <div className="container text-center max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
          Article not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The publication you're looking for isn't available. It may have been renamed or is not yet
          published.
        </p>
        <Link to="/research" className="text-primary font-medium underline underline-offset-4">
          Back to Research
        </Link>
      </div>
    </section>
  </Layout>
);

const ResearchArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: articles = [], isLoading } = useResearchArticles();
  const [headings, setHeadings] = useState<Heading[]>([]);

  const { article, prev, next, related } = useMemo(() => {
    if (!articles.length) return { article: null, prev: null, next: null, related: [] };
    const idx = articles.findIndex((a) => a.slug === slug);
    if (idx === -1) return { article: null, prev: null, next: null, related: [] };
    const article = articles[idx];
    const prev = idx > 0 ? articles[idx - 1] : null;
    const next = idx < articles.length - 1 ? articles[idx + 1] : null;
    const related = articles
      .filter((a, i) => i !== idx && a.category === article.category)
      .slice(0, 3);
    return { article, prev, next, related };
  }, [articles, slug]);

  if (isLoading) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container max-w-3xl animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-24" />
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="aspect-[16/9] bg-muted rounded-lg mt-6" />
          </div>
        </section>
      </Layout>
    );
  }

  if (!article) return <ArticleNotFound />;

  const url = `${SITE_URL}/research/${article.slug}`;
  const publishedIso = article.publishedDate || new Date().toISOString();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      image: article.coverImage ? [article.coverImage] : undefined,
      datePublished: publishedIso,
      dateModified: publishedIso,
      author: { "@type": "Person", name: article.author },
      publisher: {
        "@type": "Organization",
        name: "ORASIUS",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/web-app-manifest-512x512.png`,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: article.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Research", item: `${SITE_URL}/research` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title={`${article.title} | ORASIUS Research`}
        description={article.summary || `${article.title} — ORASIUS Research`}
        path={`/research/${article.slug}`}
        image={article.coverImage || undefined}
        type="article"
        jsonLd={jsonLd}
      />

      <article>
        {/* Hero */}
        <header className="bg-primary py-16 md:py-20">
          <div className="container max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-primary-foreground/70 text-sm mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary-foreground">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/research" className="hover:text-primary-foreground">Research</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground line-clamp-1">{article.title}</li>
              </ol>
            </nav>
            <span className="inline-flex items-center rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-medium px-3 py-1 mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {article.title}
            </h1>
            {article.summary && (
              <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed max-w-3xl">
                {article.summary}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2">
                <User size={14} /> {article.author}
              </span>
              {article.publishedDate && (
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} /> {formatDate(article.publishedDate)}
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <Clock size={14} /> {article.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </header>

        {/* Cover */}
        {article.coverImage && (
          <div className="container max-w-4xl -mt-8 md:-mt-12">
            <img
              src={article.coverImage}
              alt={article.title}
              loading="eager"
              className="w-full rounded-lg shadow-lg aspect-[16/9] object-cover bg-muted"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}

        {/* Body */}
        <section className="py-12 md:py-16">
          <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] max-w-6xl">
            <div className="max-w-3xl">
              {article.content ? (
                <ArticleContent content={article.content} onHeadings={setHeadings} />
              ) : (
                <p className="text-muted-foreground italic">
                  Full article content will be published shortly.
                </p>
              )}

              <div className="mt-12 pt-8 border-t border-border">
                <ShareButtons url={url} title={article.title} />
              </div>

              <p className="mt-8 text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-4">
                Some research may use AI-assisted analysis. Every publication is reviewed by the
                ORASIUS team before publishing.
              </p>

              {/* Prev / Next */}
              <nav
                aria-label="Article navigation"
                className="mt-10 grid gap-4 sm:grid-cols-2 border-t border-border pt-8"
              >
                {prev ? (
                  <Link
                    to={`/research/${prev.slug}`}
                    className="group flex flex-col p-4 rounded-lg border border-border hover:border-primary/40 transition-colors"
                  >
                    <span className="inline-flex items-center text-xs text-muted-foreground gap-1">
                      <ArrowLeft size={12} /> Previous
                    </span>
                    <span className="mt-1 font-medium text-foreground group-hover:text-primary line-clamp-2">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    to={`/research/${next.slug}`}
                    className="group flex flex-col p-4 rounded-lg border border-border hover:border-primary/40 transition-colors sm:text-right"
                  >
                    <span className="inline-flex items-center text-xs text-muted-foreground gap-1 sm:justify-end">
                      Next <ArrowRight size={12} />
                    </span>
                    <span className="mt-1 font-medium text-foreground group-hover:text-primary line-clamp-2">
                      {next.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </div>

            {/* Sidebar — Table of Contents */}
            {headings.length > 1 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    On this page
                  </h2>
                  <ul className="space-y-2 text-sm border-l border-border">
                    {headings.map((h) => (
                      <li key={h.id} className={h.level === 3 ? "pl-6" : "pl-4"}>
                        <a
                          href={`#${h.id}`}
                          className="text-muted-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-muted/40 py-16">
            <div className="container max-w-6xl">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Related publications
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <ResearchCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default ResearchArticle;
