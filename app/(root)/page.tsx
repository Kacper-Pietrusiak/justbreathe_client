"use client";

import { Hero, TestSection, Benefits, BlogSection } from "@/components/index";

export default function Home() {
  return (
    <main className="w-scrren">
      <Hero />
      <TestSection />
      <Benefits />
      <BlogSection />
    </main>
  );
}
