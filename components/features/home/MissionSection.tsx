"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function MissionSection() {
  return (
    <section
      className="relative overflow-hidden bg-peia-teal/10 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="mission-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 bg-peia-pink/25 blur-3xl blob-deco"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Columna izquierda: ilustración + recuadro (solo desktop) */}
        <motion.div
          className="relative order-1 mx-auto w-full max-w-xl lg:order-0 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="overflow-hidden rounded-3xl border-[3px] border-peia-orange bg-peia-yellow-light shadow-color-orange"
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative aspect-[4/3.5] w-full max-h-[min(22rem,85vw)] sm:max-h-80 lg:max-h-none">
              <Image
                src="/image/home-mission-art.png"
                alt="Ilustración: taller artístico inclusivo y acompañamiento PEIA"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) min(85vw, 36rem), 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 z-10 w-48 max-w-[45%] rounded-2xl border-2 border-peia-teal bg-peia-dark px-4 py-3 text-white shadow-color-teal sm:bottom-6 sm:right-6 sm:w-56"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          >
            <p className="font-bold text-peia-yellow">Respeto y libertad</p>
            <p className="mt-1 text-sm text-peia-teal/95">
              Paciencia, escucha y límites claros: el adulto acompaña sin
              dirigir el proceso creativo.
            </p>
          </motion.div>
        </motion.div>

        {/* Columna derecha: título, párrafo, tarjetas, botón */}
        <motion.div
          className="order-2 lg:order-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-fit">
            <h2
              id="mission-heading"
              className="text-3xl font-black text-peia-dark sm:text-4xl"
            >
              Nuestra Misión
            </h2>
            <span className="line-title-underline mt-1 block w-full" />
          </div>
          <p className="mt-4 text-lg font-normal leading-relaxed text-stone-700 sm:mt-6">
            PEIA es el complemento natural del aula: no competimos con el
            centro, sino que ampliamos el tiempo lectivo con arte, juego y
            encuentro en grupos reducidos, pensado para la diversidad y el clima
            social del alumnado.
          </p>

          <motion.div
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.div
              className="rounded-2xl border-2 border-peia-blue bg-peia-blue/15 p-4 text-peia-dark"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: "8px 8px 0 0 var(--peia-blue)",
              }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-peia-blue/35 text-peia-dark">
                <svg
                  className="h-6 w-6 text-peia-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-peia-dark">Intergeneracional</h3>
              <p className="mt-1 text-sm text-stone-700">
                Unión entre generaciones para un aprendizaje rico y humano.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border-2 border-peia-orange bg-peia-orange/20 p-4 text-peia-dark"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              whileHover={{
                y: -4,
                boxShadow: "8px 8px 0 0 var(--peia-orange)",
              }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-peia-orange/40 text-peia-dark">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-peia-dark">Arte como proceso</h3>
              <p className="mt-1 text-sm text-stone-700">
                Materiales reales y propuestas abiertas: importa crear y
                relacionarse, no el «dibujo perfecto».
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/mission"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-cta-sunny px-8 py-4 text-lg font-black text-peia-dark shadow-color-purple transition-all duration-200 hover:-translate-y-0.5 sm:mt-10 sm:inline-flex sm:w-auto"
            >
              Sobre Nosotros
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
