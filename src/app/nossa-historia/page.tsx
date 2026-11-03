"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./NossaHistoria.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_DEFAULT_TEXT =
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_TEXT
)}`;

interface NavLinkItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/nossa-historia", isActive: true },
  { label: "Materiais", href: "/#materiais" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Parcerias", href: "/#parcerias" },
  { label: "Contato", href: "/#contato" },
];

export default function NossaHistoriaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRealIsland, setShowRealIsland] = useState(false);
  const [vanityPhotoMode, setVanityPhotoMode] = useState<
    "ambiented" | "branco-parana" | "sao-gabriel"
  >("ambiented");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const pillars = [
    {
      title: "Nossa Essência",
      text: "Excelência nos acabamentos, atenção aos detalhes e valorização das pessoas.",
      icon: (
        <svg
          className={styles.pillarIconSvg}
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 4h14l5 8-12 13L2 12l5-8z" />
          <path d="M2 12h24" />
          <path d="M11 4l3 8 3-8" />
          <path d="M14 12v13" />
        </svg>
      ),
    },
    {
      title: "Nosso Propósito",
      text: "Realizar projetos sob medida, transformando ambientes e concretizando sonhos.",
      icon: (
        <svg
          className={styles.pillarIconSvg}
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="10" />
          <circle cx="14" cy="14" r="6" />
          <circle cx="14" cy="14" r="2" />
          <path d="M22 6l-8 8" />
          <path d="M18 6h4v4" />
        </svg>
      ),
    },
    {
      title: "Nosso Futuro",
      text: "Consolidar uma estrutura industrial capaz de atender às demandas do mercado com qualidade e excelência.",
      icon: (
        <svg
          className={styles.pillarIconSvg}
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="18" width="4" height="6" rx="0.8" />
          <rect x="10" y="14" width="4" height="10" rx="0.8" />
          <rect x="16" y="10" width="4" height="14" rx="0.8" />
          <rect x="22" y="6" width="4" height="18" rx="0.8" />
          <path d="M4 13l7-5 5 2 8-6" />
          <path d="M20 4h4v4" />
        </svg>
      ),
    },
  ];

  const getVanityImage = () => {
    if (vanityPhotoMode === "branco-parana") {
      return {
        src: "/images/lavatorio-branco-parana.jpeg",
        alt: "Fotografia real de lavatório esculpido em Mármore Branco Paraná executado pela GREAT MARMORARIA",
        badge: "✓ Foto Real da Obra · Lavatório Branco Paraná",
      };
    }
    if (vanityPhotoMode === "sao-gabriel") {
      return {
        src: "/images/lavatorio-sao-gabriel.jpeg",
        alt: "Fotografia real de lavatório esculpido em Granito São Gabriel executado pela GREAT MARMORARIA",
        badge: "✓ Foto Real da Obra · Lavatório São Gabriel",
      };
    }
    return {
      src: "/images/projeto-lavatorio-claro-pe.webp",
      alt: "Lavatório esculpido em pedra natural com pé lateral da GREAT MARMORARIA",
      badge: "Projeto GREAT · Ambiente enriquecido por IA",
    };
  };

  const currentVanity = getVanityImage();

  return (
    <main className={styles.pageMain}>
      {/* ================= SEÇÃO 01 — ABERTURA (HERO ESCURA) ================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} aria-hidden="true">
          <Image
            src="/images/black-marble-texture.webp"
            alt=""
            fill
            priority
            className={styles.heroMarbleTexture}
            sizes="100vw"
          />
          <div className={styles.heroStoneAccent}>
            <Image
              src="/images/servicos-cozinhas.png"
              alt="Detalhe de bancada em pedra preta com acabamento em meia-esquadria"
              fill
              priority
              className={styles.heroStoneImage}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className={styles.heroOverlayGradient} />
        </div>

        {/* ================= HEADER REUTILIZADO ================= */}
        <header
          className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
        >
          <div className={styles.headerContainer}>
            <Link
              href="/"
              className={styles.brandLink}
              title="GREAT MARMORARIA - Voltar à Página Inicial"
            >
              <Image
                src="/images/logo-great-sem-telefone.png"
                alt="GREAT MARMORARIA"
                width={200}
                height={110}
                priority
                className={styles.brandLogoImg}
              />
            </Link>

            <nav className={styles.desktopNav} aria-label="Navegação principal">
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className={styles.navItem}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${
                        link.isActive ? styles.navLinkActive : ""
                      }`}
                    >
                      {link.label}
                      {link.isActive && (
                        <span
                          className={styles.activeIndicator}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.headerActions}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerCtaButton}
                id="historia-header-cta-orcamento"
              >
                <span className={styles.ctaIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.whatsappIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                  </svg>
                </span>
                <span>Solicite seu orçamento</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>

              <button
                type="button"
                className={styles.mobileMenuToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={`${styles.hamburgerBar} ${
                    mobileMenuOpen ? styles.barOneActive : ""
                  }`}
                />
                <span
                  className={`${styles.hamburgerBar} ${
                    mobileMenuOpen ? styles.barTwoActive : ""
                  }`}
                />
                <span
                  className={`${styles.hamburgerBar} ${
                    mobileMenuOpen ? styles.barThreeActive : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </header>

        {/* ================= MOBILE DRAWER MENU ================= */}
        <div
          className={`${styles.mobileDrawer} ${
            mobileMenuOpen ? styles.mobileDrawerOpen : ""
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div
            className={styles.mobileDrawerBackdrop}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={styles.mobileDrawerContent}>
            <div className={styles.mobileDrawerHeader}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo-great-sem-telefone.png"
                  alt="GREAT MARMORARIA"
                  width={160}
                  height={88}
                  className={styles.mobileLogo}
                />
              </Link>
              <button
                type="button"
                className={styles.closeDrawerButton}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            <nav className={styles.mobileNav} aria-label="Menu móvel">
              <ul className={styles.mobileNavList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className={styles.mobileNavItem}>
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${
                        link.isActive ? styles.mobileNavLinkActive : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.mobileDrawerFooter}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileDrawerCta}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={styles.ctaIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.whatsappIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                  </svg>
                </span>
                <span>Solicite seu orçamento</span>
                <span>→</span>
              </a>
              <div className={styles.mobileLocation}>
                <span>Ribeirão Preto · SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTEÚDO DA ABERTURA ================= */}
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <Link href="/" className={styles.backHomeLink}>
              <span aria-hidden="true">←</span>
              <span>Voltar ao início</span>
            </Link>

            <span className={styles.heroEyebrow}>NOSSA HISTÓRIA</span>

            <h1 className={styles.heroTitle}>
              Um sonho que ganhou
              <br />
              forma em <em className={styles.goldItalic}>cada detalhe.</em>
            </h1>

            <p className={styles.heroSubtitle}>
              A trajetória da GREAT MARMORARIA, construída com paixão, técnica e
              o propósito de transformar projetos em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTEÚDO INSTITUCIONAL (WHITE / OFF-WHITE) ================= */}
      <div className={styles.editorialWrapper}>
        <div className={styles.editorialContainer}>
          {/* SEÇÃO 02 — A ORIGEM DE UMA PAIXÃO */}
          <section
            id="origem"
            className={styles.storyBlock}
            aria-labelledby="heading-origem"
          >
            <div className={styles.storyMediaCol}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/artesao-conceitual.webp"
                  alt="Processo técnico de polimento e acabamento em bancada de pedra natural"
                  fill
                  className={styles.processHandsImg}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className={styles.editorialBadge}>
                  <span>
                    Processo produtivo · Imagem ilustrativa de acabamento em
                    rocha (espaço preparado para foto institucional)
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.storyTextCol}>
              <span className={styles.sectionEyebrow}>
                A ORIGEM DE UMA PAIXÃO
              </span>
              <h2 id="heading-origem" className={styles.sectionTitle}>
                Da formação técnica à paixão pela marmoraria.
              </h2>
              <div className={styles.paragraphsGroup}>
                <p className={styles.bodyText}>
                  Desde jovem, <strong>Edson Gonçalves Ferreira</strong>{" "}
                  demonstrava interesse pelo universo dos projetos e das
                  execuções industriais. Sua trajetória passou pela formação
                  técnica no SENAI e pelos estudos em engenharia, sempre
                  motivado pelo desejo de transformar conhecimento em
                  realizações concretas.
                </p>
                <p className={styles.bodyText}>
                  Foi no universo das pedras que Edson encontrou uma inspiração
                  especial: descobrir como a força de uma rocha pode se
                  transformar em delicadeza, sofisticação e acabamentos que
                  valorizam cada ambiente.
                </p>
              </div>
            </div>
          </section>

          <hr className={styles.sectionDivider} />

          {/* SEÇÃO 03 — O NASCIMENTO DA GREAT MARMORARIA */}
          <section
            id="nascimento"
            className={`${styles.storyBlock} ${styles.storyBlockReverse}`}
            aria-labelledby="heading-nascimento"
          >
            <div className={styles.storyTextCol}>
              <span className={styles.sectionEyebrow}>
                O NASCIMENTO DA GREAT MARMORARIA
              </span>
              <h2 id="heading-nascimento" className={styles.sectionTitle}>
                De uma oportunidade a um grande propósito.
              </h2>
              <div className={styles.paragraphsGroup}>
                <p className={styles.bodyText}>
                  A oportunidade de empreender surgiu quando Edson conheceu uma
                  marmoraria que estava encerrando suas atividades, após
                  aproximadamente dez anos de atuação no mercado.
                </p>
                <p className={styles.bodyText}>
                  Ele decidiu adquirir o negócio e iniciar uma nova trajetória,
                  agora à frente de sua própria empresa.
                </p>
                <p className={styles.bodyText}>
                  Assim nasceu, em março de 2021, a{" "}
                  <strong>GREAT MARMORARIA</strong>, com o propósito de entregar
                  acabamentos de qualidade, realizar sonhos e unir conhecimento
                  técnico, atenção aos detalhes e dedicação em cada etapa.
                </p>
                <p className={styles.bodyText}>
                  O nome <strong>GREAT</strong> foi escolhido para expressar a
                  busca pela grandeza e excelência no trabalho realizado.
                </p>
              </div>
            </div>

            <div className={styles.storyMediaCol}>
              <div className={styles.imageCard}>
                <Image
                  src={
                    showRealIsland
                      ? "/images/cozinha-ilha-granito-real.png"
                      : "/images/hero-ambiente-conceitual.webp"
                  }
                  alt="Bancada Gourmet em Ilha de Granito Verde Ubatuba executada pela GREAT MARMORARIA"
                  fill
                  className={styles.storyImg}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className={styles.cardBottomOverlay}>
                  <span className={styles.photoStatusTag}>
                    {showRealIsland
                      ? "✓ Foto Real da Obra · Ilha em Granito Verde Ubatuba"
                      : "Projeto GREAT · Ambiente enriquecido por IA"}
                  </span>
                  <button
                    type="button"
                    className={styles.photoSwitchBtn}
                    onClick={() => setShowRealIsland((prev) => !prev)}
                  >
                    {showRealIsland
                      ? "Ver ambientação"
                      : "Ver foto real da obra"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 04 — NOSSOS PILARES */}
          <section
            id="pilares"
            className={styles.pillarsSection}
            aria-label="Nossos pilares institucionais"
          >
            <div className={styles.pillarsTexture} aria-hidden="true">
              <Image
                src="/images/textura-pedra-ilustrativa.webp"
                alt=""
                fill
                className={styles.pillarsTextureImg}
                sizes="100vw"
              />
            </div>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`${styles.pillarItem} ${
                    index !== pillars.length - 1 ? styles.pillarDivider : ""
                  }`}
                >
                  <div className={styles.pillarIconBox}>{pillar.icon}</div>
                  <div className={styles.pillarContent}>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarText}>{pillar.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SEÇÃO 05 — MAIS DO QUE PEDRAS */}
          <section
            id="ambientes"
            className={styles.storyBlock}
            aria-labelledby="heading-ambientes"
          >
            <div className={styles.storyMediaCol}>
              <div className={styles.imageCard}>
                <Image
                  src={currentVanity.src}
                  alt={currentVanity.alt}
                  fill
                  className={styles.storyImg}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className={styles.cardBottomOverlay}>
                  <span className={styles.photoStatusTag}>
                    {currentVanity.badge}
                  </span>
                  <div className={styles.photoToggleGroup}>
                    <button
                      type="button"
                      className={`${styles.photoChip} ${
                        vanityPhotoMode === "ambiented"
                          ? styles.photoChipActive
                          : ""
                      }`}
                      onClick={() => setVanityPhotoMode("ambiented")}
                    >
                      Ambientação
                    </button>
                    <button
                      type="button"
                      className={`${styles.photoChip} ${
                        vanityPhotoMode === "branco-parana"
                          ? styles.photoChipActive
                          : ""
                      }`}
                      onClick={() => setVanityPhotoMode("branco-parana")}
                    >
                      Foto Real 1
                    </button>
                    <button
                      type="button"
                      className={`${styles.photoChip} ${
                        vanityPhotoMode === "sao-gabriel"
                          ? styles.photoChipActive
                          : ""
                      }`}
                      onClick={() => setVanityPhotoMode("sao-gabriel")}
                    >
                      Foto Real 2
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.storyTextCol}>
              <span className={styles.sectionEyebrow}>
                MAIS DO QUE PEDRAS,
              </span>
              <h2 id="heading-ambientes" className={styles.sectionTitle}>
                Ambientes que contam histórias.
              </h2>
              <div className={styles.paragraphsGroup}>
                <p className={styles.bodyText}>
                  Para nós, uma bancada não é apenas uma peça de pedra. É parte
                  de uma cozinha onde histórias serão compartilhadas, de uma
                  área gourmet onde pessoas se reunirão ou de um ambiente
                  planejado com cuidado por alguém.
                </p>
                <p className={styles.bodyText}>
                  Por isso, valorizamos a{" "}
                  <strong>precisão técnica</strong>, o acabamento bem executado,
                  a <strong>atenção aos detalhes</strong> e o respeito às
                  pessoas que fazem parte de cada realização — clientes,
                  colaboradores e parceiros.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 06 — CONVITE FINAL (MENSAGEM DO FUNDADOR + CTA WHATSAPP) */}
        <section
          id="convite-final"
          className={styles.founderInviteSection}
          aria-label="Mensagem do fundador e solicitação de orçamento"
        >
          <div className={styles.founderInviteTexture} aria-hidden="true">
            <Image
              src="/images/textura-pedra-ilustrativa.webp"
              alt=""
              fill
              className={styles.founderInviteTextureImg}
              sizes="100vw"
            />
          </div>

          <div className={styles.founderInviteContainer}>
            <blockquote className={styles.founderQuote}>
              <span className={styles.quoteMarkOpen} aria-hidden="true">
                “
              </span>
              <p className={styles.quoteText}>
                Você pode fazer parte dessa história.
                <br />
                Seu sonho se torna realidade com a{" "}
                <strong className={styles.quoteBrand}>GREAT MARMORARIA.</strong>
                <span className={styles.quoteMarkClose} aria-hidden="true">
                  ”
                </span>
              </p>
            </blockquote>

            <div className={styles.inviteDivider} aria-hidden="true" />

            <div className={styles.inviteActionCol}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inviteCtaButton}
                id="nossa-historia-cta-orcamento"
              >
                <span className={styles.ctaIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.whatsappIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                  </svg>
                </span>
                <span>Solicite seu orçamento</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ================= RODAPÉ OFICIAL REUTILIZADO ================= */}
      <Footer />
    </main>
  );
}

