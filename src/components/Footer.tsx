import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="text-gray-900 w-5 h-5 fill-current" />
            <span className="text-lg font-display font-bold text-gray-900 tracking-tight">Nexus Gestão</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Termos</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contato</a>
          </div>
          
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nexus Gestão. By <a href="https://eagledigital.site" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-2">Eagle Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
