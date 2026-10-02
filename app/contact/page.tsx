import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Запись на консультацию",
  description: "Опишите юридический вопрос. Форма прототипа готова к подключению отправки, сейчас запрос не уходит на почту.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main" className="py-12 sm:py-16">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Breadcrumbs items={[{ label: "Контакты" }]} />
          <h1 className="serif text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[1.02]">Записаться на консультацию</h1>
          <p className="mt-6 max-w-md leading-7 text-muted">
            {site.name}. {site.role}, {site.city}. Коротко опишите ситуацию — этого достаточно, чтобы понять, о чем будет разговор.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Контакты", item: new URL("/contact", site.url).toString() },
          ],
        }}
      />
    </main>
  );
}
