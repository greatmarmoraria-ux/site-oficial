import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "GREAT MARMORARIA | Ribeirão Preto", description: "Bancadas, pias e projetos em pedras para cozinhas, banheiros e áreas gourmet em Ribeirão Preto." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
