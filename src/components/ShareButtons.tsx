"use client";

import { useToast } from "./Toast";

interface ShareButtonsProps {
  title?: string;
  text?: string;
  compact?: boolean;
}

export default function ShareButtons({
  title = "Common Defense",
  text = "A platform for organized, nonviolent resistance to the capture of American democracy.",
  compact = false,
}: ShareButtonsProps) {
  const toast = useToast();

  const getUrl = () => {
    if (typeof window !== "undefined") return window.location.href;
    return "";
  };

  const shareX = () => {
    const url = getUrl();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareFacebook = () => {
    const url = getUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareReddit = () => {
    const url = getUrl();
    window.open(
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(getUrl()).then(() => {
      toast.addToast("Link copied to clipboard.", "info");
    });
  };

  const btnClass = compact
    ? "w-9 h-9 flex items-center justify-center bg-card border border-border text-muted hover:text-white hover:border-red cursor-pointer transition-all text-[14px]"
    : "py-2.5 px-5 bg-card border border-border text-muted hover:text-white hover:border-red cursor-pointer transition-all font-heading text-[11px] tracking-[1px] uppercase";

  return (
    <div className="flex gap-2 flex-wrap">
      <button onClick={shareX} className={btnClass} aria-label="Share on X">
        {compact ? "X" : "Share on X"}
      </button>
      <button onClick={shareFacebook} className={btnClass} aria-label="Share on Facebook">
        {compact ? "f" : "Facebook"}
      </button>
      <button onClick={shareReddit} className={btnClass} aria-label="Share on Reddit">
        {compact ? "r" : "Reddit"}
      </button>
      <button onClick={copyLink} className={btnClass} aria-label="Copy link">
        {compact ? "\u2398" : "Copy Link"}
      </button>
    </div>
  );
}
