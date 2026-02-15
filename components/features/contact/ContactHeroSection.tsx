export default function ContactHeroSection() {
  return (
    <section
      className="bg-peia-yellow px-4 py-16 font-sans sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="contact-hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="contact-hero-heading"
          className="text-3xl font-bold text-peia-dark sm:text-4xl lg:text-5xl"
        >
          Estamos aquí para escucharte.
        </h1>
        <p className="mt-4 text-lg text-zinc-800 sm:mt-6 sm:text-xl">
          ¿Tienes preguntas sobre nuestra pedagogía artística o quieres inscribir
          a tu pequeño? Contáctanos hoy mismo.
        </p>
      </div>
    </section>
  );
}
