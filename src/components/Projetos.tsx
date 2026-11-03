"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Projetos.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";

interface ProjectItem {
  id: string;
  title: string;
  description?: string;
  material: string;
  categoryTag: string;
  categories: string[];
  ambientedImage: string;
  originalImage: string;
}

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState("todos");
  // Track toggle states for each project (false = ambiented AI, true = original photo)
  const [showOriginal, setShowOriginal] = useState<Record<string, boolean>>({});

  const filterCategories = [
    { id: "todos", label: "Todos" },
    { id: "cozinhas", label: "Cozinhas" },
    { id: "banheiros", label: "Banheiros" },
    { id: "lavabos", label: "Lavabos" },
    { id: "areas-gourmet", label: "Áreas Gourmet" },
    { id: "nichos", label: "Nichos" },
    { id: "pes-laterais", label: "Pés Laterais" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "bancada-gourmet-preta",
      title: "Bancada Gourmet em Ilha",
      material: "Granito Verde Ubatuba Polido",
      categoryTag: "Área Gourmet",
      categories: ["cozinhas", "areas-gourmet"],
      ambientedImage: "/images/projeto-bancada-gourmet-preta.webp",
      originalImage: "/images/projeto-bancada-gourmet-original.jpeg",
    },
    {
      id: "lavatorio-claro-pe",
      title: "Lavatório Claro com Pé Lateral",
      material: "Mármore Claro e Cuba Esculpida",
      categoryTag: "Banheiro & Pé Lateral",
      categories: ["banheiros", "lavabos", "pes-laterais"],
      ambientedImage: "/images/projeto-lavatorio-claro-pe.webp",
      originalImage: "/images/projeto-lavatorio-claro-original.jpeg",
    },
    {
      id: "lavatorio-preto",
      title: "Lavatório Preto Esculpido",
      material: "Granito São Gabriel com Acabamento Fino",
      categoryTag: "Lavabo & Banheiro",
      categories: ["banheiros", "lavabos", "nichos"],
      ambientedImage: "/images/projeto-lavatorio-preto.webp",
      originalImage: "/images/projeto-lavatorio-preto-original.jpeg",
    },
    {
      id: "cozinha-clara",
      title: "Cozinha com Bancada em Pedra Clara",
      description:
        "Bancada sob medida com cuba de inox, cooktop e acabamento que valoriza a funcionalidade e a elegância do ambiente.",
      material: "Pedra clara — especificação a confirmar.",
      categoryTag: "Cozinha",
      categories: ["cozinhas"],
      ambientedImage: "/images/projetos/cozinha-bancada-clara-ambientada.webp",
      originalImage: "/images/projetos/cozinha-bancada-clara-original.jpg",
    },
    {
      id: "cozinha-preta",
      title: "Cozinha com Bancada em Pedra Preta",
      description:
        "Bancada sob medida em pedra preta, com cuba de inox, cooktop e acabamento elegante, valorizando a praticidade e a sofisticação do ambiente.",
      material: "Pedra preta — especificação a confirmar.",
      categoryTag: "Cozinha",
      categories: ["cozinhas"],
      ambientedImage: "/images/projetos/cozinha-bancada-preta-ambientada.webp",
      originalImage: "/images/projetos/cozinha-bancada-preta-original.jpg",
    },
  ];

  const toggleImage = (id: string) => {
    setShowOriginal((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  const getWhatsAppProjectUrl = (projectTitle: string) => {
    const text = `Olá! Conheci a GREAT MARMORARIA pelo site e tenho interesse em um projeto similar ao "${projectTitle}". Gostaria de solicitar um orçamento.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="projetos" className={styles.projetosSection}>
      <div className={styles.container}>
        {/* Top Banner de Inspiração */}
        <div className={styles.topBanner}>
          <div className={styles.bannerBg} aria-hidden="true">
            <Image
              src="/images/projeto-bancada-gourmet-preta.webp"
              alt="Ambiente Gourmet Real da Great Marmoraria"
              fill
              className={styles.bannerImg}
              sizes="100vw"
            />
            <div className={styles.bannerOverlay} />
          </div>

          <div className={styles.bannerContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>PROJETOS REALIZADOS</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.bannerTitle}>
              Ambientes reais
              <br />
              que inspiram
              <br />
              <em className={styles.goldHighlight}>novos projetos.</em>
            </h2>

            <p className={styles.bannerDesc}>
              Confira alguns dos nossos projetos e veja como a pedra natural
              transforma ambientes com beleza, funcionalidade e durabilidade.
            </p>

            <a
              href="#projetos-galeria"
              className={styles.bannerCta}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projetos-galeria");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Ver todos os projetos</span>
              <span className={styles.ctaArrow}>↓</span>
            </a>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div id="projetos-galeria" className={styles.filtersRow}>
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === cat.id ? styles.filterButtonActive : ""
              }`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos Realizados */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((proj) => {
            const isOriginal = !!showOriginal[proj.id];
            const currentImg = isOriginal
              ? proj.originalImage
              : proj.ambientedImage;

            return (
              <article key={proj.id} className={styles.projectCard}>
                <div className={styles.cardMediaWrapper}>
                  <Image
                    src={currentImg}
                    alt={`${proj.title} - Great Marmoraria`}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 1080px) 100vw, 33vw"
                  />

                  {/* Identification Badges */}
                  {isOriginal ? (
                    <span className={styles.badgeOriginal}>
                      ✓ Foto Original da Obra
                    </span>
                  ) : (
                    <span className={styles.badgeAi}>
                      Ambiente enriquecido por IA
                    </span>
                  )}

                  {/* Toggle Button: Original Photo vs AI Ambientation */}
                  <button
                    type="button"
                    className={styles.compareToggleBtn}
                    onClick={() => toggleImage(proj.id)}
                    title="Alternar entre a foto original da obra e a ambientação enriquecida por IA"
                  >
                    {isOriginal ? "← Ver ambientação" : "👁 Ver foto original"}
                  </button>
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitle}>{proj.title}</h3>
                    <span className={styles.cardArrow} aria-hidden="true">
                      →
                    </span>
                  </div>

                  <p className={styles.cardMaterial}>{proj.material}</p>
                  {proj.description && (
                    <p className={styles.cardDesc}>{proj.description}</p>
                  )}

                  <div className={styles.cardFooterAction}>
                    <span className={styles.cardCategoryTag}>
                      {proj.categoryTag}
                    </span>

                    <a
                      href={getWhatsAppProjectUrl(proj.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardActionLink}
                      title={`Solicitar orçamento para ${proj.title}`}
                    >
                      <span>Solicitar orçamento</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
