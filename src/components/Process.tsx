import Image from "next/image";
import { process } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditorialPlaceholder } from "./EditorialPlaceholder";

export function Process() {
  return (
    <section id="program" data-bg="white" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-14 sm:mb-20">
          <h2 className="font-sans text-[clamp(38px,8vw,96px)] leading-[0.96] font-extrabold tracking-[-0.02em] uppercase">
            {process.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:px-10 md:grid md:grid-cols-5 md:gap-0 md:overflow-visible md:px-10 [&::-webkit-scrollbar]:hidden">
          {process.steps.map((step, i) => (
            <div
              key={step.num}
              className={`w-[85vw] shrink-0 snap-start border-t border-line-on-paper py-8 pr-6 sm:w-[44vw] md:w-auto md:py-10 md:pr-8 ${
                i > 0 ? "md:border-l md:pl-8" : "md:pl-0"
              }`}
            >
              {step.image ? (
                <div className="relative mb-6 aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(min-width: 768px) 20vw, 44vw"
                    className={step.imagePosition ? `object-cover ${step.imagePosition}` : "object-cover"}
                  />
                </div>
              ) : (
                <EditorialPlaceholder ratio="4/3" tone="on-white" className="mb-6" />
              )}
              <span className="mb-4 block font-sans text-sm text-ink/40">{step.num}</span>
              <p className="mb-4 font-sans text-[15px] font-extrabold tracking-[-0.01em] uppercase">{step.en}</p>
              <p className="font-kr text-[14px] leading-[1.6] text-ink/65">
                {step.kr}
                <br />
                {step.desc}
              </p>
            </div>
          ))}
          <div className="w-px shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
