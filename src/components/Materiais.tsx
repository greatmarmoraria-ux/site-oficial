"use client";

import React from "react";
import Image from "next/image";
import styles from "./Materiais.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de uma orientação personalizada sobre as melhores opções de pedras e materiais para meu projeto."
)}`;

interface SwatchItem {
  id: string;
  category: string;
  name: string;
  imageSrc: string;
}

export default function Materiais() {
  const swatches: SwatchItem[] = [
    {
      id: "verde-ubatuba",
      category: "Granito",
      name: "Verde Ubatuba",
      imageSrc: "/images/amostra-verde-ubatuba.png",
    },
    {
      id: "sao-gabriel",
      category: "Granito",
      name: "São Gabriel",
      imageSrc: "/images/amostra-sao-gabriel.png",
    },
    {
      id: "branco-itaunas",
      category: "Granito",
      name: "Branco Itaúnas",
      imageSrc: "/images/amostra-branco-itaunas.png",
    },
    {
      id: "carrara",
      category: "Mármore",
      name: "Carrara",
      imageSrc: "/images/amostra-carrara.png",
    },
    {
      id: "nero-marquina",
      category: "Mármore",
      name: "Nero Marquina",
      imageSrc: "/images/amostra-nero-marquina.png",
    },
    {
      id: "calacatta",
      category: "Quartzo",
      name: "Calacatta",
      imageSrc: "/images/amostra-calacatta.png",
    },
  ];

  const values = [
    {
      title: "ALTA RESISTÊNCIA",
      desc: "Beleza que dura por muitos anos.",
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
      title: "QUALIDADE GARANTIDA",
      desc: "Materiais selecionados de fornecedores confiáveis.",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "ACABAMENTO IMPECÁVEL",
      desc: "Precisão em cada corte e detalhe.",
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
      title: "BELEZA NATURAL",
      desc: "Pedras que valorizam seus ambientes.",
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
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="materiais" className={styles.materiaisSection}>
      <div className={styles.container}>
        {/* Banner Superior com Imagem Conceitual de Chapas */}
        <div className={styles.topBanner}>
          <div className={styles.bannerBg} aria-hidden="true">
            <Image
              src="/images/materiais-hero-cena.png"
              alt="Amostras de Pedras Naturais da Great Marmoraria"
              fill
              className={styles.bannerImg}
              sizes="100vw"
            />
            <div className={styles.bannerOverlay} />
          </div>

          <div className={styles.bannerContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>NOSSOS MATERIAIS</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.bannerTitle}>
              Beleza e durabilidade
              <br />
              em <em className={styles.goldHighlight}>cada detalhe.</em>
            </h2>

            <p className={styles.bannerDesc}>
              Trabalhamos com uma seleção de pedras naturais e industrializadas,
              unindo qualidade, resistência e sofisticação para valorizar seus
              ambientes.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bannerCta}
            >
              <span>Conheça nossos materiais</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>

        {/* Vitrine de Amostras de Pedras */}
        <div className={styles.showcaseHeader}>
          <h3 className={styles.showcaseHeading}>Principais materiais</h3>
        </div>

        <div className={styles.swatchesGrid}>
          {swatches.map((item) => (
            <div key={item.id} className={styles.swatchCard}>
              <div className={styles.swatchImageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={`${item.category} ${item.name}`}
                  fill
                  className={styles.swatchImage}
                  sizes="(max-width: 1080px) 33vw, 16vw"
                />
              </div>
              <span className={styles.swatchCategory}>{item.category}</span>
              <h4 className={styles.swatchName}>{item.name}</h4>
            </div>
          ))}
        </div>

        <p className={styles.swatchDisclaimer}>
          * Nomes e amostras indicativos de referência visual. A disponibilidade e variações de lotes naturais devem ser confirmadas no orçamento.
        </p>

        {/* Faixa de Valores */}
        <div className={styles.valueStrip}>
          <div className={styles.valueGrid}>
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${styles.valueItem} ${
                  i !== values.length - 1 ? styles.valueItemDivider : ""
                }`}
              >
                <div className={styles.valueIcon}>{v.icon}</div>
                <div className={styles.valueContent}>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Inferior de CTA em Mármore Escuro */}
        <div className={styles.bottomCtaBanner}>
          <div className={styles.ctaMarbleBg} aria-hidden="true">
            <Image
              src="/images/black-marble-texture.webp"
              alt=""
              fill
              className={styles.ctaMarbleImg}
              sizes="100vw"
            />
          </div>

          <div className={styles.ctaLeftCol}>
            <div className={styles.ctaWhatsappIcon} aria-hidden="true">
              <svg
                className={styles.ctaWhatsappSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className={styles.ctaTextGroup}>
              <span className={styles.ctaEyebrow}>
                NÃO SABE QUAL PEDRA ESCOLHER?
              </span>
              <h3 className={styles.ctaTitle}>
                Fale com a nossa equipe e receba uma orientação personalizada.
              </h3>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Quero uma consultoria</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
