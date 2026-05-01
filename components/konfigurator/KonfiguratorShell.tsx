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
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ConfiguratorPanel from "./ConfiguratorPanel";
import PreviewPanel from "./PreviewPanel";
import { ConfigTab, SelectedState } from "./types";
import {
  defaultPreviewImage,
  groupMap,
  options,
  previewImageMap,
} from "./data";

type LanguageKey = "PL" | "EN" | "DE" | "FR";

// --------------------------------------------------------
// ROZPOZNAWANIE JĘZYKA
// --------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  if (pathname === "/en/konfigurator" || pathname.startsWith("/en/konfigurator")) {
    return "EN";
  }

  if (pathname === "/de/konfigurator" || pathname.startsWith("/de/konfigurator")) {
    return "DE";
  }

  if (pathname === "/fr/konfigurator" || pathname.startsWith("/fr/konfigurator")) {
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
      pdfFileName: "alaudis",
      pdfBadge: "CONFIGURATION",
      exportDate: "Export date",
      mailSubjectFallback: "Alaudis configuration",
      composeText: (offerTitle: string, selected: SelectedState) => `
Alaudis configuration: ${offerTitle}

Cabinet: ${selected.obudowa}

Acoustics:
${Object.values(selected.akustyka).join(", ")}

Action:
${Object.values(selected.mechanizm).join(", ")}
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
      pdfFileName: "alaudis",
      pdfBadge: "KONFIGURATION",
      exportDate: "Exportdatum",
      mailSubjectFallback: "Alaudis Konfiguration",
      composeText: (offerTitle: string, selected: SelectedState) => `
Alaudis Konfiguration: ${offerTitle}

Gehäuse: ${selected.obudowa}

Akustik:
${Object.values(selected.akustyka).join(", ")}

Mechanik:
${Object.values(selected.mechanizm).join(", ")}
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
      pdfFileName: "alaudis",
      pdfBadge: "CONFIGURATION",
      exportDate: "Date d’export",
      mailSubjectFallback: "Configuration Alaudis",
      composeText: (offerTitle: string, selected: SelectedState) => `
Configuration Alaudis : ${offerTitle}

Caisse : ${selected.obudowa}

Acoustique :
${Object.values(selected.akustyka).join(", ")}

Mécanique :
${Object.values(selected.mechanizm).join(", ")}
`,
    };
  }

  return {
    configTitleFallback: "Alaudis konfiguracja",
    saveAlert: "Zapisano konfigurację ✅",
    cabinet: "Obudowa",
    acoustics: "Akustyka",
    action: "Mechanizm",
    pdfFileName: "alaudis",
    pdfBadge: "KONFIGURACJA",
    exportDate: "Data eksportu",
    mailSubjectFallback: "Alaudis konfiguracja",
    composeText: (offerTitle: string, selected: SelectedState) => `
Alaudis konfiguracja: ${offerTitle}

Obudowa: ${selected.obudowa}

Akustyka:
${Object.values(selected.akustyka).join(", ")}

Mechanizm:
${Object.values(selected.mechanizm).join(", ")}
`,
  };
}

export default function KonfiguratorShell() {
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);
  const labels = useMemo(() => getLabels(language), [language]);

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

    setPreviewImage(previewImageMap[value] || defaultPreviewImage);
  };

  // --------------------------------------------------------
  // ZAPIS KONFIGURACJI
  // --------------------------------------------------------
  const handleSave = () => {
    localStorage.setItem(
      "alaudis-config",
      JSON.stringify({
        title: offerTitle,
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
    const text = labels.composeText(
      offerTitle || labels.configTitleFallback,
      selected
    );

    navigator.clipboard.writeText(text);
    window.location.href = `mailto:?subject=${encodeURIComponent(
      offerTitle || labels.mailSubjectFallback
    )}&body=${encodeURIComponent(text)}`;
  };

  // --------------------------------------------------------
  // EXPORT PDF
  // --------------------------------------------------------
  // PDF generujemy jako obraz z canvas.
  // Dzięki temu polskie znaki działają poprawnie:
  // ł, ą, ę, ó, ś, ć, ń, ż, ź.
  //
  // Dodatkowo PDF wygląda bardziej premium:
  // - czarny nagłówek
  // - złoty napis ALAUDIS
  // - zielony znacznik konfiguracji
  // - sekcje z liniami i punktami
  // --------------------------------------------------------
  const handlePDF = async () => {
    const { jsPDF } = await import("jspdf");

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const canvas = document.createElement("canvas");

    // Format A4 w wysokiej rozdzielczości
    canvas.width = 1240;
    canvas.height = 1754;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pageWidth = canvas.width;
    const pageHeight = canvas.height;

    const safeText = (value: unknown) => String(value ?? "").trim();

    const title = safeText(offerTitle || labels.configTitleFallback);
    const cabinet = safeText(selected.obudowa) || "—";

    const acoustics = Object.values(selected.akustyka)
      .map((item) => safeText(item))
      .filter(Boolean);

    const mechanism = Object.values(selected.mechanizm)
      .map((item) => safeText(item))
      .filter(Boolean);

    const localeMap: Record<LanguageKey, string> = {
      PL: "pl-PL",
      EN: "en-GB",
      DE: "de-DE",
      FR: "fr-FR",
    };

    const currentLocale = localeMap[language] || "pl-PL";
    const date = new Intl.DateTimeFormat(currentLocale).format(new Date());

    // ------------------------------------------------------
    // FUNKCJA: ZAWIJANIE TEKSTU
    // ------------------------------------------------------
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

    // ------------------------------------------------------
    // FUNKCJA: TYTUŁ SEKCJI
    // ------------------------------------------------------
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

    // ------------------------------------------------------
    // FUNKCJA: POZYCJA Z LISTY
    // ------------------------------------------------------
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

    // ------------------------------------------------------
    // TŁO
    // ------------------------------------------------------
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageWidth, pageHeight);

    // ------------------------------------------------------
    // GÓRNY PASEK PREMIUM
    // ------------------------------------------------------
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

    // ------------------------------------------------------
    // TYTUŁ DOKUMENTU
    // ------------------------------------------------------
    let y = 270;

    ctx.fillStyle = "#111111";
    ctx.font = "700 44px Arial, Helvetica, sans-serif";
    y = drawWrappedText(title, 70, y, pageWidth - 140, 56);

    ctx.fillStyle = "#777777";
    ctx.font = "400 24px Arial, Helvetica, sans-serif";
    ctx.fillText(`${labels.exportDate}: ${date}`, 70, y + 10);

    y += 90;

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

    // ------------------------------------------------------
    // STOPKA
    // ------------------------------------------------------
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

    // ------------------------------------------------------
    // ZAPIS PDF
    // ------------------------------------------------------
    const imageData = canvas.toDataURL("image/jpeg", 0.96);
    doc.addImage(imageData, "JPEG", 0, 0, 210, 297);

    const fileName =
      safeText(offerTitle || labels.pdfFileName)
        .replace(/[\\/:*?"<>|]+/g, "-")
        .trim() || "alaudis";

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
