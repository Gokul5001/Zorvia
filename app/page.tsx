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
import Reveal from "@/components/Reveal";

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
      <div className="header-enter"><Header /></div>
      <Hero />
      <Reveal><StackBand /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Work /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><PortfolioPricing /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Contact /></Reveal>
    </div>
  );
}
