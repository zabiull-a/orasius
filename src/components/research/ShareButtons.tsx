import { Linkedin, Twitter, Link as LinkIcon, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Props {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: Props) => {
  const enc = encodeURIComponent;
  const share = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied to clipboard" });
    } catch {
      toast({ title: "Could not copy link" });
    }
  };
  const btn =
    "inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors";
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>
      <a href={share.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={btn}>
        <Linkedin size={16} />
      </a>
      <a href={share.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={btn}>
        <Twitter size={16} />
      </a>
      <a href={share.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={btn}>
        <Facebook size={16} />
      </a>
      <button type="button" onClick={copy} aria-label="Copy link" className={btn}>
        <LinkIcon size={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
