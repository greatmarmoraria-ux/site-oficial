import React from "react";
import GreatHero from "@/components/GreatHero";
import SobreNos from "@/components/SobreNos";
import Servicos from "@/components/Servicos";
import Materiais from "@/components/Materiais";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0c0e" }}>
      {/* SEÇÃO 01 — HERO (Aprovada: Dark Mode Cosentino & Levantina) */}
      <GreatHero />

      {/* SEÇÃO 02 — SOBRE NÓS (White Mode: Artesão, Valores & Diferenciais) */}
      <SobreNos />

      {/* SEÇÃO 03 — SERVIÇOS (White Mode: Cozinhas, Banheiros e Áreas Gourmet) */}
      <Servicos />

      {/* SEÇÃO 04 — PEDRAS E MATERIAIS (White Mode: Vitrine de 6 Amostras & Consultoria) */}
      <Materiais />

      {/* SEÇÃO 05 — PROJETOS REALIZADOS (White Mode: Filtros & Comparação Foto Real x IA) */}
      <Projetos />

      {/* SEÇÃO 06 — CONTATO E ORÇAMENTO (White Mode: Formulário WhatsApp, Dados & Visita) */}
      <Contato />

      {/* RODAPÉ OFICIAL */}
      <Footer />
    </main>
  );
}
