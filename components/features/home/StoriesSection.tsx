import Link from "next/link";

const stories = [
  {
    category: "CRIANZA",
    categoryColor: "text-peia-dark",
    title: "El arte como herramienta de autorregulación",
    description:
      "Descubre cómo la pintura ayuda a gestionar las emociones...",
  },
  {
    category: "ACTIVIDADES",
    categoryColor: "text-peia-yellow",
    title: "5 Manualidades con materiales reciclados",
    description:
      "Ideas creativas para hacer en casa durante el fin de semana...",
  },
  {
    category: "COMUNIDAD",
    categoryColor: "text-peia-dark",
    title: "Taller de abuelos y nietos: un éxito",
    description:
      "Resumen de nuestra última jornada intergeneracional...",
  },
  {
    category: "NOTICIAS",
    categoryColor: "text-peia-yellow",
    title: "Nuevas plazas para el curso 2024-25",
    description:
      "Abrimos el periodo de pre-inscripción para el próximo año...",
  },
];

export default function StoriesSection() {
  return (
    <section
      className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="stories-heading"
              className="text-3xl font-bold text-zinc-900"
            >
              Historias de PEIA
            </h2>
            <p className="mt-1 text-zinc-600">
              Consejos de crianza y noticias de nuestros talleres.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 text-sm font-semibold text-peia-dark hover:underline sm:mt-0"
          >
            Ver todo el blog →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-4"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${story.categoryColor}`}
              >
                {story.category}
              </span>
              <h3 className="mt-2 font-semibold text-zinc-900">
                {story.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-zinc-600">
                {story.description}
              </p>
              <Link
                href="/blog"
                className="mt-3 text-sm font-semibold text-peia-dark hover:underline"
              >
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
