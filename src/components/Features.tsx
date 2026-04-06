import { motion } from "motion/react";
import { BarChart3, LayoutDashboard, Zap, ShieldCheck, Cloud } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Controle financeiro simples",
      description: "Acompanhe receitas e despesas sem jargões ou telas complexas.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Interface intuitiva",
      description: "Design limpo e direto ao ponto. Feito para você usar todos os dias.",
      icon: <LayoutDashboard className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Rápido e responsivo",
      description: "Ações instantâneas. Sem carregamentos infinitos ou travamentos.",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50"
    },
    {
      title: "Seguro com autenticação moderna",
      description: "Seus dados protegidos com os melhores padrões de segurança do mercado.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Acesso de qualquer lugar",
      description: "Sincronização perfeita entre seu computador e smartphone.",
      icon: <Cloud className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50"
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 soft-shadow hover:border-gray-200 transition-colors"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${f.bg}`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
