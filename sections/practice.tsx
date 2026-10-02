import Link from "next/link";
import { cases } from "@/data/cases";
import { Container } from "@/components/ui/container";

export function PracticePreview({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        {showTitle ? (
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="serif text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none">Практика</h2>
            <Link href="/practice" className="draw hidden text-sm sm:inline">
              Все материалы →
            </Link>
          </div>
        ) : null}
        <div className="border-t border-line">
          {cases.map((item) => (
            <article key={item.slug} className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-10">
              <p className="serif text-5xl font-medium leading-none text-wine lg:col-span-2">{item.index}</p>
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.16em] text-muted">{item.category}</p>
                <h3 className="serif mt-2 text-3xl font-medium leading-tight sm:text-4xl">{item.title}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="leading-7 text-muted">{item.excerpt}</p>
                <Link href={`/practice/${item.slug}`} className="draw mt-5 inline-block text-sm">
                  Подробнее →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
