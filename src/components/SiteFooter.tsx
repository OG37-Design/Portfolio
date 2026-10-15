import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-8 text-sm text-muted">
        <p>Noel O. Gonzalez — Design Researcher, Strategist, Designer</p>
        <p>
          <a href="mailto:noelog37@gmail.com" className="hover:text-foreground">
            noelog37@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/noel-o-gonzalez"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <Link href="/resume" className="hover:text-foreground">
            Resume
          </Link>
        </p>
      </div>
    </footer>
  );
}
