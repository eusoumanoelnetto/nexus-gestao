import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import mobileMockup from "@/assets/mobile-mockup.png";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Demonstração
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Veja o <span className="text-gradient">Nexus</span> em ação
          </h2>
        </div>

        <div
          className={`relative flex items-center justify-center max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Desktop mockup */}
          <div className="relative w-full rounded-xl overflow-hidden border border-border/50 glow-box">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <img
              src={dashboardMockup}
              alt="Nexus Gestão dashboard desktop"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full"
            />
          </div>

          {/* Mobile mockup floating */}
          <div
            className={`absolute -right-4 md:right-8 -bottom-8 w-32 md:w-48 animate-float transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <img
              src={mobileMockup}
              alt="Nexus Gestão versão mobile"
              loading="lazy"
              width={512}
              height={900}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
