import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greatmarmoraria.com.br"),
  title: "GREAT MARMORARIA | Bancadas e Pedras Nobres em Ribeirão Preto",
  description:
    "Fabricação e instalação de bancadas, pias e revestimentos em pedras naturais e ultracompactas sob medida em Ribeirão Preto/SP. Solicite seu orçamento.",
  keywords: [
    "marmoraria ribeirão preto",
    "bancadas em granito",
    "área gourmet",
    "pedras ultracompactas",
    "great marmoraria",
    "verde ubatuba",
    "mármore",
    "quartzo",
  ],
  openGraph: {
    title: "GREAT MARMORARIA | Sua área gourmet mais completa e sofisticada",
    description:
      "Bancadas, pias e revestimentos em pedras naturais e ultracompactas, sob medida para o seu projeto em Ribeirão Preto.",
    images: [
      {
        url: "/images/hero-ambiente-conceitual.jpg",
        width: 1920,
        height: 1080,
        alt: "Great Marmoraria - Área Gourmet Sofisticada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
