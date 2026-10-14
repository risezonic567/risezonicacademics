import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { coursePlans, moduleGroups } from "@/data/courses";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Digital Marketing Courses & Programs",
  description:
    "Explore digital marketing courses, compare program features, and find the right track for your goals.",
};

const comparisonRows = [
  { label: "Duration", value: (plan) => plan.duration },
  { label: "Modules", value: (plan) => plan.features.modulesCount },
  { label: "Live classes", value: (plan) => plan.features.liveClasses },
  { label: "Projects", value: (plan) => plan.features.projects },
  { label: "Internship", value: (plan) => plan.features.internship },
  { label: "Certificate", value: (plan) => plan.features.certificate },
  { label: "Support", value: (plan) => plan.features.support },
];

const faqItems = faqs.map((faq) => ({
  ...faq,
  answer: <div className="text-lg">{faq.answer}</div>,
}));

const moduleItems = moduleGroups.map((group) => ({
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
        <h3 className="font-semibold text-text">Tools and platforms</h3>
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {group.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  ),
}));

export default function CoursesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        <span aria-current="page" className="text-text">
          Courses
        </span>
      </nav>

      <header className="mb-14">
        <h1 className="text-4xl font-heading font-bold text-text">Our courses</h1>
        <p className="mt-4 text-lg text-muted">
          Compare practical learning tracks and choose the course that fits your
          goals.
        </p>
      </header>

      <section aria-labelledby="course-plans-heading">
        <SectionHeading
          title="Choose your course"
          highlightWord="course"
          subtitle="Explore each plan, its key learning outcomes, and career focus."
          align="left"
          className="[&_p]:!text-lg"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coursePlans.map((plan) => (
            <Card
              key={plan.slug}
              hoverEffect={false}
              className="flex h-full flex-col p-6"
            >
              <div className="flex-1">
                <div className="relative mb-5 aspect-video max-h-40 overflow-hidden rounded-lg">
                  <SiteImage
                    image={plan.image}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text">
                  <Link
                    href={`/courses/${plan.slug}`}
                    className="hover:text-accent"
                  >
                    {plan.name}
                  </Link>
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Badge variant="muted" className="!text-sm">
                    {plan.level}
                  </Badge>
                  {plan.isPopular && (
                    <Badge variant="primary" className="!text-sm">
                      Most popular
                    </Badge>
                  )}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {plan.summary}
                </p>
                <p className="mt-4 text-lg text-text">
                  <span className="font-semibold">Duration:</span> {plan.duration}
                </p>
                <p className="mt-2 text-lg text-text">
                  <span className="font-semibold">Target role:</span>{" "}
                  {plan.targetRole}
                </p>
                <p className="mt-2 text-lg text-text">
                  <span className="font-semibold">Salary range (LPA):</span>{" "}
                  {plan.salaryRange}
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-lg text-muted">
                  {plan.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5">
                <Link
                  href={`/courses/${plan.slug}`}
                  className="text-base font-semibold text-accent hover:underline"
                >
                  View course details
                </Link>
                <OpenModalButton
                  source={`plan-${plan.slug}`}
                  course={plan.slug}
                  variant="outline"
                  className="w-full"
                >
                  Enquire now
                </OpenModalButton>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          title="Explore module groups"
          highlightWord="module"
          subtitle="Review the topics and tools covered in each learning track."
          align="left"
          className="[&_p]:!text-lg"
        />
        <Accordion items={moduleItems} glow={false} />
      </section>

      <section className="mt-20">
        <SectionHeading
          title="Compare course plans"
          highlightWord="course"
          subtitle="Compare the included features across each available plan."
          align="left"
          className="[&_p]:!text-lg"
        />
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-surface-2">
              <tr>
                <th scope="col" className="p-4 text-lg font-semibold text-text">
                  Feature
                </th>
                {coursePlans.map((plan) => (
                  <th
                    key={plan.slug}
                    scope="col"
                    className="p-4 text-lg font-semibold text-text"
                  >
                    <Link
                      href={`/courses/${plan.slug}`}
                      className="hover:text-accent"
                    >
                      {plan.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th
                    scope="row"
                    className="p-4 text-lg font-semibold text-text"
                  >
                    {row.label}
                  </th>
                  {coursePlans.map((plan) => (
                    <td key={plan.slug} className="p-4 text-lg text-muted">
                      {row.value(plan) || "[To be confirmed]"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          title="Frequently asked questions"
          highlightWord="questions"
          subtitle="Answers to common questions about our courses."
          align="left"
          className="[&_p]:!text-lg"
        />
        <Accordion items={faqItems} glow={false} />
      </section>

      <section className="mt-20 rounded-2xl border border-line bg-surface-2 p-8 sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-heading font-bold text-text">
            Ready to choose your course?
          </h2>
          <p className="mt-3 text-lg text-muted">
            Talk with our team about your learning goals and the right track for
            you.
          </p>
          <OpenModalButton
            source="courses-cta"
            course="not-sure"
            variant="outline"
            className="mt-6"
          >
            Enquire now
          </OpenModalButton>
        </div>
      </section>
    </main>
  );
}
