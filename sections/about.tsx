import Image from "next/image";
import Link from "next/link";
import { facts, site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function AboutPreview() {
  return (
    <section className="border-y border-line bg-paper py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src="/images/portrait.jpg"
              alt={site.portraitAlt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-[center_15%] saturate-[0.72]"
            />
          </div>
          <p className="mt-3 text-xs text-muted">Демонстрационный портрет</p>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-muted">О СПЕЦИАЛИСТЕ</p>
            <h2 className="serif mt-4 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              В юридической работе для меня важно не просто дать ответ, а помочь человеку понять, что делать дальше.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-xl leading-7 text-muted">
              {site.name}, {site.role.toLowerCase()}. {site.cityLine}. Конкретные сведения об образовании, стаже и делах на этом прототипе не публикуются: их нет как подтвержденных фактов.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <li key={fact} className="border-t border-line pt-3 text-sm">
                  {fact}
                </li>
              ))}
            </ul>
            <Link href="/about" className="draw mt-8 inline-block text-sm">
              Подробнее →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
