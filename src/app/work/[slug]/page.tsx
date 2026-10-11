import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllCaseStudySlugs();
  if (!slugs.includes(slug)) notFound();

  const study = getCaseStudy(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {study.title}
        </h1>
        <p className="mt-3 text-lg text-muted leading-relaxed">
          {study.subtitle}
        </p>
      </header>

      <div className="prose-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // eslint-disable-next-line @next/next/no-img-element
            img: ({ alt, src }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={typeof src === "string" ? src : undefined}
                alt={alt ?? ""}
                loading="lazy"
                className="w-full rounded-md border border-border"
              />
            ),
          }}
        >
          {study.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
