import { motion } from "motion/react";
import { APP_LINK } from "../constants";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] tracking-tight text-gray-900">
              Organize sua vida financeira <br className="hidden md:block" />
              <span className="text-gradient">sem complicação.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              O controle que você precisa, na velocidade que você vive.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={APP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/20"
              >
                👉 Começar agora
              </motion.a>
              <p className="text-sm text-gray-500 font-medium">Apenas <span className="text-gray-900 font-bold">R$ 9,99</span> / mês</p>
            </div>
          </motion.div>
        </div>

        {/* Side-by-side Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto flex justify-center items-end h-[400px] md:h-[500px]"
        >
          {/* Desktop Mockup */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[800px] bg-white rounded-t-2xl md:rounded-t-3xl border border-gray-200 border-b-0 shadow-2xl overflow-hidden z-10">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="bg-gray-100 h-[360px] md:h-[460px] overflow-hidden relative">
              <img 
                src="https://i.imgur.com/FroKJJ9.png" 
                alt="Nexus Gestão Desktop" 
                className="w-full h-auto absolute top-0 left-0" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="absolute -bottom-4 right-4 md:right-12 w-[140px] md:w-[220px] bg-white rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-gray-900 shadow-2xl overflow-hidden z-20 h-[280px] md:h-[440px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-6 bg-gray-900 rounded-b-xl md:rounded-b-2xl z-30" />
            <div className="w-full h-full bg-gray-100 overflow-hidden relative">
              <img 
                src="https://i.imgur.com/wl6c5w1.png" 
                alt="Nexus Gestão Mobile" 
                className="w-full h-auto absolute top-0 left-0" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
