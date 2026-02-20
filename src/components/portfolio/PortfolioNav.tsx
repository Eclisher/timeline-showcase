import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeControls } from "./ThemeControls";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#timeline", label: "Parcours" },
  { href: "#strengths", label: "Points forts" },
  { href: "#contact", label: "Contact" },
];

export const PortfolioNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-700 text-xl tracking-tight"
        >
          <span className="text-gradient font-bold">&lt;</span>
          <span className="font-bold text-foreground">Eclisher</span>
          <span className="text-gradient font-bold">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeControls />
          <a
            href="mailto:votre@email.com"
            className="px-4 py-2 rounded-md border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Me contacter
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left text-sm font-medium py-1 transition-colors hover:text-primary ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-border">
            <ThemeControls />
          </div>
        </div>
      )}
    </header>
  );
};
