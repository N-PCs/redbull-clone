import type { IngredientSection } from "@/data/ingredients";

type Props = NonNullable<IngredientSection["comparison"]>;

export function ComparisonChart({ centerLabel, centerValue, centerSub, items, source }: Props) {
  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
        <div className="comparison-center text-center shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#001E5C]/50 mb-3">
            {centerLabel}
          </p>
          <div className="w-24 h-32 mx-auto rounded-lg bg-linear-to-b from-[#C0C0C0] to-[#E8E8E8] border border-[#001E5C]/10 flex items-end justify-center pb-2 shadow-md">
            <img src="/redbull-icon.svg" alt="" className="h-8 w-auto opacity-80" />
          </div>
          <p className="ingredient-stat-value">{centerValue}</p>
          <p className="text-xs text-[#001E5C]/60 uppercase tracking-wide">{centerSub}</p>
        </div>

        <span className="text-2xl font-bold text-[#001E5C]/25 uppercase tracking-widest">VS</span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1 max-w-2xl">
          {items.map((item) => (
            <div
              key={item.label}
              className={`text-center p-4 rounded-xl border ${
                item.highlight
                  ? "border-[#ED1B24]/30 bg-[#ED1B24]/5"
                  : "border-[#001E5C]/10 bg-[#F5F7FA]"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#001E5C]/70 mb-2 min-h-[2.5rem] flex items-center justify-center">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-[#001E5C] whitespace-pre-line leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-[#001E5C]/45 text-center mt-6">{source}</p>
    </div>
  );
}
