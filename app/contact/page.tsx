import PageHero from "@/components/ui/PageHero";
import ContactFAQSection from "@/components/features/contact/ContactFAQSection";
import ContactFormSection from "@/components/features/contact/ContactFormSection";

export const metadata = {
  title: "Contacto | PEIA",
  description:
    "Contacta con PEIA para información sobre el servicio de pedagogía extraescolar infantil artística.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-peia-cream font-sans">
      <main>
        <PageHero
          src="/image/contact-hero.png"
          alt="Contacto PEIA — hablamos contigo sobre el servicio en tu centro"
        />
        <ContactFAQSection />
        <ContactFormSection />
      </main>
    </div>
  );
}
