import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

// Geometric sans standing in for the Futura PT the Squarespace site
// loaded from Typekit (that kit is locked to the Squarespace domain).
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
// Stands in for the site's Proxima Nova body text, also Typekit-only.
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Noel O. Gonzalez — Design Researcher",
  description:
    "Service design, research, and strategy work from Noel O. Gonzalez.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
