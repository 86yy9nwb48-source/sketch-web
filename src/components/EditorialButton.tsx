import type { AnchorHTMLAttributes } from "react";

export function EditorialButton({
  children,
  tone = "on-light",
  variant = "outline",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  tone?: "on-light" | "on-dark";
  variant?: "outline" | "text";
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex min-h-11 items-center gap-3 font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300";

  if (variant === "text") {
    const textTone = tone === "on-dark" ? "border-paper/40 text-paper hover:border-paper" : "border-ink/35 text-ink hover:border-ink";
    return (
      <a className={`${base} gap-2.5 border-b pb-1 text-[12.5px] normal-case tracking-normal ${textTone} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  const outlineTone =
    tone === "on-dark"
      ? "border border-paper text-paper hover:bg-paper hover:text-ink"
      : "border border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <a className={`${base} px-7 py-3.5 ${outlineTone} ${className}`} {...props}>
      {children}
    </a>
  );
}
