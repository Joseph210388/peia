import ContactSection from "@/components/features/home/ContactSection";
import FAQSection from "@/components/features/home/FAQSection";
import HeroSection from "@/components/features/home/HeroSection";
import MissionSection from "@/components/features/home/MissionSection";
import WorkshopsSection from "@/components/features/home/WorkshopsSection";

export const metadata = {
  title: "Inicio",
  description:
    "PEIA ayuda y mejora tu vida y crianza. Pedagogía extraescolar artística para niños de 2 a 6 años. Respeto, arte y comunidad.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WorkshopsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
