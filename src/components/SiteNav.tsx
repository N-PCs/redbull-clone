"use client";

import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "#hero", label: "Performance" },
  { href: "#flavors", label: "Flavors" },
  { href: "#marketplace", label: "Shop" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--rb-blue-deep)]/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start md:justify-between w-full gap-4">
        <div className="flex items-center gap-1">
          <a href="#top" className="flex items-center gap-2 shrink-0 py-1">
            <img src="redbull-icon.svg" className="h-10 w-auto" alt="Red Bull" />
          </a>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white/85 outline-none border border-white/15 bg-white/5 hover:bg-white/10 hover:text-[var(--rb-yellow)] focus-visible:ring-2 focus-visible:ring-[var(--rb-yellow)]/70 transition"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="min-w-[11rem] border-white/10 bg-[#000B29]/95 text-white backdrop-blur-md"
              >
                {navLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild className="cursor-pointer uppercase tracking-widest text-xs text-white/85 focus:bg-white/10 focus:text-[var(--rb-yellow)]">
                    <a href={href}>{label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-white/80 hover:text-[var(--rb-yellow)] transition">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
