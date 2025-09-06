// src/app/page.tsx
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Pamela • Developer Portfolio",
  description: "Minimal portfolio built with Next.js + Tailwind",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Avatar */}
      <Image
        src="/avatar.jpeg"
        alt="Illustrated avatar of Pamela"
        width={160}
        height={160}
        priority
        className="mx-auto h-40 w-40 rounded-full object-cover bg-slate-900 ring-2 ring-accent/60"
      />

      {/* Intro */}
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">
        Hi, I’m Pamela 👋
      </h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/80">
        Software developer focused on clean, modern, minimal web experiences.
        Available for freelance projects and collaborations.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild>
          <a href="#contact">Work with me</a>
        </Button>

        <Button variant="secondary" asChild>
          <a href="/projects">View Projects</a>
        </Button>
      </div>
    </main>
  );
}
