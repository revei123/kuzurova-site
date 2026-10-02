import Link from "next/link";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="text-sm">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
          <p className="mt-1 text-sm text-muted">{site.city}</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="draw text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p>
            <Link href="/contact" className="draw text-muted hover:text-ink">
              Контакты
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="draw text-muted hover:text-ink">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
