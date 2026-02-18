import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Users, Code2 } from "lucide-react";

type TimelineCategory = "stage" | "academic" | "collaboration" | "freelance";

interface TimelineItem {
  id: number;
  category: TimelineCategory;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

const categoryConfig: Record<TimelineCategory, { label: string; icon: React.ElementType; color: string }> = {
  stage: { label: "Stage", icon: Briefcase, color: "hsl(160 84% 39%)" },
  academic: { label: "Projet académique", icon: GraduationCap, color: "hsl(200 80% 55%)" },
  collaboration: { label: "Collaboration", icon: Users, color: "hsl(270 70% 60%)" },
  freelance: { label: "Freelance", icon: Code2, color: "hsl(35 90% 55%)" },
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    category: "stage",
    title: "Développeur Full-Stack",
    organization: "Entreprise XYZ",
    period: "Juin 2024 — Août 2024",
    description: "Développement d'une application web interne. Mise en place d'une API REST et d'une interface React moderne.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    category: "academic",
    title: "Plateforme de Gestion d'Événements",
    organization: "Université / École",
    period: "Septembre 2023 — Janvier 2024",
    description: "Conception et développement d'une plateforme collaborative en équipe de 4. Architecture microservices.",
    tags: ["Vue.js", "Express", "MongoDB", "CI/CD"],
  },
  {
    id: 3,
    category: "collaboration",
    title: "Contribution Open Source",
    organization: "Projet GitHub Communautaire",
    period: "Mars 2023 — Présent",
    description: "Contribution active à un projet open source. Review de code, résolution de bugs et ajout de fonctionnalités.",
    tags: ["TypeScript", "Testing", "Git", "Agile"],
  },
  {
    id: 4,
    category: "academic",
    title: "Application Mobile IA",
    organization: "Hackathon Universitaire",
    period: "Novembre 2023",
    description: "1er prix au hackathon — Application mobile intégrant un modèle de machine learning pour la reconnaissance d'images.",
    tags: ["Python", "TensorFlow", "React Native", "FastAPI"],
  },
  {
    id: 5,
    category: "freelance",
    title: "Site Vitrine E-commerce",
    organization: "Client Indépendant",
    period: "Janvier 2024 — Mars 2024",
    description: "Conception et livraison d'un site e-commerce complet avec tableau de bord admin et intégration paiement.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Supabase"],
  },
];

export const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal, .reveal-left");
    items?.forEach((el) => observer.observe(el));
    itemsRef.current = items || null;

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Parcours</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un parcours jalonné de projets concrets, de collaborations enrichissantes et d'apprentissages continus.
          </p>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 reveal">
          {(Object.entries(categoryConfig) as [TimelineCategory, typeof categoryConfig[TimelineCategory]][]).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cfg.color }}
              />
              {cfg.label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-connector opacity-30" />

          <div className="flex flex-col gap-8">
            {timelineData.map((item, index) => {
              const cfg = categoryConfig[item.category];
              const Icon = cfg.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`reveal flex flex-col md:flex-row items-start gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="card-surface rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            color: cfg.color,
                            backgroundColor: `${cfg.color}18`,
                            border: `1px solid ${cfg.color}30`,
                          }}
                        >
                          <Icon size={11} />
                          {cfg.label}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-1">{item.organization}</p>
                      <p className="text-muted-foreground text-xs mb-3">{item.period}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-14 justify-center items-start pt-6 shrink-0 z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-background animate-pulse-glow"
                      style={{ backgroundColor: cfg.color }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-28px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
