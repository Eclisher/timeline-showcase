import { useEffect, useRef } from "react";
import { Users, Zap, RefreshCw, Search, TrendingUp } from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Travail en équipe",
    description:
      "Collaborateur efficace en environnement agile. Je m'intègre rapidement aux équipes et contribue activement à la dynamique collective.",
    metric: "Toujours orienté collectif",
  },
  {
    icon: Zap,
    title: "Dynamique & Proactif",
    description:
      "J'anticipe les problèmes avant qu'ils n'émergent et prends des initiatives pour améliorer les processus et les livrables.",
    metric: "Initiatives concrètes",
  },
  {
    icon: RefreshCw,
    title: "Capacité d'adaptation",
    description:
      "Confortable dans des environnements changeants. Je m'adapte rapidement aux nouvelles technologies, méthodes et contextes.",
    metric: "Flexible & Agile",
  },
  {
    icon: Search,
    title: "Esprit analytique",
    description:
      "J'aborde chaque problème avec méthode et rigueur. Décomposition logique, identification des causes racines, solutions durables.",
    metric: "Problèmes complexes résolus",
  },
  {
    icon: TrendingUp,
    title: "Apprentissage rapide",
    description:
      "Curieux et auto-discipliné, je maîtrise de nouveaux outils et langages en temps record. La veille technologique est ma routine.",
    metric: "Veille quotidienne",
  },
];

export const Strengths = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="strengths"
      ref={sectionRef}
      className="py-24 relative overflow-hidden
  bg-gradient-to-b from-background via-background/95 to-background"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, hsl(var(--primary) / 0.08), transparent 70%)",
        }}
      />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Savoir-être
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Points <span className="text-gradient">forts</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Au-delà des compétences techniques, ce sont mes qualités humaines
            qui font la différence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal card-surface rounded-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>

                <p className="text-xs text-primary font-medium mb-2">
                  {item.metric}
                </p>

                <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
          <div
            className="reveal sm:col-span-2 lg:col-span-0 lg:hidden xl:block card-surface rounded-xl p-6 flex items-center justify-center border-primary/20"
            style={{ transitionDelay: `${strengths.length * 0.08}s` }}
          >
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-gradient mb-2">
                100%
              </p>
              <p className="text-muted-foreground text-sm">
                Investissement dans chaque projet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
