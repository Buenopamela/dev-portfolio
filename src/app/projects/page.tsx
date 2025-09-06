// src/app/projects/page.tsx
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Projects • Pamela Bueno" };

type Project = {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Mayorista Demo (MVP)",
    description:
      "Simple product catalog with category filters and a WhatsApp CTA. Built fast for small-business needs.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://your-demo-url.netlify.app", // replace with real Casas Leo demo if needed
    repo: "https://github.com/Buenopamela/bulk-catalog-starter",
  },
  {
    title: "Casas Leo",
    description:
      "Real estate demo project showcasing properties with clean design, responsive layout, and lead capture forms.",
    stack: ["Next.js", "Tailwind CSS"],
    demo: "https://casasleo.vercel.app", // ✅ your deployed link
    repo: "https://github.com/Buenopamela/casas-leo", // ✅ your repo link
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-2 text-foreground/70">A sneak peek of my work</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-foreground">{p.title}</h2>
            <p className="mt-3 text-foreground/80">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 px-2 py-1 text-xs text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {p.demo && (
                <Button href={p.demo} newTab>
                  Live Demo
                </Button>
              )}
              {p.repo && (
                <Button href={p.repo} newTab variant="secondary">
                  Code on GitHub
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
