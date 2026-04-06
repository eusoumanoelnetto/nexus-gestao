const APP_URL = "https://nexusgestao.vercel.app";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundImage: "var(--gradient-cta)" }}>
            <span className="font-bold text-sm text-primary-foreground">N</span>
          </div>
          <span className="font-bold text-lg">Nexus Gestão</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            Acessar App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
