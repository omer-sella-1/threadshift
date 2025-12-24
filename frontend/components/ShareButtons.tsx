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
    <div className="flex flex-col items-center gap-6">
      <p className="text-xs uppercase tracking-wider font-bold">
        [ SHARE_UTILITY ]
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => openShare('facebook')}
          className="p-3 border-2 border-black bg-white hover:bg-cyan-400 transition-all duration-100 shadow-brutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5 text-black" strokeWidth={2} />
        </button>
        <button
          onClick={() => openShare('twitter')}
          className="p-3 border-2 border-black bg-white hover:bg-cyan-400 transition-all duration-100 shadow-brutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5 text-black" strokeWidth={2} />
        </button>
        <button
          onClick={() => openShare('linkedin')}
          className="p-3 border-2 border-black bg-white hover:bg-cyan-400 transition-all duration-100 shadow-brutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-black" strokeWidth={2} />
        </button>
        <button
          onClick={copyLink}
          className="p-3 border-2 border-black bg-white hover:bg-cyan-400 transition-all duration-100 shadow-brutal-sm active:shadow-none active:translate-x-1 active:translate-y-1"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-black" strokeWidth={2} />
          ) : (
            <Link2 className="w-5 h-5 text-black" strokeWidth={2} />
          )}
        </button>
      </div>
      {copied && (
        <div className="border-2 border-black bg-green-400 px-4 py-2">
          <p className="text-xs uppercase font-bold">
            LINK_COPIED
          </p>
        </div>
      )}
    </div>
  );
}
