import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllCaseStudySlugs,
  getCaseStudy,
  getCaseStudyImages,
} from "@/lib/content";

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
  const images = study.hasImages ? getCaseStudyImages(slug) : [];

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

      {images.length > 0 && (
        <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-black/5"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="prose-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {study.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
