import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Intro() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="serif max-w-[18ch] text-[clamp(2.1rem,5vw,4.1rem)] font-medium leading-[1.05]">
            Юридический вопрос редко начинается с закона.
            <span className="block">Он начинается с конкретной ситуации.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-10 max-w-[38rem] text-lg leading-8 text-muted">
            Сначала факты, документы и то, что для человека действительно важно. Затем — спокойное объяснение, какие шаги возможны и чего пока обещать нельзя. Это частная практика, а не конвейер типовых ответов.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
