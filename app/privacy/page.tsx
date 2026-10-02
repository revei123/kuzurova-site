import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/ui/container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Политика конфиденциальности",
  description: "Демонстрационный текст о обработке данных на прототипе сайта юриста.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main" className="py-12 sm:py-16">
      <Container className="max-w-[760px]">
        <Breadcrumbs items={[{ label: "Политика конфиденциальности" }]} />
        <h1 className="serif text-5xl font-medium leading-tight">Политика конфиденциальности</h1>
        <div className="mt-8 space-y-5 leading-8 text-muted">
          <p>Демонстрационный материал. Перед публикацией замените этот текст документом, который соответствует реальному порядку обработки данных.</p>
          <p>
            Форма на странице контактов запрашивает имя, телефон, email, тему, сообщение и удобный способ связи. На прототипе эти сведения проверяются и не отправляются на внешний сервер или почту.
          </p>
          <p>Согласие отмечается отдельно. Без него запрос не принимается. Скрытое поле защищает форму от автоматических отправок.</p>
          <p>Портрет и иллюстрации — стоковые фотографии для визуального прототипа. Они не изображают Кузурову Дарью Дмитриевну.</p>
        </div>
      </Container>
    </main>
  );
}
