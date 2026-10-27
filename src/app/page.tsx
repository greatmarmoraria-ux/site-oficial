import React from "react";
import GreatHero from "@/components/GreatHero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const WHATSAPP_PHONE =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
  const WHATSAPP_MSG = encodeURIComponent(
    "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de solicitar um orçamento."
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`;

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0c0e" }}>
      {/* ================= SEÇÃO 01 — HERO APROVADA (ESCURA & DOURADA) ================= */}
      <GreatHero />

      {/* ================= SEÇÃO 02 EM DIANTE — MODO CLARO APROVADO ================= */}
      <AboutSection />

      {/* ================= CONTATO / RODAPÉ REFINADO ================= */}
      <footer
        id="contato"
        style={{
          scrollMarginTop: "90px",
          backgroundColor: "#111317",
          borderTop: "1px solid rgba(214, 158, 85, 0.2)",
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
                fontSize: "19px",
                color: "#e5aa5f",
                fontWeight: 600,
                letterSpacing: "0.06em",
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
              Ribeirão Preto · SP | Especialistas em pedras nobres sob medida
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
            <span style={{ color: "#374151" }}>|</span>
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
