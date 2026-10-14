import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { hiringPartners } from "@/data/partners";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SiteImage } from "@/components/ui/SiteImage";
import { PlacementGallery } from "@/components/placement/PlacementGallery";
import { placedLearners, placementEvents } from "@/data/placed";
import {
  ChevronRight,
  FileText,
  FolderGit2,
  Users2,
  Building2,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Briefcase,
  DollarSign,
  GraduationCap,
} from "lucide-react";

const GRID_COLUMNS = 3;
const GRID_ROWS = 2;

export const metadata = {
  title: "Placement",
  description:
    "Comprehensive placement support for digital marketers. Resume reviews, live campaign portfolios, technical mock interviews, and direct introductions.",
};

export default function PlacementPage() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Resume & LinkedIn Review",
      description:
        "We audit your resume line-by-line, restructure bullets to emphasize quantitative metrics, and optimize your LinkedIn profile for recruiter keyword searches.",
    },
    {
      num: "02",
      icon: FolderGit2,
      title: "Portfolio of Real Campaigns",
      description:
        "Compile audited proof of work: ad spend allocation reports, GA4 event configurations, creative split tests, and organic SEO ranking audits.",
    },
    {
      num: "03",
      icon: Users2,
      title: "Mock Technical Interviews",
      description:
        "Participate in realistic 1-on-1 interview simulations with senior performance marketers and agency leads to master technical question frameworks.",
    },
    {
      num: "04",
      icon: Building2,
      title: "Introductions to Hiring Partners",
      description:
        "Our corporate desk circulates candidate portfolios directly to agency founders, growth marketing leads, and in-house enterprise hiring managers.",
    },
  ];

  const prepChecklist = [
    {
      title: "Common Core Questions",
      desc: "Behavioral and technical frameworks covering attribution, CPM, CPA, and ROAS calculations.",
    },
    {
      title: "Live Case Studies",
      desc: "Step-by-step breakdowns of real startup acquisition hurdles and funnel leak resolutions.",
    },
    {
      title: "Ad Account Walkthroughs",
      desc: "Live screen-sharing exercises explaining campaign hierarchy, budget bid strategies, and audience exclusions.",
    },
    {
      title: "Technical SEO Audit Tasks",
      desc: "Live teardowns of robots.txt, canonicalization, page speed scores, and search console errors.",
    },
    {
      title: "Executive Communication",
      desc: "Clear stakeholder reporting language and client-facing presentation frameworks.",
    },
    {
      title: "Salary Negotiation",
      desc: "Understanding CTC structures, equity bonuses, probation periods, and counter-offer strategies.",
    },
    {
      title: "Freelancing Foundations",
      desc: "Client discovery proposals, rate card structuring, contract agreements, and retainer upsells.",
    },
    {
      title: "LinkedIn Brand Presence",
      desc: "Publishing insightful campaign case studies to attract inbound recruiter outreach.",
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
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <span className="text-accent font-medium">Placement</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-text leading-[1.12] tracking-tight mb-4">
              Placement support that <span className="text-text">prepares you</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              From polished resumes and live campaign portfolios to rigorous mock interviews and direct introductions to hiring partners.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How It Works (4 Steps) */}
      <section className="py-20 sm:py-28 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="How Our Placement Support Works"
            highlightWord="Support"
            subtitle="A four-stage methodology engineered to transition learners from classroom study to high-performing digital marketing hires."
          />

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <StaggerItem key={st.num} className="h-full flex">
                  <Card
                    variant="surface"
                    className="p-6 sm:p-7 flex flex-col justify-between group hover:border-primary/50 relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                          Step {st.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-text mb-2.5 group-hover:text-accent transition-colors">
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

      {/* 3. Numbers Strip */}
      <section className="py-14 sm:py-18 bg-surface-2 border-y border-line relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4 first:pt-0 first:lg:px-0">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                  {siteConfig.stats.highestPackage}
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">
                  highest package
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                  {siteConfig.stats.averagePackage}
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">
                  average package
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                  [00+]
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">
                  hiring partners
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-text">
                  [00+]
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">
                  learners placed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="py-20 sm:py-24 bg-surface border-y border-line">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
                Our placed learners
              </h2>
            </div>
          </section>
        }
      >
        <PlacementGallery
          learners={placedLearners.slice(0, GRID_COLUMNS * GRID_ROWS)}
          events={placementEvents}
        />
      </Suspense>

      {/* 4. Hiring Partners Grid */}
      <section className="py-20 sm:py-24 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="Where Agencies & Brands Hire"
            highlightWord="Hire"
            subtitle="Our alumni drive growth across top performance agencies, venture-backed startups, and digital studios."
          />

          <StaggerContainer
            staggerDelay={0.06}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10"
          >
            {hiringPartners.map((partner) => (
              <StaggerItem key={partner.id}>
                <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-line hover:border-primary/50 flex flex-col items-center justify-center text-center transition-all group shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/40 group-hover:bg-accent mb-2.5 transition-colors" />
                  <span className="font-heading font-medium text-xs sm:text-sm text-text group-hover:text-accent transition-colors truncate w-full">
                    {partner.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Placed Learners (6 Cards) */}
      <section className="py-20 sm:py-28 bg-surface border-y border-line relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="Placed Learners & Roles"
            highlightWord="Learners"
            subtitle="Meet recent graduates who successfully transitioned into digital marketing and growth careers."
          />

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12"
          >
            {testimonials.slice(0, 6).map((student) => (
              <StaggerItem key={student.id} className="h-full flex">
                <Card
                  variant="surface"
                  className="p-6 sm:p-7 flex flex-col justify-between group hover:border-accent/40"
                >
                  <div>
                    {/* Top Header: Avatar placeholder & Package */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-surface-2 border border-accent/40 flex items-center justify-center font-heading font-bold text-accent text-sm shrink-0">
                          <SiteImage
                            image={student.placementImage}
                            fill
                            className="rounded-full object-cover"
                            sizes="44px"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-text text-sm sm:text-base">
                            {student.studentName}
                          </h4>
                          <span className="text-xs text-muted block truncate max-w-[140px]">
                            {student.roleAtCompany}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-light border border-primary/30 text-accent text-xs font-semibold shrink-0">
                        {student.package}
                      </span>
                    </div>

                    {/* One-Line Quote Placeholder */}
                    <p className="text-xs sm:text-sm text-muted italic leading-relaxed border-t border-line/60 pt-4">
                      &ldquo;{student.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-line/40 flex items-center justify-between text-[11px] text-muted/70">
                    <span>Verified Placement</span>
                    <span className="text-accent">{student.batch}</span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. What Interview Prep Covers (8-Item Checklist) */}
      <section className="py-20 sm:py-28 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="What Our Interview Prep Covers"
            highlightWord="Covers"
            subtitle="We thoroughly evaluate and simulate real agency recruitment rounds so you walk into interviews with confidence."
          />

          <StaggerContainer
            staggerDelay={0.06}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {prepChecklist.map((item, index) => (
              <StaggerItem key={index} className="h-full flex">
                <Card
                  variant="surface"
                  className="p-6 flex flex-col justify-start group hover:border-primary/40"
                >
                  <div className="w-8 h-8 rounded-lg bg-light border border-primary/30 flex items-center justify-center text-accent mb-3.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Short Honest Note Card */}
      <section className="py-6 sm:py-10 bg-bg relative">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl bg-surface-2 border border-accent/30 p-6 sm:p-7 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-text text-sm sm:text-base mb-1">
                  Our Commitment to Transparency
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Placement support means preparation and introductions. Results depend on your effort and the market.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 sm:py-24 bg-surface-2 border-t border-line relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-[28px] bg-surface border border-line p-8 sm:p-14 text-center overflow-hidden">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.15] max-w-2xl mx-auto tracking-tight mb-4">
                Ready to take the next step in digital marketing?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Connect with our admissions desk to review course syllabi, campaign labs, and placement introduction pipelines.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <OpenModalButton
                  source="placement-cta"
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
