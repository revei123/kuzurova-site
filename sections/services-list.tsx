import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";

export function ServicesList({ heading = "Услуги" }: { heading?: string }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h2 className="serif text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none">{heading}</h2>
        <div className="mt-10 border-t border-line">
          {services.map((service) => (
            <article key={service.slug} className="service-row border-b border-line">
              <Link
                href={`/services/${service.slug}`}
                className="grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6 transition-colors duration-500 hover:text-wine sm:gap-8 sm:py-8"
              >
                <span className="pt-1 text-xs tracking-[0.16em] text-muted sm:pt-2">{service.index}</span>
                <span className="min-w-0">
                  <span className="serif block text-[clamp(1.7rem,3vw,2.7rem)] font-medium leading-none">{service.title}</span>
                  <span className="service-copy">
                    <span className="overflow-hidden">
                      <span className="mt-3 block max-w-xl text-sm leading-6 text-muted sm:text-base">{service.summary}</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="pt-1 text-lg sm:pt-3">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
