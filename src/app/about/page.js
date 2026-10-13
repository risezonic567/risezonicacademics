import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Mentors } from "@/components/home/Mentors";
import { Campus } from "@/components/home/Campus";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  ChevronRight,
  Hammer,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Sparkles,
  BookOpen,
  Rocket,
  RefreshCw,
  Star,
  Users,
  FolderGit2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn about Risezonic Academics, our mission, active practitioner mentors, and practical campaign-first digital marketing training methodology.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Hammer,
      title: "Learn by doing",
      description:
        "We believe true retention happens when you build landing pages and allocate real advertising budgets. Every theoretical framework is immediately paired with hands-on campaign execution.",
    },
    {
      icon: ShieldCheck,
      title: "Honest guidance",
      description:
        "We offer transparent feedback on your campaign portfolios, skills progression, and career trajectory. No false claims—just practical mentorship tailored to your personal goals.",
    },
    {
      icon: Briefcase,
      title: "Industry mentors",
      description:
        "Our instructors are active practitioners managing high-scale client accounts at premier growth agencies and consumer brands. You learn workflows tested in real boardrooms and ad accounts.",
    },
    {
      icon: TrendingUp,
      title: "Career first",
      description:
        "Everything in our syllabus is reverse-engineered from current agency hiring requirements. From portfolio design to technical mock interviews, your career outcome is our focal point.",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: BookOpen,
      title: "Learn the concept",
      description:
        "Deconstruct modern growth frameworks, algorithm shifts, audience psychology, and analytics fundamentals with expert faculty.",
    },
    {
      num: "02",
      icon: Rocket,
      title: "Run a real campaign",
      description:
        "Deploy live budget across Google Ads, Meta Ads Manager, and email flows to measure cost-per-click and conversion rates.",
    },
    {
      num: "03",
      icon: RefreshCw,
      title: "Get feedback and improve",
      description:
        "Undergo structured weekly portfolio teardowns, A/B test variations, and refine targeting under direct mentor supervision.",
    },
  ];

  return (
    <div className="bg-bg text-text min-h-screen">
      {/* 1. Page Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-surface border-b border-line relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6"
          >
            <Link
              href="/"
              className="hover:text-accent transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <span className="text-accent font-medium">About</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-text leading-[1.12] tracking-tight mb-5">
              About <span className="text-text">Risezonic Academics</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Bridging the gap between theoretical marketing concepts and high-impact digital execution through mentor-led, project-driven training.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20 sm:py-28 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-text leading-[1.2] tracking-tight">
                  Born from the Need for Real, Campaign-Led Marketing Skills
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Founded in [founding year] by [founder name], Risezonic Academics was created to challenge traditional lecture-based marketing education. We observed that fresh graduates were studying outdated slide decks while digital advertising algorithms, conversion attribution, and search landscapes were evolving at breakneck speed.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Our academy was built on a simple premise: marketing can only be truly learned by managing real ad spend and analyzing live campaign metrics. Today, we equip students, career switchers, and entrepreneurs with tactical tools, live client projects, and rigorous placement guidance.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="pt-2 flex items-center gap-4">
                  <OpenModalButton
                    source="about-story"
                    variant="primary"
                    size="md"
                  >
                    <span>Talk to an Academic Advisor</span>
                  </OpenModalButton>
                </div>
              </Reveal>
            </div>

            {/* Image Placeholder Block (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative rounded-[24px] bg-surface border border-line p-8 overflow-hidden aspect-[4/3] flex flex-col justify-between">
                  <div className="absolute inset-0">
                    <SiteImage
                      image={images.about}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Header Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold">
                      Academy Studio
                    </span>
                    <span className="text-xs text-muted font-mono">Est. [founding year]</span>
                  </div>

                  {/* Center Placeholder Graphic */}
                  <div className="relative z-10 text-center my-auto py-6">
                  </div>

                  {/* Footer Caption */}
                  <div className="relative z-10 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                    <span>Mentorship First</span>
                    <span className="text-accent font-semibold">[Founder name]</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission and Values */}
      <section className="py-20 sm:py-28 bg-surface border-y border-line relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="Our Mission & Academy Values"
            highlightWord="Values"
            subtitle="Four core pillars that govern every lecture, capstone assignment, and mentorship session."
          />

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={idx} className="h-full flex">
                  <Card
                    variant="surface"
                    className="p-6 sm:p-7 flex flex-col justify-between group hover:border-accent/40"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-text mb-2.5 group-hover:text-accent transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Numbers Strip */}
      <section className="py-14 sm:py-18 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="rounded-[22px] bg-surface border border-accent/25 p-6 sm:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-line">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4 first:pt-0 first:lg:px-0">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                    {siteConfig.stats.studentsTrained}
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    students trained
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                    {siteConfig.stats.projectsBuilt}
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    projects built
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                    {siteConfig.stats.mentorsCount}
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    mentors & faculty
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 fill-accent text-accent" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                    {siteConfig.stats.rating}
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    student rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Teach */}
      <section className="py-20 sm:py-28 bg-surface-2 border-y border-line relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="How We Teach Digital Marketing"
            highlightWord="Teach"
            subtitle="A pragmatic three-phase framework designed to eliminate guesswork and build deep execution muscle."
          />

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12"
          >
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <StaggerItem key={st.num} className="h-full flex">
                  <Card
                    variant="surface"
                    className="p-7 sm:p-8 flex flex-col justify-between group hover:border-primary/50 relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-heading font-bold text-muted/30">
                          {st.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-text mb-2.5 group-hover:text-accent transition-colors">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Mentors Grid */}
      <Mentors />

      {/* 7. Campus Bento Grid */}
      <Campus />

      {/* 8. Final CTA */}
      <section className="py-20 sm:py-28 bg-bg relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-[28px] bg-surface border border-line p-8 sm:p-14 text-center overflow-hidden">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.15] max-w-2xl mx-auto tracking-tight mb-4">
                Want to see how we teach?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Attend a complimentary demo masterclass, audit our ad account setups, and talk directly with faculty mentors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <OpenModalButton
                  source="about-cta"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 font-bold text-base"
                >
                  <span>Book free counselling</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </OpenModalButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
