import Image from "next/image";
import { director, brand } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditorialButton } from "./EditorialButton";

export function Director() {
  return (
    <section data-bg="black" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-12 font-sans text-[11px] font-medium tracking-[0.22em] text-paper/50 uppercase sm:mb-16">
          {director.eyebrow}
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={director.image.src}
              alt={director.image.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_25%]"
            />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-between">
            <h2 className="text-balance font-sans text-[clamp(36px,6.4vw,68px)] leading-[1.05] font-extrabold tracking-[-0.02em] uppercase">
              {director.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-10">
              {director.name ? (
                <p className="mb-5 font-kr text-lg font-bold">{director.name}</p>
              ) : null}
              {director.body.map((p) => (
                <p key={p} className="mb-5 max-w-[44ch] text-[16px] leading-[1.85] text-paper/70">
                  {p}
                </p>
              ))}
              <EditorialButton href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" tone="on-dark" className="mt-4">
                {director.cta} →
              </EditorialButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
