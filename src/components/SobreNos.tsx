"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SobreNos.module.css";

export default function SobreNos() {
  const differentials = [
    {
      title: "Excelência nos acabamentos",
      sub: "Precisão técnica e cuidado na execução de cada peça, valorizando a qualidade do resultado final.",
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
      title: "Atenção a cada detalhe",
      sub: "Projetos sob medida, desenvolvidos com dedicação às necessidades e expectativas de cada cliente.",
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
      title: "Respeito às pessoas",
      sub: "Valorização dos clientes, colaboradores e parceiros que fazem parte da nossa história.",
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
  ];

  return (
    <section id="sobre-nos" className={styles.sobreSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna Esquerda: Conteúdo Institucional */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>SOBRE NÓS</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.title}>
              Da paixão por projetos à{" "}
              <em className={styles.goldHighlight}>excelência</em> em cada
              detalhe.
            </h2>

            <div className={styles.narrativeGroup}>
              <p className={styles.description}>
                Fundada em março de 2021 por Edson Gonçalves Ferreira, a GREAT
                MARMORARIA nasceu de um sonho que começou ainda na juventude,
                entre os estudos técnicos no SENAI, a engenharia e o desejo de
                transformar projetos em realidade.
              </p>

              <p className={styles.description}>
                Foi no universo das pedras que Edson encontrou sua verdadeira
                inspiração: descobrir como a força de uma rocha pode se
                transformar em delicadeza, sofisticação e acabamentos que
                valorizam cada ambiente.
              </p>

              <p className={styles.description}>
                Mais do que fabricar bancadas e revestimentos, acreditamos que
                cada projeto carrega uma história, uma expectativa e um sonho.
              </p>

              <p className={styles.description}>
                Por isso, unimos conhecimento técnico, atenção aos detalhes e
                dedicação em cada etapa, buscando entregar não apenas qualidade,
                mas a satisfação de quem confia em nosso trabalho.
              </p>
            </div>

            <p className={styles.highlightPhrase}>
              <strong>GREAT MARMORARIA</strong> — Excelência que transforma
              projetos em realidade.
            </p>

            <Link href="/nossa-historia" className={styles.historyCta}>
              <span>Conheça nossa história</span>
              <span className={styles.ctaArrow}>→</span>
            </Link>
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
                key={diff.title}
                className={`${styles.diffCard} ${
                  index !== differentials.length - 1
                    ? styles.diffCardWithDivider
                    : ""
                }`}
              >
                <div className={styles.diffIconContainer}>{diff.icon}</div>
                <div className={styles.diffContent}>
                  <h3 className={styles.diffTitle}>{diff.title}</h3>
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
