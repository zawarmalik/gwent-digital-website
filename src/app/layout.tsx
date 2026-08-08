import type { Metadata } from "next";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Google Fonts' variable "Archivo" carries the width axis the PRD calls "Archivo Expanded";
// next/font/google doesn't expose custom axis values, so headings render at Archivo's default width.
const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-utility",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gwentdigital.co.uk"),
  title: {
    default: "Gwent Digital — Web Design & Business Automation, Newport",
    template: "%s | Gwent Digital",
  },
  description:
    "Websites and business automation for independent businesses in Newport, Cardiff and South Wales. Run by business owners, not marketers.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${instrumentSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="skip-link fixed left-2 top-[-100px] z-[100] rounded bg-oxide px-4 py-2 font-medium text-paper focus:top-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
