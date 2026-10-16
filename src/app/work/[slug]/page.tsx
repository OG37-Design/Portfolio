import {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactNode,
} from "react";
import type { Element } from "hast";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

/** True when a paragraph holds nothing but images (a gallery row). */
function isImageRow(children: ReactNode) {
  const items = Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === ""),
  );
  return (
    items.length > 1 &&
    items.every((child) => isValidElement(child) && child.type === MarkdownImage)
  );
}

/**
 * A paragraph holding only a "[Video: title](player url)" link is a
 * video block carried over from Squarespace; render it as an embed.
 */
function videoEmbed(node: Element | undefined) {
  const kids = node?.children.filter(
    (k) => !(k.type === "text" && k.value.trim() === ""),
  );
  const link = kids?.length === 1 ? kids[0] : undefined;
  if (link?.type !== "element" || link.tagName !== "a") return null;
  const src = String(link.properties.href ?? "");
  if (!/^https:\/\/(player\.vimeo\.com|www\.youtube\.com)\//.test(src)) {
    return null;
  }
  const text = link.children[0]?.type === "text" ? link.children[0].value : "";
  return { src, title: text.replace(/^Video:\s*/, "") || "Video" };
}

function MarkdownImage({ src, alt }: ComponentProps<"img">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      loading="lazy"
      className="block w-full"
    />
  );
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
  // Pages carried over from Squarespace open with their own title.
  const hasOwnTitle = /^\s*# /.test(study.content);

  return (
    <article className="mx-auto max-w-[1050px] px-6 pb-24 sm:px-10">
      <hr className="mb-12 border-border" />

      {!hasOwnTitle && (
        <header className="prose-content">
          <h1>{study.title}</h1>
          <h2>{study.subtitle}</h2>
        </header>
      )}

      <div className="prose-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: MarkdownImage,
            p: ({ children, node }) => {
              const video = videoEmbed(node);
              if (video) {
                return (
                  <div className="video-embed">
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              }
              return isImageRow(children) ? (
                <div
                  className="image-row"
                  style={{
                    gridTemplateColumns: `repeat(${
                      Children.toArray(children).filter(isValidElement).length
                    }, minmax(0, 1fr))`,
                  }}
                >
                  {children}
                </div>
              ) : (
                <p>{children}</p>
              );
            },
          }}
        >
          {study.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
