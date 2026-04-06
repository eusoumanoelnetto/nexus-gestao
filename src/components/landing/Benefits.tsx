import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BarChart3, Eye, Zap, FolderOpen, Rocket } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Controle total das finanças",
    description: "Acompanhe entradas e saídas com precisão absoluta, sem surpresas no fim do mês.",
  },
  {
    icon: Eye,
    title: "Visualização clara de dados",
    description: "Gráficos e relatórios que mostram exatamente onde seu dinheiro está indo.",
  },
  {
    icon: Zap,
    title: "Simplicidade de uso",
    description: "Interface intuitiva que qualquer pessoa consegue usar desde o primeiro acesso.",
  },
  {
    icon: FolderOpen,
    title: "Organização automática",
    description: "Categorização inteligente de transações para manter tudo no lugar certo.",
  },
  {
    icon: Rocket,
    title: "Acesso rápido",
    description: "Acesse de qualquer dispositivo, a qualquer hora. Seus dados sempre ao alcance.",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Benefícios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Por que escolher o <span className="text-gradient">Nexus</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group p-6 rounded-xl glass hover:border-primary/30 transition-all duration-500 hover:glow-box ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
