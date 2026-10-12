import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coursePlans, moduleGroups } from "@/data/courses";
import { faqs } from "@/data/faqs";
import { notFound } from "next/navigation";

export const instant = false;

export async function generateStaticParams() {
  return coursePlans.map((plan) => ({
    slug: plan.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const plan = coursePlans.find((coursePlan) => coursePlan.slug === slug);
  if (!plan) return { title: "Course Not Found" };

  return {
    title: `${plan.name} Course - Digital Marketing`,
    description: plan.summary,
  };
}

const tools = ["Google Ads", "GA4", "Meta Business", "WordPress", "Canva"];

const faqItems = faqs.map((faq) => ({
  ...faq,
  answer: <div className="text-lg">{faq.answer}</div>,
}));

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const plan = coursePlans.find((coursePlan) => coursePlan.slug === slug);

  if (!plan) {
    notFound();
  }

  const curriculum = moduleGroups
    .filter((group) => plan.includedModuleGroupIds.includes(group.id))
    .map((group) => ({
      id: group.id,
      title: group.title,
      answer: (
        <div className="space-y-4 text-lg">
          <p>{group.description}</p>
          <div>
            <h3 className="font-semibold text-text">Topics covered</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {group.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text">Tools in this module</h3>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    }));
  const careerGroup = plan.includedModuleGroupIds.includes("career")
    ? moduleGroups.find((group) => group.id === "career")
    : undefined;

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        <Link href="/courses" className="hover:text-accent">
          Courses
        </Link>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        <span aria-current="page" className="text-text">
          {plan.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-16 lg:col-span-2">
          <header>
            <h1 className="text-4xl font-heading font-bold text-text">
              {plan.name} course
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Badge variant="muted" className="!text-sm">
                {plan.level}
              </Badge>
              <p className="text-lg text-muted">
                Duration: <span className="text-text">{plan.duration}</span>
              </p>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {plan.summary}
            </p>
            <OpenModalButton
              source={`plan-${plan.slug}`}
              course={plan.slug}
              variant="outline"
              className="mt-6"
            >
              Enquire now
            </OpenModalButton>
          </header>

          <section>
            <SectionHeading
              title="Curriculum"
              subtitle="Explore the module groups included in this plan."
              align="left"
              className="mb-8 [&_p]:!text-lg"
            />
            <Accordion items={curriculum} glow={false} />
          </section>

          <section>
            <SectionHeading
              title="What you will be able to do"
              subtitle="Key skills and outcomes covered by this course."
              align="left"
              className="mb-8 [&_p]:!text-lg"
            />
            <ul className="list-disc space-y-3 pl-5 text-lg text-muted">
              {plan.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading
              title="Tools you will work with"
              subtitle="Platforms and tools featured in the learning experience."
              align="left"
              className="mb-8 [&_p]:!text-lg"
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-xl border border-line bg-surface-2 p-4 text-lg text-text"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading
              title="Career outcomes"
              subtitle="Explore the career direction and support included in this plan."
              align="left"
              className="mb-8 [&_p]:!text-lg"
            />
            <Card hoverEffect={false} className="p-6">
              <p className="text-lg text-text">
                <span className="font-semibold">Target role:</span>{" "}
                {plan.targetRole}
              </p>
              <p className="mt-3 text-lg text-text">
                <span className="font-semibold">Salary range (LPA):</span>{" "}
                {plan.salaryRange}
              </p>
              {careerGroup && (
                <ul className="mt-5 list-disc space-y-2 pl-5 text-lg text-muted">
                  {careerGroup.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              )}
            </Card>
          </section>

          <section>
            <SectionHeading
              title="Frequently asked questions"
              subtitle="Answers to common questions about our courses."
              align="left"
              className="mb-8 [&_p]:!text-lg"
            />
            <Accordion items={faqItems} glow={false} />
          </section>
        </div>

        <aside className="hidden lg:block">
          <Card
            hoverEffect={false}
            className="sticky top-24 space-y-5 p-6"
          >
            <h2 className="text-2xl font-heading font-bold text-text">
              {plan.name}
            </h2>
            <p className="text-lg text-muted">{plan.summary}</p>
            <p className="text-lg text-text">
              <span className="font-semibold">Duration:</span> {plan.duration}
            </p>
            <p className="text-lg text-text">
              <span className="font-semibold">Target role:</span>{" "}
              {plan.targetRole}
            </p>
            <p className="text-lg text-text">
              <span className="font-semibold">Salary range (LPA):</span>{" "}
              {plan.salaryRange}
            </p>
            <OpenModalButton
              source={`plan-${plan.slug}`}
              course={plan.slug}
              variant="outline"
              className="w-full"
            >
              Enquire now
            </OpenModalButton>
          </Card>
        </aside>
      </div>
    </main>
  );
}
