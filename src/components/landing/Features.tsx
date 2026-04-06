import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BarChart3, Smartphone, Zap, ShieldCheck, Cloud } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Controle financeiro simples",
    description: "Acompanhe entradas e saídas com clareza total. Sem complicação, sem confusão.",
  },
  {
    icon: Smartphone,
    title: "Interface intuitiva",
    description: "Design limpo e moderno que qualquer pessoa domina no primeiro uso.",
  },
  {
    icon: Zap,
    title: "Rápido e responsivo",
    description: "Performance otimizada para funcionar perfeitamente em qualquer dispositivo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro com autenticação moderna",
    description: "Seus dados protegidos com autenticação robusta e criptografia.",
  },
  {
    icon: Cloud,
    title: "Acesso de qualquer lugar",
    description: "Na nuvem, sincronizado em tempo real. Acesse do celular, tablet ou computador.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Funcionalidades
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Tudo que você precisa,{" "}
            <span className="text-gradient">em um só lugar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative p-7 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle border border-primary/10 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-500">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
