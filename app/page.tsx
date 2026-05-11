import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Classification from "@/components/Classification";
import Metrics from "@/components/Metrics";
import Hardware from "@/components/Hardware";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Fixed background — stays in place while content scrolls over it */}
      <div className="fixed inset-0 -z-10 bg-catok-darkest">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2d6a4f 1px, transparent 1px), linear-gradient(to bottom, #2d6a4f 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Ambient glow — always centered in the viewport */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-catok-primary/20 blur-[160px] pointer-events-none" />
      </div>

      <main className="relative">
        <Navbar />
        <Hero />
        <Introduction />
        <Problem />
        <Hardware />
        <HowItWorks />
        <Classification />
        <Metrics />
        <Team />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
