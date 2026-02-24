import { useEffect, useRef } from "react";
import carshow from "@/assets/carshow.png";
import SERA from "@/assets/figureSERA.png";
import planning from "@/assets/planning.png";
import figure from "@/assets/figure6.png";
import { Briefcase, GraduationCap, Users, Code2, Github, ExternalLink } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiStripe,
  SiSupabase,
  SiReact,
  SiVuedotjs,
  SiPython,
  SiGithub,
  SiSharp,
  SiGitlab,
  SiNodedotjs,
  SiVite,
} from "react-icons/si";
import { FaJava, FaFileExcel, FaCheck } from "react-icons/fa";

const techIcons: Record<string, React.ElementType> = {
  NextJS: SiNextdotjs,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  Postgresql: SiPostgresql,
  Tailwind: SiTailwindcss,
  Stripe: SiStripe,
  Supabase: SiSupabase,
  React: SiReact,
  Vue: SiVuedotjs,
  Python: SiPython,
  Github: SiGithub,
  Csharp: SiSharp,
  Java: FaJava,
  GitLab: SiGitlab,
  NodeJS: SiNodedotjs,
  Vite: SiVite,
  Excel : FaFileExcel,
  CI: FaCheck,
};
type TimelineCategory = "stage" | "academic" | "collaboration" | "freelance";

interface TimelineItem {
  id: number;
  category: TimelineCategory;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
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
    title: "Développeur Front-End",
    organization: "AllForOne Madagascar",
    period: "Juin 2025 — Octobre 2025",
    description:
      "Développement d'une application web interne. Développement d'un gestion de planing pour tous les employés de l'entreprise",
    tags: ["NextJS", "Csharp", "MongoDB", "GitLab"],
    previewImage: planning,
  },
  {
    id: 2,
    category: "stage",
    title: "Développeur Front-End",
    organization: "AllForOne Madagascar",
    period: "Juin 2025 — Octobre 2025",
    description:
      "Développement d'une application web interne. Développement d'un gestion de candidature,cette application permet de gérer les candidatures des clients, les entretiens et les offres d'emploi. Ansi la postulation rapide des candidats pour les offres d'emploi.",
    tags: ["NextJS", "C#", "Postgresql", "GitLab", "Github"],
    previewImage: figure,
  },
  {
    id: 3,
    category: "academic",
    title: "CarShow",
    organization: "FullStack - Projet d'examen Web3",
    period: "Mai 2024  — Juin 2024",
    description:
      "Le plateforme de vente des voitures 'CarShow' permet de gérer les ventes de voitures en ligne. Les utilisateurs peuvent voir les voitures disponibles, les détails de chaque voiture, et effectuer des achats en ligne.",
    tags: ["NextJS", "Java", "Postgresql", "Github"],
    githubUrl: "https://github.com/MoreThanWeb3",
    previewImage: carshow
  },
  {
    id: 3,
    category: "collaboration",
    title: "Seramoney Echange",
    organization: "Seramoney Madagascar",
    period: "Janvier 2026 — Présent",
    description:
      "Développement d'un plateforme d'échange de cryptomonnaies pour les utilisateurs de Seramoney. La plateforme permet aux utilisateurs d'acheter, vendre et échanger des cryptomonnaies de manière sécurisée et rapide manuelement ou automatiquement.",
    tags: ["React", "Vite", "Github", "Excel"],
    previewImage: SERA,
  },
  {
    id: 4,
    category: "academic",
    title: "Application Mobile Vazou",
    organization: "Projet Mob1 - 2personnes",
    period: "Main 2025 - Juin 2025",
    description:
      "Application mobile de léctures des sons dans le téléphone, et le classé vos playlist selon les genres de musique.",
    tags: ["React", "CI"],
    githubUrl: "https://github.com/RickaPrincy/Vazou"
  },
  {
    id: 5,
    category: "freelance",
    title: "Site Vitrine Seramoney MDG",
    organization: "Seramoney Madagascar",
    period: "Décembre 2025",
    description:
      "Conception d'un site vitrine pour Seramoney, mettant en avant les services financiers de l'entreprise et représentation des formations de cryptomonnaies proposées par Seramoney.",
    tags: ["React", "Vite", "Tailwind CSS", "Excel"],
    liveUrl: "https://seramoney.com",
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
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Parcours</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Mes <span className="text-gradient">Expériences</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un parcours jalonné de projets concrets, de collaborations enrichissantes et d'apprentissages continus.
          </p>
        </div>

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
                  <div
                    className={`w-full md:w-[calc(50%-28px)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <div className="card-surface rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                      <div
                        className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : ""}`}
                      >
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
                      <p className="text-primary text-sm font-medium mb-1">
                        {item.organization}
                      </p>
                      <p className="text-muted-foreground text-xs mb-3">
                        {item.period}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div
                        className={`flex gap-4 mt-4 items-center ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        

                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium transition"
                            style={{ color: cfg.color }}
                          >
                            <ExternalLink size={16} />
                            Live
                          </a>
                        )}
                      </div>
                      <div
                        className={`flex gap-4 mt-4 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                      </div>
                      <div
                        className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        {item.previewImage && (
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 x backdrop-blur-md flex items-center justify-center p-4">
                            <img
                              src={item.previewImage}
                              alt="Preview"
                              className="rounded-lg shadow-lg  object-cover"
                            />
                          </div>
                        )}
                        <div
                          className={`flex flex-wrap gap-4 mt-5 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {item.tags.map((tag) => {
                            const Icon = techIcons[tag];
                            if (!Icon) return null;

                            return (
                              <div
                                key={tag}
                                className="flex flex-col items-center text-center group cursor-default transition-all duration-300"
                              >
                                <div
                                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                                  style={{
                                    backgroundColor: `${cfg.color}15`,
                                    border: `1px solid ${cfg.color}40`,
                                  }}
                                >
                                  <Icon
                                    size={18}
                                    style={{ color: cfg.color }}
                                    className="transition-transform duration-300 group-hover:rotate-6"
                                  />
                                </div>
                                <span
                                  className="text-[11px] mt-1 font-medium"
                                  style={{ color: cfg.color }}
                                >
                                  {tag}
                                </span>
                              </div>
                            );
                          })}
                        </div>
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
