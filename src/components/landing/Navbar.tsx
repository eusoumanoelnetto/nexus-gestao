const APP_URL = "https://nexusgestao.vercel.app";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-light">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <span className="font-bold text-sm text-primary-foreground">N</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Nexus Gestão
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Funcionalidades
          </a>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Demonstração
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-semibold text-primary-foreground bg-gradient-brand transition-all duration-300 hover:opacity-90 hover:shadow-glow"
          >
            Começar agora
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-semibold text-primary-foreground bg-gradient-brand"
        >
          Acessar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
