import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import Trust from "@/components/landing/Trust";
import CtaFinal from "@/components/landing/CtaFinal";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <Demo />
      <Trust />
      <CtaFinal />
      <Footer />
    </div>
  );
};

export default Index;
