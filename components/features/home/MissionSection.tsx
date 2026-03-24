 "use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function MissionSection() {
  return (
    <section
      className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: ilustración + recuadro Respeto y Libertad (solo desktop) */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="overflow-hidden rounded-2xl bg-peia-yellow-light shadow-lg"
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="aspect-[4/3.5] flex items-center justify-center p-8">
              <div className="relative flex h-full max-h-80 w-full items-center justify-center">
                <motion.span
                  className="text-8xl"
                  aria-hidden
                  animate={{ rotate: [0, -4, 4, 0], scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🎨
                </motion.span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 z-10 w-48 max-w-[45%] rounded-xl bg-peia-dark px-4 py-3 text-white shadow-lg sm:bottom-6 sm:right-6 sm:w-56"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          >
            <p className="font-semibold">Respeto y Libertad</p>
            <p className="mt-1 text-sm text-white/90">
              Fomentamos la autonomía a través de la expresión artística guiada.
            </p>
          </motion.div>
        </motion.div>

        {/* Columna derecha: título, párrafo, tarjetas, botón */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-fit">
            <h2
              id="mission-heading"
              className="text-3xl font-bold text-peia-dark sm:text-4xl"
            >
              Nuestra Misión
            </h2>
            <span className="line-rainbow mt-1 block w-full" />
          </div>
          <p className="mt-4 leading-relaxed text-zinc-600 sm:mt-6">
            En PEIA creemos que el arte es el lenguaje natural de la infancia.
            Nuestro enfoque único combina la pedagogía extraescolar con un
            compromiso profundo hacia la inclusión y el respeto mutuo.
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
              className="rounded-xl border border-zinc-200 border-l-4 border-l-peia-rainbow-blue bg-white p-4 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-peia-rainbow-blue/20 text-peia-rainbow-blue">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900">Intergeneracional</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Unión entre generaciones para un aprendizaje rico y humano.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-zinc-200 border-l-4 border-l-peia-rainbow-orange bg-peia-rainbow-orange/10 p-4 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-peia-rainbow-orange/30 text-peia-rainbow-orange">
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
              <h3 className="font-semibold text-zinc-900">Artística</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Exploración de materiales y técnicas adaptadas a cada edad.
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
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-gradient-rainbow px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 sm:mt-10 sm:inline-flex sm:w-auto"
            >
              Sobre Nosotros
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
