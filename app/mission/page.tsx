import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Nuestra Misión | PEIA",
  description:
    "Conoce la misión de PEIA: pedagogía extraescolar infantil artística para el bienestar y la inclusión.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <PageHero
          src="/mission-hero.svg"
          alt="Sobre nosotros - PEIA pedagogía artística"
        />
        <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-peia-dark">
          Nuestra Misión
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
          Contenido en preparación. Aquí se explicará la misión de PEIA y su
          compromiso con la inclusión y el bienestar infantil.
        </p>
        </div>
      </main>
    </div>
  );
}
