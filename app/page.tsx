import ContactFormSection from "@/components/features/contact/ContactFormSection";
import ContactFAQSection from "@/components/features/contact/ContactFAQSection";
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
      <ContactFAQSection />
      <ContactFormSection />
    </>
  );
}
