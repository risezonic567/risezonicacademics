import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { CopyLinkButton } from "@/components/blog/CopyLinkButton";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  ChevronRight,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const instant = false;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Risezonic Academics`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Find up to 2 related posts (prefer same category, exclude current post)
  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-01-01",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <article className="bg-bg text-text min-h-screen">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header Section */}
      <header className="pt-12 sm:pt-16 pb-10 bg-surface border-b border-line">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <span className="text-accent font-medium truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Category Badge & Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-muted flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading text-text leading-[1.2] tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Date & Author */}
          <div className="flex items-center gap-2 text-xs text-muted">
            <Calendar className="w-3.5 h-3.5" />
            <span>Published on {post.date}</span>
            <span>•</span>
            <span>By Academic Faculty</span>
          </div>
        </div>
      </header>

      {/* Body Container */}
      <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Featured Image Placeholder */}
        <div className="w-full aspect-[16/9] rounded-2xl bg-surface-2 border border-line flex flex-col items-center justify-center p-6 text-center mb-10 relative overflow-hidden">
          <div className="absolute inset-0">
            <SiteImage
              image={post.image}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-base text-muted leading-relaxed">
          {post.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-6 font-heading font-bold text-xl sm:text-2xl text-text leading-tight"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={index} className="text-muted leading-[1.75]">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Share Row */}
        <div className="mt-12 pt-6 border-t border-line flex items-center justify-between gap-4">
          <span className="text-xs text-muted">Share this guide:</span>
          <CopyLinkButton />
        </div>

        {/* Mid-Article CTA Card */}
        <div className="mt-14 rounded-2xl bg-surface border border-line p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 1-on-1 Strategy Call</span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-text">
              Want practical guidance on this topic?
            </h3>
            <p className="text-xs text-muted">
              Connect with our active marketing mentors for a personalized curriculum audit.
            </p>
          </div>

          <OpenModalButton
            source={`blog-${post.slug}`}
            variant="primary"
            size="md"
            className="w-full sm:w-auto shrink-0 px-6 py-3"
          >
            Book Free Counselling
          </OpenModalButton>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-line">
            <h3 className="text-lg font-heading font-bold text-text mb-6">
              Related Articles & Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="block group"
                >
                  <Card
                    variant="surface"
                    className="p-5 h-full flex flex-col justify-between group-hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-muted mb-2">
                        <span className="text-accent font-semibold">
                          {rel.category}
                        </span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-text mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-accent font-semibold">
                      <span>Read article</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
