import { motion } from "motion/react";

export const VisualDemo = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
          Conheça seu novo dashboard
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Tudo o que importa, acessível em um piscar de olhos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden"
        >
          {/* Browser Header */}
          <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 max-w-md h-6 bg-white border border-gray-200 rounded-md flex items-center px-3">
              <span className="text-xs text-gray-400">nexusgestao.vercel.app</span>
            </div>
          </div>
          
          {/* App UI */}
          <div className="bg-gray-100 h-[400px] md:h-[600px] overflow-hidden relative">
            <img 
              src="https://i.imgur.com/FroKJJ9.png" 
              alt="Nexus Gestão Dashboard" 
              className="w-full h-auto absolute top-0 left-0" 
              referrerPolicy="no-referrer" 
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
