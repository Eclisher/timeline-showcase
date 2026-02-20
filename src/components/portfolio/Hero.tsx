import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import harizoImg from "@/assets/harizo1.png";
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
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-background/80" />
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
        className="reveal relative z-10 container mx-auto px-6 max-w-6xl"
      >
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE - TEXT */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Disponible pour de nouvelles opportunités
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ANDRIANAIVO Haingo <span className="text-gradient">Harizo</span>
            </h1>

            <p className="font-display text-xl md:text-2xl text-muted-foreground mb-4">
              Développeur{" "}
              <span className="text-primary font-semibold">Full-Stack</span>
            </p>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Passionné par la création d'expériences digitales modernes et
              performantes. Dynamique, analytique, et toujours prêt à relever de
              nouveaux défis techniques.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href="#timeline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#timeline")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-glow"
              >
                Voir mon parcours
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-md border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-200"
              >
                Me contacter
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96 perspective-1000">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group transition-all duration-700 hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-purple-500/20 to-pink-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />

                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <img
                    src={harizoImg}
                    alt="Harizo"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition duration-700" />
                </div>
              </div>
              <div className="absolute inset-0 animate-float pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 gap-5 animate-fade-in-up delay-500">
          <a
            href="https://github.com/Eclisher"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/harizo-andrianaivo-a93b75263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:haingo.harizo.andrianaivo@gmail.com"
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
