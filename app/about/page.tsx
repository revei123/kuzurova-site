import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { facts, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { Consultation } from "@/sections/consultation";

export const metadata: Metadata = pageMeta({
  title: "Обо мне",
  description: "Кузурова Дарья Дмитриевна, юрист в Минске. Прототип персонального сайта: без вымышленных достижений и стажа.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Обо мне" }]} />
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image src="/images/portrait.jpg" alt={site.portraitAlt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover object-[center_15%] saturate-[0.72]" />
            </div>
            <p className="mt-3 text-xs text-muted">Демонстрационный портрет. Это не фотография клиента.</p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.18em] text-muted">О СПЕЦИАЛИСТЕ</p>
            <h1 className="serif mt-4 text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[1.05]">
              В юридической работе для меня важно не просто дать ответ, а помочь человеку понять, что делать дальше.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
              <p>
                {site.name} — {site.role.toLowerCase()} в {site.city === "Минск" ? "Минске" : site.city}. Сайт собран как коммерческий прототип частной практики: спокойный тон, точные формулировки, без обещаний, которые нельзя подтвердить.
              </p>
              <p>
                Образование, стаж, число дел и имена клиентов здесь намеренно отсутствуют. Пока нет подтвержденных сведений, страница не превращает демонстрационный текст в биографию.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <li key={fact} className="border-t border-line pt-3">
                  {fact}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted">Демонстрационный материал. Перед публикацией замените портрет и добавьте только проверяемые сведения.</p>
          </div>
        </div>
      </Container>
      <Consultation />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Обо мне", item: new URL("/about", site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
