import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { IngredientsNav } from "@/components/ingredients/IngredientsNav";
import { IngredientHub } from "@/components/ingredients/IngredientHub";
import { ComparisonChart } from "@/components/ingredients/ComparisonChart";
import { ingredientSections } from "@/data/ingredients";

export const Route = createFileRoute("/ingredients")({
  component: IngredientsPage,
  head: () => ({
    meta: [
      { title: "Red Bull Energy Drink Ingredients" },
      {
        name: "description",
        content:
          "Explore the high quality ingredients in Red Bull Energy Drink — caffeine, taurine, B-group vitamins, sugars, and water.",
      },
    ],
  }),
});

function IngredientsPage() {
  useEffect(() => {
    document.documentElement.classList.add("ingredients-route");
    return () => document.documentElement.classList.remove("ingredients-route");
  }, []);

  return (
    <div className="ingredients-page min-h-screen text-[#001E5C] font-sans">
      <IngredientsNav />

      <main>
        <IngredientHub />

        {/* Detailed ingredient sections */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          {ingredientSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 py-14 ${index > 0 ? "border-t border-[#001E5C]/10" : ""}`}
            >
              <h2 className="ingredient-section-title">{section.title}</h2>

              <div className="space-y-4 text-[#001E5C]/80 leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              {section.didYouKnow && !section.comparison && (
                <aside className="mt-8 p-6 rounded-2xl bg-[#001E5C]/5 border-l-4 border-[#FFCC00]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#ED1B24] mb-2">
                    {section.didYouKnow.title}
                  </h3>
                  <p className="text-[#001E5C]/80 leading-relaxed">{section.didYouKnow.body}</p>
                </aside>
              )}

              {section.comparison && (
                <ComparisonChart {...section.comparison} didYouKnow={section.didYouKnow} />
              )}
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#001E5C]/10 py-10 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#001E5C]/50">
          <img src="/redbull-icon.svg" className="h-10 w-auto opacity-70" alt="Red Bull" />
          <p>© 2026 Red Bull Clone — Drink Responsibly</p>
          <a href="/" className="font-bold uppercase tracking-wider text-[#001E5C] hover:text-[#ED1B24] transition">
            Home
          </a>
        </div>
      </footer>
    </div>
  );
}
