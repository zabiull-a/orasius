import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useMemo, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(markdown: string): Heading[] {
  const out: Heading[] = [];
  const lines = markdown.split(/\r?\n/);
  const seen = new Map<string, number>();
  let inFence = false;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].trim();
    let id = slugifyHeading(text);
    const n = seen.get(id) ?? 0;
    if (n) id = `${id}-${n}`;
    seen.set(id, n + 1);
    out.push({ id, text, level });
  }
  return out;
}

interface Props {
  content: string;
  onHeadings?: (headings: Heading[]) => void;
}

const ArticleContent = ({ content, onHeadings }: Props) => {
  const headings = useMemo(() => extractHeadings(content), [content]);
  const [idMap] = useState(() => new Map<string, string>());

  useEffect(() => {
    idMap.clear();
    headings.forEach((h) => idMap.set(h.text.trim(), h.id));
    onHeadings?.(headings);
  }, [headings, onHeadings, idMap]);

  const assignId = (children: React.ReactNode): string | undefined => {
    const text = Array.isArray(children)
      ? children.map((c) => (typeof c === "string" ? c : "")).join("")
      : typeof children === "string"
      ? children
      : "";
    return idMap.get(text.trim());
  };

  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-img:rounded-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 id={assignId(children)} className="scroll-mt-24">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={assignId(children)} className="scroll-mt-24">
              {children}
            </h3>
          ),
          img: ({ src, alt }) => (
            <img src={src as string} alt={alt ?? ""} loading="lazy" className="rounded-lg" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ArticleContent;
