import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";

export default function HomePage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Design research, strategy, and service design work.
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          I'm a design researcher and strategist with a multi-disciplinary
          background in service design, industrial design, and architecture.
          Below is a collection of research, strategy, and product work.
        </p>
      </div>

      <ul className="divide-y divide-border border-t border-border">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-base font-medium group-hover:text-accent">
                {study.title}
              </span>
              <span className="text-sm text-muted sm:max-w-md sm:text-right">
                {study.subtitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
