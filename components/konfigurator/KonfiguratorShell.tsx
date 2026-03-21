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
//
// Co tutaj najłatwiej zmieniasz:
// - startową zakładkę
// - startowy obraz preview
// - sposób zapisu
// - sposób wysyłki maila
// - wygląd i działanie aktywnej zakładki
// - logikę wyboru opcji
//
// Najważniejsze rzeczy:
// - selected        -> wszystkie wybrane opcje
// - previewImage    -> aktualny obraz podglądu
// - handleSelect    -> co dzieje się po wyborze opcji
// - handleSave      -> zapis konfiguracji
// - handleSend      -> wysyłka konfiguracji
// - handlePDF       -> eksport PDF
// ==========================================================

"use client";

import { useEffect, useRef, useState } from "react";
import ConfiguratorPanel from "./ConfiguratorPanel";
import PreviewPanel from "./PreviewPanel";
import { ConfigTab, SelectedState } from "./types";
import {
  defaultPreviewImage,
  groupMap,
  options,
  previewImageMap,
} from "./data";

export default function KonfiguratorShell() {
  // --------------------------------------------------------
  // GŁÓWNE STANY
  // --------------------------------------------------------

  // aktywna zakładka u góry panelu
  const [activeTab, setActiveTab] = useState<ConfigTab>("obudowa");

  // tytuł oferty wpisywany przez użytkownika
  const [offerTitle, setOfferTitle] = useState("");

  // czy rozwijane menu akcji jest otwarte
  const [menuOpen, setMenuOpen] = useState(false);

  // aktualny obraz preview po lewej stronie
  const [previewImage, setPreviewImage] = useState<string>(defaultPreviewImage);

  // wszystkie wybrane opcje konfiguratora
  const [selected, setSelected] = useState<SelectedState>({
    obudowa: "",
    akustyka: {},
    mechanizm: {},
  });

  // --------------------------------------------------------
  // REFY DO SCROLLA I ZAKŁADEK
  // --------------------------------------------------------

  // scrollowalny obszar z opcjami
  const scrollRef = useRef<HTMLDivElement>(null);

  // refy do sekcji
  const obudowaRef = useRef<HTMLDivElement>(null);
  const akustykaRef = useRef<HTMLDivElement>(null);
  const mechanizmRef = useRef<HTMLDivElement>(null);

  // ref do czerwonej linii pod zakładkami
  const underlineRef = useRef<HTMLDivElement>(null);

  // ref do kontenera zakładek
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // refy do przycisków zakładek
  const tabRefs = {
    obudowa: useRef<HTMLButtonElement>(null),
    akustyka: useRef<HTMLButtonElement>(null),
    mechanizm: useRef<HTMLButtonElement>(null),
  };

  // --------------------------------------------------------
  // USTALANIE AKTYWNEJ ZAKŁADKI PODCZAS SCROLLA
  // --------------------------------------------------------
  // Gdy użytkownik przewija listę opcji,
  // sprawdzamy która sekcja jest najbliżej środka
  // i ustawiamy ją jako aktywną.
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
  // PRZESUWANIE CZERWONEJ LINI POD AKTYWNĄ ZAKŁADKĄ
  // --------------------------------------------------------
  // Po zmianie activeTab ustawiamy szerokość i pozycję
  // underline pod odpowiednim przyciskiem.
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
  // Gdy użytkownik kliknie opcję:
  // - dla "obudowa" zapisujemy jedną wartość
  // - dla "akustyka" i "mechanizm" zapisujemy wartość w grupie
  // - zmieniamy obraz preview jeśli istnieje w previewImageMap
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
  // Zapisujemy dane do localStorage,
  // żeby można było później je odczytać lokalnie w przeglądarce.
  const handleSave = () => {
    localStorage.setItem(
      "alaudis-config",
      JSON.stringify({
        title: offerTitle,
        config: selected,
      })
    );
    alert("Zapisano konfigurację ✅");
  };

  // --------------------------------------------------------
  // WYSYŁKA KONFIGURACJI
  // --------------------------------------------------------
  // Tworzymy tekst konfiguracji,
  // kopiujemy go do schowka
  // i otwieramy mailto z gotową treścią.
  const handleSend = () => {
    const text = `
Alaudis konfiguracja: ${offerTitle}

Obudowa: ${selected.obudowa}

Akustyka:
${Object.values(selected.akustyka).join(", ")}

Mechanizm:
${Object.values(selected.mechanizm).join(", ")}
`;

    navigator.clipboard.writeText(text);
    window.location.href = `mailto:?subject=${encodeURIComponent(
      offerTitle || "Alaudis konfiguracja"
    )}&body=${encodeURIComponent(text)}`;
  };

  // --------------------------------------------------------
  // EXPORT PDF
  // --------------------------------------------------------
  // Generujemy prosty PDF z wybranymi opcjami.
  const handlePDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    doc.text(offerTitle || "Alaudis konfiguracja", 10, 15);

    let y = 30;

    doc.text(`Obudowa: ${selected.obudowa}`, 10, y);
    y += 10;

    doc.text("Akustyka:", 10, y);
    y += 8;

    Object.values(selected.akustyka).forEach((i) => {
      doc.text(`- ${i}`, 12, y);
      y += 6;
    });

    y += 6;

    doc.text("Mechanizm:", 10, y);
    y += 8;

    Object.values(selected.mechanizm).forEach((i) => {
      doc.text(`- ${i}`, 12, y);
      y += 6;
    });

    doc.save(`${offerTitle || "alaudis"}.pdf`);
  };

  // --------------------------------------------------------
  // SCROLL DO WYBRANEJ SEKCJI
  // --------------------------------------------------------
  // Po kliknięciu zakładki przewijamy do odpowiedniej sekcji.
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
        {/* LEWA STRONA - PODGLĄD */}
        <PreviewPanel imageSrc={previewImage} />

        {/* PRAWA STRONA - PANEL KONFIGURATORA */}
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
