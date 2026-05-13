"use client";

import { useEffect, useState } from "react";

function readProgress(): number {
  const el = document.documentElement;
  const max = el.scrollHeight - el.clientHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, el.scrollTop / max));
}

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => setProgress(readProgress());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-1 w-full bg-black/25"
      aria-hidden
    >
      <div
        className="h-full w-0 max-w-full origin-left bg-linear-to-r from-[var(--rb-yellow)] to-[var(--rb-red)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
