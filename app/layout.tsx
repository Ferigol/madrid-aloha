import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
    "Ayudamos a estudiantes y trabajadores a encontrar piso o habitación en Madrid. Servicios de hospedaje, gestión de propiedades y limpieza.",
  keywords: "hospedaje Madrid, habitación Madrid, piso Madrid, estudiantes Madrid, Aloha Home",
  metadataBase: new URL("https://madridaloha.vercel.app"),
  openGraph: {
    title: "Madrid Aloha — Tu hogar en Madrid",
    description:
      "Ayudamos a estudiantes y trabajadores a encontrar piso o habitación en Madrid.",
    url: "https://madridaloha.vercel.app",
    siteName: "Madrid Aloha",
    images: [
      {
        url: "/image-aloha-home.webp",
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
      "Ayudamos a estudiantes y trabajadores a encontrar piso o habitación en Madrid.",
    images: ["/image-aloha-home.webp"],
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
      <body>{children}</body>
    </html>
  );
}
