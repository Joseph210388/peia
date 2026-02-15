import Image from "next/image";
import WorkshopCardsSection from "@/components/features/workshops/WorkshopCardsSection";

export const metadata = {
  title: "Talleres de Trabajo | PEIA",
  description:
    "Talleres de pedagogía artística y aprendizaje en movimiento para niños de 2 a 6 años.",
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <section className="relative w-full overflow-hidden">
          <div className="relative aspect-21/9 w-full bg-zinc-200 sm:aspect-5/1">
            <Image
              src="/workshops-hero.svg"
              alt="Talleres de trabajo PEIA - pedagogía artística para niños"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </section>

        <WorkshopCardsSection />
      </main>
    </div>
  );
}
