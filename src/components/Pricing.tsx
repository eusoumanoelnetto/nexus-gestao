import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { APP_LINK } from "../constants";

export const Pricing = () => {
  return (
    <section id="planos" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Um preço simples e justo.</h2>
        <p className="text-xl text-gray-500 mb-12">Sem surpresas, sem taxas ocultas. Tenha controle total por menos que um café.</p>
        
        <div className="max-w-sm mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Pro</h3>
          <div className="flex justify-center items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold text-gray-900">R$</span>
            <span className="text-6xl font-display font-black text-gray-900">9,99</span>
            <span className="text-gray-500 font-medium">/mês</span>
          </div>
          <ul className="space-y-4 mb-8 text-left">
            {['Acesso completo ao sistema', 'Sincronização em tempo real', 'Suporte prioritário', 'Atualizações gratuitas'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={APP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-colors"
          >
            Assinar Agora
          </motion.a>
        </div>
      </div>
    </section>
  );
};
