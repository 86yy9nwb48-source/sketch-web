import { problem } from "@/data/content";
import { Reveal } from "./Reveal";

export function ProblemStatement() {
  return (
    <section data-bg="black" className="bg-ink py-16 text-paper sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal>
          <h2 className="text-balance max-w-[560px] font-kr text-[clamp(28px,6.2vw,58px)] leading-[1.25] font-bold tracking-[-0.02em] [word-break:keep-all]">
            {problem.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 max-w-[46ch] sm:mt-14">
          {problem.body.map((p) => (
            <p key={p} className="mb-4 text-[15px] leading-[1.85] text-paper/70 sm:text-[17px]">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
