import Image from "next/image";
import { imageIndex } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditorialPlaceholder } from "./EditorialPlaceholder";

export function ImageIndex() {
  return (
    <section data-bg="black" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-4 font-sans text-[11px] font-medium tracking-[0.22em] text-paper/50 uppercase">
          {imageIndex.eyebrow}
        </Reveal>
        <Reveal delay={0.05} className="mb-10 sm:mb-16">
          <h2 className="text-balance font-kr text-[clamp(28px,5vw,52px)] leading-[1.25] font-bold tracking-[-0.02em]">
            {imageIndex.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:gap-6 sm:px-10 [&::-webkit-scrollbar]:hidden">
          {imageIndex.items.map((item) => (
            <div key={item.num} className="w-[85vw] shrink-0 snap-start sm:w-[42vw] lg:w-[30vw]">
              <div className="relative">
                {item.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 85vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <EditorialPlaceholder ratio="4/5" tone="on-black" label={`Index ${item.num}`} />
                )}
                <span className="absolute top-4 left-4 font-sans text-[13px] font-semibold tracking-[0.08em] text-paper/70">
                  {item.num}
                </span>
              </div>
              <div className="mt-5 border-t border-line-on-ink pt-5">
                <h3 className="font-sans text-[22px] leading-[1.05] font-extrabold tracking-[-0.01em] uppercase">
                  {item.title.join(" ")}
                </h3>
                <p className="mt-3 font-kr text-[14px] leading-[1.45] font-semibold whitespace-pre-line text-paper/85">
                  {item.tagline}
                </p>
                <p className="mt-2 text-[13px] leading-[1.6] text-paper/50">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="w-px shrink-0 sm:w-6" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
