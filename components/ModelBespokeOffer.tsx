import Link from "next/link";

// ==========================================================
// ALAUDIS BESPOKE — FORTEPIAN NA ZAMÓWIENIE, CENA NA ZAPYTANIE
// ==========================================================
// Wspólny blok dla stron modeli we wszystkich językach.
// Opisuje to, co klient wybiera w konfiguratorze
// (components/konfigurator/data.ts): obudowę, akustykę, mechanikę.
// ==========================================================

type Language = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";
type Pillar = { label: string; title: string; text: string };

const PREFIX: Record<Language, string> = { PL: "", EN: "/en", DE: "/de", FR: "/fr", ES: "/es", IT: "/it" };

const COPY: Record<Language, {
  eyebrow: string; title: string; text: string; pillars: Pillar[];
  priceLabel: string; price: string; onRequest: string; configure: string; quote: string;
}> = {
  PL: {
    eyebrow: "ALAUDIS Bespoke",
    title: "Fortepian szyty na miarę",
    text: "Każdy fortepian ALAUDIS powstaje na indywidualne zamówienie. Klient decyduje nie tylko o tym, jak instrument wygląda, lecz także o tym, jak brzmi i z jakich komponentów jest zbudowany. Wszystkie te wybory można zestawić w konfiguratorze, a następnie omówić z nami szczegóły.",
    pillars: [
      { label: "01 · Projekt", title: "Wygląd i wykończenie", text: "Poliester w wysokim połysku — biały, czarny lub czerwony — polerowany heban albo okleina z jabłoni indyjskiej. Do tego kolor ramy i sukna." },
      { label: "02 · Brzmienie", title: "Drewno i profil brzmienia", text: "Dno rezonansowe Strunz lub Ciresa, mostki z klonu lub buku, struny Röslau lub Paulello oraz struny basowe Heller lub SAP Renovation." },
      { label: "03 · Technika", title: "Mechanika i klawiatura", text: "Mechanizm, młotki i tłumiki ALAUDIS, Louis Renner lub Abel oraz klawiatura ALAUDIS lub Kluge — dobrane do sposobu gry." },
    ],
    priceLabel: "Cena", price: "Na zapytanie", onRequest: "Każdą wycenę przygotowujemy indywidualnie — zależy od modelu i wybranej konfiguracji.",
    configure: "Skonfiguruj swój fortepian", quote: "Zapytaj o wycenę",
  },
  EN: {
    eyebrow: "ALAUDIS Bespoke",
    title: "A grand piano tailored to you",
    text: "Every ALAUDIS grand piano is built to individual order. The client decides not only how the instrument looks, but also how it sounds and which components it is built from. All of these choices can be put together in the configurator, and then refined with us in detail.",
    pillars: [
      { label: "01 · Design", title: "Appearance and finish", text: "High-gloss polyester in white, black or red, polished ebony or Indian apple veneer — plus the colour of the frame and the cloth." },
      { label: "02 · Sound", title: "Wood and tonal profile", text: "A Strunz or Ciresa soundboard, maple or beech bridges, Röslau or Paulello strings, and Heller or SAP Renovation bass strings." },
      { label: "03 · Technology", title: "Action and keyboard", text: "ALAUDIS, Louis Renner or Abel action, hammers and dampers, with an ALAUDIS or Kluge keyboard — matched to the way you play." },
    ],
    priceLabel: "Price", price: "On request", onRequest: "Every quotation is prepared individually — it depends on the model and the chosen configuration.",
    configure: "Configure your piano", quote: "Request a quote",
  },
  DE: {
    eyebrow: "ALAUDIS Bespoke",
    title: "Ein Flügel nach Maß",
    text: "Jeder ALAUDIS-Flügel entsteht auf individuelle Bestellung. Der Kunde bestimmt nicht nur, wie das Instrument aussieht, sondern auch, wie es klingt und aus welchen Komponenten es gebaut wird. All diese Entscheidungen lassen sich im Konfigurator zusammenstellen und anschließend gemeinsam mit uns im Detail abstimmen.",
    pillars: [
      { label: "01 · Design", title: "Erscheinung und Oberfläche", text: "Polyester in Hochglanz — weiß, schwarz oder rot —, poliertes Ebenholz oder Furnier aus Indischem Apfelbaum. Dazu die Farbe von Rahmen und Tuch." },
      { label: "02 · Klang", title: "Holz und Klangprofil", text: "Resonanzboden von Strunz oder Ciresa, Stege aus Ahorn oder Buche, Saiten von Röslau oder Paulello sowie Basssaiten von Heller oder SAP Renovation." },
      { label: "03 · Technik", title: "Mechanik und Klaviatur", text: "Mechanik, Hämmer und Dämpfer von ALAUDIS, Louis Renner oder Abel sowie eine Klaviatur von ALAUDIS oder Kluge — abgestimmt auf Ihre Spielweise." },
    ],
    priceLabel: "Preis", price: "Auf Anfrage", onRequest: "Jedes Angebot erstellen wir individuell — abhängig vom Modell und der gewählten Konfiguration.",
    configure: "Ihren Flügel konfigurieren", quote: "Angebot anfragen",
  },
  FR: {
    eyebrow: "ALAUDIS Bespoke",
    title: "Un piano à queue sur mesure",
    text: "Chaque piano à queue ALAUDIS est fabriqué sur commande individuelle. Le client choisit non seulement l’apparence de l’instrument, mais aussi sa sonorité et les composants qui le constituent. Tous ces choix se composent dans le configurateur, puis s’affinent avec nous en détail.",
    pillars: [
      { label: "01 · Design", title: "Apparence et finition", text: "Polyester brillant blanc, noir ou rouge, ébène poli ou placage de pommier indien — ainsi que la couleur du cadre et du feutre." },
      { label: "02 · Son", title: "Bois et profil sonore", text: "Table d’harmonie Strunz ou Ciresa, chevalets en érable ou en hêtre, cordes Röslau ou Paulello et cordes de basse Heller ou SAP Renovation." },
      { label: "03 · Technique", title: "Mécanique et clavier", text: "Mécanique, marteaux et étouffoirs ALAUDIS, Louis Renner ou Abel, avec un clavier ALAUDIS ou Kluge — adaptés à votre jeu." },
    ],
    priceLabel: "Prix", price: "Sur demande", onRequest: "Chaque devis est établi individuellement — selon le modèle et la configuration choisie.",
    configure: "Configurer votre piano", quote: "Demander un devis",
  },
  ES: {
    eyebrow: "ALAUDIS Bespoke",
    title: "Un piano de cola a medida",
    text: "Cada piano de cola ALAUDIS se construye por encargo individual. El cliente decide no solo el aspecto del instrumento, sino también cómo suena y con qué componentes está construido. Todas estas elecciones pueden reunirse en el configurador y, a continuación, concretarse con nosotros en detalle.",
    pillars: [
      { label: "01 · Diseño", title: "Aspecto y acabado", text: "Poliéster de alto brillo (blanco, negro o rojo), ébano pulido o chapa de manzano indio. A ello se suma el color del bastidor y del fieltro." },
      { label: "02 · Sonido", title: "Madera y perfil sonoro", text: "Tabla armónica Strunz o Ciresa, puentes de arce o de haya, cuerdas Röslau o Paulello y cuerdas graves Heller o SAP Renovation." },
      { label: "03 · Técnica", title: "Mecanismo y teclado", text: "Mecanismo, macillos y apagadores ALAUDIS, Louis Renner o Abel, y teclado ALAUDIS o Kluge, elegidos según su manera de tocar." },
    ],
    priceLabel: "Precio", price: "A consultar", onRequest: "Preparamos cada presupuesto de forma individual: depende del modelo y de la configuración elegida.",
    configure: "Configure su piano de cola", quote: "Solicite un presupuesto",
  },
  IT: {
    eyebrow: "ALAUDIS Bespoke",
    title: "Un pianoforte a coda su misura",
    text: "Ogni pianoforte a coda ALAUDIS nasce su ordinazione individuale. Il cliente decide non solo l’aspetto dello strumento, ma anche il suo suono e i componenti con cui è costruito. Tutte queste scelte si possono comporre nel configuratore, per poi definirne insieme a noi i dettagli.",
    pillars: [
      { label: "01 · Design", title: "Aspetto e finitura", text: "Poliestere lucido a specchio (bianco, nero o rosso), ebano lucido oppure impiallacciatura di melo indiano. A questo si aggiungono il colore del telaio e quello del feltro." },
      { label: "02 · Suono", title: "Legno e profilo sonoro", text: "Tavola armonica Strunz o Ciresa, ponticelli in acero o in faggio, corde Röslau o Paulello e corde dei bassi Heller o SAP Renovation." },
      { label: "03 · Tecnica", title: "Meccanica e tastiera", text: "Meccanica, martelletti e smorzatori ALAUDIS, Louis Renner o Abel, e tastiera ALAUDIS o Kluge, scelti in base al tuo modo di suonare." },
    ],
    priceLabel: "Prezzo", price: "Su richiesta", onRequest: "Prepariamo ogni preventivo individualmente: dipende dal modello e dalla configurazione scelta.",
    configure: "Configura il tuo pianoforte", quote: "Richiedi un preventivo",
  },
};

export default function ModelBespokeOffer({ language, model }: { language: Language; model: "178" | "214" | "275" }) {
  const copy = COPY[language];
  const prefix = PREFIX[language];

  return (
    <section className="bg-black px-6 py-20 sm:px-10 lg:px-16" aria-labelledby={`bespoke-${model}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* Podświetlana ramka — ten sam styl co kafelki poniżej */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">{copy.eyebrow}</p>
            <h2 id={`bespoke-${model}`} className="mt-4 text-3xl font-light text-white sm:text-4xl">{copy.title}</h2>
            <p className="mt-6 max-w-2xl leading-8 text-white">{copy.text}</p>
          </div>

          <div className="rounded-[30px] border border-[#d3bd8b]/40 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">{copy.priceLabel}</p>
            <p className="mt-5 text-4xl font-light text-white sm:text-5xl">{copy.price}</p>
            <p className="mt-4 leading-7 text-white/84">{copy.onRequest}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <div key={pillar.label} className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">{pillar.label}</p>
              <h3 className="mt-4 text-2xl font-light">{pillar.title}</h3>
              <p className="mt-5 leading-8 text-white">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={`${prefix}/konfigurator?model=${model}`}
            className="rounded-full border border-[#d3bd8b] bg-[#d3bd8b] px-8 py-4 text-center text-sm uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-[#d3bd8b]"
          >
            {copy.configure}
          </Link>
          <Link
            href={`${prefix}/kontakt`}
            className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            {copy.quote}
          </Link>
        </div>
      </div>
    </section>
  );
}
