import Image from "next/image";
import { services } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditorialButton } from "./EditorialButton";
import { EditorialPlaceholder } from "./EditorialPlaceholder";

export function Services() {
  return (
    <section id="method" data-bg="white" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-14 flex items-end justify-between border-b border-line-on-paper pb-7 sm:mb-20">
          <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-ink/50 uppercase">{services.eyebrow}</p>
          <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-ink/30 uppercase">{services.eyebrowIndex}</p>
        </Reveal>

        <Reveal className="mb-16 sm:mb-24">
          <h2 className="text-balance font-kr text-[clamp(28px,5vw,52px)] leading-[1.25] font-bold tracking-[-0.02em]">
            {services.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div>
          {services.items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={item.num} delay={i * 0.08} className="border-t border-line-on-paper py-12 sm:py-16">
                <div className="mb-8 flex items-baseline gap-5 sm:mb-10">
                  <span className="font-kr text-[13px] text-ink/40">{item.num}</span>
                  <h3 className="font-sans text-[clamp(24px,3.6vw,38px)] leading-[1] font-extrabold tracking-[-0.01em] uppercase">
                    {item.title.join(" ")}
                  </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:gap-14">
                  <div className={reversed ? "md:order-2" : ""}>
                    {item.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <EditorialPlaceholder ratio="4/3" tone="on-white" label={`Service ${item.num}`} />
                    )}
                  </div>
                  <div className={`flex flex-col justify-center ${reversed ? "md:order-1" : ""}`}>
                    <p className="mb-4 font-kr text-[19px] leading-[1.5] font-semibold whitespace-pre-line">{item.tagline}</p>
                    <p className="mb-7 max-w-[42ch] text-[15px] leading-[1.8] text-ink/60">{item.desc}</p>
                    <EditorialButton href={item.href} variant="text" tone="on-light" className="w-fit">
                      {item.link} →
                    </EditorialButton>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
