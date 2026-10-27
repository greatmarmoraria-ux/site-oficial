"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Contato.module.css";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516994370355";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipoProjeto: "Cozinha",
    descricao: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "descricao") {
      setCharCount(value.length);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Por favor, informe seu nome completo.";
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.whatsapp = "Informe um número de WhatsApp válido.";
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao =
        "Por favor, conte um pouco sobre o projeto que deseja realizar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Monta a mensagem estruturada para envio direto e transparente ao WhatsApp comercial
    const message = `Olá, equipe GREAT MARMORARIA!

Gostaria de solicitar um orçamento pelo site oficial:
• *Nome:* ${formData.nome.trim()}
• *WhatsApp:* ${formData.whatsapp.trim()}
• *E-mail:* ${formData.email.trim() || "Não informado"}
• *Tipo de Projeto:* ${formData.tipoProjeto}
• *Detalhes do Projeto:*
${formData.descricao.trim()}`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getPresencialVisitUrl = () => {
    const text =
      "Olá! Gostaria de agendar uma visita presencial na GREAT MARMORARIA e levar as medidas do meu projeto.";
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className={styles.contatoSection}>
      <div className={styles.container}>
        {/* Banner Superior com Iluminação Quente */}
        <div className={styles.topBanner}>
          <div className={styles.bannerBg} aria-hidden="true">
            <Image
              src="/images/contato-banner-bg.png"
              alt="Atendimento Comercial Great Marmoraria"
              fill
              className={styles.bannerImg}
              sizes="100vw"
            />
            <div className={styles.bannerOverlay} />
          </div>

          <div className={styles.bannerContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>FALE CONOSCO</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            <h2 className={styles.bannerTitle}>
              Solicite seu
              <br />
              <em className={styles.goldHighlight}>orçamento.</em>
            </h2>

            <p className={styles.bannerDesc}>
              Conte para nós o seu projeto. Nossa equipe está pronta para
              atender e apresentar as melhores soluções em pedras para o seu
              ambiente.
            </p>

            {/* 4 Micro Badges */}
            <div className={styles.microBadgesGrid}>
              <div className={styles.microBadge}>
                <div className={styles.microIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <span className={styles.microText}>Atendimento rápido</span>
              </div>

              <div className={styles.microBadge}>
                <div className={styles.microIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span className={styles.microText}>Orçamento detalhado</span>
              </div>

              <div className={styles.microBadge}>
                <div className={styles.microIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <span className={styles.microText}>Orientação técnica</span>
              </div>

              <div className={styles.microBadge}>
                <div className={styles.microIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className={styles.microText}>Qualidade e segurança</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid: Formulário + Sidebar de Meios de Contato */}
        <div className={styles.formSectionGrid}>
          {/* Formulário Interativo */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>
                Preencha os dados e solicite seu orçamento
              </h3>
              <p className={styles.formSubtitle}>
                Retornaremos o seu contato o mais breve possível.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contato-nome" className={styles.inputLabel}>
                    Nome completo *
                  </label>
                  <input
                    id="contato-nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className={`${styles.inputField} ${
                      errors.nome ? styles.inputError : ""
                    }`}
                    required
                  />
                  {errors.nome && (
                    <span className={styles.errorText}>{errors.nome}</span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contato-whatsapp" className={styles.inputLabel}>
                    WhatsApp *
                  </label>
                  <input
                    id="contato-whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="(16) 99999-9999"
                    className={`${styles.inputField} ${
                      errors.whatsapp ? styles.inputError : ""
                    }`}
                    required
                  />
                  {errors.whatsapp && (
                    <span className={styles.errorText}>{errors.whatsapp}</span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contato-email" className={styles.inputLabel}>
                    E-mail (opcional)
                  </label>
                  <input
                    id="contato-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seuemail@exemplo.com"
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contato-tipo" className={styles.inputLabel}>
                    Tipo de projeto
                  </label>
                  <select
                    id="contato-tipo"
                    name="tipoProjeto"
                    value={formData.tipoProjeto}
                    onChange={handleInputChange}
                    className={styles.selectField}
                  >
                    <option value="Cozinha">Cozinha (Bancadas e Ilhas)</option>
                    <option value="Banheiro ou Lavabo">
                      Banheiro ou Lavabo (Cubas esculpidas)
                    </option>
                    <option value="Área Gourmet">
                      Área Gourmet (Churrasqueira e balcões)
                    </option>
                    <option value="Pés Laterais e Nichos">
                      Pés Laterais e Nichos
                    </option>
                    <option value="Projeto Sob Medida Completo">
                      Projeto Sob Medida Completo
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textareaHeader}>
                  <label htmlFor="contato-descricao" className={styles.inputLabel}>
                    Conte um pouco sobre o seu projeto *
                  </label>
                  <span className={styles.charCounter}>
                    {charCount}/500 caracteres
                  </span>
                </div>
                <textarea
                  id="contato-descricao"
                  name="descricao"
                  maxLength={500}
                  value={formData.descricao}
                  onChange={handleInputChange}
                  placeholder="Ex: Gostaria de cotar uma bancada gourmet em Granito Preto com ilha central e cuba esculpida..."
                  className={`${styles.textareaField} ${
                    errors.descricao ? styles.inputError : ""
                  }`}
                  required
                />
                {errors.descricao && (
                  <span className={styles.errorText}>{errors.descricao}</span>
                )}
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Enviar solicitação</span>
                <span>→</span>
              </button>

              <div className={styles.privacyNotice}>
                <svg
                  className={styles.lockIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  Ao enviar, você será direcionado ao WhatsApp comercial da GREAT
                  para atendimento direto com a mensagem pronta.
                </span>
              </div>
            </form>
          </div>

          {/* Sidebar: Outros Meios de Contato */}
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Outros meios de contato</h3>

            <div className={styles.contactList}>
              {/* WhatsApp Oficial */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Olá! Gostaria de conversar com a equipe comercial da GREAT MARMORARIA."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                title="Falar no WhatsApp Oficial"
              >
                <div className={styles.contactLeft}>
                  <div className={styles.contactIconBox}>
                    <svg className={styles.contactIconSvg} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.767.464 3.493 1.346 5.02L2 22l5.12-1.343a9.99 9.99 0 004.911 1.372h.004c5.534 0 10.03-4.495 10.03-10.03 0-2.678-1.043-5.197-2.939-7.091A9.957 9.957 0 0012.031 2zm0 18.234h-.003a8.196 8.196 0 01-4.179-1.146l-.3-.178-3.104.814.828-3.027-.195-.31a8.188 8.188 0 01-1.258-4.358c0-4.526 3.682-8.209 8.212-8.209 2.193 0 4.256.855 5.807 2.406a8.163 8.163 0 012.406 5.805c0 4.527-3.683 8.207-8.209 8.207zm4.5-6.147c-.247-.123-1.463-.722-1.69-.804-.226-.083-.391-.123-.556.124-.165.247-.64 1.803-.784.968-.144.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.466-1.376-1.713-.144-.247-.015-.38.109-.503.111-.111.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.063-.124-.557-1.341-.763-1.836-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.063s.887 2.393 1.011 2.558c.124.165 1.745 2.664 4.227 3.736.591.255 1.052.407 1.411.521.593.188 1.133.162 1.559.098.475-.071 1.463-.598 1.669-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                    </svg>
                  </div>
                  <div className={styles.contactTexts}>
                    <span className={styles.contactType}>WhatsApp Comercial</span>
                    <span className={styles.contactValue}>(16) 99437-0355</span>
                  </div>
                </div>
                <span className={styles.contactArrow} aria-hidden="true">→</span>
              </a>

              {/* Localização Confirmada */}
              <div className={styles.locationItem}>
                <div className={styles.contactIconBox}>
                  <svg className={styles.contactIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.locationTexts}>
                  <span className={styles.locationTitle}>Atendimento</span>
                  <span className={styles.locationValue}>Ribeirão Preto · SP</span>
                  <span className={styles.locationSub}>
                    Projetos e montagens em toda a região metropolitana.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Inferior: Atendimento Presencial */}
        <div className={styles.presencialBanner}>
          <div className={styles.presencialMarbleBg} aria-hidden="true">
            <Image
              src="/images/black-marble-texture.webp"
              alt=""
              fill
              className={styles.presencialMarbleImg}
              sizes="100vw"
            />
          </div>

          <div className={styles.presencialLeft}>
            <div className={styles.presencialIcon} aria-hidden="true">
              <svg
                className={styles.presencialIconSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className={styles.presencialTexts}>
              <h3 className={styles.presencialTitle}>
                Prefere atendimento presencial?
              </h3>
              <p className={styles.presencialSub}>
                Agende uma visita e traga as medidas do seu ambiente para um estudo técnico.
              </p>
            </div>
          </div>

          <a
            href={getPresencialVisitUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.presencialBtn}
          >
            <span>Agendar visita</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
