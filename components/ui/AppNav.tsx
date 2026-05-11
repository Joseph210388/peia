import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/mission", label: "Nuestra Misión" },
  { href: "/workshops", label: "Talleres" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
] as const;

export default function AppNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-4 border-b-2 border-peia-orange/25 bg-peia-cream px-6 py-4 font-sans"
      aria-label="Navegación principal"
    >
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-sm font-bold text-stone-700 transition-colors hover:text-peia-dark"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
