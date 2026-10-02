import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/data/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-serif-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Кузурова",
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "ru_BY",
    type: "website",
    siteName: site.name,
    images: [{ url: "/images/portrait.jpg", alt: site.portraitAlt }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-full bg-ivory text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2">
          К содержанию
        </a>
        <Header />
        {children}
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: site.name,
            description: site.description,
            url: site.url,
            areaServed: site.cityLine,
            address: {
              "@type": "PostalAddress",
              addressLocality: site.city,
              addressCountry: "BY",
            },
            employee: {
              "@type": "Person",
              name: site.name,
              jobTitle: site.role,
              address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "BY" },
            },
          }}
        />
      </body>
    </html>
  );
}
