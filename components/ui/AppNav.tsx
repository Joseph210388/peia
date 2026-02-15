import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/mission", label: "Nuestra Misión" },
  { href: "/workshops", label: "Talleres de Trabajo" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
] as const;

export default function AppNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-4 border-b border-zinc-200 bg-white px-6 py-4 font-sans"
      aria-label="Navegación principal"
    >
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
