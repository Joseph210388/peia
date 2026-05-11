"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "INICIO" },
  { href: "/mission", label: "SOBRE NOSOTROS" },
  { href: "/workshops", label: "TALLERES" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACTO" },
] as const;

const underlineColors = [
  "bg-peia-red",
  "bg-peia-orange",
  "bg-peia-yellow",
  "bg-peia-green",
  "bg-peia-blue",
] as const;

const mobileActiveBg = [
  "bg-peia-red/20 text-peia-red",
  "bg-peia-orange/20 text-peia-orange",
  "bg-peia-yellow/25 text-peia-dark",
  "bg-peia-green/20 text-peia-green",
  "bg-peia-blue/20 text-peia-blue",
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-peia-orange/25 bg-peia-cream/95 font-sans backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="PEIA - Inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-peia-yellow text-xl font-black text-peia-dark shadow-color-teal">
            P
          </span>
          <span className="text-xl font-black text-peia-dark">PEIA</span>
        </Link>

        {/* Nav desktop: visible en md+ */}
        <nav
          className="relative hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navItems.map(({ href, label }, index) => {
            const isActive = pathname === href;
            const rainbowUnderline = underlineColors[index];

            return (
              <div key={href} className="relative px-1">
                <Link
                  href={href}
                  className={`inline-flex items-center text-sm font-bold uppercase tracking-wide transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 ${
                    isActive ? "text-peia-dark" : "text-stone-700 hover:text-peia-dark"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-1 rounded-full ${rainbowUnderline}`}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Botón hamburguesa: solo móvil */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-peia-teal/40 text-peia-dark transition-colors hover:bg-peia-yellow-light/80 hover:border-peia-teal md:hidden"
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
          <div className="border-t-2 border-peia-orange/20 bg-peia-yellow-light/40 px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map(({ href, label }, index) => {
                const isActive = pathname === href;
                const rainbowBg = mobileActiveBg[index];
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className={`block rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-wide transition-[color,transform,background-color] duration-200 ease-out hover:translate-x-1 ${
                        isActive
                          ? rainbowBg
                          : "text-stone-700 hover:bg-peia-cream hover:text-peia-dark"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
