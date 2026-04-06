import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const APP_URL = "https://nexusgestao.vercel.app";

const CtaFinal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, hsl(250 80% 60% / 0.1), transparent 70%)" }}
      />
      <div
        className={`container relative z-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Pronto para ter{" "}
          <span className="text-gradient">controle total</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
          Crie sua conta grátis e comece a organizar suas finanças agora mesmo.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-16 px-12 rounded-2xl font-bold text-lg text-primary-foreground bg-gradient-brand transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
        >
          Criar conta grátis
          <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CtaFinal;
