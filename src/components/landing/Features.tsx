import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LayoutDashboard, ArrowLeftRight, PieChart, Tags, Clock } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Inteligente",
    description: "Visão geral completa com métricas em tempo real, gráficos dinâmicos e indicadores de performance.",
  },
  {
    icon: ArrowLeftRight,
    title: "Gestão de Entradas e Saídas",
    description: "Registre e gerencie todas as movimentações financeiras com facilidade e agilidade.",
  },
  {
    icon: PieChart,
    title: "Relatórios Visuais",
    description: "Gráficos interativos que transformam números complexos em informações fáceis de entender.",
  },
  {
    icon: Tags,
    title: "Controle por Categorias",
    description: "Organize suas finanças em categorias personalizadas para uma análise mais detalhada.",
  },
  {
    icon: Clock,
    title: "Histórico Completo",
    description: "Acesse todo o histórico de transações com filtros avançados e busca rápida.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="funcionalidades" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tudo que você precisa,{" "}
            <span className="text-gradient">em um só lugar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative group p-8 rounded-xl border border-border/50 transition-all duration-500 hover:border-primary/30 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "var(--gradient-card)",
              }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "var(--glow-primary)" }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
