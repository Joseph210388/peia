import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-peia-dark font-sans">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2" aria-label="PEIA - Inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-peia-yellow text-lg font-bold text-peia-dark">
              P
            </span>
            <span className="text-lg font-bold text-white">PEIA</span>
          </Link>

          <nav
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            aria-label="Enlaces legales"
          >
            <Link
              href="/privacy"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Política de privacidad
            </Link>
            <Link
              href="/legal"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Aviso legal
            </Link>
            <Link
              href="/cookies"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Cookies
            </Link>
            <Link
              href="/report"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Canal de denuncias
            </Link>
          </nav>

          <p className="text-sm text-white/80">
            ©2024 PEIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
