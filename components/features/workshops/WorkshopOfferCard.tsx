import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { PeiaWorkshopCard } from "@/lib/peia-workshop-cards";
import { getWorkshopAccent } from "@/lib/peia-workshop-cards";

interface WorkshopOfferCardProps {
  card: PeiaWorkshopCard;
  accentIndex: number;
  /** Destino del CTA (por defecto la página de talleres). */
  moreHref?: string;
}

export default function WorkshopOfferCard({
  card,
  accentIndex,
  moreHref = "/workshops",
}: WorkshopOfferCardProps) {
  const { top, badge, btn } = getWorkshopAccent(accentIndex);

  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-peia-orange/40 bg-card"
      initial={false}
      whileHover={{
        y: -6,
        boxShadow: "10px 10px 0 0 var(--peia-orange)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {card.visual.kind === "cover" ? (
        <div className={`relative h-48 w-full min-h-48 shrink-0 overflow-hidden ${top}`}>
          <Image
            src={card.visual.src}
            alt={card.visual.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          className={`flex h-48 min-h-48 shrink-0 items-center justify-center text-5xl sm:text-6xl ${top}`}
        >
          <span aria-hidden>{card.visual.emoji}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black leading-snug text-peia-dark">{card.title}</h3>
        <span
          className={`mt-2 inline-block w-fit max-w-full rounded-full px-3 py-1 text-xs font-extrabold ${badge}`}
        >
          {card.age}
        </span>
        <p className="mt-3 flex-1 text-sm text-stone-700">{card.description}</p>
        <ul className="mt-3 list-inside list-disc text-sm text-stone-700">
          <li>{card.points[0]}</li>
          <li>{card.points[1]}</li>
        </ul>
        <Link
          href={moreHref}
          className={`mt-4 block rounded-2xl border-[3px] py-2.5 text-center text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 ${btn}`}
        >
          Saber más
        </Link>
      </div>
    </motion.article>
  );
}
