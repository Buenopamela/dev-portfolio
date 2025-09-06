// src/app/services/page.tsx
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Services • Pamela Bueno" };

type Service = {
  title: string;
  bullets: string[];
  cta?: { label: string; href: string };
};

const services: Service[] = [
  {
    title: "Landing Page (Done-for-You)",
    bullets: [
      "1–3 sections (Hero, Features, Contact)",
      "Responsive, accessible, SEO-friendly",
      "Deployed on Vercel with your domain",
    ],
    cta: { label: "Get a quote", href: "/contact" },
  },
  {
    title: "Small Business Website",
    bullets: [
      "Home, Services, About, Contact",
      "Contact form + basic analytics",
      "Performance + SEO setup",
    ],
    cta: { label: "Book a call", href: "/contact" },
  },
  {
    title: "Bug Fix & UI Improvements",
    bullets: [
      "Layout/Styling fixes in Tailwind/CSS",
      "Accessibility & performance tweaks",
      "Minor components, forms, validations",
    ],
    cta: { label: "Request help", href: "/contact" },
  },
  {
    title: "Care Plan (Monthly)",
    bullets: [
      "Content updates & backups",
      "Uptime checks & minor fixes",
      "Performance reviews",
    ],
    cta: { label: "Join waitlist", href: "/contact" },
  },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Services
      </h1>
      <p className="mt-2 text-foreground/70">
        Pick what you need today—ship something real, then iterate.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>

            <ul className="mt-4 space-y-2 text-foreground/80">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent/80"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {s.cta && (
              <div className="mt-6">
                <Button href={s.cta.href}>{s.cta.label}</Button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
