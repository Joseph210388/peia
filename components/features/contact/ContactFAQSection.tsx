"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es la pedagogía artística extraescolar?",
    answer:
      "Es un enfoque educativo que utiliza el arte, el movimiento y la creatividad como herramientas principales fuera del horario escolar. En PEIA, combinamos actividades plásticas, musicales y corporales para favorecer el desarrollo integral de niños y niñas de 2 a 6 años en un ambiente de respeto e inclusión.",
  },
  {
    question: "¿Cómo gestionan la inclusión en sus talleres?",
    answer:
      "Adaptamos las actividades a las necesidades individuales de cada niño y niña. Trabajamos con ratios reducidos, materiales diversos y propuestas abiertas que permiten múltiples formas de participación. El respeto mutuo y la valoración de cada persona son la base de nuestra metodología.",
  },
  {
    question: "¿Cuáles son los horarios de los talleres?",
    answer:
      "Los horarios varían según el taller y el centro. Ofrecemos sesiones en horario extraescolar, generalmente por las tardes. Contáctanos para conocer la oferta específica en tu zona y los horarios disponibles.",
  },
  {
    question: "¿Es necesario llevar material propio?",
    answer:
      "No. PEIA proporciona todo el material necesario para las actividades: pinturas, instrumentos, arcilla, tejidos, etc. Solo pedimos que los niños acudan con ropa cómoda que pueda mancharse, ya que trabajamos mucho con las manos y el cuerpo.",
  },
];

const accordionBorderColors = [
  "border-l-peia-red",
  "border-l-peia-teal",
  "border-l-peia-purple",
  "border-l-peia-pink",
] as const;

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="bg-gradient-warm px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="contact-faq-heading"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mt-4 w-fit">
              <h2
                id="contact-faq-heading"
                className="text-3xl font-black text-peia-dark sm:text-4xl"
              >
                Preguntas frecuentes
              </h2>
              <span className="line-title-underline mt-1 block w-full" />
            </div>
            <p className="mt-4 text-lg text-stone-700">
              Hemos recopilado las preguntas más comunes de los padres para
              ayudarte a entender mejor cómo funciona PEIA y los beneficios
              para tus hijos de 2 a 6 años.
            </p>
            <motion.div
              className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl border-[3px] border-peia-purple bg-peia-purple/15 shadow-color-yellow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Image
                src="/image/contact.png"
                alt="Atención telefónica y consultas — PEIA"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const leftAccent = accordionBorderColors[index];
              return (
                <motion.div
                  key={index}
                  className={`overflow-hidden rounded-2xl border-2 border-peia-orange/30 border-l-4 bg-card ${leftAccent}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-bold text-peia-dark transition-colors duration-200 hover:bg-peia-yellow-light/50"
                    aria-expanded={isOpen}
                    aria-controls={`contact-faq-answer-${index}`}
                    id={`contact-faq-question-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-peia-teal/25 text-peia-dark"
                      aria-hidden
                    >
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`contact-faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`contact-faq-question-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t-2 border-peia-orange/20 bg-peia-cream/60 px-4 py-4">
                        <p className="text-stone-700">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
