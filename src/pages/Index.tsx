import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { Hero } from "@/components/portfolio/Hero";
import { Timeline } from "@/components/portfolio/Timeline";
import { Strengths } from "@/components/portfolio/Strengths";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main>
        <Hero />
        <Timeline />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
