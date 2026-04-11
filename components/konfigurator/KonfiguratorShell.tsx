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
  // PRZESUWANIE LINI POD AKTYWNĄ ZAKŁADKĄ
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
  const handlePDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    doc.text(offerTitle || labels.configTitleFallback, 10, 15);

    let y = 30;

    doc.text(`${labels.cabinet}: ${selected.obudowa}`, 10, y);
    y += 10;

    doc.text(`${labels.acoustics}:`, 10, y);
    y += 8;

    Object.values(selected.akustyka).forEach((i) => {
      doc.text(`- ${i}`, 12, y);
      y += 6;
    });

    y += 6;

    doc.text(`${labels.action}:`, 10, y);
    y += 8;

    Object.values(selected.mechanizm).forEach((i) => {
      doc.text(`- ${i}`, 12, y);
      y += 6;
    });

    doc.save(`${offerTitle || labels.pdfFileName}.pdf`);
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
