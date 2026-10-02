import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { Container } from "@/components/ui/container";

export function JournalPreview() {
  const [feature, ...rest] = articles;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="serif text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none">Журнал</h2>
          <Link href="/blog" className="draw text-sm">
            Все статьи →
          </Link>
        </div>
        <article className="grid items-end gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <Link href={`/blog/${feature.slug}`} className="group lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.16em] text-muted">
              {feature.category}
              <span className="mx-2">/</span>
              <time dateTime={feature.dateISO}>{feature.date}</time>
            </p>
            <h3 className="serif mt-4 text-4xl font-medium leading-[1.05] sm:text-5xl">
              <Link href={`/blog/${feature.slug}`} className="draw">
                {feature.title}
              </Link>
            </h3>
            <p className="mt-5 leading-7 text-muted">{feature.excerpt}</p>
          </div>
        </article>
        <div className="mt-8 border-t border-line">
          {rest.slice(0, 4).map((article) => (
            <article key={article.slug} className="border-b border-line">
              <Link href={`/blog/${article.slug}`} className="grid gap-2 py-5 transition-colors duration-500 hover:text-wine sm:grid-cols-[9rem_8rem_1fr_auto] sm:items-baseline sm:gap-6">
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
    </section>
  );
}
