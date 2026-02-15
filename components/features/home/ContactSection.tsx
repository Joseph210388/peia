"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      className="bg-peia-yellow px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-zinc-900 sm:text-4xl"
          >
            Contáctanos
          </h2>
          <p className="mt-4 text-lg text-zinc-700">
            ¿Tienes alguna duda sobre nuestros servicios? Escríbenos y te
            responderemos lo antes posible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Nombre completo</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                />
              </label>
              <label className="block">
                <span className="sr-only">Correo electrónico</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Tu mensaje o consulta</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tu mensaje o consulta"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-peia-dark focus:outline-none focus:ring-1 focus:ring-peia-dark"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg bg-peia-dark px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              {sent ? "Enviado" : "Enviar formulario"}
            </button>
          </form>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-zinc-900">
            <span aria-hidden>📍</span>
            Encuéntranos
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-zinc-600">Teléfono</p>
              <p className="font-medium text-zinc-900">+34 623 02 65 55</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-600">Email</p>
              <a
                href="mailto:peiaviculoafectivo@gmail.com"
                className="font-medium text-zinc-900 hover:underline"
              >
                peiaviculoafectivo@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-peia-dark text-white transition-opacity hover:opacity-90"
              aria-label="Instagram"
            >
              <span className="text-lg">📷</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-peia-dark text-white transition-opacity hover:opacity-90"
              aria-label="Facebook"
            >
              <span className="text-lg">f</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
