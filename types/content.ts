export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  lead: string;
  paragraphs: string[];
  notes: string[];
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  problem: string;
  task: string;
  approach: string;
  result: string;
};

export type Review = {
  quote: string;
  year: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateISO: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export type ContactMethod = "phone" | "email" | "telegram";

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  method: ContactMethod;
  consent: boolean;
  company?: string;
};
