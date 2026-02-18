import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-background/80" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={containerRef}
        className="reveal relative z-10 container mx-auto px-6 text-center max-w-4xl"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Disponible pour de nouvelles opportunités
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Votre <span className="text-gradient">Nom</span>
        </h1>

        {/* Title */}
        <p className="font-display text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up delay-200">
          Développeur{" "}
          <span className="text-primary font-semibold">Full-Stack</span>
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
          Passionné par la création d'expériences digitales modernes et performantes.
          Dynamique, analytique, et toujours prêt à relever de nouveaux défis techniques.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <a
            href="#timeline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-glow"
          >
            Voir mon parcours
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-md border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-200"
          >
            Me contacter
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 animate-fade-in-up delay-500">
          <a
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:votre@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
};
