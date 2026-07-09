import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kondolar = localFont({
  src: "../fonts/Kondolar_Bold.otf",
  variable: "--font-kondolar",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Madrid Aloha — Tu hogar en Madrid",
  description:
    "Si eres estudiante o trabajador te acompañamos a encontrar tu piso o habitación rápido y sin estrés.",
  keywords: "hospedaje Madrid, habitación Madrid, piso Madrid, estudiantes Madrid, Aloha Home",
  metadataBase: new URL("https://madridaloha.com"),
  openGraph: {
    title: "Madrid Aloha — Tu hogar en Madrid",
    description:
      "Si eres estudiante o trabajador te acompañamos a encontrar tu piso o habitación rápido y sin estrés.",
    url: "https://madridaloha.com",
    siteName: "Madrid Aloha",
    images: [
      {
        url: "/og-madridaloha.jpg",
        width: 1200,
        height: 800,
        alt: "Madrid Aloha — Tu hogar en Madrid",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrid Aloha — Tu hogar en Madrid",
    description:
      "Si eres estudiante o trabajador te acompañamos a encontrar tu piso o habitación rápido y sin estrés.",
    images: ["/og-madridaloha.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${kondolar.variable}`}>
      <head>
        <link rel="icon" href="/favico.png" />
      </head>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
