import { principles } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Principles() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <Reveal key={item.index} delay={index * 70}>
              <p className="text-xs tracking-[0.18em] text-wine">{item.index}</p>
              <h2 className="serif mt-4 text-3xl font-medium leading-tight">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
