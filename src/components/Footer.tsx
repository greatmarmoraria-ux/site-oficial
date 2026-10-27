"use client";

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Olá! Conheci a GREAT MARMORARIA pelo site e gostaria de solicitar um orçamento."
)}`;

export default function Footer() {
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre nós", href: "#sobre-nos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Materiais", href: "#materiais" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopRow}>
          <div className={styles.brandGroup}>
            <Image
              src="/images/logo-great-sem-telefone.png"
              alt="GREAT MARMORARIA"
              width={180}
              height={98}
              className={styles.footerLogo}
            />
            <p className={styles.brandLocation}>
              Ribeirão Preto · SP | Excelência e pedras nobres sob medida
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Navegação do rodapé">
            <ul className={styles.navList}>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footerBottomRow}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
            title="Conversar no WhatsApp Comercial Oficial"
          >
            <svg
              className={styles.whatsappIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
            </svg>
            <span>WhatsApp: (16) 99437-0355</span>
          </a>

          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} GREAT MARMORARIA. Todos os direitos
            reservados. Ribeirão Preto · SP.
          </p>
        </div>
      </div>
    </footer>
  );
}
