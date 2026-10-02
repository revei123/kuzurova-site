import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Reviews() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container className="grid gap-16">
        {reviews.map((review, index) => (
          <Reveal key={review.quote}>
            <figure className={index === 0 ? "" : "border-t border-line pt-12"}>
              <blockquote>
                <p className={`serif font-medium leading-[1.15] ${index === 0 ? "text-[clamp(1.8rem,4vw,3.3rem)]" : "text-[clamp(1.45rem,2.5vw,2.1rem)]"}`}>
                  «{review.quote}»
                </p>
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.16em] text-muted">
                ДЕМОНСТРАЦИОННЫЙ ОТЗЫВ
                <span className="mx-2">/</span>
                {review.year}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
