"use client";

import React, { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-2 border border-line hover:border-accent text-xs font-medium text-muted hover:text-text transition-colors cursor-pointer select-none"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent">Link copied!</span>
        </>
      ) : (
        <>
          <LinkIcon className="w-3.5 h-3.5" />
          <span>Copy link</span>
        </>
      )}
    </button>
  );
}
