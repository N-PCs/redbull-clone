import { useState } from "react";
import type { IngredientSection } from "@/data/ingredients";
import { getIllustration } from "./ComparisonIllustrations";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = NonNullable<IngredientSection["comparison"]> & {
  didYouKnow?: IngredientSection["didYouKnow"];
};

export function ComparisonChart({ centerLabel, centerValue, centerSub, items, source, didYouKnow }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[activeIndex];

  // Utility to split the comparison values by newlines to render value vs per-volume beautifully
  const splitValue = (valStr: string) => {
    const parts = valStr.split("\n");
    return {
      value: parts[0] || "",
      sub: parts[1] || "",
    };
  };

  const currentItemStats = splitValue(currentItem?.value || "");

  return (
    <div className="mt-12 relative w-full">
      {/* Pink overlapping Info badge */}
      {didYouKnow && (
        <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 flex items-center z-20 group">
          {/* Main pink circle with white info 'i' */}
          <div className="w-7 h-7 rounded-full bg-[#ED1B24] border-2 border-white flex items-center justify-center text-white text-[11px] font-bold shadow-md relative transition-transform duration-300 group-hover:scale-110 cursor-default">
            {/* Pink beak pointing left */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-y-[5px] border-y-transparent border-r-[5px] border-r-[#ED1B24] mr-[2px]" />
            i
          </div>
        </div>
      )}

      {/* Main Cool Gray Container */}
      <div className="w-full bg-[#E2E6EC] border border-[#001E5C]/10 rounded-[2rem] shadow-lg shadow-[#001E5C]/5 p-6 sm:p-10 flex flex-col md:flex-row gap-8 md:gap-10 items-stretch relative overflow-hidden">
        {/* Left Column: Did You Know? */}
        {didYouKnow && (
          <div className="flex-1 flex flex-col justify-center pr-0 md:pr-4 border-b border-[#001E5C]/10 md:border-b-0 md:border-r md:border-[#001E5C]/10 pb-6 md:pb-0 md:max-w-[40%] select-none">
            <h3 className="text-base sm:text-lg font-bold text-[#001E5C] mb-3 leading-tight">
              {didYouKnow.title}
            </h3>
            <p className="text-[#001E5C]/80 text-sm leading-relaxed font-medium">
              {didYouKnow.body}
            </p>
          </div>
        )}

        {/* Right Column: Interactive Comparison Widget */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-1 min-h-[220px] py-4 select-none">
            {/* Red Bull Baseline Can */}
            <div className="flex-1 flex flex-col items-center text-center shrink-0">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#001E5C]/60 mb-2 leading-none">
                {centerLabel}
              </p>
              
              {/* Can SVG */}
              <div className="h-28 sm:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {getIllustration("red bull", "w-24 h-auto")}
              </div>

              {/* Red Bull Stats */}
              <p className="text-xl sm:text-2xl font-black text-[#ED1B24] tracking-tight mt-3">
                {centerValue}
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#001E5C]/50 uppercase tracking-widest mt-0.5">
                {centerSub}
              </p>
            </div>

            {/* VS separator pill */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#001E5C]/5 border border-[#001E5C]/10 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#001E5C]/40 tracking-wider shadow-sm z-10 shrink-0 self-center">
              VS
            </div>

            {/* Stacked Card Carousel */}
            <div className="flex-1 flex flex-col items-center justify-center relative select-none">
              {/* Card Container with Stack Effect */}
              <div className="relative w-36 h-[11.5rem] sm:w-40 sm:h-[13.5rem] shrink-0">
                {/* Background Card Layer 2 (Deepest) */}
                {items.length > 1 && (
                  <div className="absolute inset-0 rounded-2xl bg-white/40 border border-[#001E5C]/5 shadow-sm transform translate-y-3.5 translate-x-1.5 scale-[0.93] origin-bottom z-0" />
                )}

                {/* Background Card Layer 1 (Middle) */}
                {items.length > 1 && (
                  <div className="absolute inset-0 rounded-2xl bg-white/70 border border-[#001E5C]/5 shadow-sm transform translate-y-1.75 translate-x-0.75 scale-[0.97] origin-bottom z-1" />
                )}

                {/* Main Active Card */}
                {currentItem && (
                  <div
                    key={activeIndex}
                    className="absolute inset-0 rounded-2xl bg-white border border-[#001E5C]/10 shadow-md shadow-[#001E5C]/5 p-4 sm:p-5 flex flex-col items-center justify-between h-full w-full z-2 transition-all duration-300 hover:shadow-lg animate-card-fade-in"
                  >
                    {/* Compared Card Title */}
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#001E5C] text-center mb-1 truncate w-full">
                      {currentItem.label}
                    </p>

                    {/* Compared Card Illustration */}
                    <div className="flex-1 flex items-center justify-center py-2 max-h-[70px] sm:max-h-[90px]">
                      {getIllustration(currentItem.label, "w-16 h-16 sm:w-20 sm:h-20 object-contain")}
                    </div>

                    {/* Compared Card Stats */}
                    <div className="text-center mt-1">
                      <p className="text-base sm:text-lg font-bold text-[#001E5C] tracking-tight leading-tight">
                        {currentItemStats.value}
                      </p>
                      {currentItemStats.sub && (
                        <p className="text-[9px] sm:text-[10px] font-semibold text-[#001E5C]/50 uppercase tracking-wider mt-0.5">
                          {currentItemStats.sub}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls (Hidden if 1 or fewer items) */}
          {items.length > 1 && (
            <div className="flex items-center gap-3 justify-end mt-4">
              <button
                onClick={handlePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/60 border border-[#001E5C]/15 hover:bg-white hover:border-[#001E5C]/35 active:scale-95 flex items-center justify-center text-[#001E5C]/70 hover:text-[#001E5C] transition-all cursor-pointer shadow-sm"
                aria-label="Previous comparison"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#001E5C] hover:bg-[#001E5C]/90 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer shadow-sm"
                aria-label="Next comparison"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Source Citation */}
      {source && (
        <p className="text-[9px] sm:text-[10px] text-[#001E5C]/45 text-right mt-3 select-none tracking-wide uppercase font-semibold">
          {source}
        </p>
      )}
    </div>
  );
}
