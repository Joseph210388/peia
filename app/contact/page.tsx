import ContactFAQSection from "@/components/features/contact/ContactFAQSection";
import ContactFormSection from "@/components/features/contact/ContactFormSection";
import ContactHeroSection from "@/components/features/contact/ContactHeroSection";

export const metadata = {
  title: "Contacto | PEIA",
  description:
    "Contacta con PEIA para información sobre el servicio de pedagogía extraescolar infantil artística.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <ContactHeroSection />
        <ContactFAQSection />
        <ContactFormSection />
      </main>
    </div>
  );
}
