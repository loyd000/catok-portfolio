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
import KineticGrid from "@/components/KineticGrid";

export default function Home() {
  return (
    <>
      <KineticGrid />

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
