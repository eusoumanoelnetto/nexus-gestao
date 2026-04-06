import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const APP_URL = "https://nexusgestao.vercel.app";

const CtaFinal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse at center, hsl(142 71% 45% / 0.2), transparent 70%)" }}
      />
      <div
        className={`container relative z-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Pronto para assumir o{" "}
          <span className="text-gradient">controle</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Comece agora e transforme a maneira como você gerencia suas finanças.
          Grátis, sem complicações.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-16 px-12 rounded-xl font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-105 glow-box-strong"
          style={{ backgroundImage: "var(--gradient-cta)" }}
        >
          Acessar Nexus Gestão
          <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CtaFinal;
