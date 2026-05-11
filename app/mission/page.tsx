import PageHero from "@/components/ui/PageHero";
import MissionAboutSections from "@/components/features/mission/MissionAboutSections";

export const metadata = {
  title: "Sobre Nosotros | PEIA",
  description:
    "Misión, visión y valores de PEIA: servicio ambulante nacido en Estrella de los Deseos, complemento del centro y enfoque respetuoso (2–6 años).",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-peia-cream font-sans">
      <main>
        <PageHero
          src="/image/mission-hero.png"
          alt="Sobre nosotros — PEIA, pedagogía extraescolar artística e inclusión"
        />
        <MissionAboutSections />
      </main>
    </div>
  );
}
