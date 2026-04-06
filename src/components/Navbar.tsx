import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { APP_LINK } from "../constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Solução", href: "#solucao" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (!isHome) {
      setActiveSection("");
      return;
    }

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["solucao", "funcionalidades", "beneficios", "planos", "faq"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isHome]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-display font-bold text-gray-900 tracking-tight">Nexus Gestão</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={isHome ? link.href : `/${link.href}`} 
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  activeSection === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeSection === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={APP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-gray-900/20"
            >
              Falar com Consultor
            </motion.a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-gray-900 p-2 transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                    activeSection === link.href 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href={APP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/20"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

