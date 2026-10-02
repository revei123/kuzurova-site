import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { ServicesList } from "@/sections/services-list";

export const metadata: Metadata = pageMeta({
  title: "Услуги",
  description: "Направления частной юридической практики в Минске: семья, договоры, споры, суд, анализ документов и консультации.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main" className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Услуги" }]} />
        <h1 className="serif text-[clamp(2.8rem,6vw,5rem)] font-medium leading-none">Услуги</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">Шесть направлений. Каждое начинается с разбора ситуации, а не с готового пакета.</p>
      </Container>
      <ServicesList heading="С чем можно обратиться" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Услуги", item: new URL("/services", site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
