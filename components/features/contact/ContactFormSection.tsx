 "use client";

import { motion } from "motion/react";
import { useState } from "react";

const contactOptions = [
  { value: "", label: "Selecciona una opción" },
  { value: "email", label: "Email" },
  { value: "telefono", label: "Teléfono" },
  { value: "whatsapp", label: "WhatsApp" }
];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      className="bg-peia-dark px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="contact-form-heading"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Formulario */}
          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-peia-dark sm:text-3xl"
              >
                Envíanos un mensaje
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Nombre
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Apellidos
                  </span>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Tus apellidos"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Email <span className="text-peia-dark">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ejemplo@correo.com"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Teléfono <span className="text-peia-dark">*</span>
                  </span>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+34 600 000 000"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    ¿Cómo quieres que te contactemos?{" "}
                    <span className="text-peia-dark">*</span>
                  </span>
                  <select
                    name="contacto"
                    required
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  >
                    {contactOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Mensaje <span className="text-peia-dark">*</span>
                  </span>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                  />
                </label>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-peia-rainbow-violet px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
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

          {/* Datos de contacto */}
          <motion.div
            className="flex flex-col justify-center lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Estamos a un solo clic de distancia
            </h2>
            <p className="mt-4 text-zinc-300">
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
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peia-rainbow-green text-xl text-white"
                  aria-hidden
                >
                  📞
                </span>
                <div>
                  <p className="text-xs uppercase text-zinc-400">
                    Teléfono de atención
                  </p>
                  <a
                    href="tel:+34623026555"
                    className="mt-1 block text-lg font-bold text-white hover:underline"
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
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peia-rainbow-blue text-xl text-white"
                  aria-hidden
                >
                  ✉️
                </span>
                <div>
                  <p className="text-xs uppercase text-zinc-400">
                    Correo electrónico
                  </p>
                  <a
                    href="mailto:peiaviculoafectivo@gmail.com"
                    className="mt-1 block text-lg font-bold text-white hover:underline"
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
