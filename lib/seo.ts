import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(input.path, site.url).toString();
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${input.title} — Кузурова`,
      description: input.description,
      url,
      locale: "ru_BY",
      type: "website",
      siteName: site.name,
      images: [{ url: "/images/portrait.jpg", alt: site.portraitAlt }],
    },
  };
}
