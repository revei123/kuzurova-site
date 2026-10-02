import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Журнал",
  description: "Демонстрационные заметки о договорах, консультации и подготовке к разговору с юристом.",
  path: "/blog",
});

export default function BlogPage() {
  const [feature, ...rest] = articles;
  return (
    <main id="main" className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Журнал" }]} />
        <h1 className="serif text-[clamp(2.8rem,6vw,5rem)] font-medium leading-none">Журнал</h1>
        <p className="mt-4 max-w-xl text-muted">Заметки для прототипа. Это не консультация и не разбор вашего документа.</p>
        <article className="mt-12 grid items-end gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <Link href={`/blog/${feature.slug}`} className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image src={feature.image} alt={feature.imageAlt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </Link>
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.16em] text-muted">
              {feature.category} / <time dateTime={feature.dateISO}>{feature.date}</time>
            </p>
            <h2 className="serif mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              <Link href={`/blog/${feature.slug}`} className="draw">
                {feature.title}
              </Link>
            </h2>
            <p className="mt-4 leading-7 text-muted">{feature.excerpt}</p>
          </div>
        </article>
        <div className="mt-8 border-t border-line">
          {rest.map((article) => (
            <article key={article.slug} className="border-b border-line">
              <Link href={`/blog/${article.slug}`} className="grid gap-2 py-5 sm:grid-cols-[9rem_9rem_1fr_auto] sm:items-baseline sm:gap-6">
                <span className="text-xs tracking-[0.14em] text-muted">{article.category}</span>
                <time dateTime={article.dateISO} className="text-xs text-muted">
                  {article.date}
                </time>
                <span className="serif text-2xl font-medium leading-tight">{article.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Журнал", item: new URL("/blog", site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
