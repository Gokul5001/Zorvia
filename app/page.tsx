import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StackBand from "@/components/StackBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import PortfolioPricing from "@/components/PortfolioPricing";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div
      id="top"
      style={{
        background: "#F3F5F9",
        color: "#0E1A30",
        fontFamily: "var(--font-body)",
        fontSize: "17px",
        lineHeight: "1.6",
      }}
    >
      <Header />
      <Hero />
      <StackBand />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <PortfolioPricing />
      <About />
      <Contact />
    </div>
  );
}
