//
//  Untitled 3.swift
//  
//
//  Created by Rafal Zduniak on 19/03/2026.
//
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
  const [activeTab, setActiveTab] = useState<ConfigTab>("obudowa");
  const [offerTitle, setOfferTitle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(defaultPreviewImage);

  const [selected, setSelected] = useState<SelectedState>({
    obudowa: "",
    akustyka: {},
    mechanizm: {},
  });

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
