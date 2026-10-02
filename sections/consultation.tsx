import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Consultation() {
  return (
    <section className="bg-night text-ivory">
      <Container className="py-20 sm:py-28">
        <h2 className="serif max-w-[12ch] text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.98]">Есть юридический вопрос?</h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-ivory/75">
          Опишите ситуацию. На консультации разберем обстоятельства и определим возможные дальнейшие действия.
        </p>
        <Link href="/contact" className="mt-10 inline-block border border-ivory px-6 py-3.5 text-sm transition-colors duration-500 hover:bg-ivory hover:text-night">
          Записаться на консультацию
        </Link>
      </Container>
    </section>
  );
}
