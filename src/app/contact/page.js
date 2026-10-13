import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  Map,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Risezonic Academics admissions cell, schedule a campus visit, or request a free counselling callback.",
};

export default function ContactPage() {
  const contactCards = [
    {
      id: "phone",
      icon: Phone,
      label: "Call Us",
      value: siteConfig.contact.phone,
      subtext: "Direct admissions helpline",
      href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`,
      isLink: true,
    },
    {
      id: "email",
      icon: Mail,
      label: "Email Us",
      value: siteConfig.contact.email,
      subtext: "Syllabus and fee enquiries",
      href: `mailto:${siteConfig.contact.email}`,
      isLink: true,
    },
    {
      id: "address",
      icon: MapPin,
      label: "Visit Us",
      value: siteConfig.contact.address,
      subtext: "Campus classroom & media lab",
      href: null,
      isLink: false,
    },
    {
      id: "hours",
      icon: Clock,
      label: "Opening Hours",
      value: siteConfig.contact.hours,
      subtext: "Admissions office hours",
      href: null,
      isLink: false,
    },
  ];

  const contactFaqs = [
    {
      id: "visit-before-joining",
      question: "Can I visit before joining?",
      answer:
        "Yes, prospective students are welcome to visit our campus during official hours to tour our media labs and speak directly with academic mentors.",
    },
    {
      id: "free-demo-class",
      question: "Is there a free demo class?",
      answer:
        "Yes, we conduct free demo masterclasses every [week] where you can experience live campaign audits and inspect our course materials.",
    },
    {
      id: "how-soon-callback",
      question: "How soon will you call back?",
      answer:
        "Our admissions counsellors typically contact you within [2 to 4 hours] during standard operating hours, or the next morning if submitted late.",
    },
    {
      id: "online-learning-available",
      question: "Is online learning available?",
      answer:
        "Yes, all courses offer fully interactive live online cohorts alongside our in-person classroom batches in [City name].",
    },
  ];

  return (
    <div className="bg-bg text-text min-h-screen">
      {/* 1. Page Header */}
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
            <span className="text-accent font-medium">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-text leading-[1.12] tracking-tight mb-4">
              Talk to our <span className="text-accent">counsellors</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Tell us what you want to learn and we will call you back.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="py-16 sm:py-20 bg-bg relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;

              const content = (
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-accent/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs uppercase font-semibold text-muted tracking-wider mb-1">
                      {card.label}
                    </div>
                    <div className="text-base sm:text-lg font-heading font-bold text-text break-words group-hover:text-accent transition-colors">
                      {card.value}
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted/80 border-t border-line/60 pt-3">
                    {card.subtext}
                  </p>
                </div>
              );

              if (card.isLink) {
                return (
                  <StaggerItem key={card.id} className="h-full flex">
                    <a
                      href={card.href}
                      className="w-full block select-none"
                    >
                      <Card
                        variant="surface"
                        className="w-full h-full p-6 sm:p-7 group hover:border-primary/50 transition-colors"
                      >
                        {content}
                      </Card>
                    </a>
                  </StaggerItem>
                );
              }

              return (
                <StaggerItem key={card.id} className="h-full flex">
                  <Card
                    variant="surface"
                    className="w-full h-full p-6 sm:p-7 group hover:border-accent/40 transition-colors"
                  >
                    {content}
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* 3. Action Row */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <OpenModalButton
              source="contact-callback"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 shadow-xl shadow-primary/20 text-sm sm:text-base font-bold"
            >
              <span>Request a callback</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </OpenModalButton>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 text-white hover:border-accent hover:text-accent font-semibold transition-all text-sm sm:text-base active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-accent" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Map Block */}
      <section className="py-12 sm:py-16 bg-surface/30 border-y border-line relative">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="mb-8 text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text">
              Find Us in {siteConfig.contact.address.split(",")[1]?.trim() || "the Knowledge Hub"}
            </h2>
          </div>

          <Reveal>
            {/* 
              MAP EMBED BLOCK:
              Replace the placeholder below with your real Google Maps iframe embed when available:
              <iframe 
                src="https://www.google.com/maps/embed?..." 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[24px] bg-gradient-to-br from-surface-2 via-surface to-bg border border-accent/30 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
              <div className="absolute inset-0">
                <SiteImage
                  image={images.contactMap}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:20px_20px]"
              />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-surface-2 border border-line text-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-lg">
                <Map className="w-8 h-8" />
              </div>

              <div className="relative z-10 max-w-md">
                <span className="text-base sm:text-lg font-heading font-bold text-text block mb-1">
                  {siteConfig.contact.mapLabel}
                </span>
                <span className="text-xs sm:text-sm text-muted block mb-3">
                  {siteConfig.contact.address}
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono">
                  <span>GPS / Navigation Coordinates Ready</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Short FAQ (4 items accordion) */}
      <section className="py-20 sm:py-24 bg-bg relative">
        <div className="max-w-[880px] mx-auto px-5 sm:px-8">
          <SectionHeading
            title="Common Questions Before You Visit"
            highlightWord="Questions"
            subtitle="Quick answers regarding counselling appointments, campus tours, and callback response times."
          />

          <div className="mt-8">
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-16 sm:py-24 bg-surface-2/30 border-t border-line relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-[28px] bg-gradient-to-b from-surface via-surface to-surface-2 border border-accent/40 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[100px] pointer-events-none"
              />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.15] max-w-2xl mx-auto tracking-tight mb-4">
                Ready to speak with our admissions team?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Schedule your free counselling slot today. We will help you select the ideal curriculum track for your experience level.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <OpenModalButton
                  source="contact-cta"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 font-bold shadow-xl shadow-primary/25 text-base"
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
