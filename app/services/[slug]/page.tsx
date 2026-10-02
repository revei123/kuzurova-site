import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { Consultation } from "@/sections/consultation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = new URL(`/services/${service.slug}`, site.url).toString();
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.summary, url, type: "website" },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const url = new URL(`/services/${service.slug}`, site.url).toString();

  return (
    <main id="main">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={[{ href: "/services", label: "Услуги" }, { label: service.title }]} />
        <p className="text-xs tracking-[0.18em] text-wine">{service.index}</p>
        <h1 className="serif mt-4 max-w-[14ch] text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.98]">{service.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{service.lead}</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)]">
          <div className="space-y-6 text-lg leading-8">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside>
            <p className="text-xs tracking-[0.16em] text-muted">НА КОНСУЛЬТАЦИИ</p>
            <ul className="mt-4 space-y-3 border-t border-line pt-4">
              {service.notes.map((note) => (
                <li key={note} className="border-b border-line pb-3 text-sm">
                  {note}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-block bg-wine px-5 py-3 text-sm text-ivory">
              Записаться на консультацию
            </Link>
          </aside>
        </div>
      </Container>
      <Consultation />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url },
            { "@type": "ListItem", position: 2, name: "Услуги", item: new URL("/services", site.url).toString() },
            { "@type": "ListItem", position: 3, name: service.title, item: url },
          ],
        }}
      />
    </main>
  );
}
