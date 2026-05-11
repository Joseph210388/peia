import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-warm px-4 py-20 font-sans sm:px-6 sm:py-28 lg:px-8"
      aria-label="Presentación de PEIA"
    >
      {/* Capas decorativas: manchas de color suaves (reglas PEIA) */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 bg-peia-teal/35 blur-3xl blob-deco sm:-left-10 sm:h-72 sm:w-72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 bg-peia-purple/30 blur-3xl blob-deco sm:right-0 sm:h-64 sm:w-64"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 bg-peia-orange/20 blur-3xl blob-deco"
        aria-hidden
      />
      <div className="hero-pattern pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border-2 border-peia-purple bg-peia-purple/90 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-color-teal">
          Extraescolar artística
        </span>
        <h1 className="mt-6 text-4xl font-black leading-tight text-peia-dark sm:text-5xl lg:text-6xl">
          PEIA ayuda y mejora tu vida y crianza
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-stone-700 sm:text-xl">
          Acompañamos a niños y niñas de 2 a 6 años en centros educativos: el
          arte como herramienta para el vínculo, las emociones y la cooperación
          —sin prisa por el resultado, con respeto al ritmo de cada uno.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/mission"
            className="rounded-2xl bg-peia-yellow px-8 py-4 text-lg font-black text-peia-dark shadow-color-teal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-color-purple"
          >
            Conócenos más
          </Link>
          <Link
            href="/workshops"
            className="rounded-2xl border-[3px] border-peia-blue bg-peia-cream/80 px-8 py-4 text-lg font-bold text-peia-blue shadow-color-orange transition-all duration-200 hover:-translate-y-0.5 hover:bg-peia-blue/10"
          >
            Ver talleres
          </Link>
        </div>
      </div>
    </section>
  );
}
