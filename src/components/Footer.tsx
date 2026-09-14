import { brand } from "@/data/content";

export function Footer() {
  return (
    <footer data-bg="black" className="bg-ink px-5 pt-14 pb-8 text-paper sm:px-10 sm:pt-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-line-on-ink pb-10 sm:pb-14">
          <div>
            <p className="font-sans text-xl font-semibold">{brand.name}</p>
            <p className="mt-1 font-sans text-[11px] font-medium tracking-[0.22em] text-paper/45 uppercase">{brand.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="mb-3 font-sans text-[10.5px] tracking-[0.18em] text-paper/35 uppercase">Instagram</p>
              <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/80 hover:text-paper">
                {brand.instagramHandle}
              </a>
            </div>
            <div>
              <p className="mb-3 font-sans text-[10.5px] tracking-[0.18em] text-paper/35 uppercase">Contact</p>
              <a href={`mailto:${brand.email}`} className="text-sm text-paper/80 hover:text-paper">
                {brand.email}
              </a>
            </div>
            <div>
              <p className="mb-3 font-sans text-[10.5px] tracking-[0.18em] text-paper/35 uppercase">Location</p>
              <p className="text-sm text-paper/80">{brand.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-sans text-[11px] text-paper/35">
          <span>&copy; {brand.name.replace(".", "")}. All rights reserved.</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
