import dashboardMockup from "@/assets/dashboard-light.jpg";
import mobileMockup from "@/assets/mobile-light.png";

const APP_URL = "https://nexusgestao.vercel.app";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero-bg)" }} />

      <div className="container relative z-10 pt-28 pb-16">
        {/* Badge */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-subtle border border-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Gestão financeira inteligente</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Organize sua vida financeira{" "}
            <span className="text-gradient">sem complicação.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            O controle que você precisa, na velocidade que você vive.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-semibold text-primary-foreground bg-gradient-brand transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Começar agora grátis
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-medium text-foreground border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>

        {/* Mockups */}
        <div
          className="relative max-w-5xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {/* Desktop */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                  nexusgestao.vercel.app
                </div>
              </div>
            </div>
            <img
              src={dashboardMockup}
              alt="Dashboard Nexus Gestão"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>

          {/* Mobile floating */}
          <div className="absolute -right-2 md:right-12 -bottom-6 md:-bottom-10 w-28 md:w-44 animate-float">
            <img
              src={mobileMockup}
              alt="Nexus Gestão mobile"
              width={512}
              height={960}
              className="w-full drop-shadow-2xl"
            />
          </div>

          {/* Gradient glow under mockup */}
          <div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-3xl opacity-40"
            style={{ background: "linear-gradient(90deg, hsl(250 80% 60% / 0.2), hsl(280 70% 55% / 0.15), hsl(320 60% 55% / 0.1))" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
