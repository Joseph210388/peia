 "use client";

import Link from "next/link";
import { motion } from "motion/react";

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
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="workshop-cards-heading"
          className="text-3xl font-bold text-peia-dark sm:text-4xl"
        >
          Talleres Artísticos Colaborativos
        </h2>
        <span className="mt-2 block h-1 w-24 rounded-full bg-gradient-rainbow" />

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {workshops.map((workshop, index) => {
            const rainbowBg = [
              "bg-peia-rainbow-red/10",
              "bg-peia-rainbow-green/10",
              "bg-peia-rainbow-orange/10",
              "bg-peia-rainbow-violet/10",
            ][index];
            const rainbowBtn = [
              "bg-peia-rainbow-red text-white hover:opacity-90",
              "bg-peia-rainbow-green text-white hover:opacity-90",
              "bg-peia-rainbow-orange text-white hover:opacity-90",
              "bg-peia-rainbow-violet text-white hover:opacity-90",
            ][index];
            return (
            <motion.article
              key={workshop.slug}
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
              <div className={`aspect-video flex items-center justify-center ${rainbowBg} text-5xl sm:text-6xl`}>
                {workshop.imagePlaceholder}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold leading-snug text-zinc-900 sm:text-lg">
                  {workshop.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-zinc-600">
                  {workshop.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                  <Link
                    href="/workshops"
                    className={`mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity ${rainbowBtn}`}
                  >
                    Leer más
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
