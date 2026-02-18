import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Xavier Detail | Estética Automotiva Premium",
  description:
    "Detalhamento automotivo, Nano Revestimento Cerâmico, PPF e muito mais. Elevamos a estética do seu veículo a um novo patamar.",
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
