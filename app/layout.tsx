import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const kondolar = localFont({
  src: "../fonts/Kondolar_Bold.otf",
  variable: "--font-kondolar",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Madrid Aloha — Tu hogar en Madrid",
  description:
    "Ayudamos a estudiantes y trabajadores a encontrar piso o habitación en Madrid. Servicios de hospedaje, gestión de propiedades y limpieza.",
  keywords: "hospedaje Madrid, habitación Madrid, piso Madrid, estudiantes Madrid, Aloha Home",
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
      <body>{children}</body>
    </html>
  );
}
