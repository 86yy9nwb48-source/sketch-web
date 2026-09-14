import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { ImageIndex } from "@/components/ImageIndex";
import { BrandStatement } from "@/components/BrandStatement";
import { WhySketch } from "@/components/WhySketch";
import { Director } from "@/components/Director";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Services />
        <Philosophy />
        <ImageIndex />
        <BrandStatement />
        <WhySketch />
        <Director />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
