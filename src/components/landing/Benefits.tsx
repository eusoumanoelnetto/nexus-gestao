import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Clock, RefreshCw, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    text: "Menos tempo organizando, mais tempo vivendo",
  },
  {
    icon: RefreshCw,
    text: "Tudo sincronizado em tempo real",
  },
  {
    icon: Sparkles,
    text: "Visual limpo e sem distrações",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Benefícios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Feito para quem quer{" "}
            <span className="text-gradient">controle real</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.text}
              className={`text-center p-8 rounded-2xl bg-gradient-subtle border border-primary/5 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                <b.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-display font-semibold text-lg text-foreground leading-snug">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {[
            { value: "12k+", label: "Usuários ativos" },
            { value: "R$2.5M+", label: "Gerenciados/mês" },
            { value: "99.9%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
