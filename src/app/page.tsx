import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-[1.1fr_0.9fr]">
        {/* Text (Hero/About) */}
        <div>
          <p className="text-sm uppercase tracking-wider text-accent">
            Web Developer
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            Hi, I’m Pamela
          </h1>

          <p className="mt-4 max-w-prose text-lg text-foreground/80">
            I help businesses and entrepreneurs{" "}
            <strong className="text-foreground">
              turn ideas into professional websites
            </strong>{" "}
            that look great and perform even better. From landing pages to full
            websites, I build solutions that are{" "}
            <strong className="text-foreground">
              reliable, minimalistic, and easy to maintain
            </strong>
            .
          </p>

          <p className="mt-4 max-w-prose text-foreground/80">
            Let’s work together to bring your project online.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 not-prose">
            {/* Work with me — mint bg + dark text, white on hover (forced) */}
            <Link
              href="#contact"
              className="
                inline-flex items-center justify-center rounded-xl
                bg-accent px-6 py-3 font-semibold
                !text-slate-900 shadow-md ring-1 ring-accent/30 transition
                hover:bg-accent/80 hover:!text-white focus:outline-none
                focus-visible:ring-2 focus-visible:ring-accent/60
              "
            >
              Work with me
            </Link>

            {/* View Projects — unchanged */}
            <Link
              href="#projects"
              className="
                inline-flex items-center justify-center rounded-xl
                px-6 py-3 font-semibold
                text-accent ring-1 ring-accent/40
                hover:bg-accent/10 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-accent/40
              "
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto h-48 w-48 sm:h-64 sm:w-64">
          {/* subtle glow */}
          <div className="absolute -inset-3 -z-10 rounded-full bg-accent/10 blur-2xl" />
          <Image
            src="/avatar.jpeg"
            alt="Illustrated avatar of Pamela"
            fill
            priority
            className="rounded-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            sizes="(max-width: 640px) 12rem, 16rem"
          />
        </div>
      </div>
    </section>
  );
}
