"use client";

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

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="bg-zinc-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="contact-faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-peia-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-900">
              Preguntas frecuentes
            </span>
            <h2
              id="contact-faq-heading"
              className="mt-4 text-3xl font-bold text-peia-dark sm:text-4xl"
            >
              Resuelve tus dudas rápidamente
            </h2>
            <p className="mt-4 text-zinc-600">
              Hemos recopilado las preguntas más comunes de los padres para
              ayudarte a entender mejor cómo funciona PEIA y los beneficios
              para tus hijos de 2 a 6 años.
            </p>
            <div className="mt-8 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-zinc-200/50 text-6xl">
              🎨
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
                    aria-expanded={isOpen}
                    aria-controls={`contact-faq-answer-${index}`}
                    id={`contact-faq-question-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-zinc-600" aria-hidden>
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
                      <div className="border-t border-zinc-200 px-4 py-4">
                        <p className="text-zinc-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
