import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { value: "12k+", label: "Usuários ativos", icon: Users },
  { value: "R$ 2.5M+", label: "Gerenciados mensalmente", icon: TrendingUp },
  { value: "99.9%", label: "Uptime garantido", icon: Shield },
];

const Trust = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Feito para quem quer{" "}
            <span className="text-gradient">controle real</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Organize sua vida financeira de forma simples. Milhares de pessoas já
            confiam no Nexus Gestão para tomar decisões melhores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-8 rounded-xl glass transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-gradient mb-2">{s.value}</p>
              <p className="text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
