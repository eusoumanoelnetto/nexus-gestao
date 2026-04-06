const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundImage: "var(--gradient-cta)" }}>
            <span className="font-bold text-xs text-primary-foreground">N</span>
          </div>
          <span className="font-semibold">Nexus Gestão</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="https://nexusgestao.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Acessar App</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nexus Gestão. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
