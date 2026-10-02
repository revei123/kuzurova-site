import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { cases, getCase } from "@/data/cases";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  const url = new URL(`/practice/${item.slug}`, site.url).toString();
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: url },
    openGraph: { title: item.title, description: item.excerpt, url, images: [{ url: item.image, alt: item.imageAlt }] },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const blocks = [
    ["Проблема", item.problem],
    ["Задача", item.task],
    ["Подход", item.approach],
    ["Итог", item.result],
  ];

  return (
    <main id="main" className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ href: "/practice", label: "Практика" }, { label: item.title }]} />
        <p className="text-xs tracking-[0.16em] text-muted">{item.category}</p>
        <h1 className="serif mt-3 text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[0.98]">{item.title}</h1>
        <p className="mt-4 text-sm text-wine">Демонстрационный кейс для прототипа</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-sand">
          <Image src={item.image} alt={item.imageAlt} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="mt-12 grid gap-10">
          {blocks.map(([title, text]) => (
            <section key={title} className="grid gap-3 border-t border-line pt-6 lg:grid-cols-12">
              <h2 className="text-xs tracking-[0.16em] text-muted lg:col-span-3">{title}</h2>
              <p className="text-lg leading-8 lg:col-span-9">{text}</p>
            </section>
          ))}
        </div>
        <Link href="/contact" className="mt-12 inline-block bg-wine px-5 py-3 text-sm text-ivory">
          Обсудить свою ситуацию
        </Link>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Практика", item: new URL("/practice", site.url).toString() },
            { "@type": "ListItem", position: 3, name: item.title, item: new URL(`/practice/${item.slug}`, site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
