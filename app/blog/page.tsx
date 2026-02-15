export const metadata = {
  title: "Blog | PEIA",
  description:
    "Artículos y recursos sobre pedagogía artística, crianza respetuosa e inclusión infantil.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-peia-dark">
          Blog
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
          Contenido en preparación. Aquí se publicarán artículos y recursos
          útiles sobre PEIA y la crianza respetuosa.
        </p>
      </main>
    </div>
  );
}
