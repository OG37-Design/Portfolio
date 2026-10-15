"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Me" },
];

function isActive(pathname: string, href: string) {
  // Case study pages live under /work, so they keep "Work" highlighted.
  if (href === "/") return pathname === "/" || pathname.startsWith("/work");
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto flex max-w-[1920px] flex-col-reverse gap-6 px-6 pt-10 pb-12 sm:px-10 md:flex-row md:items-center md:justify-between md:px-[4%] md:pt-16 md:pb-24">
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xl font-semibold uppercase tracking-wide sm:text-2xl md:text-[2.75rem]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(pathname, link.href)
                  ? "text-foreground"
                  : "text-nav transition-colors hover:text-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="text-4xl font-bold uppercase tracking-wide sm:text-5xl md:text-[4.5rem]"
        >
          Noel O. G.
        </Link>
      </div>
    </header>
  );
}
