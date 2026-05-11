import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-peia-teal bg-peia-dark font-sans">
      {/* Franja decorativa arcoíris fina (energía sobre fondo oscuro) */}
      <div className="h-1 w-full bg-accent-warm-strip" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2" aria-label="PEIA - Inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-peia-yellow text-lg font-black text-peia-dark ring-2 ring-peia-teal/60">
              P
            </span>
            <span className="text-lg font-black text-white">PEIA</span>
          </Link>

          <nav
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            aria-label="Enlaces legales"
          >
            <Link
              href="/privacy"
              className="text-sm font-semibold text-peia-yellow-light/95 hover:text-peia-yellow"
            >
              Política de privacidad
            </Link>
            <Link
              href="/legal"
              className="text-sm font-semibold text-peia-teal/95 hover:text-peia-teal"
            >
              Aviso legal
            </Link>
            <Link
              href="/cookies"
              className="text-sm font-semibold text-peia-pink/95 hover:text-peia-pink"
            >
              Cookies
            </Link>
            <Link
              href="/report"
              className="text-sm font-semibold text-white/90 hover:text-peia-yellow"
            >
              Canal de denuncias
            </Link>
          </nav>

          <p className="text-sm text-peia-teal/90">
            ©2026 PEIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
