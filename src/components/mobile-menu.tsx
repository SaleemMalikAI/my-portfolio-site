"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

// Hamburger menu for screens below md; the desktop links live in Navbar
export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-4">
          {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <>
          {/* Tap outside to close */}
          <div className="fixed inset-x-0 top-16 bottom-0 z-20 bg-bg/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <ul
            id="mobile-menu"
            className="absolute inset-x-0 top-16 z-30 border-b border-line bg-bg/95 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 font-mono text-sm text-fg transition-colors hover:bg-fg/5 hover:text-cyan"
                >
                  ./{link.label}
                  <span aria-hidden="true" className="text-muted">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
