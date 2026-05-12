export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--rb-blue-deep)]/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src="redbull-icon.svg" className="h-10"></img>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="#hero" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Performance</a>
          <a href="#flavors" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Flavors</a>
          <a href="#marketplace" className="text-white/80 hover:text-[var(--rb-yellow)] transition">Shop</a>
        </nav>
      </div>
    </header>
  );
}
