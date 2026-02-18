import { Sun, Moon } from "lucide-react";
import { useThemeConfig, colorTokens, ThemeColor } from "./ThemeProvider";

export const ThemeControls = () => {
  const { mode, color, setMode, setColor } = useThemeConfig();

  return (
    <div className="flex items-center gap-2">
      {/* Color swatches */}
      <div className="flex items-center gap-1.5">
        {(Object.entries(colorTokens) as [ThemeColor, typeof colorTokens[ThemeColor]][]).map(
          ([key, cfg]) => (
            <button
              key={key}
              onClick={() => setColor(key)}
              title={cfg.label}
              aria-label={`Thème ${cfg.label}`}
              className="w-4 h-4 rounded-full transition-all duration-200 hover:scale-125 focus:outline-none"
              style={{
                backgroundColor: cfg.hex,
                boxShadow:
                  color === key
                    ? `0 0 0 2px hsl(var(--background)), 0 0 0 3.5px ${cfg.hex}`
                    : "none",
                transform: color === key ? "scale(1.2)" : undefined,
              }}
            />
          )
        )}
      </div>

      {/* Divider */}
      <span className="w-px h-4 bg-border mx-1" />

      {/* Dark / Light toggle */}
      <button
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        aria-label="Changer le mode"
        className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
      >
        {mode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </div>
  );
};
