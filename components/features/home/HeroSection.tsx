import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-20 font-sans sm:px-6 sm:py-28 lg:px-8"
      aria-label="Presentación de PEIA"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-peia-yellow px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-zinc-900">
          Educación creativa
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-peia-dark drop-shadow-sm sm:text-5xl lg:text-6xl">
          PEIA ayuda y mejora tu vida y crianza
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Pedagogía extraescolar artística para niños de 2 a 6 años. Un espacio
          de respeto, arte y comunidad.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/mission"
            className="rounded-lg bg-peia-yellow px-6 py-3 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
          >
            Conócenos más
          </Link>
          <Link
            href="/workshops"
            className="rounded-lg border-2 border-peia-dark bg-transparent px-6 py-3 text-sm font-semibold text-peia-dark transition-opacity hover:bg-zinc-100"
          >
            Ver talleres
          </Link>
        </div>
      </div>
    </section>
  );
}
