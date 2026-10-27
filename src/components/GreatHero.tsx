"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./GreatHero.module.css";

// Configurable WhatsApp direct contact (defaulting to official number from original logo)
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_DEFAULT_TEXT =
  "Olá! Vim pelo site da Great Marmoraria e gostaria de solicitar um orçamento para o meu projeto.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_TEXT
)}`;

interface NavLinkItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Início", href: "#inicio", isActive: true },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Parcerias", href: "#parcerias" },
  { label: "Contato", href: "#contato" },
];

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function GreatHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const services: ServiceItem[] = [
    {
      id: "cozinhas",
      title: "COZINHAS",
      description: "Funcionalidade e elegância",
      icon: (
        <svg
          className={styles.serviceIconSvg}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Cooktop & Counter */}
          <rect x="5" y="10" width="30" height="22" rx="2" />
          <line x1="20" y1="10" x2="20" y2="32" />
          <circle cx="12.5" cy="18" r="2.5" />
          <circle cx="12.5" cy="25" r="2.5" />
          <circle cx="27.5" cy="18" r="3.2" />
          <circle cx="27.5" cy="25" r="1.8" />
          <line x1="10" y1="6" x2="30" y2="6" />
          <line x1="20" y1="6" x2="20" y2="10" />
        </svg>
      ),
    },
    {
      id: "banheiros",
      title: "BANHEIROS",
      description: "Projetos sob medida para o seu estilo",
      icon: (
        <svg
          className={styles.serviceIconSvg}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Modern basin & faucet */}
          <path d="M12 18 C12 11 16 9 18 9 C20 9 21 10.5 21 12 L21 20" />
          <path d="M6 20 C6 27 11 31 20 31 C29 31 34 27 34 20 L6 20 Z" />
          <line x1="12" y1="34" x2="28" y2="34" />
          <line x1="20" y1="31" x2="20" y2="34" />
          <circle cx="16" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "areas-gourmet",
      title: "ÁREAS GOURMET",
      description: "Espaços para compartilhar momentos",
      icon: (
        <svg
          className={styles.serviceIconSvg}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Gourmet grill hood & grate */}
          <path d="M8 15 L14 8 L26 8 L32 15 Z" />
          <line x1="6" y1="18" x2="34" y2="18" />
          <line x1="10" y1="22" x2="30" y2="22" />
          <line x1="14" y1="26" x2="26" y2="26" />
          <path d="M9 18 L12 32" />
          <path d="M31 18 L28 32" />
          <line x1="12" y1="32" x2="28" y2="32" />
        </svg>
      ),
    },
    {
      id: "pes-e-nichos",
      title: "PÉS LATERAIS E NICHOS",
      description: "Acabamentos que completam o projeto",
      icon: (
        <svg
          className={styles.serviceIconSvg}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Waterfall edge & niche architectural stairs */}
          <path d="M7 32 L7 10 L19 10 L19 18 L29 18 L29 25 L34 25 L34 32 Z" />
          <line x1="5" y1="32" x2="35" y2="32" />
          <line x1="13" y1="10" x2="13" y2="18" strokeDasharray="1.5 1.5" />
          <line x1="24" y1="18" x2="24" y2="25" strokeDasharray="1.5 1.5" />
        </svg>
      ),
    },
    {
      id: "sob-medida",
      title: "PROJETOS SOB MEDIDA",
      description: "Da fabricação à instalação",
      icon: (
        <svg
          className={styles.serviceIconSvg}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Crossed drafting square / measuring rulers */}
          <line x1="8" y1="8" x2="32" y2="32" />
          <line x1="32" y1="8" x2="8" y2="32" />
          <rect
            x="6"
            y="6"
            width="28"
            height="28"
            rx="1"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <circle cx="20" cy="20" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section id="inicio" className={styles.heroSection}>
        {/* Background Image Layer */}
        <div className={styles.heroBackground} aria-hidden="true">
          <Image
            src="/images/hero-ambiente-conceitual.webp"
            alt="Ambiente Gourmet Great Marmoraria"
            fill
            priority
            quality={92}
            className={styles.heroBackgroundImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlayGradient} />
        </div>

        {/* ================= HEADER ================= */}
        <header
          className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
        >
          <div className={styles.headerContainer}>
            {/* Brand Logo */}
            <a
              href="#inicio"
              className={styles.brandLink}
              title="GREAT MARMORARIA - Página Inicial"
            >
              <Image
                src="/images/logo-great-original.png"
                alt="GREAT MARMORARIA"
                width={175}
                height={95}
                priority
                className={styles.brandLogoImg}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav} aria-label="Navegação principal">
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className={styles.navItem}>
                    <a
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
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Header CTA */}
            <div className={styles.headerActions}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerCtaButton}
                id="header-cta-orcamento"
              >
                <span className={styles.ctaIconWrapper} aria-hidden="true">
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className={styles.whatsappIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                  </svg>
                </span>
                <span className={styles.ctaText}>Solicite seu orçamento</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>

              {/* Mobile Hamburger Button */}
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
              <Image
                src="/images/logo-great-original.png"
                alt="GREAT MARMORARIA"
                width={140}
                height={75}
                className={styles.mobileLogo}
              />
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
                  <li key={link.href} className={styles.mobileNavItem}>
                    <a
                      href={link.href}
                      className={`${styles.mobileNavLink} ${
                        link.isActive ? styles.mobileNavLinkActive : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
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

        {/* ================= MAIN HERO BODY ================= */}
        <div className={styles.heroBody}>
          <div className={styles.heroBodyContent}>
            {/* Eyebrow badge */}
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowText}>
                PROJETOS QUE VALORIZAM SEUS MOMENTOS
              </span>
            </div>

            {/* Editorial Luxury Headline */}
            <h1 className={styles.heroHeadline}>
              Sua área{" "}
              <em className={styles.gourmetHighlight}>gourmet</em>
              <br />
              mais completa
              <br />
              e sofisticada
            </h1>

            {/* Subtitle / Description */}
            <p className={styles.heroDescription}>
              Bancadas, pias e revestimentos em pedras naturais e
              ultracompactas, sob medida para o seu projeto.
            </p>

            {/* Hero Main CTA */}
            <div className={styles.heroCtaWrapper}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroMainCta}
                id="hero-main-cta-orcamento"
              >
                <span className={styles.mainCtaIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.mainWhatsappIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                  </svg>
                </span>
                <span className={styles.mainCtaText}>
                  Solicite seu orçamento
                </span>
                <span className={styles.mainCtaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ================= TRANSPARENT DISCLOSURE BADGE ================= */}
          <div
            className={styles.disclosureBadge}
            title="Conceito visual aprovado em desenvolvimento técnico"
          >
            <div className={styles.disclosureIconWrapper} aria-hidden="true">
              <svg
                className={styles.cameraIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div className={styles.disclosureTextCol}>
              <span className={styles.disclosureProduct}>
                Produto real: Granito Verde Ubatuba
              </span>
              <span className={styles.disclosureNotice}>
                Ambiente enriquecido por IA · Fotografia definitiva em produção
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAIXA INFERIOR DE SERVIÇOS ================= */}
      <section
        id="servicos"
        className={styles.servicesBarSection}
        aria-label="Serviços em pedras nobres"
      >
        {/* Nero Marquina Marble Background */}
        <div className={styles.servicesMarbleBg} aria-hidden="true">
          <Image
            src="/images/black-marble-texture.webp"
            alt=""
            fill
            className={styles.servicesMarbleImg}
            sizes="100vw"
          />
          <div className={styles.servicesOverlay} />
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.servicesGrid}>
            {services.map((item, index) => (
              <article
                key={item.id}
                className={`${styles.serviceCard} ${
                  index !== services.length - 1 ? styles.serviceCardDivider : ""
                }`}
              >
                <div className={styles.serviceIconContainer}>{item.icon}</div>
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{item.title}</h2>
                  <p className={styles.serviceDescription}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}