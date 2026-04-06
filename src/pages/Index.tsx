import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Demo from "@/components/landing/Demo";
import CtaFinal from "@/components/landing/CtaFinal";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <Demo />
      <CtaFinal />
      <Footer />
    </div>
  );
};

export default Index;
