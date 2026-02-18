import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Adresse email invalide.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }
    if (form.name.trim().length > 100) {
      newErrors.name = "Le nom ne doit pas dépasser 100 caractères.";
    }
    if (form.email.trim().length > 255) {
      newErrors.email = "L'email ne doit pas dépasser 255 caractères.";
    }
    if (form.message.trim().length > 2000) {
      newErrors.message = "Le message ne doit pas dépasser 2000 caractères.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Simulated send — connect to backend/email service as needed
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-accent)", opacity: 0.3 }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Travaillons <span className="text-gradient">ensemble</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Une opportunité ? Un projet ? Ou simplement envie d'échanger ? Je suis disponible et réactif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="reveal flex flex-col gap-8">
            {/* Contact info cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:votre@email.com"
                className="flex items-center gap-4 card-surface rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email professionnel</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    votre@email.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-surface rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Github size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    github.com/votre-username
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-surface rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/votre-profil
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            {submitted ? (
              <div className="card-surface rounded-xl p-8 text-center border-primary/30">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-surface rounded-xl p-8 flex flex-col gap-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    maxLength={100}
                    className={`w-full rounded-md px-4 py-2.5 text-sm bg-secondary border transition-all duration-200 outline-none placeholder:text-muted-foreground focus:border-primary text-foreground ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    maxLength={255}
                    className={`w-full rounded-md px-4 py-2.5 text-sm bg-secondary border transition-all duration-200 outline-none placeholder:text-muted-foreground focus:border-primary text-foreground ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre message..."
                    maxLength={2000}
                    className={`w-full rounded-md px-4 py-2.5 text-sm bg-secondary border transition-all duration-200 outline-none placeholder:text-muted-foreground focus:border-primary text-foreground resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-xs text-muted-foreground">{form.message.length}/2000</p>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-glow"
                >
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
