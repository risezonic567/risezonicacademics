"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

export function BlogList({ posts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "SEO", "Ads", "Social media", "Careers"];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div>
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? "bg-primary text-bg shadow-md shadow-primary/15"
                  : "bg-surface border border-line text-muted hover:text-text hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 text-muted">
          No articles found in this category.
        </div>
      ) : (
        <>
          {/* Featured Post Card */}
          {featuredPost && (
            <Reveal className="mb-14 sm:mb-20">
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <Card
                  variant="surface"
                  className="p-6 sm:p-10 border-accent/30 overflow-hidden hover:border-primary group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Placeholder (5 cols) */}
                    <div className="lg:col-span-5 aspect-[16/10] rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-bg border border-line flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:border-accent/40 transition-colors">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:16px_16px]"
                      />
                      <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-line text-accent flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-heading font-semibold text-text">
                        Featured Article Visual
                      </span>
                    </div>

                    {/* Content (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-light text-xs font-semibold uppercase tracking-wider">
                            {featuredPost.category}
                          </span>
                          <span className="text-xs text-muted flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-accent" />
                            <span>{featuredPost.readTime}</span>
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors leading-[1.25]">
                          {featuredPost.title}
                        </h2>

                        <p className="text-sm sm:text-base text-muted leading-relaxed line-clamp-3 mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-line/60 pt-4 text-xs text-muted">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{featuredPost.date}</span>
                        </span>
                        <span className="font-semibold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Read full article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </Reveal>
          )}

          {/* Grid of Remaining Posts */}
          {remainingPosts.length > 0 && (
            <div className="mb-16 sm:mb-20">
              <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-6">
                More Articles & Guides
              </div>

              <StaggerContainer
                staggerDelay={0.08}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {remainingPosts.map((post) => (
                  <StaggerItem key={post.slug} className="h-full flex">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-full block group"
                    >
                      <Card
                        variant="surface"
                        className="h-full p-6 flex flex-col justify-between group-hover:border-primary/50 transition-colors"
                      >
                        <div>
                          {/* Image Placeholder */}
                          <div className="w-full aspect-[16/10] rounded-xl bg-surface-2 border border-line flex flex-col items-center justify-center p-4 text-center mb-5 group-hover:border-accent/40 transition-colors relative overflow-hidden">
                            <BookOpen className="w-6 h-6 text-accent mb-1 group-hover:scale-105 transition-transform" />
                            <span className="text-[11px] font-heading text-muted">
                              Article Thumbnail
                            </span>
                          </div>

                          {/* Category Badge & Read Time */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-[11px] font-semibold">
                              {post.category}
                            </span>
                            <span className="text-[11px] text-muted flex items-center gap-1">
                              <Clock className="w-3 h-3 text-accent" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>

                          {/* Title & Excerpt */}
                          <h3 className="font-heading font-bold text-base sm:text-lg text-text mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                          <span>{post.date}</span>
                          <span className="font-semibold text-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            <span>Read</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </>
      )}

      {/* 5. CTA Strip */}
      <Reveal>
        <div className="rounded-[22px] bg-gradient-to-r from-surface via-surface-2 to-surface border border-accent/35 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Learn With Live Mentors</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
              Want practical campaign training instead of theory?
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Book a free counselling session to audit live course projects and class schedules.
            </p>
          </div>

          <OpenModalButton
            source="blog-list-cta"
            variant="primary"
            size="md"
            className="w-full sm:w-auto shrink-0 px-6 py-3"
          >
            Book Free Counselling
          </OpenModalButton>
        </div>
      </Reveal>
    </div>
  );
}
