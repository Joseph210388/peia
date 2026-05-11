/**
 * Tarjetas de oferta PEIA: una sola fuente de verdad para inicio (carrusel) y /workshops.
 * Orden: tres talleres en el centro y cuatro líneas de «Qué sumamos».
 */

export type WorkshopCardVisual =
  | { kind: "cover"; src: string; alt: string }
  | { kind: "emoji"; emoji: string };

export interface PeiaWorkshopCard {
  slug: string;
  title: string;
  age: string;
  description: string;
  points: readonly [string, string];
  visual: WorkshopCardVisual;
}

export const PEIA_WORKSHOP_CARDS: readonly PeiaWorkshopCard[] = [
  {
    slug: "musica-ritmo",
    title: "Música y ritmo",
    age: "3–6 AÑOS (GRUPO MIXTO)",
    description:
      "Canciones, percusión y cuerpo en movimiento: escucha, turnos y juego simbólico.",
    points: ["Instrumentos y materiales sonoros", "Cooperación desde el ritmo"],
    visual: {
      kind: "cover",
      src: "/image/music-childandteacher.png",
      alt: "Educadora y niños en un taller de música y percusión",
    },
  },
  {
    slug: "plastica-escultura",
    title: "Plástica y escultura",
    age: "3–6 AÑOS (GRUPO MIXTO)",
    description:
      "Pintura, modelado y manualidades con varias formas de participar el mismo día.",
    points: ["Mayores y pequeños en el mismo taller", "Cierre compartido"],
    visual: {
      kind: "cover",
      src: "/image/art-child.png",
      alt: "Niños y niñas en un taller de plástica, pintura y modelado",
    },
  },
  {
    slug: "teatro-expresion",
    title: "Teatro y expresión corporal",
    age: "3–6 AÑOS (GRUPO MIXTO)",
    description:
      "Dramatización y cuento para nombrar emociones, valores y acuerdos sencillos.",
    points: ["Representaciones guiadas", "Reflexión después de jugar"],
    visual: { kind: "cover", src: "/image/theater-child.png", alt: "Educadora y niños en un taller de teatro y expresión corporal" },
  },
  {
    slug: "educacion-valores",
    title: "Cuentos y representaciones",
    age: "2–6 AÑOS · EXTRAESCOLAR",
    description:
      "Cuentos y teatro para trabajar respeto, amistad y cooperación; al final, espacio para poner palabras a lo vivido (emociones, disculpas, acuerdos).",
    points: ["Narración y dramatización guiadas", "Cierre con reflexión en grupo"],
    visual: { kind: "cover", src: "/image/stories-childPEIA.png", alt: "Niños y niñas en un taller de cuentos y representaciones" },
  },
  {
    slug: "actividades-intergeneracionales",
    title: "Actividades intergeneracionales",
    age: "2–6 AÑOS · FAMILIAS",
    description:
      "Unión entre generaciones para un aprendizaje rico y humano, mediante el arte y la creatividad compartida.",
    points: ["Abuelos y familias en el taller", "Historias y manualidades conjuntas"],
    visual: { kind: "cover", src: "/image/grandparents-PEIA.png", alt: "Abuelos y niños en un taller de actividades intergeneracionales" },
  },
  {
    slug: "reflexion-familia",
    title: "Sesiones de reflexión en familia",
    age: "2–6 AÑOS · ACOMPAÑAMIENTO",
    description:
      "Orientación educativa, actividades compartidas y apoyo cuando hay necesidades particulares: la crianza también se aprende en comunidad.",
    points: ["Espacio de escucha para familias", "Recursos y orientación práctica"],
    visual: { kind: "cover", src: "/image/family-PEIA.png", alt: "Educadora y niños en un taller de reflexión en familia" },
  },
  {
    slug: "comunidad-local",
    title: "Colaboración con la comunidad local",
    age: "2–6 AÑOS · ENTORNO",
    description:
      "Ferias de arte, teatro al aire libre, naturaleza y encuentros locales para estrechar vínculos y el respeto al entorno.",
    points: ["Proyectos con barrio y naturaleza", "Arte y juego fuera del aula"],
    visual: { kind: "cover", src: "/image/community-PEIA.png", alt: "Niños y niñas en un taller de colaboración con la comunidad local" },
  },
] as const;

/** Acentos por índice de tarjeta (se repiten si hay más tarjetas que entradas). */
export const WORKSHOP_CARD_ACCENTS = [
  {
    top: "bg-peia-red/20",
    badge: "bg-peia-red text-white",
    btn: "border-peia-red text-peia-red hover:bg-peia-red hover:text-white",
  },
  {
    top: "bg-peia-green/20",
    badge: "bg-peia-green text-white",
    btn: "border-peia-green text-peia-green hover:bg-peia-green hover:text-white",
  },
  {
    top: "bg-peia-blue/20",
    badge: "bg-peia-blue text-white",
    btn: "border-peia-blue text-peia-blue hover:bg-peia-blue hover:text-white",
  },
  {
    top: "bg-peia-orange/20",
    badge: "bg-peia-orange text-peia-dark",
    btn: "border-peia-orange text-peia-orange hover:bg-peia-orange hover:text-peia-dark",
  },
  {
    top: "bg-peia-purple/20",
    badge: "bg-peia-purple text-white",
    btn: "border-peia-purple text-peia-purple hover:bg-peia-purple hover:text-white",
  },
  {
    top: "bg-peia-teal/20",
    badge: "bg-peia-teal text-peia-dark",
    btn: "border-peia-teal text-peia-teal hover:bg-peia-teal hover:text-peia-dark",
  },
  {
    top: "bg-peia-pink/20",
    badge: "bg-peia-pink text-white",
    btn: "border-peia-pink text-peia-pink hover:bg-peia-pink hover:text-white",
  },
] as const;

export function getWorkshopAccent(index: number) {
  return WORKSHOP_CARD_ACCENTS[index % WORKSHOP_CARD_ACCENTS.length]!;
}
