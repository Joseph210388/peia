"use client";

import { motion } from "motion/react";
import { useState } from "react";

const contactOptions = [
  { value: "", label: "Selecciona una opción" },
  { value: "email", label: "Email" },
  { value: "telefono", label: "Teléfono" },
  { value: "whatsapp", label: "WhatsApp" },
];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      className="relative overflow-hidden bg-peia-dark px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="contact-form-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-peia-purple/25 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="rounded-3xl border-[3px] border-peia-teal bg-card p-6 shadow-color-teal sm:p-8">
              <h2
                id="contact-form-heading"
                className="text-2xl font-black text-peia-dark sm:text-3xl"
              >
                Envíanos un mensaje
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    Nombre
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark placeholder:text-stone-500 focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    Apellidos
                  </span>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Tus apellidos"
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark placeholder:text-stone-500 focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    Email <span className="text-peia-red">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ejemplo@correo.com"
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark placeholder:text-stone-500 focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    Teléfono <span className="text-peia-red">*</span>
                  </span>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+34 600 000 000"
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark placeholder:text-stone-500 focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    ¿Cómo quieres que te contactemos?{" "}
                    <span className="text-peia-red">*</span>
                  </span>
                  <select
                    name="contacto"
                    required
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  >
                    {contactOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-600">
                    Mensaje <span className="text-peia-red">*</span>
                  </span>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full rounded-xl border-2 border-peia-orange/40 bg-peia-cream px-4 py-3 text-peia-dark placeholder:text-stone-500 focus:border-peia-teal focus:outline-none focus:ring-2 focus:ring-peia-teal/40"
                  />
                </label>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-peia-yellow px-6 py-4 text-lg font-black text-peia-dark shadow-color-purple transition-all duration-200 hover:-translate-y-0.5 hover:shadow-color-teal"
                >
                  {sent ? "Enviado" : "Enviar solicitud"}
                  {!sent && (
                    <span className="text-lg" aria-hidden>
                      →
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Estamos a un solo clic de distancia
            </h2>
            <p className="mt-4 text-lg text-peia-teal/95">
              Si prefieres una atención directa, puedes comunicarte con nosotros
              a través de los siguientes canales. Estaremos encantados de
              resolver cualquier duda.
            </p>
            <div className="mt-8 space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peia-green text-xl text-peia-dark ring-2 ring-peia-yellow"
                  aria-hidden
                >
                  📞
                </span>
                <div>
                  <p className="text-xs font-bold uppercase text-peia-yellow">
                    Teléfono de atención
                  </p>
                  <a
                    href="tel:+34623026555"
                    className="mt-1 block text-lg font-black text-white hover:underline"
                  >
                    +34 623 02 65 55
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peia-blue text-xl text-white ring-2 ring-peia-pink"
                  aria-hidden
                >
                  ✉️
                </span>
                <div>
                  <p className="text-xs font-bold uppercase text-peia-pink">
                    Correo electrónico
                  </p>
                  <a
                    href="mailto:peiaviculoafectivo@gmail.com"
                    className="mt-1 block text-lg font-black text-white hover:underline"
                  >
                    peiaviculoafectivo@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
