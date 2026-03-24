 "use client";

import Link from "next/link";
import { motion } from "motion/react";

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
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-fit mx-auto">
          <h2
            id="workshops-heading"
            className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl"
          >
            Talleres Creativos
          </h2>
          <span className="line-rainbow mt-2 block w-full" />
        </div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >
          {workshops.map((workshop, index) => {
            const rainbowBadge = [
              "bg-peia-rainbow-red text-white",
              "bg-peia-rainbow-green text-white",
              "bg-peia-rainbow-blue text-white",
            ][index];
            const rainbowBtn = [
              "border-peia-rainbow-red text-peia-rainbow-red hover:bg-peia-rainbow-red hover:text-white",
              "border-peia-rainbow-green text-peia-rainbow-green hover:bg-peia-rainbow-green hover:text-white",
              "border-peia-rainbow-blue text-peia-rainbow-blue hover:bg-peia-rainbow-blue hover:text-white",
            ][index];
            return (
            <motion.article
              key={workshop.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 45px rgba(15,23,42,0.08)",
              }}
            >
              <div className="flex h-48 items-center justify-center bg-zinc-100 text-6xl">
                {workshop.image}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-zinc-900">
                  {workshop.title}
                </h3>
                <span className={`mt-2 inline-block w-fit rounded-full px-3 py-0.5 text-xs font-semibold ${rainbowBadge}`}>
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
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href="/workshops"
                    className={`mt-4 block rounded-lg border-2 py-2 text-center text-sm font-semibold transition-colors ${rainbowBtn}`}
                  >
                    Saber más
                  </Link>
                </motion.div>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
