import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main id="main" className="py-24">
      <Container>
        <p className="text-xs tracking-[0.18em] text-muted">404</p>
        <h1 className="serif mt-4 max-w-[12ch] text-5xl font-medium leading-[1.02] sm:text-7xl">Страница не найдена</h1>
        <p className="mt-6 max-w-md leading-7 text-muted">Возможно, адрес изменился. Вернитесь к началу или откройте раздел, который нужен.</p>
        <Link href="/" className="draw mt-8 inline-block text-sm">
          На главную →
        </Link>
      </Container>
    </main>
  );
}
