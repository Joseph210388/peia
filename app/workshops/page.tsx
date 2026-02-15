import PageHero from "@/components/ui/PageHero";
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
        <PageHero
          src="/workshops-hero.svg"
          alt="Talleres de trabajo PEIA - pedagogía artística para niños"
        />
        <WorkshopCardsSection />
      </main>
    </div>
  );
}
