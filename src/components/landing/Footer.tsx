const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gradient-brand flex items-center justify-center">
            <span className="font-bold text-xs text-primary-foreground">N</span>
          </div>
          <span className="font-display font-semibold text-foreground">Nexus Gestão</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="https://nexusgestao.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Acessar App</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nexus Gestão
        </p>
      </div>
    </footer>
  );
};

export default Footer;
