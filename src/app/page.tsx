import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24 text-center">
        <Image
          src="/avatar.jpeg"
          alt="Illustrated avatar of Pamela"
          width={160}
          height={160}
          priority
          className="mx-auto h-40 w-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          sizes="(max-width: 640px) 160px, 160px"
        />

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Hi, I’m Pamela 👋
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Software developer focused on clean, modern, minimal web experiences.
          Available for freelance projects and collaborations.
        </p>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-6 pb-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="" width={16} height={16} />
          Learn
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="" width={16} height={16} />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
