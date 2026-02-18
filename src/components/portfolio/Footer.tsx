import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg">
          <span className="text-gradient font-bold">&lt;</span>
          <span className="text-foreground">Dev</span>
          <span className="text-gradient font-bold">/&gt;</span>
        </p>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — Conçu avec passion
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:votre@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
