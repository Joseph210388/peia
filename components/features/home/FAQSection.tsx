"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuál es la edad mínima para inscribir a mi hijo/a?",
    answer:
      "Aceptamos niños y niñas desde los 2 hasta los 6 años de edad, en línea con nuestro enfoque de pedagogía infantil artística.",
  },
  {
    question: "¿Cómo se integra el respeto intergeneracional en las actividades diarias?",
    answer:
      "Incorporamos actividades que incluyen a personas de diferentes generaciones, fomentando el respeto y la comprensión entre todas las edades.juego.",
  },
  {
    question: "¿Qué medidas de seguridad tienen en cuenta en las salidas al aire libre?",
    answer:
      "Contamos con un equipo preparado para garantizar la seguridad de los niños en todo momento, siguiendo estrictos protocolos de protección.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="bg-peia-dark px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-bold text-peia-yellow sm:text-4xl"
        >
          Preguntas frecuentes
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg border-2 border-peia-yellow bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 bg-peia-yellow px-4 py-4 text-left font-medium text-zinc-900 transition-colors hover:bg-peia-yellow/90"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center text-zinc-900"
                    aria-hidden
                  >
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
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t-2 border-peia-yellow bg-peia-dark px-4 py-4">
                      <p className="text-zinc-100">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
