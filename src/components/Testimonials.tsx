import { motion } from "motion/react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "O Nexus Gestão mudou a forma como encaro as finanças da minha empresa. Simples, direto e incrivelmente eficiente.",
      name: "João Silva",
      role: "Empreendedor",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "A interface é tão limpa que dá gosto de usar todos os dias. Abandonei minhas planilhas antigas na primeira semana.",
      name: "Mariana Costa",
      role: "Freelancer",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      quote: "Ter tudo sincronizado e na palma da mão me deu uma tranquilidade que eu não tinha há anos.",
      name: "Carlos Mendes",
      role: "Designer",
      image: "https://i.pravatar.cc/150?img=68"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Quem usa, recomenda.
          </h2>
          <p className="text-xl text-gray-500">
            Junte-se a pessoas que já simplificaram suas vidas financeiras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
