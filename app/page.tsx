import type { Metadata } from "next";
import { AboutPreview } from "@/sections/about";
import { Consultation } from "@/sections/consultation";
import { Hero } from "@/sections/hero";
import { Intro } from "@/sections/intro";
import { JournalPreview } from "@/sections/journal";
import { PracticePreview } from "@/sections/practice";
import { Principles } from "@/sections/principles";
import { Reviews } from "@/sections/reviews";
import { ServicesList } from "@/sections/services-list";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Intro />
      <ServicesList />
      <AboutPreview />
      <Principles />
      <PracticePreview />
      <Reviews />
      <JournalPreview />
      <Consultation />
    </main>
  );
}
