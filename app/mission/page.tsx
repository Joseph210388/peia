import PageHero from "@/components/ui/PageHero";
import MissionAboutSections from "@/components/features/mission/MissionAboutSections";

export const metadata = {
  title: "Sobre Nosotros | PEIA",
  description:
    "Conoce la misión, visión, valores e historia de PEIA: pedagogía extraescolar infantil artística para el bienestar y la inclusión.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <PageHero
          src="/mission-hero.svg"
          alt="Sobre nosotros - PEIA pedagogía artística"
        />
        <MissionAboutSections />
      </main>
    </div>
  );
}
