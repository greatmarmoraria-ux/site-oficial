"use client";

import React from "react";
import Image from "next/image";
import styles from "./SobreNos.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de saber mais sobre a história e os projetos da empresa."
)}`;

export default function SobreNos() {
  const differentials = [
    {
      metric: "100%",
      label: "QUALIDADE",
      sub: "Materiais selecionados e acabamento impecável",
      icon: (
        <svg
          className={styles.diffIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
          <path d="M2 10h20" />
          <path d="M10 3l2 7 2-7" />
        </svg>
      ),
    },
    {
      metric: "Projetos",
      label: "SOB MEDIDA",
      sub: "Ambientes residenciais e comerciais personalizados",
      icon: (
        <svg
          className={styles.diffIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      metric: "Rigor",
      label: "E PRECISÃO",
      sub: "Cuidado artesanal e precisão em cada detalhe",
      icon: (
        <svg
          className={styles.diffIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      metric: "Ribeirão Preto/SP",
      label: "ATENDIMENTO REGIONAL",
      sub: "Presença local e suporte especializado em toda a região",
      icon: (
        <svg
          className={styles.diffIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre-nos" className={styles.sobreSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna Esquerda: Conteúdo Editorial */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>SOBRE NÓS</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.title}>
              Tradição em pedras
              <br />
              que <em className={styles.goldHighlight}>transformam</em>
              <br />
              ambientes.
            </h2>

            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.historyCta}
            >
              <span>Conheça nossa história</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>

          {/* Coluna Direita: Imagem do Artesão e Card Lateral Escuro */}
          <div className={styles.visualCol}>
            <div className={styles.artisanFrame}>
              <Image
                src="/images/artesao-conceitual.webp"
                alt="Processo artesanal em bancadas de pedra nobre"
                fill
                className={styles.artisanImg}
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
            <div className={styles.detailSidebar}>
              <h3 className={styles.detailTitle}>
                QUALIDADE
                <br />
                EM CADA
                <br />
                DETALHE
              </h3>
              <div className={styles.detailDivider} aria-hidden="true" />
              <p className={styles.detailText}>
                Do projeto à instalação, sempre ao seu lado para realizar
                ambientes únicos.
              </p>
            </div>
          </div>
        </div>

        {/* Faixa Inferior de Diferenciais com Textura de Pedra */}
        <div className={styles.differentialsStrip}>
          <div className={styles.diffTextureBg} aria-hidden="true">
            <Image
              src="/images/textura-pedra-ilustrativa.webp"
              alt=""
              fill
              className={styles.diffTextureImg}
              sizes="100vw"
            />
          </div>

          <div className={styles.differentialsGrid}>
            {differentials.map((diff, index) => (
              <div
                key={diff.label}
                className={`${styles.diffCard} ${
                  index !== differentials.length - 1
                    ? styles.diffCardWithDivider
                    : ""
                }`}
              >
                <div className={styles.diffIconContainer}>{diff.icon}</div>
                <div className={styles.diffContent}>
                  <span className={styles.diffMetric}>{diff.metric}</span>
                  <span className={styles.diffLabel}>{diff.label}</span>
                  <p className={styles.diffSub}>{diff.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.disclosureNote}>
            Registro ilustrativo do processo artesanal — aguardando fotografias oficiais confirmadas da GREAT.
          </div>
        </div>
      </div>
    </section>
  );
}
