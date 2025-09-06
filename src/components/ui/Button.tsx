// src/components/ui/Button.tsx
"use client";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean; // when true, clone the single child (e.g. <a>)
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  asChild,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 " +
    "font-semibold ring-1 transition focus:outline-none focus-visible:ring-2";

  const variants: Record<string, string> = {
    // Mint button with dark text → white on hover (forced, wins against parents)
    primary:
      "bg-accent ring-accent/30 " +
      "text-slate-900 !text-slate-900 " +
      "hover:bg-accent/80 hover:!text-white " +
      "focus-visible:ring-accent/60 disabled:opacity-50 disabled:cursor-not-allowed",

    // Subtle outline-style secondary
    secondary:
      "ring-white/10 text-foreground/80 hover:bg-white/5 hover:text-white " +
      "focus-visible:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed",

    // Minimal link-like button
    ghost:
      "text-foreground/70 hover:text-white hover:bg-white/5 " +
      "ring-transparent focus-visible:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const classes = [base, variants[variant], className]
    .filter(Boolean)
    .join(" ");

  // If asChild, clone the only child (e.g., <a>) and inject our classes there.
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ...child.props,
      className: [classes, child.props.className].filter(Boolean).join(" "),
    });
  }

  // Default: render a real <button>
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
