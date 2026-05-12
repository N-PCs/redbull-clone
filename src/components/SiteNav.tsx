export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--rb-blue-deep)]/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="display text-2xl text-[var(--rb-yellow)] skew-italic">RED BULL</span>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60 ml-2 hidden sm:block">/ Marketplace</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="#hero" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Performance</a>
          <a href="#flavors" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Flavors</a>
          <a href="#marketplace" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Shop</a>
        </nav>
        <button className="px-4 py-2 bg-[var(--rb-red)] text-white text-xs uppercase tracking-widest font-bold hover:bg-[var(--rb-yellow)] hover:text-[var(--rb-blue-deep)] transition">
          Cart (0)
        </button>
      </div>
    </header>
  );
}
