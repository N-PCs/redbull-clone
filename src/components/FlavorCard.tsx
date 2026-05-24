import { Flavor } from "@/data/flavors";

export function FlavorCard({ flavor, hideCan = false }: { flavor: Flavor; hideCan?: boolean }) {
  return (
    <article
      data-flavor-card={flavor.id}
      className="group relative overflow-hidden rounded-sm aspect-[3/4] flex flex-col"
      style={{ background: flavor.bg }}
    >
      {/* Diagonal accent stripe */}
      <div
        className="absolute -inset-x-10 top-1/3 h-[60%] opacity-15 -rotate-12"  
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.5), transparent)" }}
      />

      <div className="relative z-10 p-5 flex items-start justify-between">      
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">Energy Drink</div>
          <h3 className="display text-2xl md:text-3xl text-white skew-italic leading-none mt-1">
            {flavor.title.toUpperCase()}
          </h3>
        </div>
      </div>

      {/* Can image area */}
      <div
        data-can-slot={flavor.id}
        className="relative z-10 flex-1 flex items-center justify-center px-6"  
      >
        {!hideCan && (
          <img
            src={flavor.image}
            alt={`Red Bull ${flavor.title}`}
            loading="lazy"
            className="h-full max-h-[280px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
          />
        )}
      </div>

      <div className="relative z-10 p-5 space-y-3">
        <p className="text-lg text-white/85 leading-snug min-h-[2.5rem]">{flavor.description}</p>
      </div>
    </article>
  );
}
