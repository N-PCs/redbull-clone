import { Can3D } from "@/components/Can3D";
import { ingredientCallouts } from "@/data/ingredients";
import { IngredientArrows } from "@/components/ingredients/IngredientArrows";

const gridSlot: Record<string, string> = {
  "top-left": "ingredient-slot-caffeine",
  "mid-left": "ingredient-slot-taurine",
  "top-right": "ingredient-slot-water",
  "mid-right": "ingredient-slot-bvitamins",
  "bottom-right": "ingredient-slot-sugars",
};

const accentClass: Record<string, string> = {
  caffeine: "ingredient-callout--caffeine",
  taurine: "ingredient-callout--taurine",
  water: "ingredient-callout--water",
  "b-vitamins": "ingredient-callout--bvits",
  sugars: "ingredient-callout--sugars",
};

function CalloutIcon({ id }: { id: string }) {
  const base = "w-10 h-10 shrink-0";

  switch (id) {
    case "caffeine":
      return (
        <svg className={base} viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="20" cy="14" r="8" stroke="#ED1B24" strokeWidth="1.5" />
          <path d="M12 28c2-4 14-4 16 0" stroke="#ED1B24" strokeWidth="1.5" />
          <path d="M28 8l4 2-2 4" stroke="#001E5C" strokeWidth="1.2" />
        </svg>
      );
    case "taurine":
      return (
        <svg className={base} viewBox="0 0 40 40" fill="none" aria-hidden>
          <ellipse cx="20" cy="22" rx="10" ry="14" stroke="#001E5C" strokeWidth="1.5" />
          <circle cx="20" cy="12" r="5" fill="#ED1B24" fillOpacity="0.25" stroke="#ED1B24" />
          <path d="M26 24h6v6h-6z" fill="#ED1B24" fillOpacity="0.35" />
        </svg>
      );
    case "water":
      return (
        <svg className={base} viewBox="0 0 40 40" fill="none" aria-hidden>
          <path
            d="M20 6c0 0-10 14-10 22a10 10 0 1 0 20 0c0-8-10-22-10-22z"
            fill="#4A9FD4"
            fillOpacity="0.25"
            stroke="#4A9FD4"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "b-vitamins":
      return (
        <svg className={base} viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="12" cy="20" r="4" stroke="#DA1884" strokeWidth="1.2" />
          <circle cx="28" cy="14" r="4" stroke="#DA1884" strokeWidth="1.2" />
          <rect x="16" y="24" width="12" height="6" rx="3" fill="#DA1884" fillOpacity="0.4" />
        </svg>
      );
    case "sugars":
      return (
        <svg className={base} viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="8" y="22" width="8" height="8" rx="1" fill="#fff" stroke="#001E5C" strokeWidth="1.2" />
          <rect x="18" y="22" width="8" height="8" rx="1" fill="#fff" stroke="#001E5C" strokeWidth="1.2" />
          <circle cx="30" cy="16" r="5" stroke="#00A859" strokeWidth="1.2" />
        </svg>
      );
    default:
      return null;
  }
}

export function IngredientHub() {
  return (
    <section id="hub" className="relative pt-28 md:pt-12 pb-12 ingredients-circuit-bg font-sans">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Diagram: grid-aligned boxes + curved arrows + center can */}
        <div className="ingredient-diagram-stage">
          <IngredientArrows />

          <div className="ingredient-slot-can">
            <div className="w-full max-w-[240px] mx-auto ingredients-can">
              <Can3D className="w-full h-full" />
            </div>
          </div>

          {ingredientCallouts.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`ingredient-callout ${gridSlot[item.position]} ${accentClass[item.id]} group`}
            >
              <CalloutIcon id={item.id} />
              <div className="min-w-0">
                <h3 className="ingredient-callout-title">{item.name}</h3>
                {item.extra && <p className="ingredient-callout-extra">{item.extra}</p>}
                <p className="ingredient-callout-benefit">{item.benefit}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Intro copy — below diagram */}
        <div className="ingredient-intro-below text-center max-w-3xl mx-auto mt-14 md:mt-16 px-2">
          <p className="ingredient-eyebrow">Explore the high quality ingredients</p>
          <h1 className="ingredient-title">Red Bull Energy Drink Ingredients</h1>
          <p className="ingredient-lead">
            The formula that gives you wiiings: kickstart your day with Red Bull Energy Drink&apos;s
            unique formula made up of high quality ingredients
          </p>
        </div>
      </div>
    </section>
  );
}
