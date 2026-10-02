import type { ContactPayload } from "@/types/content";

const methods = new Set(["phone", "email", "telegram"]);

export function validateContact(input: Partial<ContactPayload>) {
  if (input.company) return null;
  if (!input.name || input.name.trim().length < 2) return "Укажите имя.";
  if (!input.phone || input.phone.trim().length < 5) return "Укажите телефон.";
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return "Укажите корректный email.";
  if (!input.topic || input.topic.trim().length < 2) return "Укажите тему обращения.";
  if (!input.message || input.message.trim().length < 10) return "Опишите вопрос чуть подробнее.";
  if (!input.method || !methods.has(input.method)) return "Выберите способ связи.";
  if (!input.consent) return "Нужно согласие на обработку данных.";
  return null;
}
