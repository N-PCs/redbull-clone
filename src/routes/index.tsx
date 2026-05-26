import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Can3D } from "@/components/Can3D";
import { SiteNav } from "@/components/SiteNav";
import { FlavorCard } from "@/components/FlavorCard";
import { flavors } from "@/data/flavors";
import { createFileRoute } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Red Bull Energy Drink - Gives You Wiings" },
      { name: "description", content: "Cinematic 3D Red Bull experience. Explore six bold flavors and shop the marketplace." },
    ],
  }),
});

function Index() {
  const canRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canRef.current || !driftRef.current) return;
    const flyLayer = canRef.current;
    const driftLayer = driftRef.current;
    const target = document.querySelector('[data-can-slot="original"]') as HTMLElement | null;

    const smoothstep = (t: number) => {
      const x = Math.min(1, Math.max(0, t));
      return x * x * (3 - 2 * x);
    };

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([flyLayer, driftLayer], { clearProps: "all" });
        flyLayer.style.opacity = "0";
        flyLayer.dataset.canDocking = "1";
        if (target) {
          const img = target.querySelector("img") as HTMLElement | null;
          if (img) gsap.set(img, { opacity: 1 });
        }
        return;
      }

      // Phase 1 -> 2: drift on inner layer only (avoids fighting the marketplace fly tween)
      gsap.to(driftLayer, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "#features",
          end: "bottom center",
          scrub: 0.35,
          fastScrollEnd: true,
        },
        xPercent: -25,
        rotate: -15,
        scale: 0.9,
      });

      // Phase 3: fly outer layer to card slot while inner returns to neutral (stops "3D wobble" vs static card)
      if (target) {
        const img = target.querySelector("img") as HTMLElement | null;
        if (img) gsap.set(img, { opacity: 0 });

        const dockTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#flavors",
            start: "top 72%",
            endTrigger: "#marketplace",
            end: "top 28%",
            scrub: 0.45,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              // Longer eased overlap: card fades in while float can eases out
              const fadeRaw = Math.max(0, Math.min(1, (p - 0.38) / 0.52));
              const fade = smoothstep(fadeRaw);
              flyLayer.style.opacity = String(1 - fade);
              if (img) img.style.opacity = String(fade);

              // Wind down CSS float before the crossfade so the two assets don't "fight"
              const settle = smoothstep(Math.max(0, Math.min(1, (p - 0.08) / 0.42)));
              flyLayer.dataset.canDocking = settle > 0.5 ? "1" : "0";
            },
            onLeaveBack: () => {
              flyLayer.dataset.canDocking = "0";
            },
          },
        });

        dockTl.to(
          flyLayer,
          {
            x: () => {
              const r = target.getBoundingClientRect();
              const c = flyLayer.getBoundingClientRect();
              return r.left + r.width / 2 - (c.left + c.width / 2);
            },
            y: () => {
              const r = target.getBoundingClientRect();
              const c = flyLayer.getBoundingClientRect();
              return r.top + r.height / 2 - (c.top + c.height / 2);
            },
            scale: 0.48,
            ease: "none",
          },
          0,
        );
        dockTl.to(
          driftLayer,
          {
            xPercent: 0,
            rotate: 0,
            scale: 1,
            ease: "power2.inOut",
          },
          0,
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="top" className="bg-[var(--rb-blue-deep)] text-white">
      <SiteNav />

      {/* Persistent floating 3D can */}
      <div
        ref={canRef}
        className="fixed top-0 -right-12 sm:right-0 w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw] h-screen z-0 md:z-30 pointer-events-none isolate opacity-50 md:opacity-100"
      >
        <div ref={driftRef} className="w-full h-full">
          <Can3D className="w-full h-full" />
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-screen bg-grid pt-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-24 relative">
          <div className="max-w-2xl relative z-50 md:z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--rb-yellow)]" />
              <span className="text-xs uppercase tracking-[0.4em] text-[var(--rb-yellow)]">Series 2026 / Performance Drop</span>
            </div>
            <h1 className="display text-[11vw] sm:text-[14vw] md:text-[9vw] leading-[0.85] skew-italic">
              FUEL
              <br />
              <span className="text-[var(--rb-red)]">YOUR</span>
              <br />
              <span className="text-stroke">PERFORMANCE.</span>
            </h1>
            <p className="mt-6 text-sm md:text-lg text-white/70 max-w-lg leading-relaxed">
              Multiple flavors. One mission. Engineered to vitalize body and mind for athletes,
              creators, and anyone chasing the impossible.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#flavors"
                className="px-7 py-4 border border-white/30 text-white text-sm font-bold uppercase tracking-[0.2em] hover:border-[var(--rb-yellow)] hover:text-[var(--rb-yellow)] transition"
              >
                Explore Flavors
              </a>
              <a
                href="/ingredients"
                className="px-7 py-4 border border-white/30 bg-[var(--rb-red)] text-white text-sm font-bold uppercase tracking-[0.2em] hover:border-[var(--rb-yellow)] hover:text-[var(--rb-yellow)] transition"
              >
                Ingredients
              </a>
            </div>
            

            <div className="mt-20 grid grid-cols-3 gap-8 max-w-md">
              {[
                { v: "8.4", l: "FL OZ" },
                { v: "80mg", l: "Caffeine" },
                { v: "0", l: "Compromise" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="display text-3xl text-[var(--rb-yellow)] skew-italic">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* edge label */}
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 -rotate-90 origin-right text-[10px] uppercase tracking-[0.6em] text-white/30">
          Vitalizes Body & Mind — Est. 1987
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.4em] text-[var(--rb-red)]">The Formula</span>
              <p></p>
              <h2 className="display text-5xl md:text-7xl mt-4 skew-italic leading-[0.9]">
                ICE-COLD<br />ENGINEERING.
              </h2>
            </div>
            <p className="md:col-span-5 text-white/60 text-lg leading-relaxed">
              Each can is precision-crafted with taurine, B-vitamins, and real cane sugar
              (or none, if you prefer) — kept frosty for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Taurine Charged", d: "1000mg of taurine to support mental and physical performance." },
              { n: "02", t: "B-Vitamin Complex", d: "Niacin, B6, B12 and pantothenic acid for everyday energy." },
              { n: "03", t: "Crafted Cold", d: "Best served chilled. Aluminum cans recyclable, infinitely." },
            ].map((f) => (
              <div key={f.n} className="border border-white/10 p-8 hover:border-[var(--rb-yellow)] transition group">
                <div className="display text-5xl text-[var(--rb-yellow)] skew-italic">{f.n}</div>
                <h3 className="display text-2xl mt-4 skew-italic">{f.t.toUpperCase()}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">{f.d}</p>
                <div className="h-px w-0 group-hover:w-full bg-[var(--rb-red)] transition-all duration-500 mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAVOR INTRO */}
      <section id="flavors" className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--rb-red)]" />
            <span className="text-xs uppercase tracking-[0.4em] text-white/60"> Multiple Editions</span>
          </div>
          <h2 className="display text-6xl md:text-8xl skew-italic leading-[0.9] max-w-4xl">
            PICK YOUR <span className="text-[var(--rb-red)]">WINGS.</span>
          </h2>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section id="marketplace" className="relative pb-32 pt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-5">
            {flavors.map((f) => (
              <FlavorCard key={f.id} flavor={f} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
          <span className="display text-2xl text-[var(--rb-yellow)] skew-italic"><img src="redbull-icon.svg" height={"75"} width={"150"} alt="Red Bull" /></span>
          <span>© 2026 — Vitalizes Body & Mind</span>
          <span>Drink Responsibly</span>
        </div>
      </footer>
    </div>
  );
}
