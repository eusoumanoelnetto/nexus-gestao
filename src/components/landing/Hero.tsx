import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const APP_URL = "https://nexusgestao.vercel.app";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(142 71% 45% / 0.3), transparent 70%)" }}
      />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Gestão financeira inteligente
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Controle total.{" "}
            <span className="text-gradient">Decisões melhores.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Nexus Gestão reúne tudo que você precisa para organizar suas finanças
            em um único painel — simples, visual e poderoso.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-box hover:glow-box-strong"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              Começar Agora
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#funcionalidades"
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg font-medium text-foreground border border-border hover:border-primary/50 transition-all duration-300"
            >
              Ver Funcionalidades
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div
          className="relative max-w-5xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative rounded-xl overflow-hidden border border-border/50 glow-box">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">nexusgestao.vercel.app</span>
            </div>
            <img
              src={dashboardMockup}
              alt="Dashboard Nexus Gestão - painel de controle financeiro"
              width={1280}
              height={800}
              className="w-full"
            />
          </div>
          {/* Glow underneath */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 blur-3xl opacity-30"
            style={{ background: "hsl(142 71% 45% / 0.3)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
