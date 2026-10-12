import Link from "next/link";
import { posts } from "@/data/posts";
import { BlogList } from "@/components/blog/BlogList";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Practical digital marketing insights, search engine optimization guides, paid media frameworks, and career roadmaps.",
};

export default function BlogPage() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-surface/30 border-b border-line relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <span className="text-accent font-medium">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-text leading-[1.12] tracking-tight mb-4">
              Digital marketing <span className="text-accent">blog</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Actionable guides, paid media strategies, SEO teardowns, and interview tactics from active practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Blog List (Filter, Featured, Grid, CTA Strip) */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <BlogList posts={posts} />
        </div>
      </section>
    </div>
  );
}
