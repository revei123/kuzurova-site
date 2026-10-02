"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory">
      <div className="mx-auto grid h-[4.5rem] w-full max-w-[1180px] grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="min-w-0 justify-self-start leading-tight">
          <span className="block text-[0.78rem] font-medium tracking-[0.18em]">КУЗУРОВА</span>
          <span className="block text-[0.78rem] text-muted">{site.givenName}</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Основная навигация">
          <ul className="flex items-center gap-8 text-[0.92rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                  className="draw text-ink/80 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3 lg:gap-0">
          <Link href="/contact" className="border border-ink px-4 py-2 text-[0.82rem] tracking-wide transition-colors duration-500 hover:bg-ink hover:text-ivory">
            Записаться
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px bg-ink transition duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-[4.5rem] z-30 bg-ivory px-6 py-10 lg:hidden">
          <nav aria-label="Мобильная навигация">
            <ul className="flex flex-col gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="serif text-4xl font-medium leading-none">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
