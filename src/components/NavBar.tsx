// src/components/NavBar.tsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-foreground">
          Pamela Bueno
        </Link>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "text-sm transition-colors",
                  pathname === l.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
