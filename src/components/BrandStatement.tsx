import Image from "next/image";
import { brandStatement } from "@/data/content";
import { Reveal } from "./Reveal";

export function BrandStatement() {
  return (
    <section data-bg="black" className="bg-ink py-24 text-paper sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-14">
          <Reveal>
            <h2 className="text-balance font-sans text-[clamp(44px,10vw,120px)] leading-[0.92] font-extrabold tracking-[-0.03em]">
              {brandStatement.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[38ch]">
            {[...brandStatement.body, ...brandStatement.closing].map((p, i) => (
              <p
                key={p}
                className={`text-[14.5px] leading-[1.7] sm:text-[15.5px] ${
                  i < brandStatement.body.length ? "text-paper/60" : "font-semibold text-paper"
                } ${i > 0 ? "mt-3" : ""}`}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-14 sm:mt-20">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9]">
            <Image
              src={brandStatement.image.src}
              alt={brandStatement.image.alt}
              fill
              sizes="100vw"
              className="object-cover object-[50%_30%] sm:object-[50%_35%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-ink/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/50 backdrop-blur-[1px]">
                <div className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-paper/85" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
