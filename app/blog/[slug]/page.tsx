import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { articles, getArticle } from "@/data/articles";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = new URL(`/blog/${article.slug}`, site.url).toString();
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.dateISO,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = new URL(`/blog/${article.slug}`, site.url).toString();

  return (
    <main id="main" className="py-12 sm:py-16">
      <Container className="max-w-[820px]">
        <Breadcrumbs items={[{ href: "/blog", label: "Журнал" }, { label: article.title }]} />
        <p className="text-xs tracking-[0.16em] text-muted">
          {article.category} / <time dateTime={article.dateISO}>{article.date}</time>
        </p>
        <h1 className="serif mt-4 text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[1.02]">{article.title}</h1>
        <p className="mt-4 text-sm text-wine">Демонстрационная статья</p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-sand">
          <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 820px) 820px, 100vw" className="object-cover" />
        </div>
        <div className="mt-10 space-y-6 text-lg leading-8">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          datePublished: article.dateISO,
          description: article.excerpt,
          author: { "@type": "Person", name: site.name },
          image: new URL(article.image, site.url).toString(),
          mainEntityOfPage: url,
        }}
      />
    </main>
  );
}
