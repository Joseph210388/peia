import Link from "next/link";

const workshops = [
  {
    title: "Música y Movimiento",
    age: "2-4 AÑOS",
    description: "Explorando el ritmo del cuerpo y el alma.",
    points: ["Instrumentos de madera", "Expresión corporal"],
    image: "🍃",
  },
  {
    title: "Artes Plásticas",
    age: "3-6 AÑOS",
    description: "Pinceles, barro y sueños de colores.",
    points: ["Modelado en arcilla", "Pintura experimental"],
    image: "🪵",
  },
  {
    title: "Arte y Huerto",
    age: "4-6 AÑOS",
    description: "Conectando con la tierra y sus pigmentos.",
    points: ["Tintes naturales", "Land art infantil"],
    image: "🌿",
  },
];

export default function WorkshopsSection() {
  return (
    <section
      className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="workshops-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="w-fit mx-auto">
          <h2
            id="workshops-heading"
            className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl"
          >
            Talleres Creativos
          </h2>
          <span className="line-dashed-tight mt-2 block w-full" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="flex h-48 items-center justify-center bg-zinc-100 text-6xl">
                {workshop.image}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-zinc-900">
                  {workshop.title}
                </h3>
                <span className="mt-2 inline-block w-fit rounded-full bg-peia-dark px-3 py-0.5 text-xs font-semibold text-white">
                  {workshop.age}
                </span>
                <p className="mt-3 text-sm text-zinc-600">
                  {workshop.description}
                </p>
                <ul className="mt-3 list-inside list-disc text-sm text-zinc-600">
                  {workshop.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link
                  href="/workshops"
                  className="mt-4 rounded-lg border-2 border-peia-dark py-2 text-center text-sm font-semibold text-peia-dark transition-colors hover:bg-peia-dark hover:text-white"
                >
                  Saber más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
