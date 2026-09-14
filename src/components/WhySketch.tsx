import { whySketch } from "@/data/content";
import { Reveal } from "./Reveal";

export function WhySketch() {
  return (
    <section data-bg="white" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-14 sm:mb-20">
          <h2 className="font-sans text-[clamp(48px,11vw,132px)] leading-[0.92] font-extrabold tracking-[-0.03em]">
            {whySketch.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div>
          {whySketch.items.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 0.1}
              className="grid gap-4 border-t border-line-on-paper py-10 sm:gap-10 sm:py-14 md:grid-cols-[0.3fr_0.7fr_1fr] md:items-center"
            >
              <span className="font-kr text-[15px] text-ink/40">{item.num}</span>
              <h3 className="font-sans text-[clamp(24px,3.4vw,36px)] font-extrabold tracking-[-0.01em] uppercase">
                {item.title}
              </h3>
              <p className="max-w-[46ch] text-[15.5px] leading-[1.8] text-ink/65">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
