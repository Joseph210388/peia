"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "INICIO" },
  { href: "/mission", label: "SOBRE NOSOTROS" },
  { href: "/workshops", label: "TALLERES" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACTO" },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white font-sans shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="PEIA - Inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-peia-yellow text-xl font-bold text-peia-dark">
            P
          </span>
          <span className="text-xl font-bold text-black">PEIA</span>
        </Link>

        {/* Nav desktop: visible en md+ */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium uppercase tracking-wide text-zinc-700 transition-colors hover:text-peia-dark"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa: solo móvil */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-peia-dark md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <nav
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-label="Navegación móvil"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="overflow-hidden">
          <div className="border-t border-zinc-200 bg-white px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-peia-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
