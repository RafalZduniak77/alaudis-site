//
//  Untitled 2.swift
//  
//
//  Created by Rafal Zduniak on 19/03/2026.
//
"use client";

import { RefObject } from "react";
import { ConfigTab, OptionsMap, SelectedState } from "./types";
import ActionMenu from "./ActionMenu";

type ConfiguratorPanelProps = {
  offerTitle: string;
  setOfferTitle: (value: string) => void;
  activeTab: ConfigTab;
  selected: SelectedState;
  options: OptionsMap;
  groupMap: Record<string, string>;
  scrollRef: RefObject<HTMLDivElement | null>;
  obudowaRef: RefObject<HTMLDivElement | null>;
  akustykaRef: RefObject<HTMLDivElement | null>;
  mechanizmRef: RefObject<HTMLDivElement | null>;
  underlineRef: RefObject<HTMLDivElement | null>;
  tabsContainerRef: RefObject<HTMLDivElement | null>;
  tabRefs: {
    obudowa: RefObject<HTMLButtonElement | null>;
    akustyka: RefObject<HTMLButtonElement | null>;
    mechanizm: RefObject<HTMLButtonElement | null>;
  };
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  onSelect: (tab: ConfigTab, value: string) => void;
  onScrollToSection: (tab: ConfigTab) => void;
  onSave: () => void;
  onSend: () => void;
  onPdf: () => void;
};

export default function ConfiguratorPanel({
  offerTitle,
  setOfferTitle,
  activeTab,
  selected,
  options,
  groupMap,
  scrollRef,
  obudowaRef,
  akustykaRef,
  mechanizmRef,
  underlineRef,
  tabsContainerRef,
  tabRefs,
  menuOpen,
  setMenuOpen,
  onSelect,
  onScrollToSection,
  onSave,
  onSend,
  onPdf,
}: ConfiguratorPanelProps) {
  return (
    <div className="absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col border-l border-white/10 bg-white/5 backdrop-blur-2xl">
      <div className="p-6 pt-24">
        <input
          value={offerTitle}
          onChange={(e) => setOfferTitle(e.target.value)}
          placeholder="Tytuł oferty..."
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        />
      </div>

      <div
        ref={tabsContainerRef}
        className="relative flex border-b border-white/10"
      >
        {(["obudowa", "akustyka", "mechanizm"] as ConfigTab[]).map((tab) => (
          <button
            key={tab}
            ref={tabRefs[tab]}
            onClick={() => onScrollToSection(tab)}
            className={`flex-1 py-5 ${
              activeTab === tab ? "text-white" : "text-white/70"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}

        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-red-500 transition-all duration-300"
        />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-8 space-y-24"
      >
        {(["obudowa", "akustyka", "mechanizm"] as ConfigTab[]).map((section) => (
          <div
            key={section}
            ref={
              section === "obudowa"
                ? obudowaRef
                : section === "akustyka"
                  ? akustykaRef
                  : mechanizmRef
            }
            className="min-h-[80vh]"
          >
            <h3 className="mb-6 uppercase tracking-wider opacity-80">
              {section}
            </h3>

            {options[section].map((item) => {
              const isActive =
                section === "obudowa"
                  ? selected.obudowa === item
                  : selected[section][groupMap[item]] === item;

              return (
                <button
                  key={item}
                  onClick={() => onSelect(section, item)}
                  className={`mb-3 w-full rounded-xl p-4 transition ${
                    isActive
                      ? "border border-white/30 bg-white/10 backdrop-blur-md"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <ActionMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSave={onSave}
        onSend={onSend}
        onPdf={onPdf}
      />
    </div>
  );
}
