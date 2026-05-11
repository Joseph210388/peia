"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { motion } from "motion/react";

const values = [
  {
    title: "Respeto",
    text: "Escuchamos los ritmos y necesidades de cada niño. No forzamos procesos: los acompañamos.",
    color: "border-l-peia-red bg-peia-red/10",
    icon: "🤝",
  },
  {
    title: "Inclusión",
    text: "Adaptamos materiales, tiempos y propuestas para que todas las niñas y niños puedan participar y sentirse parte.",
    color: "border-l-peia-orange bg-peia-orange/10",
    icon: "🌈",
  },
  {
    title: "Arte como lenguaje",
    text: "Creemos que dibujar, bailar, modelar o cantar es una forma de decir lo que a veces las palabras no alcanzan.",
    color: "border-l-peia-yellow bg-peia-yellow/20",
    icon: "🎨",
  },
  {
    title: "Autonomía y libertad guiada",
    text: "Ofrecemos límites claros y espacios de elección, para que los pequeños puedan probar, equivocarse y volver a intentar.",
    color: "border-l-peia-green bg-peia-green/10",
    icon: "🦋",
  },
  {
    title: "Comunidad intergeneracional",
    text: "Conectamos generaciones: abuelos, familias, educadores y niños compartiendo experiencias creativas.",
    color: "border-l-peia-blue bg-peia-blue/10",
    icon: "👵",
  },
];

const enfoquePoints = [
  {
    title: "DUA y muchas formas de participar",
    text: "Inspirados en el Diseño Universal para el Aprendizaje: quien pinta, pinta; quien observa primero, observa. El arte reduce barreras sin señalar a nadie.",
  },
  {
    title: "Proceso y experiencia",
    text: "Pedagogías activas y mirada respetuosa: el adulto acompaña en la zona de desarrollo próximo; no hay pantallas, hay materiales reales y personas.",
  },
  {
    title: "Acompañamiento a familias",
    text: "Sesiones de reflexión, orientación y actividades compartidas —especialmente cuando la crianza necesita más red de apoyo.",
  },
  {
    title: "Cuidado emocional y valores",
    text: "Las emociones son punto de partida: las nombramos, las validamos y conectamos con valores como el respeto y el cuidado de lo vivo.",
  },
];

const TAB_COUNT = 3;

/** Imagen lateral alineada con la pestaña activa (misma carpeta que el resto de fotos PEIA). */
const TAB_MEDIA = [
  {
    src: "/image/family-PEIA.png",
    alt: "Familias y comunidad educativa con PEIA",
  },
  {
    src: "/image/stories-childPEIA.png",
    alt: "Niños en actividades de cuento y arte con PEIA",
  },
  {
    src: "/image/community-PEIA.png",
    alt: "PEIA y el entorno local, arte y encuentro comunitario",
  },
] as const;

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="w-fit">
      <h2 id={id} className="text-2xl font-black text-peia-dark sm:text-3xl">
        {children}
      </h2>
      <span className="line-title-underline mt-1 block w-full" />
    </div>
  );
}

export default function MissionAboutSections() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = useCallback((index: number) => {
    const i = ((index % TAB_COUNT) + TAB_COUNT) % TAB_COUNT;
    setActive(i);
    tabRefs.current[i]?.focus();
  }, []);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        focusTab(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        focusTab(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        focusTab(0);
      } else if (e.key === "End") {
        e.preventDefault();
        focusTab(TAB_COUNT - 1);
      }
    },
    [focusTab]
  );

  const tabIds = [`${baseId}-tab-0`, `${baseId}-tab-1`, `${baseId}-tab-2`];
  const panelIds = [`${baseId}-panel-0`, `${baseId}-panel-1`, `${baseId}-panel-2`];

  return (
    <>
      <section
        className="bg-peia-teal/10 px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="sobre-peia-heading"
      >
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mx-auto w-fit text-center">
            <h2 id="sobre-peia-heading" className="text-2xl font-black text-peia-dark sm:text-3xl">
              Sobre PEIA
            </h2>
            <span className="line-title-underline mt-2 block w-full" />
          </div>

          <div
            role="tablist"
            aria-label="Secciones: quiénes somos, misión y visión"
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {(["Quiénes somos", "Misión", "Visión"] as const).map((label, index) => {
              const selected = active === index;
              return (
                <button
                  key={label}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabIds[index]}
                  aria-selected={selected}
                  aria-controls={panelIds[index]}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(e) => onTabKeyDown(e, index)}
                  className={`rounded-2xl border-2 px-4 py-3 text-sm font-extrabold transition-all duration-200 sm:px-6 sm:text-base ${
                    selected
                      ? "border-peia-dark bg-peia-dark text-peia-yellow shadow-color-teal"
                      : "border-peia-orange/50 bg-peia-cream text-peia-dark hover:border-peia-teal hover:bg-peia-yellow-light/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <div className="min-h-0 rounded-3xl border-2 border-peia-orange/35 bg-peia-cream/90 p-6 shadow-color-orange sm:p-8">
              <div
                id={panelIds[0]}
                role="tabpanel"
                aria-labelledby={tabIds[0]}
                hidden={active !== 0}
              >
              <SectionTitle id="quienes-somos-heading">Quiénes somos</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                PEIA es un servicio pedagógico y artístico extraescolar para la infancia de 2 a 6 años, nacido
                desde la escuela artística{" "}
                <strong className="font-bold text-peia-dark">Estrella de los Deseos</strong>. Somos una
                propuesta <strong className="font-bold text-peia-dark">ambulante</strong>: vamos a los centros
                educativos y nos adaptamos a su organización y a su línea pedagógica.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                No sustituimos al cole: lo <strong className="font-bold text-peia-dark">complementamos</strong>.
                El arte no está aquí para enseñar solo «técnica» ni perseguir un resultado final, sino para
                favorecer habilidades sociales, expresión emocional y cooperación —con familias, abuelos y
                entorno cuando toca.
              </p>
              </div>

              <div
                id={panelIds[1]}
                role="tabpanel"
                aria-labelledby={tabIds[1]}
                hidden={active !== 1}
              >
              <SectionTitle id="mision-heading">Misión</SectionTitle>
              <p className="mt-4 text-lg font-bold text-peia-dark">
                Ser el espacio extraescolar donde el arte refuerza la identidad educativa del centro y el
                bienestar de la infancia.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Ofrecemos acogida, propuestas con intención pedagógica y tiempo de experimentación guiada, con
                grupos reducidos (10–12 niños) y materiales que aportamos nosotros. Trabajamos la autoestima, la
                empatía y la autonomía sin perder de vista la diversidad del aula ni el clima social del grupo.
              </p>
              </div>

              <div
                id={panelIds[2]}
                role="tabpanel"
                aria-labelledby={tabIds[2]}
                hidden={active !== 2}
              >
              <SectionTitle id="vision-heading">Visión</SectionTitle>
              <p className="mt-4 text-lg font-bold text-peia-dark">
                Que el arte sea un lenguaje cotidiano también fuera del horario lectivo.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Soñamos con centros y barrios donde las extraescolares dialoguen con la pedagogía del aula,
                donde cada niño tenga experiencias artísticas significativas y donde familias, educadores y
                comunidad cuiden la infancia de forma corresponsable.
              </p>
              </div>
            </div>

            <div className="relative min-h-64 w-full max-w-full self-stretch overflow-hidden rounded-3xl border-2 border-peia-orange/35 bg-peia-yellow-light/25 shadow-color-orange sm:min-h-72 lg:h-full lg:min-h-60">
              <Image
                key={TAB_MEDIA[active].src}
                src={TAB_MEDIA[active].src}
                alt={TAB_MEDIA[active].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 45vw"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="bg-gradient-warm px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="valores-heading"
      >
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <SectionTitle id="valores-heading">Valores</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <motion.li
                key={item.title}
                className={`rounded-2xl border-2 border-peia-orange/30 border-l-4 bg-card p-4 ${item.color}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 + index * 0.06 }}
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-2 font-bold text-peia-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section
        className="bg-peia-purple/10 px-4 py-16 font-sans sm:px-6 lg:px-8"
        aria-labelledby="enfoque-heading"
      >
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          <SectionTitle id="enfoque-heading">Enfoque pedagógico</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Bebemos de referentes como Waldorf, Piaget, Vygotsky, Pikler o la crianza simple; estos cuatro
            pilares resumen cómo lo llevamos al día a día en cada taller y cada encuentro con familias.
          </p>
          <ul className="mt-8 space-y-6">
            {enfoquePoints.map((point, index) => (
              <motion.li
                key={point.title}
                className="flex gap-4 rounded-2xl border-2 border-peia-blue/40 bg-card p-5 shadow-color-yellow"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.18 + index * 0.06 }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peia-yellow text-lg font-black text-peia-dark ring-2 ring-peia-teal">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-peia-dark">{point.title}</h3>
                  <p className="mt-2 text-stone-700">{point.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </>
  );
}
