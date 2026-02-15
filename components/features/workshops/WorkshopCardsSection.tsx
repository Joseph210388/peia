import Link from "next/link";

const workshops = [
  {
    slug: "educacion-valores",
    title: "Educación en Valores a Través de Cuentos y Representaciones",
    description:
      "Historias y dramatizaciones que fomentan el respeto, la empatía y los valores fundamentales en niños y niñas.",
    imagePlaceholder: "📚",
  },
  {
    slug: "actividades-intergeneracionales",
    title: "Actividades Intergeneracionales",
    description:
      "Unión entre generaciones para un aprendizaje rico y humano, mediante el arte y la creatividad compartida.",
    imagePlaceholder: "👵",
  },
  {
    slug: "reflexion-familia",
    title: "Sesiones de Reflexión en Familia",
    description:
      "Espacios para crear juntos, reflexionar sobre la crianza y fortalecer el vínculo familiar a través del arte.",
    imagePlaceholder: "🎨",
  },
  {
    slug: "comunidad-local",
    title: "Colaboración con la Comunidad Local",
    description:
      "Proyectos que conectan el taller con el entorno: huertos, artistas locales y experiencias comunitarias.",
    imagePlaceholder: "🌱",
  },
];

export default function WorkshopCardsSection() {
  return (
    <section
      className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="workshop-cards-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="workshop-cards-heading"
          className="text-3xl font-bold text-peia-dark sm:text-4xl"
        >
          Talleres Artísticos Colaborativos
        </h2>
        <span className="mt-2 block h-1 w-24 rounded-full bg-peia-yellow" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop) => (
            <article
              key={workshop.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-video flex items-center justify-center bg-peia-yellow-light text-5xl sm:text-6xl">
                {workshop.imagePlaceholder}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold leading-snug text-zinc-900 sm:text-lg">
                  {workshop.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-zinc-600">
                  {workshop.description}
                </p>
                <Link
                  href="/workshops"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-peia-yellow px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
                >
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
