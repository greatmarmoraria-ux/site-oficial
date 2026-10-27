"use client";

import React from "react";
import Image from "next/image";
import styles from "./Servicos.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de solicitar um orçamento para serviços em pedras."
)}`;

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

export default function Servicos() {
  const cards: ServiceCardData[] = [
    {
      id: "cozinhas",
      title: "Cozinhas",
      description:
        "Bancadas, ilhas, pias e revestimentos em pedras que unem beleza e funcionalidade.",
      imageSrc: "/images/servicos-cozinhas.png",
      icon: (
        <svg
          className={styles.cardIconSvg}
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="8" width="24" height="18" rx="2" />
          <line x1="16" y1="8" x2="16" y2="26" />
          <circle cx="10" cy="14" r="2" />
          <circle cx="10" cy="20" r="2" />
          <circle cx="22" cy="14" r="2.5" />
          <circle cx="22" cy="20" r="1.5" />
        </svg>
      ),
    },
    {
      id: "banheiros",
      title: "Banheiros e Lavabos",
      description:
        "Cubas, bancadas, nichos e revestimentos que valorizam o seu ambiente.",
      imageSrc: "/images/servicos-banheiros.png",
      icon: (
        <svg
          className={styles.cardIconSvg}
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 14 C10 8 13 6 15 6 C17 6 18 7.5 18 9 L18 16" />
          <path d="M5 16 C5 22 9 25 16 25 C23 25 27 22 27 16 L5 16 Z" />
          <line x1="10" y1="27" x2="22" y2="27" />
          <line x1="16" y1="25" x2="16" y2="27" />
        </svg>
      ),
    },
    {
      id: "areas-gourmet",
      title: "Áreas Gourmet",
      description:
        "Espaços completos em pedras para momentos únicos com família e amigos.",
      imageSrc: "/images/servicos-areas-gourmet.png",
      icon: (
        <svg
          className={styles.cardIconSvg}
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 12 L11 6 L21 6 L26 12 Z" />
          <line x1="5" y1="15" x2="27" y2="15" />
          <line x1="8" y1="18" x2="24" y2="18" />
          <line x1="11" y1="21" x2="21" y2="21" />
          <path d="M7 15 L10 26" />
          <path d="M25 15 L22 26" />
          <line x1="10" y1="26" x2="22" y2="26" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "PROJETOS SOB MEDIDA",
      desc: "Soluções personalizadas para cada necessidade.",
      icon: (
        <svg
          className={styles.valueIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "QUALIDADE GARANTIDA",
      desc: "Materiais selecionados e acabamento impecável.",
      icon: (
        <svg
          className={styles.valueIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      title: "INSTALAÇÃO ESPECIALIZADA",
      desc: "Equipe experiente e detalhista.",
      icon: (
        <svg
          className={styles.valueIconSvg}
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
      title: "ATENDIMENTO COMPLETO",
      desc: "Do orçamento à instalação, com suporte em todas as etapas.",
      icon: (
        <svg
          className={styles.valueIconSvg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className={styles.servicosSection}>
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <div className={styles.headerRow}>
          <div className={styles.headerCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>NOSSOS SERVIÇOS</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>
            <h2 className={styles.title}>
              Soluções em pedras
              <br />
              para <em className={styles.goldHighlight}>todos os ambientes.</em>
            </h2>
            <p className={styles.leadText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles.sidebarCallout}>
            <span className={styles.calloutLabel}>PROJETOS SOB MEDIDA</span>
            <p className={styles.calloutDesc}>
              Do residencial ao comercial, com qualidade em cada detalhe.
            </p>
          </div>
        </div>

        {/* Grid dos 3 Serviços Principais */}
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 1080px) 100vw, 33vw"
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMarbleTexture} aria-hidden="true">
                  <Image
                    src="/images/black-marble-texture.webp"
                    alt=""
                    fill
                    className={styles.cardMarbleImg}
                    sizes="33vw"
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>

                  <p className={styles.cardDescription}>{card.description}</p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLinkRow}
                    title={`Solicitar orçamento para ${card.title}`}
                  >
                    <span>Saiba mais</span>
                    <span className={styles.cardArrow} aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Faixa de Valores / Diferenciais */}
        <div className={styles.valueStrip}>
          <div className={styles.valueGrid}>
            {values.map((val, idx) => (
              <div
                key={val.title}
                className={`${styles.valueItem} ${
                  idx !== values.length - 1 ? styles.valueItemDivider : ""
                }`}
              >
                <div className={styles.valueIcon}>{val.icon}</div>
                <div className={styles.valueContent}>
                  <h4 className={styles.valueTitle}>{val.title}</h4>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão de Ação Central */}
        <div className={styles.ctaRow}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quoteCta}
          >
            <span>Solicite seu orçamento</span>
            <span className={styles.quoteArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
