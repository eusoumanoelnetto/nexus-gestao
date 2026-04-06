import { motion } from "motion/react";

export const ProblemSolution = () => {
  return (
    <section id="solucao" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-3xl font-medium text-gray-400 mb-8 line-through decoration-gray-300">
            Planilhas confusas. Apps complicados. Falta de controle.
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
            O Nexus Gestão simplifica <br className="hidden md:block"/> tudo em um só lugar.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
