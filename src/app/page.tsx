import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";

export default function HomePage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-[1920px] px-6 pb-24 sm:px-10 md:px-[4%]">
      <ul className="grid grid-cols-1 gap-x-[3%] gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden bg-border">
                <Image
                  src={study.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                  priority={i < 3}
                  className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <h2 className="mt-5 px-2 text-center text-base font-light uppercase leading-relaxed tracking-[0.06em] text-foreground sm:text-lg md:text-xl">
                {study.cardTitle}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
