import { philosophy } from "@/data/content";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="about" data-bg="white" className="bg-paper py-24 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal>
          <h2 className="text-balance font-kr text-[clamp(26px,4.6vw,44px)] leading-[1.35] font-bold tracking-[-0.02em] [word-break:keep-all]">
            {philosophy.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <hr className="my-12 border-line-on-paper sm:my-16" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal delay={0.15}>
            <p className="font-sans text-[clamp(88px,17vw,200px)] leading-[0.82] font-extrabold tracking-[-0.03em]">
              {philosophy.big}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="md:pt-4">
            {philosophy.body.map((p) => (
              <p key={p} className="mb-5 max-w-[36ch] text-[15px] leading-[1.85] text-ink/65 sm:text-[16px]">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
