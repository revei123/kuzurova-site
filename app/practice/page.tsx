import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { PracticePreview } from "@/sections/practice";

export const metadata: Metadata = pageMeta({
  title: "Практика",
  description: "Демонстрационные разборы юридических ситуаций для прототипа сайта. Это не реальные дела.",
  path: "/practice",
});

export default function PracticePage() {
  return (
    <main id="main" className="pb-8">
      <Container className="pt-12 sm:pt-16">
        <Breadcrumbs items={[{ label: "Практика" }]} />
        <h1 className="serif text-[clamp(2.8rem,6vw,5rem)] font-medium leading-none">Практика</h1>
        <p className="mt-4 mb-4 max-w-xl leading-7 text-muted">Три демонстрационных материала. Они показывают структуру разбора и не описывают реальных клиентов.</p>
      </Container>
      <PracticePreview showTitle={false} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Практика", item: new URL("/practice", site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
