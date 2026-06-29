import { Eye } from "lucide-react";
import { TimelineItem } from "./Timeline";
export function PreviewTrigger({
  item,
  isOpen,
  onToggle,
  color,
}: {
  item: TimelineItem;
  isOpen: boolean;
  onToggle: () => void;
  color: string;
}) {
  return (
    <div
      className="absolute top-4 right-4 z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`Voir un aperçu de ${item.title}`}
        className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border transition"
        style={{
          color,
          borderColor: `${color}40`,
          backgroundColor: isOpen ? `${color}18` : "transparent",
        }}
      >
        <Eye size={12} />
        Aperçu
      </button>

      <div
        className={`absolute z-30 top-full mt-2 right-0 w-[min(90vw,420px)] transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={item.previewImage}
          alt={`Aperçu de ${item.title}`}
          className="w-full h-56 sm:h-64 rounded-lg shadow-xl border border-border/50 object-cover"
        />
      </div>
    </div>
  );
}
