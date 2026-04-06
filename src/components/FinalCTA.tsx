import { motion } from "motion/react";
import { APP_LINK } from "../constants";

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 mesh-light opacity-50" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tight text-gray-900">
            Pronto para ter <br className="hidden md:block"/> controle total?
          </h2>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={APP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white text-xl font-bold rounded-full transition-all shadow-2xl shadow-gray-900/20 group"
          >
            👉 Assinar por R$ 9,99/mês
          </motion.a>
          <p className="mt-8 text-sm text-gray-500 font-medium">Acesso completo por apenas R$ 9,99 mensais. Cancele quando quiser.</p>
        </motion.div>
      </div>
    </section>
  );
};
