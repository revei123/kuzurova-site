"use client";

import { useState, type FormEvent } from "react";
import { validateContact } from "@/lib/contact";
import type { ContactMethod, ContactPayload } from "@/types/content";

const initial: ContactPayload = {
  name: "",
  phone: "",
  email: "",
  topic: "",
  message: "",
  method: "phone",
  consent: false,
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const problem = validateContact(values);
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error ?? "Не удалось отправить запрос.");
        return;
      }
      setSent(true);
    } catch {
      setError("Сеть недоступна. Попробуйте еще раз.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="max-w-xl border-t border-ink pt-8" role="status">
        <p className="text-xs tracking-[0.18em] text-muted">ЗАПРОС ПРИНЯТ</p>
        <h2 className="serif mt-4 text-4xl font-medium leading-tight sm:text-5xl">Спасибо. Я прочитаю обращение и отвечу.</h2>
        <p className="mt-6 leading-7 text-muted">
          Это прототип: сообщение остается в браузере и не уходит на почту. Форма уже обращается к <span className="text-ink">/api/contact</span>, куда позже можно подключить отправку.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-6" noValidate>
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Компания
        <input
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => setValues({ ...values, company: event.target.value })}
        />
      </label>
      <Field label="Имя" value={values.name} onChange={(name) => setValues((current) => ({ ...current, name }))} autoComplete="name" />
      <Field label="Телефон" value={values.phone} onChange={(phone) => setValues((current) => ({ ...current, phone }))} autoComplete="tel" />
      <Field label="Email" value={values.email} onChange={(email) => setValues((current) => ({ ...current, email }))} autoComplete="email" type="email" />
      <Field label="Тема обращения" value={values.topic} onChange={(topic) => setValues((current) => ({ ...current, topic }))} />
      <label className="grid gap-2 text-sm">
        Сообщение
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="border border-line bg-transparent px-3 py-3 text-base outline-none transition-colors duration-500 focus:border-wine"
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className="text-sm">Способ связи</legend>
        {(
          [
            ["phone", "Телефон"],
            ["email", "Email"],
            ["telegram", "Telegram"],
          ] as const
        ).map(([value, label]) => (
          <label key={value} className="flex items-center gap-3 text-sm">
            <input
              type="radio"
              name="method"
              value={value}
              checked={values.method === value}
              onChange={() => setValues((current) => ({ ...current, method: value as ContactMethod }))}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <label className="flex items-start gap-3 text-sm leading-6">
        <input
          type="checkbox"
          className="mt-1"
          checked={values.consent}
          onChange={(event) => setValues((current) => ({ ...current, consent: event.target.checked }))}
        />
        <span>
          Даю согласие на обработку персональных данных в соответствии с{" "}
          <a href="/privacy" className="draw">
            политикой конфиденциальности
          </a>
          .
        </span>
      </label>
      {error ? (
        <p role="alert" className="text-sm text-wine">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="justify-self-start border border-ink bg-ink px-6 py-3 text-sm text-ivory transition-colors duration-500 hover:bg-wine disabled:opacity-60"
      >
        {pending ? "Отправка…" : "Отправить запрос"}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      {label}
      <input
        required
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border border-line bg-transparent px-3 py-3 text-base outline-none transition-colors duration-500 focus:border-wine"
      />
    </label>
  );
}
