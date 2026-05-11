import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Títulos con personalidad cercana (reglas PEIA / arte infantil) */
const peiaDisplay = Nunito({
  variable: "--font-peia-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "PEIA — Pedagogía extraescolar infantil artística",
    template: "%s | PEIA",
  },
  description:
    "PEIA ayuda y mejora tu vida y crianza. Pedagogía extraescolar artística ambulante para centros (2–6 años): proceso, inclusión y bienestar infantil.",
  metadataBase: new URL("https://peia.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${peiaDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
