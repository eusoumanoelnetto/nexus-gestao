import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Problem */}
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-6">O problema</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            Planilhas confusas. Apps complicados.{" "}
            <span className="text-muted-foreground">Falta de controle.</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-10">
            <div className="h-px w-12 bg-border" />
            <div className="w-2 h-2 rounded-full bg-gradient-brand" />
            <div className="h-px w-12 bg-border" />
          </div>

          {/* Solution */}
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-6">A solução</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            O Nexus Gestão{" "}
            <span className="text-gradient">simplifica tudo</span>{" "}
            em um só lugar.
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Interface limpa, dados em tempo real e controle total — sem curva de aprendizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
