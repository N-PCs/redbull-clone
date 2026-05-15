"use client";

import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { Home } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "#hub", label: "Overview" },
] as const;

export function IngredientsNav() {
  const [navWidth, setNavWidth] = useState(0);
  const [alignOffset, setAlignOffset] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (navRef.current && triggerRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();
        setNavWidth(navRect.width);
        
        // Offset from the left edge of the trigger to the left edge of the navbar
        // Since align="start", the dropdown's left edge starts at the trigger's left edge.
        setAlignOffset(navRect.left - triggerRect.left);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-6 pointer-events-none">
      <div 
        ref={navRef}
        className="max-w-fit pointer-events-auto flex items-center gap-2 px-6 h-14 rounded-full bg-[var(--rb-blue-deep)]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300"
      >
        <Link to="/" className="flex items-center shrink-0 py-1 mr-4">
          <img src="/redbull-icon.svg" className="h-8 w-auto" alt="Red Bull" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-white/80 hover:text-white flex items-center gap-1.5 group nav-bubble-link nav-tap-animate">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center ml-0.25">
          <Link
  to="/"
  className="hidden sm:inline-flex items-center justify-center text-white/80 hover:text-[var(--rb-yellow)] ml-0.25 nav-bubble-link nav-tap-animate"
  aria-label="Home"
>
  <Home className="h-4 w-4 shrink-0 stroke-[2.5]" />
</Link>

          <div className="md:hidden ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger
                ref={triggerRef}
                type="button"
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/85 outline-none border border-white/15 bg-white/5 hover:bg-white/10 hover:text-[var(--rb-yellow)] transition"
              >
                <Menu className="h-4 w-4" strokeWidth={2.5} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                alignOffset={alignOffset}
                sideOffset={16}
                style={{ width: navWidth }}
                className="max-w-sm border-white/10 bg-[#000B29]/95 text-white backdrop-blur-xl rounded-2xl p-2"
              >
                {navLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild className="rounded-xl cursor-pointer uppercase tracking-[0.2em] text-[10px] font-bold text-white/85 focus:bg-white/10 focus:text-[var(--rb-yellow)] py-3 px-6 nav-tap-animate nav-bubble-link">
                    <a href={href}>{label}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer uppercase tracking-[0.2em] text-[10px] font-bold text-white/85 focus:bg-white/10 focus:text-[var(--rb-yellow)] py-3 px-6 mt-1 border-t border-white/10 nav-tap-animate nav-bubble-link">
                  <Link to="/">Home</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
