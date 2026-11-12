"use client";

import Image from "next/image";
import type { Locale } from "@/lib/homeTranslations";
import { useEffect, useState } from "react";

type Card = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const baseCards: Card[] = [
  {
    src: "/identidad/cards/card-01.png",
    alt: "Coffee journey card featuring a Colombian coffee farmer",
    title: "The Journey Begins",
    subtitle: "Origin + territory",
  },
  {
    src: "/identidad/cards/card-02.png",
    alt: "Coffee and Colombian identity visual card",
    title: "A Nation in Every Sack",
    subtitle: "Coffee + national identity",
  },
  {
    src: "/identidad/cards/card-03.png",
    alt: "Coffee as community visual card",
    title: "Coffee as Community",
    subtitle: "Connection + shared culture",
  },
];

const localeLabels: Record<Locale, { names: string[]; subtitles: string[]; hint: string; open: string; close: string }> = {
  en: { names: ["The Journey Begins", "A Nation in Every Sack", "Coffee as Community"], subtitles: ["Origin + territory", "Coffee + national identity", "Connection + shared culture"], hint: "Hover to explore · Click a card to expand", open: "Open", close: "Close card" },
  es: { names: ["Comienza el viaje", "Un país en cada saco", "El café nos conecta"], subtitles: ["Origen + territorio", "Café + identidad nacional", "Conexión + cultura compartida"], hint: "Pasa el cursor para explorar · Haz clic para ampliar", open: "Abrir", close: "Cerrar tarjeta" },
  fr: { names: ["Le voyage commence", "Un pays dans chaque sac", "Le café nous rassemble"], subtitles: ["Origine + territoire", "Café + identité nationale", "Lien + culture partagée"], hint: "Survolez pour explorer · Cliquez pour agrandir", open: "Ouvrir", close: "Fermer la carte" },
};

export default function IdentidadCardDeck({ locale = "en" }: { locale?: Locale }) {
  const dictionary = localeLabels[locale];
  const cards = baseCards.map((card, index) => ({ ...card, title: dictionary.names[index], subtitle: dictionary.subtitles[index] }));
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    if (!selectedCard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard]);

  return (
    <>
      <div className="identidad-card-deck">
        <div className="identidad-card-stage">
          {cards.map((card, index) => (
            <button
              type="button"
              className={`identidad-stack-card identidad-stack-card-${index + 1}`}
              key={card.src}
              onClick={() => setSelectedCard(card)}
              aria-label={`${dictionary.open}: ${card.title}`}
            >
              <div className="identidad-stack-image">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 72vw, 330px"
                  className="identidad-stack-image-element"
                />
              </div>

              <div className="identidad-stack-copy">
                <strong>{card.title}</strong>
                <span>{card.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="identidad-deck-hint">
          {dictionary.hint}
        </p>
      </div>

      {selectedCard && (
        <div
          className="identidad-card-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCard.title}
          onClick={() => setSelectedCard(null)}
        >
          <button
            type="button"
            className="identidad-card-modal-close"
            onClick={() => setSelectedCard(null)}
            aria-label={dictionary.close}
          >
            ×
          </button>

          <div
            className="identidad-card-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="identidad-card-modal-image">
              <Image
                src={selectedCard.src}
                alt={selectedCard.alt}
                fill
                sizes="90vw"
                priority
                className="identidad-modal-image-element"
              />
            </div>

            <div className="identidad-card-modal-caption">
              <span>{selectedCard.subtitle}</span>
              <strong>{selectedCard.title}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}