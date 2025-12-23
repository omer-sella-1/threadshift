"use client";

import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = "https://www.threadshifter.com";
  const title = "ThreadShifter - Free Embroidery File Converter";
  const description = "Convert embroidery files instantly for free! DST, PES, JEF, EXP, and more.";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-foreground/70">
        Love ThreadShifter? Share it with others!
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => openShare('facebook')}
          className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => openShare('twitter')}
          className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => openShare('linkedin')}
          className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={copyLink}
          className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all relative"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-success" />
          ) : (
            <Link2 className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>
      {copied && (
        <p className="text-xs text-success animate-in fade-in">
          Link copied to clipboard!
        </p>
      )}
    </div>
  );
}
