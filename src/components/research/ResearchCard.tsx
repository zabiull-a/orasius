import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import type { Article } from "@/lib/research/types";
import { formatDate } from "@/lib/research/format";

interface Props {
  article: Article;
  featured?: boolean;
}

const ResearchCard = ({ article, featured = false }: Props) => {
  return (
    <Link
      to={`/research/${article.slug}`}
      className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/40 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          featured ? "md:w-1/2 aspect-[16/10] md:aspect-auto" : "aspect-[16/9]"
        }`}
      >
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-primary/40 font-display text-2xl">
            ORASIUS
          </div>
        )}
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-foreground text-xs font-medium px-3 py-1">
          {article.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-8" : ""}`}>
        <h3
          className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        {article.summary && (
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        )}
        <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User size={12} /> {article.author}
          </span>
          {article.publishedDate && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} /> {formatDate(article.publishedDate)}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> {article.readingTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ResearchCard;
