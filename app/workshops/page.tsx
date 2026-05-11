import PageHero from "@/components/ui/PageHero";
import WorkshopCardsSection from "@/components/features/workshops/WorkshopCardsSection";

export const metadata = {
  title: "Talleres | PEIA",
  description:
    "Talleres artísticos colaborativos, valores a través del arte, familia y comunidad: pedagogía extraescolar para 2 a 6 años en el centro educativo.",
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-peia-cream font-sans">
      <main>
        <PageHero
          src="/image/workshops-hero.png"
          alt="Talleres PEIA — arte, música y juego creativo en el centro educativo"
        />
        <WorkshopCardsSection />
      </main>
    </div>
  );
}
