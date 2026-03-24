"use client";

import { motion } from "motion/react";

const values = [
  {
    title: "Respeto",
    text: "Escuchamos los ritmos y necesidades de cada niño. No forzamos procesos: los acompañamos.",
    color: "border-l-peia-rainbow-red bg-peia-rainbow-red/5",
    icon: "🤝",
  },
  {
    title: "Inclusión",
    text: "Adaptamos materiales, tiempos y propuestas para que todas las niñas y niños puedan participar y sentirse parte.",
    color: "border-l-peia-rainbow-orange bg-peia-rainbow-orange/5",
    icon: "🌈",
  },
  {
    title: "Arte como lenguaje",
    text: "Creemos que dibujar, bailar, modelar o cantar es una forma de decir lo que a veces las palabras no alcanzan.",
    color: "border-l-peia-rainbow-yellow bg-peia-rainbow-yellow/10",
    icon: "🎨",
  },
  {
    title: "Autonomía y libertad guiada",
    text: "Ofrecemos límites claros y espacios de elección, para que los pequeños puedan probar, equivocarse y volver a intentar.",
    color: "border-l-peia-rainbow-green bg-peia-rainbow-green/5",
    icon: "🦋",
  },
  {
    title: "Comunidad intergeneracional",
    text: "Conectamos generaciones: abuelos, familias, educadores y niños compartiendo experiencias creativas.",
    color: "border-l-peia-rainbow-blue bg-peia-rainbow-blue/5",
    icon: "👵",
  },
];

const enfoquePoints = [
  {
    title: "Pedagogía artística",
    text: "Usamos materiales plásticos, música, movimiento y juego simbólico como caminos para aprender y relacionarse.",
  },
  {
    title: "Propuestas abiertas",
    text: "Ofrecemos actividades sin un resultado «correcto». Importa más el proceso que el producto final.",
  },
  {
    title: "Acompañamiento a familias",
    text: "No trabajamos solo con niños; escuchamos a familias, compartimos recursos y abrimos espacios de reflexión conjunta.",
  },
  {
    title: "Cuidado emocional",
    text: "Ponemos mucha atención a cómo se sienten: validamos emociones, nombramos lo que ocurre y buscamos formas creativas de gestionarlo.",
  },
];

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="w-fit">
      <h2 id={id} className="text-2xl font-bold text-peia-dark sm:text-3xl">
        {children}
      </h2>
      <span className="line-rainbow mt-1 block w-full" />
    </div>
  );
}

export default function MissionAboutSections() {
  return (
    <>
      {/* Quiénes somos */}
      <section
        className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="quienes-somos-heading"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionTitle id="quienes-somos-heading">Quiénes somos</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            PEIA es un espacio de pedagogía extraescolar artística para niños y niñas de 2 a 6 años.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Diseñamos talleres y acompañamientos donde el arte, el juego y el movimiento son el lenguaje principal. Nuestro enfoque une familias, comunidad y escuela, poniendo el foco en la inclusión, el respeto y el bienestar emocional.
          </p>
        </motion.div>
      </section>

      {/* Misión */}
      <section
        className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="mision-heading"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <SectionTitle id="mision-heading">Misión</SectionTitle>
          <p className="mt-4 text-lg font-medium text-peia-dark">
            Acompañar la infancia a través del arte, el juego y el respeto.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Nuestra misión es ofrecer un espacio seguro y creativo donde los niños puedan explorar, expresarse y construir vínculos sanos. Creemos que el arte es una herramienta poderosa para desarrollar la autoestima, la empatía y la autonomía desde los primeros años de vida.
          </p>
        </motion.div>
      </section>

      {/* Visión */}
      <section
        className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="vision-heading"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <SectionTitle id="vision-heading">Visión</SectionTitle>
          <p className="mt-4 text-lg font-medium text-peia-dark">
            Soñamos con una infancia rodeada de arte, escucha y comunidad.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Queremos que cada niño tenga acceso a experiencias artísticas significativas, independientemente de su contexto. Imaginamos barrios donde los talleres, las familias, los educadores y la comunidad se entrelazan para cuidar de la infancia de forma corresponsable.
          </p>
        </motion.div>
      </section>

      {/* Valores */}
      <section
        className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="valores-heading"
      >
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <SectionTitle id="valores-heading">Valores</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <motion.li
                key={item.title}
                className={`rounded-xl border border-zinc-200 border-l-4 p-4 ${item.color}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.06 }}
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-2 font-semibold text-peia-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Nuestra historia */}
      <section
        className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="historia-heading"
      >
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <SectionTitle id="historia-heading">Nuestra historia</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            PEIA nace de la pregunta: ¿qué pasaría si la escuela, la familia y el arte se encontraran en un mismo espacio?
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Tras años trabajando en educación y arte, vimos la necesidad de un lugar donde la infancia pudiera vivir el arte sin notas, juicios ni prisas. Un espacio donde el proceso importara más que el resultado y donde cada niño pudiera sentirse escuchado y capaz. Así surgió PEIA: un proyecto para acompañar a las familias y a los más pequeños desde el respeto, la creatividad y la inclusión.
          </p>
        </motion.div>
      </section>

      {/* Enfoque pedagógico */}
      <section
        className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="enfoque-heading"
      >
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <SectionTitle id="enfoque-heading">Enfoque pedagógico</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Nuestra manera de trabajar se sostiene en cuatro pilares que guían cada taller y cada encuentro con las familias.
          </p>
          <ul className="mt-8 space-y-6">
            {enfoquePoints.map((point, index) => (
              <motion.li
                key={point.title}
                className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + index * 0.06 }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peia-yellow-light text-lg font-bold text-peia-dark">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-peia-dark">{point.title}</h3>
                  <p className="mt-2 text-zinc-600">{point.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </>
  );
}
