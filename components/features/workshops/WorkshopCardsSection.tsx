"use client";

import { motion } from "motion/react";
import WorkshopOfferCard from "@/components/features/workshops/WorkshopOfferCard";
import { PEIA_WORKSHOP_CARDS } from "@/lib/peia-workshop-cards";

export default function WorkshopCardsSection() {
  return (
    <section
      className="relative overflow-hidden bg-peia-yellow-light/35 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="workshop-cards-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[min(100%,32rem)] -translate-x-1/2 bg-peia-pink/20 blur-3xl blob-deco"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="workshop-cards-heading"
          className="text-3xl font-black text-peia-dark sm:text-4xl"
        >
          Qué sumamos en PEIA
        </h2>
        <span
          className="mt-2 block h-1.5 w-32 max-w-full rounded-full bg-linear-to-r from-peia-yellow-light via-peia-yellow to-peia-orange"
          aria-hidden
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-700 sm:text-base">
          Las mismas tarjetas que en el inicio (talleres en el centro y líneas de trabajo). Aquí las ves todas en
          rejilla.
        </p>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {PEIA_WORKSHOP_CARDS.map((card, index) => (
            <motion.div
              key={card.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <WorkshopOfferCard
                card={card}
                accentIndex={index}
                moreHref="/#talleres-inicio"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
