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

export default function Header() {
  const pathname = usePathname();
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
          className="relative hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navItems.map(({ href, label }, index) => {
            const isActive = pathname === href;
            const rainbowUnderline = [
              "bg-peia-rainbow-red",
              "bg-peia-rainbow-orange",
              "bg-peia-rainbow-yellow",
              "bg-peia-rainbow-green",
              "bg-peia-rainbow-blue",
            ][index];

            return (
              <div key={href} className="relative px-1">
                <Link
                  href={href}
                  className={`inline-flex items-center text-sm font-medium uppercase tracking-wide transition-colors transition-transform duration-200 hover:-translate-y-0.5 ${
                    isActive ? "text-peia-dark" : "text-zinc-700 hover:text-peia-dark"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${rainbowUnderline}`}
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
              {navItems.map(({ href, label }, index) => {
                const isActive = pathname === href;
                const rainbowBg = [
                  "bg-peia-rainbow-red/20 text-peia-rainbow-red",
                  "bg-peia-rainbow-orange/20 text-peia-rainbow-orange",
                  "bg-peia-rainbow-yellow/20 text-peia-rainbow-yellow",
                  "bg-peia-rainbow-green/20 text-peia-rainbow-green",
                  "bg-peia-rainbow-blue/20 text-peia-rainbow-blue",
                ][index];
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors transition-transform duration-200 hover:translate-x-1 ${
                        isActive
                          ? rainbowBg
                          : "text-zinc-700 hover:bg-zinc-50 hover:text-peia-dark"
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
