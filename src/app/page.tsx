import React from "react";
import GreatHero from "@/components/GreatHero";

export default function Home() {
  const WHATSAPP_PHONE =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Olá! Gostaria de falar sobre o projeto da Great Marmoraria."
  )}`;

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0c0e" }}>
      {/* ================= HERO SECTION APROVADA ================= */}
      <GreatHero />

      {/* ================= SMOOTH SECTION ANCHORS (SEÇÕES FUTURAS) ================= */}
      {/* Previne links quebrados para as próximas etapas aprovadas do projeto */}
      <div
        id="sobre-nos"
        style={{
          scrollMarginTop: "90px",
          padding: "60px 4%",
          maxWidth: "1440px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "#e5aa5f",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          GREAT MARMORARIA · RIBEIRÃO PRETO
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#ffffff",
            margin: "12px 0 16px",
            fontWeight: 400,
          }}
        >
          Excelência e precisão em cada detalhe de pedra nobre
        </h2>
        <p
          style={{
            maxWidth: "680px",
            color: "#9ca3af",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          Bancadas, pias, ilhas gourmet e revestimentos sob medida com pedras
          naturais e ultracompactas de padrão internacional. Seção institucional
          completa em preparação para a próxima etapa.
        </p>
      </div>

      <div id="materiais" style={{ scrollMarginTop: "90px" }} />
      <div id="projetos" style={{ scrollMarginTop: "90px" }} />
      <div id="parcerias" style={{ scrollMarginTop: "90px" }} />

      {/* ================= CONTATO / RODAPÉ ================= */}
      <footer
        id="contato"
        style={{
          scrollMarginTop: "90px",
          backgroundColor: "#08090a",
          borderTop: "1px solid rgba(229, 170, 95, 0.15)",
          padding: "50px 4% 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                color: "#e5aa5f",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              GREAT MARMORARIA
            </div>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "13.5px",
                marginTop: "4px",
              }}
            >
              Ribeirão Preto · SP | Atendimento em toda a região
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#e5aa5f",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              WhatsApp Comercial: (16) 99437-0355 ↗
            </a>
            <span style={{ color: "#4b5563" }}>|</span>
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              © {new Date().getFullYear()} GREAT MARMORARIA. Todos os direitos
              reservados.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
