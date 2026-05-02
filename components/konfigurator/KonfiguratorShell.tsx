//
// ==========================================================
// KONFIGURATOR SHELL
// ==========================================================
// To jest główny plik logiki konfiguratora.
//
// Za co odpowiada ten plik:
// 1. trzyma cały stan konfiguratora
// 2. pilnuje aktywnej zakładki
// 3. obsługuje wybór opcji
// 4. zmienia zdjęcie preview po kliknięciu
// 5. obsługuje zapis konfiguracji
// 6. obsługuje wysyłkę konfiguracji mailem
// 7. obsługuje eksport PDF
// 8. steruje przewijaniem sekcji
// 9. przesuwa czerwoną linię pod aktywną zakładką
// 10. łączy PreviewPanel i ConfiguratorPanel
// 11. automatycznie zmienia język na podstawie adresu
// 12. tłumaczy nazwy opcji w PDF i mailu
// 13. obsługuje model z adresu:
//     - ?model=178
//     - ?model=214
//     - ?model=275
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ConfiguratorPanel from "./ConfiguratorPanel";
import PreviewPanel from "./PreviewPanel";
import { ConfigTab, SelectedState } from "./types";
import {
  defaultPreviewImage,
  getPreviewImageForModel,
  groupMap,
  normalizeConfiguratorModel,
  options,
} from "./data";

type LanguageKey = "PL" | "EN" | "DE" | "FR";

// --------------------------------------------------------
// TŁUMACZENIA OPCJI DO PDF I MAILA
// --------------------------------------------------------
const optionTranslations: Record<
  Exclude<LanguageKey, "PL">,
  Record<string, string>
> = {
  EN: {
    "Bialy poliester połysk": "White high-gloss polyester",
    "Czarny Poliester połysk": "Black high-gloss polyester",
    "Ferrari poliester połysk": "Ferrari high-gloss polyester",
    "Heban polerowany": "Polished ebony",
    "Okleina Jabłoń Indyjska -połysk": "Indian apple veneer – high gloss",

    "Dno rezonansowe Strunz": "Strunz soundboard",
    "Dno rezonansowe Chiresse": "Chiresse soundboard",
    "Lakierowanie dna rezonansowego mat": "Matte soundboard finish",
    "Lakierowanie dna rezonansowego połysk": "High-gloss soundboard finish",
    "Mostki rezonansowe klon": "Maple bridges",
    "Mostki rezonansowe buk": "Beech bridges",
    "Kolor ramy złoty": "Gold frame colour",
    "Kolor ramy srebrny": "Silver frame colour",
    "Struny stalowe Roslau": "Roslau steel strings",
    "Struny stalowe Paulelo": "Paulelo steel strings",
    "Struny basowe Heller": "Heller bass strings",
    "Struny basowe SAP Renovation": "SAP Renovation bass strings",
    "Kołki stroikowe niklowane": "Nickel-plated tuning pins",
    "Kołki stroikowe Blau": "Blau tuning pins",
    "Kolor sukna czerwony": "Red felt colour",
    "Kolor sukna biały": "White felt colour",
    "Kolor sukna czarny": "Black felt colour",

    "Klawiatura Alaudis SAP Renovation": "Alaudis SAP Renovation keyboard",
    "Klawiatura Kluge": "Kluge keyboard",
    "Mechanizm Alaudis SAP Renovation": "Alaudis SAP Renovation action",
    "Mechanizm Renner": "Renner action",
    "Mechanizm Abbel": "Abbel action",
    "Młotki Alaudis": "Alaudis hammers",
    "Młotki Renner": "Renner hammers",
    "Młotki Abbel": "Abbel hammers",
    "Tłumiki Alaudis": "Alaudis dampers",
    "Tłumiki Renner": "Renner dampers",
    "Tłumiki Abbel": "Abbel dampers",
  },

  DE: {
    "Bialy poliester połysk": "Weißer Polyester Hochglanz",
    "Czarny Poliester połysk": "Schwarzer Polyester Hochglanz",
    "Ferrari poliester połysk": "Ferrari-Polyester Hochglanz",
    "Heban polerowany": "Polierter Ebenholz",
    "Okleina Jabłoń Indyjska -połysk":
      "Indisches Apfelbaumfurnier – Hochglanz",

    "Dno rezonansowe Strunz": "Resonanzboden Strunz",
    "Dno rezonansowe Chiresse": "Resonanzboden Chiresse",
    "Lakierowanie dna rezonansowego mat": "Matt lackierter Resonanzboden",
    "Lakierowanie dna rezonansowego połysk":
      "Glänzend lackierter Resonanzboden",
    "Mostki rezonansowe klon": "Stege aus Ahorn",
    "Mostki rezonansowe buk": "Stege aus Buche",
    "Kolor ramy złoty": "Rahmenfarbe Gold",
    "Kolor ramy srebrny": "Rahmenfarbe Silber",
    "Struny stalowe Roslau": "Stahlsaiten Roslau",
    "Struny stalowe Paulelo": "Stahlsaiten Paulelo",
    "Struny basowe Heller": "Basssaiten Heller",
    "Struny basowe SAP Renovation": "Basssaiten SAP Renovation",
    "Kołki stroikowe niklowane": "Vernickelte Stimmwirbel",
    "Kołki stroikowe Blau": "Stimmwirbel Blau",
    "Kolor sukna czerwony": "Filzfarbe Rot",
    "Kolor sukna biały": "Filzfarbe Weiß",
    "Kolor sukna czarny": "Filzfarbe Schwarz",

    "Klawiatura Alaudis SAP Renovation": "Klaviatur Alaudis SAP Renovation",
    "Klawiatura Kluge": "Klaviatur Kluge",
    "Mechanizm Alaudis SAP Renovation": "Mechanik Alaudis SAP Renovation",
    "Mechanizm Renner": "Mechanik Renner",
    "Mechanizm Abbel": "Mechanik Abbel",
    "Młotki Alaudis": "Hammerköpfe Alaudis",
    "Młotki Renner": "Hammerköpfe Renner",
    "Młotki Abbel": "Hammerköpfe Abbel",
    "Tłumiki Alaudis": "Dämpfer Alaudis",
    "Tłumiki Renner": "Dämpfer Renner",
    "Tłumiki Abbel": "Dämpfer Abbel",
  },

  FR: {
    "Bialy poliester połysk": "Polyester blanc brillant",
    "Czarny Poliester połysk": "Polyester noir brillant",
    "Ferrari poliester połysk": "Polyester Ferrari brillant",
    "Heban polerowany": "Ébène poli",
    "Okleina Jabłoń Indyjska -połysk": "Placage pommier indien – brillant",

    "Dno rezonansowe Strunz": "Table d’harmonie Strunz",
    "Dno rezonansowe Chiresse": "Table d’harmonie Chiresse",
    "Lakierowanie dna rezonansowego mat":
      "Finition mate de la table d’harmonie",
    "Lakierowanie dna rezonansowego połysk":
      "Finition brillante de la table d’harmonie",
    "Mostki rezonansowe klon": "Chevalets en érable",
    "Mostki rezonansowe buk": "Chevalets en hêtre",
    "Kolor ramy złoty": "Couleur du cadre dorée",
    "Kolor ramy srebrny": "Couleur du cadre argentée",
    "Struny stalowe Roslau": "Cordes acier Roslau",
    "Struny stalowe Paulelo": "Cordes acier Paulelo",
    "Struny basowe Heller": "Cordes basses Heller",
    "Struny basowe SAP Renovation": "Cordes basses SAP Renovation",
    "Kołki stroikowe niklowane": "Chevilles nickelées",
    "Kołki stroikowe Blau": "Chevilles Blau",
    "Kolor sukna czerwony": "Couleur du feutre rouge",
    "Kolor sukna biały": "Couleur du feutre blanche",
    "Kolor sukna czarny": "Couleur du feutre noire",

    "Klawiatura Alaudis SAP Renovation": "Clavier Alaudis SAP Renovation",
    "Klawiatura Kluge": "Clavier Kluge",
    "Mechanizm Alaudis SAP Renovation": "Mécanique Alaudis SAP Renovation",
    "Mechanizm Renner": "Mécanique Renner",
    "Mechanizm Abbel": "Mécanique Abbel",
    "Młotki Alaudis": "Marteaux Alaudis",
    "Młotki Renner": "Marteaux Renner",
    "Młotki Abbel": "Marteaux Abbel",
    "Tłumiki Alaudis": "Étouffoirs Alaudis",
    "Tłumiki Renner": "Étouffoirs Renner",
    "Tłumiki Abbel": "Étouffoirs Abbel",
  },
};

// --------------------------------------------------------
// TŁUMACZENIE POJEDYNCZEJ OPCJI
// --------------------------------------------------------
function translateOption(value: string, language: LanguageKey) {
  if (!value) return "";

  if (language === "PL") {
    return value;
  }

  return optionTranslations[language]?.[value] || value;
}

// --------------------------------------------------------
// TŁUMACZENIE LISTY OPCJI
// --------------------------------------------------------
function getTranslatedValues(
  values: Record<string, string>,
  language: LanguageKey
) {
  return Object.values(values)
    .map((item) => translateOption(item, language))
    .filter(Boolean);
}

// --------------------------------------------------------
// FORMAT LISTY DO MAILA
// --------------------------------------------------------
function formatMailList(values: Record<string, string>, language: LanguageKey) {
  const translatedValues = getTranslatedValues(values, language);

  if (translatedValues.length === 0) {
    return "—";
  }

  return translatedValues.map((item) => `- ${item}`).join("\n");
}

// --------------------------------------------------------
// ROZPOZNAWANIE JĘZYKA
// --------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  const path = pathname.toLowerCase();

  if (path === "/en" || path.startsWith("/en/")) {
    return "EN";
  }

  if (path === "/de" || path.startsWith("/de/")) {
    return "DE";
  }

  if (path === "/fr" || path.startsWith("/fr/")) {
    return "FR";
  }

  return "PL";
}

// --------------------------------------------------------
// TEKSTY JĘZYKOWE
// --------------------------------------------------------
function getLabels(language: LanguageKey) {
  if (language === "EN") {
    return {
      configTitleFallback: "Alaudis configuration",
      saveAlert: "Configuration saved ✅",
      cabinet: "Cabinet",
      acoustics: "Acoustics",
      action: "Action",
      model: "Model",
      pdfFileName: "alaudis",
      pdfBadge: "CONFIGURATION",
      exportDate: "Export date",
      mailSubjectFallback: "Alaudis configuration",
      composeText: (
        offerTitle: string,
        selected: SelectedState,
        modelName: string
      ) => `
Alaudis configuration: ${offerTitle}

Model: ${modelName}

Cabinet: ${translateOption(selected.obudowa, language) || "—"}

Acoustics:
${formatMailList(selected.akustyka, language)}

Action:
${formatMailList(selected.mechanizm, language)}
`,
    };
  }

  if (language === "DE") {
    return {
      configTitleFallback: "Alaudis Konfiguration",
      saveAlert: "Konfiguration gespeichert ✅",
      cabinet: "Gehäuse",
      acoustics: "Akustik",
      action: "Mechanik",
      model: "Modell",
      pdfFileName: "alaudis",
      pdfBadge: "KONFIGURATION",
      exportDate: "Exportdatum",
      mailSubjectFallback: "Alaudis Konfiguration",
      composeText: (
        offerTitle: string,
        selected: SelectedState,
        modelName: string
      ) => `
Alaudis Konfiguration: ${offerTitle}

Modell: ${modelName}

Gehäuse: ${translateOption(selected.obudowa, language) || "—"}

Akustik:
${formatMailList(selected.akustyka, language)}

Mechanik:
${formatMailList(selected.mechanizm, language)}
`,
    };
  }

  if (language === "FR") {
    return {
      configTitleFallback: "Configuration Alaudis",
      saveAlert: "Configuration enregistrée ✅",
      cabinet: "Caisse",
      acoustics: "Acoustique",
      action: "Mécanique",
      model: "Modèle",
      pdfFileName: "alaudis",
      pdfBadge: "CONFIGURATION",
      exportDate: "Date d’export",
      mailSubjectFallback: "Configuration Alaudis",
      composeText: (
        offerTitle: string,
        selected: SelectedState,
        modelName: string
      ) => `
Configuration Alaudis : ${offerTitle}

Modèle : ${modelName}

Caisse : ${translateOption(selected.obudowa, language) || "—"}

Acoustique :
${formatMailList(selected.akustyka, language)}

Mécanique :
${formatMailList(selected.mechanizm, language)}
`,
    };
  }

  return {
    configTitleFallback: "Alaudis konfiguracja",
    saveAlert: "Zapisano konfigurację ✅",
    cabinet: "Obudowa",
    acoustics: "Akustyka",
    action: "Mechanizm",
    model: "Model",
    pdfFileName: "alaudis",
    pdfBadge: "KONFIGURACJA",
    exportDate: "Data eksportu",
    mailSubjectFallback: "Alaudis konfiguracja",
    composeText: (
      offerTitle: string,
      selected: SelectedState,
      modelName: string
    ) => `
Alaudis konfiguracja: ${offerTitle}

Model: ${modelName}

Obudowa: ${selected.obudowa || "—"}

Akustyka:
${formatMailList(selected.akustyka, language)}

Mechanizm:
${formatMailList(selected.mechanizm, language)}
`,
  };
}

export default function KonfiguratorShell() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  const language = getLanguageFromPathname(pathname);
  const labels = useMemo(() => getLabels(language), [language]);

  // --------------------------------------------------------
  // MODEL KONFIGURATORA Z ADRESU
  // --------------------------------------------------------
  const configuratorModel = normalizeConfiguratorModel(searchParams.get("model"));
  const modelName = `Alaudis ${configuratorModel}`;

  // --------------------------------------------------------
  // GŁÓWNE STANY
  // --------------------------------------------------------
  const [activeTab, setActiveTab] = useState<ConfigTab>("obudowa");
  const [offerTitle, setOfferTitle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(defaultPreviewImage);

  const [selected, setSelected] = useState<SelectedState>({
    obudowa: "",
    akustyka: {},
    mechanizm: {},
  });

  // --------------------------------------------------------
  // REFY DO SCROLLA I ZAKŁADEK
  // --------------------------------------------------------
  const scrollRef = useRef<HTMLDivElement>(null);
  const obudowaRef = useRef<HTMLDivElement>(null);
  const akustykaRef = useRef<HTMLDivElement>(null);
  const mechanizmRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const tabRefs = {
    obudowa: useRef<HTMLButtonElement>(null),
    akustyka: useRef<HTMLButtonElement>(null),
    mechanizm: useRef<HTMLButtonElement>(null),
  };

  // --------------------------------------------------------
  // USTALANIE AKTYWNEJ ZAKŁADKI PODCZAS SCROLLA
  // --------------------------------------------------------
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const centerY =
        container.getBoundingClientRect().top + container.clientHeight / 2;

      const sections = [
        { ref: obudowaRef, name: "obudowa" },
        { ref: akustykaRef, name: "akustyka" },
        { ref: mechanizmRef, name: "mechanizm" },
      ];

      let closest: ConfigTab = "obudowa";
      let min = Infinity;

      sections.forEach((s) => {
        if (!s.ref.current) return;

        const rect = s.ref.current.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - mid);

        if (dist < min) {
          min = dist;
          closest = s.name as ConfigTab;
        }
      });

      setActiveTab(closest);
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", onScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // --------------------------------------------------------
  // PRZESUWANIE LINII POD AKTYWNĄ ZAKŁADKĄ
  // --------------------------------------------------------
  useEffect(() => {
    const el = tabRefs[activeTab].current;
    const underline = underlineRef.current;
    const container = tabsContainerRef.current;

    if (el && underline && container) {
      const elRect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      underline.style.width = `${elRect.width}px`;
      underline.style.transform = `translateX(${elRect.left - parentRect.left}px)`;
    }
  }, [activeTab]);

  // --------------------------------------------------------
  // WYBÓR OPCJI
  // --------------------------------------------------------
  const handleSelect = (tab: ConfigTab, value: string) => {
    if (tab === "obudowa") {
      setSelected((prev) => ({ ...prev, obudowa: value }));
    } else {
      const group = groupMap[value];
      setSelected((prev) => ({
        ...prev,
        [tab]: {
          ...prev[tab],
          [group]: value,
        },
      }));
    }

    setPreviewImage(getPreviewImageForModel(value, configuratorModel));
  };

  // --------------------------------------------------------
  // ZAPIS KONFIGURACJI
  // --------------------------------------------------------
  const handleSave = () => {
    localStorage.setItem(
      "alaudis-config",
      JSON.stringify({
        title: offerTitle,
        model: modelName,
        config: selected,
        language,
      })
    );

    alert(labels.saveAlert);
  };

  // --------------------------------------------------------
  // WYSYŁKA KONFIGURACJI
  // --------------------------------------------------------
  const handleSend = () => {
    const documentTitle =
      offerTitle.trim() || `${modelName} - ${labels.configTitleFallback}`;

    const text = labels.composeText(documentTitle, selected, modelName);

    navigator.clipboard.writeText(text);
    window.location.href = `mailto:?subject=${encodeURIComponent(
      documentTitle
    )}&body=${encodeURIComponent(text)}`;
  };

  // --------------------------------------------------------
  // EXPORT PDF
  // --------------------------------------------------------
  const handlePDF = async () => {
    const { jsPDF } = await import("jspdf");

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const canvas = document.createElement("canvas");
    canvas.width = 1240;
    canvas.height = 1754;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pageWidth = canvas.width;
    const pageHeight = canvas.height;

    const safeText = (value: unknown) => String(value ?? "").trim();

    const title = safeText(
      offerTitle || `${modelName} - ${labels.configTitleFallback}`
    );

    const cabinet = translateOption(safeText(selected.obudowa), language) || "—";

    const acoustics = getTranslatedValues(selected.akustyka, language);
    const mechanism = getTranslatedValues(selected.mechanizm, language);

    const localeMap: Record<LanguageKey, string> = {
      PL: "pl-PL",
      EN: "en-GB",
      DE: "de-DE",
      FR: "fr-FR",
    };

    const currentLocale = localeMap[language] || "pl-PL";
    const date = new Intl.DateTimeFormat(currentLocale).format(new Date());

    const drawWrappedText = (
      text: string,
      x: number,
      startY: number,
      maxWidth: number,
      lineHeight: number
    ) => {
      const words = text.split(" ");
      let line = "";
      let y = startY;

      words.forEach((word) => {
        const testLine = line ? `${line} ${word}` : word;
        const width = ctx.measureText(testLine).width;

        if (width > maxWidth && line) {
          ctx.fillText(line, x, y);
          line = word;
          y += lineHeight;
        } else {
          line = testLine;
        }
      });

      if (line) {
        ctx.fillText(line, x, y);
      }

      return y + lineHeight;
    };

    const drawSectionTitle = (text: string, y: number) => {
      ctx.fillStyle = "#1e7f43";
      ctx.fillRect(70, y - 34, 10, 44);

      ctx.fillStyle = "#111111";
      ctx.font = "700 34px Arial, Helvetica, sans-serif";
      ctx.fillText(text, 95, y);

      ctx.strokeStyle = "#e3e3e3";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, y + 22);
      ctx.lineTo(pageWidth - 70, y + 22);
      ctx.stroke();

      return y + 70;
    };

    const drawBullet = (text: string, y: number) => {
      ctx.fillStyle = "#1e7f43";
      ctx.beginPath();
      ctx.arc(92, y - 9, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#222222";
      ctx.font = "400 30px Arial, Helvetica, sans-serif";

      const nextY = drawWrappedText(text, 120, y, pageWidth - 190, 40);
      return nextY + 6;
    };

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageWidth, pageHeight);

    ctx.fillStyle = "#080808";
    ctx.fillRect(0, 0, pageWidth, 190);

    ctx.fillStyle = "#c8a45d";
    ctx.font = "700 54px Arial, Helvetica, sans-serif";
    ctx.fillText("ALAUDIS", 70, 92);

    ctx.fillStyle = "#ffffff";
    ctx.font = "400 24px Arial, Helvetica, sans-serif";
    ctx.fillText("Polish Grand Piano", 72, 130);

    ctx.fillStyle = "#1e7f43";
    ctx.fillRect(pageWidth - 390, 62, 320, 58);

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 22px Arial, Helvetica, sans-serif";
    ctx.fillText(labels.pdfBadge, pageWidth - 340, 99);

    let y = 270;

    ctx.fillStyle = "#111111";
    ctx.font = "700 44px Arial, Helvetica, sans-serif";
    y = drawWrappedText(title, 70, y, pageWidth - 140, 56);

    ctx.fillStyle = "#777777";
    ctx.font = "400 24px Arial, Helvetica, sans-serif";
    ctx.fillText(`${labels.exportDate}: ${date}`, 70, y + 10);

    y += 90;

    // ------------------------------------------------------
    // MODEL
    // ------------------------------------------------------
    y = drawSectionTitle(labels.model, y);

    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(70, y - 25, pageWidth - 140, 90);

    ctx.strokeStyle = "#e5e5e5";
    ctx.lineWidth = 2;
    ctx.strokeRect(70, y - 25, pageWidth - 140, 90);

    ctx.fillStyle = "#222222";
    ctx.font = "700 30px Arial, Helvetica, sans-serif";
    drawWrappedText(modelName, 100, y + 28, pageWidth - 200, 38);

    y += 130;

    // ------------------------------------------------------
    // OBUDOWA
    // ------------------------------------------------------
    y = drawSectionTitle(labels.cabinet, y);

    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(70, y - 25, pageWidth - 140, 90);

    ctx.strokeStyle = "#e5e5e5";
    ctx.lineWidth = 2;
    ctx.strokeRect(70, y - 25, pageWidth - 140, 90);

    ctx.fillStyle = "#222222";
    ctx.font = "700 30px Arial, Helvetica, sans-serif";
    drawWrappedText(cabinet, 100, y + 28, pageWidth - 200, 38);

    y += 130;

    // ------------------------------------------------------
    // AKUSTYKA
    // ------------------------------------------------------
    y = drawSectionTitle(labels.acoustics, y);

    if (acoustics.length > 0) {
      acoustics.forEach((item) => {
        y = drawBullet(item, y);
      });
    } else {
      y = drawBullet("—", y);
    }

    y += 45;

    // ------------------------------------------------------
    // MECHANIZM
    // ------------------------------------------------------
    y = drawSectionTitle(labels.action, y);

    if (mechanism.length > 0) {
      mechanism.forEach((item) => {
        y = drawBullet(item, y);
      });
    } else {
      y = drawBullet("—", y);
    }

    ctx.strokeStyle = "#e3e3e3";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(70, pageHeight - 120);
    ctx.lineTo(pageWidth - 70, pageHeight - 120);
    ctx.stroke();

    ctx.fillStyle = "#777777";
    ctx.font = "400 22px Arial, Helvetica, sans-serif";
    ctx.fillText("alaudis.eu", 70, pageHeight - 75);

    ctx.fillStyle = "#1e7f43";
    ctx.font = "700 22px Arial, Helvetica, sans-serif";
    ctx.fillText("Alaudis Atelier", pageWidth - 250, pageHeight - 75);

    const imageData = canvas.toDataURL("image/jpeg", 0.96);
    doc.addImage(imageData, "JPEG", 0, 0, 210, 297);

    const fileName =
      safeText(title)
        .replace(/[\\/:*?"<>|]+/g, "-")
        .trim() || `${labels.pdfFileName}-${configuratorModel}`;

    doc.save(`${fileName}.pdf`);
  };

  // --------------------------------------------------------
  // SCROLL DO WYBRANEJ SEKCJI
  // --------------------------------------------------------
  const scrollToSection = (tab: ConfigTab) => {
    const map = {
      obudowa: obudowaRef,
      akustyka: akustykaRef,
      mechanizm: mechanizmRef,
    };

    setActiveTab(tab);
    map[tab].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // --------------------------------------------------------
  // RENDER
  // --------------------------------------------------------
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <PreviewPanel imageSrc={previewImage} />

        <ConfiguratorPanel
          offerTitle={offerTitle}
          setOfferTitle={setOfferTitle}
          activeTab={activeTab}
          selected={selected}
          options={options}
          groupMap={groupMap}
          scrollRef={scrollRef}
          obudowaRef={obudowaRef}
          akustykaRef={akustykaRef}
          mechanizmRef={mechanizmRef}
          underlineRef={underlineRef}
          tabsContainerRef={tabsContainerRef}
          tabRefs={tabRefs}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onSelect={handleSelect}
          onScrollToSection={scrollToSection}
          onSave={handleSave}
          onSend={handleSend}
          onPdf={handlePDF}
        />
      </section>
    </main>
  );
}
