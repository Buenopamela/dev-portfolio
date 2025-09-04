// src/app/projects/page.tsx
export const metadata = { title: "Projects – Pamela Bueno" };

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
    demo: "https://your-demo-url.netlify.app", // replace with real URL
    repo: "https://github.com/Buenopamela/bulk-catalog-starter",
  },
  {
    title: "Dev Portfolio",
    description:
      "This site. Minimal Next.js + Tailwind setup with a dark theme, CTAs, and deploys on Vercel.",
    stack: ["Next.js", "Tailwind CSS"],
    demo: "https://your-vercel-url.vercel.app", // auto after deploy
    repo: "https://github.com/Buenopamela/dev-portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-foreground/70">A sneak peek of my work</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]"
            >
              <h2 className="text-lg font-medium">{p.title}</h2>
              <p className="mt-2 text-sm text-foreground/80">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/15 px-2 py-1 text-xs text-foreground/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg
               bg-accent px-4 py-2 text-sm font-semibold
               !text-slate-900 shadow-md ring-1 ring-accent/30 transition
                hover:bg-accent/80 hover:!text-white focus:outline-none
                focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    Live Demo
                  </a>
                )}

                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg
                               px-4 py-2 text-sm font-medium
                               text-foreground/70 ring-1 ring-white/20 hover:bg-white/10"
                  >
                    Code on GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
