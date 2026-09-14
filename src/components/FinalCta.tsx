import { finalCta, brand } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditorialButton } from "./EditorialButton";

export function FinalCta() {
  return (
    <section id="contact" data-bg="black" className="bg-ink py-28 text-paper sm:py-44">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-6 font-sans text-[11px] font-medium tracking-[0.22em] text-paper/50 uppercase sm:mb-10">
          {finalCta.eyebrow}
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-balance font-sans text-[clamp(56px,15vw,180px)] leading-[0.88] font-extrabold tracking-[-0.03em] uppercase">
            {finalCta.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.18} className="mt-14 flex flex-col justify-between gap-10 border-t border-line-on-ink pt-10 sm:mt-20 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-xl font-semibold">{brand.name}</p>
            <p className="mt-1 font-sans text-[11px] font-medium tracking-[0.22em] text-paper/50 uppercase">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <EditorialButton href="#program" tone="on-dark">
              {finalCta.primary} →
            </EditorialButton>
            <EditorialButton href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" variant="text" tone="on-dark">
              {finalCta.secondary} →
            </EditorialButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
