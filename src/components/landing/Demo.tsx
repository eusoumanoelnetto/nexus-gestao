import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import dashboardMockup from "@/assets/dashboard-light.jpg";
import mobileMockup from "@/assets/mobile-light.png";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="demo" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Demonstração
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Veja o <span className="text-gradient">Nexus</span> em ação
          </h2>
        </div>

        <div
          className={`relative max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Desktop */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-elevated">
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
              </div>
            </div>
            <img
              src={dashboardMockup}
              alt="Nexus Gestão dashboard"
              loading="lazy"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>

          {/* Mobile */}
          <div
            className={`absolute -right-2 md:right-8 -bottom-8 w-28 md:w-44 animate-float transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <img
              src={mobileMockup}
              alt="Nexus Gestão mobile"
              loading="lazy"
              width={512}
              height={960}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
