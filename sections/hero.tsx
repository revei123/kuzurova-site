import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-1 gap-x-12 gap-y-8 py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:grid-rows-[auto_auto] lg:items-end lg:py-14">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="rise text-[0.72rem] tracking-[0.22em] text-muted">ЧАСТНАЯ ПРАКТИКА</p>
          <h1 className="serif rise mt-5 max-w-[14ch] text-[clamp(2.45rem,6vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.03em] [animation-delay:120ms]">
            Юридическая помощь, основанная на точности и понимании ситуации.
          </h1>
        </div>

        <figure className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="image-reveal relative aspect-[3/4] overflow-hidden bg-sand">
            <Image
              src="/images/portrait.jpg"
              alt={site.portraitAlt}
              fill
              priority
              loading="eager"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_18%] saturate-[0.72]"
            />
          </div>
          <figcaption className="mt-4 flex items-end justify-between gap-6 text-[0.68rem] tracking-[0.18em] text-muted">
            <span>
              MINSK / BELARUS
              <br />
              LEGAL PRACTICE
            </span>
            <span className="max-w-[12rem] text-right normal-case tracking-normal">Демонстрационный портрет</span>
          </figcaption>
        </figure>

        <div className="lg:col-start-1 lg:row-start-2 lg:max-w-[36rem] lg:pb-6">
          <p className="rise text-lg leading-8 text-muted [animation-delay:220ms]">
            {site.name} — юрист в Минске. Помощь в решении юридических вопросов, анализе документов и защите интересов клиента.
          </p>
          <div className="rise mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center [animation-delay:320ms]">
            <Link href="/contact" className="bg-wine px-6 py-3.5 text-sm text-ivory transition-colors duration-500 hover:bg-ink">
              Записаться на консультацию
            </Link>
            <Link href="/practice" className="draw text-sm">
              Посмотреть практику →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
