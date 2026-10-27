"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de solicitar um orçamento."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`;

export default function AboutSection() {
  const materials = [
    {
      name: "Granitos Nobres",
      desc: "Variedade selecionada de granitos pretos, claros e exóticos com alta resistência.",
    },
    {
      name: "Mármores Clássicos",
      desc: "Padrões sofisticados para lavatórios, banheiros, lareiras e revestimentos internos.",
    },
    {
      name: "Ultracompactos",
      desc: "Superfícies tecnológicas com resistência total ao calor, manchas e riscos.",
    },
    {
      name: "Quartzos & Pedras Especiais",
      desc: "Cores puras e acabamento contemporâneo para bancadas funcionais e modernas.",
    },
  ];

  return (
    <section className={styles.lightWrapper}>
      {/* Transição arquitetônica elegante entre a Hero escura e as seções claras */}
      <div className={styles.transitionBridge} aria-hidden="true" />

      {/* ================= SEÇÃO 02 — SOBRE NÓS ================= */}
      <div id="sobre-nos" className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Sobre a Great Marmoraria</span>
          <h2 className={styles.sectionTitle}>
            Onde a nobreza da pedra encontra a precisão arquitetônica.
          </h2>
          <p className={styles.sectionLead}>
            Localizada em Ribeirão Preto/SP, somos especialistas na transformação
            de mármores, granitos e superfícies ultracompactas em ambientes
            únicos, duradouros e acolhedores.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Coluna da esquerda: Narrativa e Pilares */}
          <div className={styles.aboutContentCol}>
            <p className={styles.narrativeText}>
              Acreditamos que bancadas e revestimentos em pedras sob medida são o
              coração de uma casa. Por isso, aliamos tecnologia moderna de corte,
              seleção criteriosa de matérias-primas e cuidado artesanal em cada
              meia-esquadria, cuba esculpida e acabamento polido.
            </p>

            <div className={styles.pillarsList}>
              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>
                  <span className={styles.pillarTitleDot} />
                  Fabricação Própria e Precisão Milimétrica
                </h3>
                <p className={styles.pillarDescription}>
                  Maquinário especializado para cortes limpos, alinhamento
                  rigoroso de veios e montagens estruturadas sem emendas
                  visíveis.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>
                  <span className={styles.pillarTitleDot} />
                  Consultoria Técnica para o seu Projeto
                </h3>
                <p className={styles.pillarDescription}>
                  Orientação completa de materiais considerando absorção,
                  temperatura, durabilidade e estética ideal para sua rotina.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>
                  <span className={styles.pillarTitleDot} />
                  Instalação Própria com Pontualidade
                </h3>
                <p className={styles.pillarDescription}>
                  Equipe interna capacitada que preza pelo cuidado com a obra,
                  limpeza na entrega e cumprimento estrito dos prazos.
                </p>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lightCtaButton}
              >
                <span>Fale com nossos especialistas</span>
                <span className={styles.ctaArrow}>→</span>
              </a>
            </div>
          </div>

          {/* Coluna da direita: Fotografia Real do Produto */}
          <div className={styles.aboutVisualCol}>
            <div className={styles.mainImageFrame}>
              <Image
                src="/images/cozinha-ilha-granito-real.png"
                alt="Bancada Gourmet Real em Granito Verde Ubatuba executada pela Great Marmoraria"
                fill
                className={styles.realImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.imageOverlayCard}>
                <span className={styles.imageBadgeTag}>
                  Fabricação &amp; Instalação Real
                </span>
                <span className={styles.imageBadgeDesc}>
                  Ilha Gourmet em Granito Verde Ubatuba com acabamento polido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FAIXA DE MATERIAIS ================= */}
      <div id="materiais" className={styles.materialStrip}>
        <div className={styles.materialContainer}>
          <div className={styles.materialHeader}>
            <span className={styles.eyebrow}>Matérias-Primas Selecionadas</span>
            <h2 className={styles.materialTitle}>
              Pedras de padrão internacional para cada ambiente
            </h2>
          </div>

          <div className={styles.materialGrid}>
            {materials.map((mat) => (
              <div key={mat.name} className={styles.materialCard}>
                <h3 className={styles.materialCardName}>{mat.name}</h3>
                <p className={styles.materialCardText}>{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projetos" style={{ scrollMarginTop: "90px" }} />
      <div id="parcerias" style={{ scrollMarginTop: "90px" }} />
    </section>
  );
}
