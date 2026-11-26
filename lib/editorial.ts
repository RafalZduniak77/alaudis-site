// ==========================================================
// TREŚCI REDAKCYJNE - ALAUDIS
// ==========================================================
// Aktualności i prasa, Artyści, Kaliska tradycja (PL / EN / DE / FR).
// Nowe wydarzenie lub publikację dodaje się jako kolejny element
// listy `items` w odpowiedniej sekcji, w każdym z czterech języków.
// Adresy zaczynające się od "/" są wewnętrzne i automatycznie
// dostają prefiks języka.
// ==========================================================

import type { SeoLocale } from "./seo";

export type EditorialLink = { href: string; label: string };

export type EditorialItem = {
  meta?: string;
  title: string;
  text?: string;
  link?: EditorialLink;
};

export type EditorialSection = {
  // Sekcja bez nagłówka pokazuje same kafelki.
  heading?: string;
  body?: string[];
  items?: EditorialItem[];
  link?: EditorialLink;
};

export type Editorial = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: EditorialSection[];
};

export type EditorialPageKey = "aktualnosci" | "artysci" | "tradycja";

const PRESS = {
  // Artykuł ma u wydawcy wersje językowe: z każdego języka naszej strony prowadzimy do tej samej wersji.
  pianoAtlas: {
    pl: "https://onlinepianoatlas.com/magazine/alaudis/pl/",
    en: "https://onlinepianoatlas.com/magazine/alaudis/",
    de: "https://onlinepianoatlas.com/magazine/alaudis/de/",
    fr: "https://onlinepianoatlas.com/magazine/alaudis/fr/",
    es: "https://onlinepianoatlas.com/magazine/alaudis/es/",
    it: "https://onlinepianoatlas.com/magazine/alaudis/it/",
  },
  kaliszOnline:
    "https://www.kaliszonline.pl/2026/11/kalisz-znow-ma-wlasny-fortepian-alaudis-one-zachwycil-leszka-mozdzera/",
  naszeMiasto:
    "https://kalisz.naszemiasto.pl/uroczysta-inauguracja-fortepianu-alaudis-skonstruowala-go-kaliska-firma-zdjecia/ar/c1p2-29482883",
  chopin:
    "https://tifc.chopin.pl/2026/10/02/koncert-inaugurujacy-nowy-model-fortepianu-alaudis-kaliskiej-firmy-sap-renovation/",
  wKaliszu:
    "https://wkaliszu.pl/2026/11/19/kultura-fortepianowy-spacer-po-kaliszu-i-wizyta-w-pracowni/",
};

export const editorial: Record<EditorialPageKey, Record<SeoLocale, Editorial>> = {
  // ========================================================
  // AKTUALNOŚCI I PRASA
  // ========================================================
  aktualnosci: {
    pl: {
      eyebrow: "Aktualności i prasa",
      title: "Aktualności ALAUDIS",
      lead: "Premiery, koncerty i wydarzenia związane z nowym polskim fortepianem z Kalisza oraz to, co piszą o nas media.",
      sections: [
        {
          heading: "Wydarzenia",
          items: [
            {
              meta: "4 grudnia 2026 · Kalisz",
              title: "Zwiedzanie pracowni, w której powstał Alaudis",
              text: "W piątek o godz. 12:00 Informacja Turystyczna w Kaliszu zaprasza do pracowni SAP Renovation przy ul. Obozowej 18. Uczestnicy zobaczą, jak odnawia się dawne fortepiany i jak instrument wygląda od środka. Udział jest bezpłatny.",
              link: { href: PRESS.wKaliszu, label: "Szczegóły w serwisie wKaliszu" },
            },
            {
              meta: "29 listopada 2026 · Kalisz",
              title: "Spacer „Szlakiem kaliskich fortepianów”",
              text: "Bezpłatny spacer po miejscach związanych z fortepianową historią miasta. Zbiórka w niedzielę o godz. 12:00 przy ratuszowym fortepianie, Główny Rynek 20. Organizatorem jest Informacja Turystyczna w Kaliszu.",
              link: { href: "/tradycja", label: "Poznaj kaliską tradycję" },
            },
            {
              meta: "29 października 2026 · Kalisz",
              title: "Premiera fortepianu ALAUDIS ONE",
              text: "Pierwszy model marki został oficjalnie zaprezentowany w Auli im. prof. Jerzego Rubińskiego Wydziału Pedagogiczno-Artystycznego UAM w Kaliszu. Wystąpili Łukasz Byrdy, duet Per Quattro i Leszek Możdżer. Współorganizatorem wieczoru był Wydział Pedagogiczno-Artystyczny UAM, a partnerem Towarzystwo im. Fryderyka Chopina. Koncertowi towarzyszyła wystawa fotografii Wojciecha Neubauera dokumentujących powstawanie instrumentu.",
              link: { href: "/artysci", label: "Artyści koncertu premierowego" },
            },
            {
              meta: "Wrzesień 2026 · Kalisz",
              title: "Adam Makowicz gra na Alaudis",
              text: "W kaliskim Akceleratorze Kultury na fortepianie Alaudis zagrał Adam Makowicz.",
            },
          ],
        },
        {
          heading: "Napisali o nas",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "„Nowa marka fortepianów? Na tym rynku? Tak, naprawdę!”",
              link: { href: PRESS.pianoAtlas.pl, label: "Czytaj artykuł" },
            },
            {
              meta: "KaliszOnline",
              title: "„Kalisz znów ma własny fortepian. Alaudis One zachwycił Leszka Możdżera”",
              link: { href: PRESS.kaliszOnline, label: "Czytaj artykuł" },
            },
            {
              meta: "Nasze Miasto Kalisz",
              title: "„Uroczysta inauguracja fortepianu Alaudis. Skonstruowała go kaliska firma”",
              link: { href: PRESS.naszeMiasto, label: "Czytaj artykuł" },
            },
            {
              meta: "Towarzystwo im. Fryderyka Chopina",
              title: "„Koncert inaugurujący nowy model fortepianu Alaudis kaliskiej firmy SAP Renovation”",
              link: { href: PRESS.chopin, label: "Czytaj artykuł" },
            },
            {
              meta: "wKaliszu",
              title: "„Fortepianowy spacer po Kaliszu i wizyta w pracowni”",
              link: { href: PRESS.wKaliszu, label: "Czytaj artykuł" },
            },
          ],
        },
        {
          heading: "Dla mediów",
          body: [
            "Przygotowujesz materiał o fortepianie Alaudis? Chętnie udostępnimy zdjęcia, informacje o instrumencie i umówimy rozmowę z jego twórcami. Fotografie i nagrania z wydarzeń znajdziesz także w galerii „W kadrze”.",
          ],
          link: { href: "/galeria", label: "Otwórz galerię" },
        },
      ],
    },
    en: {
      eyebrow: "News and press",
      title: "ALAUDIS News",
      lead: "Premieres, concerts and events around the new Polish grand piano from Kalisz, and what the media are writing about us.",
      sections: [
        {
          heading: "Events",
          items: [
            {
              meta: "4 December 2026 · Kalisz",
              title: "A visit to the workshop where Alaudis was built",
              text: "On Friday at 12:00 the Kalisz Tourist Information Centre invites visitors to the SAP Renovation workshop at Obozowa 18. Guests will see how historic pianos are restored and what an instrument looks like from the inside. Admission is free.",
              link: { href: PRESS.wKaliszu, label: "Details at wKaliszu (in Polish)" },
            },
            {
              meta: "29 November 2026 · Kalisz",
              title: "“On the trail of Kalisz pianos” city walk",
              text: "A free walk through the places connected with the city’s piano-making history. Meeting point: Sunday at 12:00 by the town hall piano, Główny Rynek 20. Organised by the Kalisz Tourist Information Centre.",
              link: { href: "/tradycja", label: "Discover the Kalisz tradition" },
            },
            {
              meta: "29 October 2026 · Kalisz",
              title: "Premiere of the ALAUDIS ONE grand piano",
              text: "The first model of the brand was officially presented in the Prof. Jerzy Rubiński Hall of the Faculty of Pedagogy and Fine Arts of Adam Mickiewicz University in Kalisz. The performers were Łukasz Byrdy, the Per Quattro duo and Leszek Możdżer. The evening was co-organised by the Faculty, in partnership with the Fryderyk Chopin Society. The concert was accompanied by an exhibition of photographs by Wojciech Neubauer documenting the making of the instrument.",
              link: { href: "/artysci", label: "Artists of the premiere concert" },
            },
            {
              meta: "September 2026 · Kalisz",
              title: "Adam Makowicz plays Alaudis",
              text: "Adam Makowicz performed on an Alaudis grand piano at the Akcelerator Kultury in Kalisz.",
            },
          ],
        },
        {
          heading: "In the press",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "“A New Piano Brand? In This Market? Yes, Really!”",
              link: { href: PRESS.pianoAtlas.en, label: "Read the article" },
            },
            {
              meta: "KaliszOnline · in Polish",
              title: "“Kalisz has its own grand piano again. Alaudis One delighted Leszek Możdżer”",
              link: { href: PRESS.kaliszOnline, label: "Read the article" },
            },
            {
              meta: "Nasze Miasto Kalisz · in Polish",
              title: "“Ceremonial inauguration of the Alaudis grand piano, built by a Kalisz company”",
              link: { href: PRESS.naszeMiasto, label: "Read the article" },
            },
            {
              meta: "Fryderyk Chopin Society · in Polish",
              title: "“Concert inaugurating the new Alaudis grand piano by SAP Renovation of Kalisz”",
              link: { href: PRESS.chopin, label: "Read the article" },
            },
            {
              meta: "wKaliszu · in Polish",
              title: "“A piano walk through Kalisz and a visit to the workshop”",
              link: { href: PRESS.wKaliszu, label: "Read the article" },
            },
          ],
        },
        {
          heading: "For the media",
          body: [
            "Preparing a story about the Alaudis grand piano? We will gladly provide photographs and information about the instrument and arrange a conversation with its makers. Photographs and recordings from our events are also available in the “In focus” gallery.",
          ],
          link: { href: "/galeria", label: "Open the gallery" },
        },
      ],
    },
    de: {
      eyebrow: "Aktuelles und Presse",
      title: "ALAUDIS Aktuelles",
      lead: "Premieren, Konzerte und Veranstaltungen rund um den neuen polnischen Flügel aus Kalisz und was die Medien über uns schreiben.",
      sections: [
        {
          heading: "Veranstaltungen",
          items: [
            {
              meta: "4. Dezember 2026 · Kalisz",
              title: "Besuch der Werkstatt, in der Alaudis entstand",
              text: "Am Freitag um 12:00 Uhr lädt die Touristeninformation Kalisz in die Werkstatt von SAP Renovation in der Obozowa 18 ein. Die Gäste sehen, wie historische Flügel restauriert werden und wie ein Instrument von innen aussieht. Die Teilnahme ist kostenlos.",
              link: { href: PRESS.wKaliszu, label: "Details bei wKaliszu (auf Polnisch)" },
            },
            {
              meta: "29. November 2026 · Kalisz",
              title: "Stadtspaziergang „Auf den Spuren der Kalischer Flügel“",
              text: "Ein kostenloser Spaziergang zu den Orten der Klavierbaugeschichte der Stadt. Treffpunkt: Sonntag um 12:00 Uhr am Rathausflügel, Główny Rynek 20. Veranstalter ist die Touristeninformation Kalisz.",
              link: { href: "/tradycja", label: "Die Kalischer Tradition entdecken" },
            },
            {
              meta: "29. Oktober 2026 · Kalisz",
              title: "Premiere des Flügels ALAUDIS ONE",
              text: "Das erste Modell der Marke wurde offiziell in der Prof.-Jerzy-Rubiński-Aula der Pädagogisch-Künstlerischen Fakultät der Adam-Mickiewicz-Universität in Kalisz vorgestellt. Es spielten Łukasz Byrdy, das Duo Per Quattro und Leszek Możdżer. Mitveranstalter des Abends war die Fakultät, Partner die Fryderyk-Chopin-Gesellschaft. Begleitet wurde das Konzert von einer Ausstellung mit Fotografien von Wojciech Neubauer, die die Entstehung des Instruments dokumentieren.",
              link: { href: "/artysci", label: "Die Künstler des Premierenkonzerts" },
            },
            {
              meta: "September 2026 · Kalisz",
              title: "Adam Makowicz spielt Alaudis",
              text: "Im Akcelerator Kultury in Kalisz spielte Adam Makowicz auf einem Alaudis Flügel.",
            },
          ],
        },
        {
          heading: "Pressestimmen",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "„Eine neue Klaviermarke? In diesem Markt? Ja, wirklich!“",
              link: { href: PRESS.pianoAtlas.de, label: "Artikel lesen" },
            },
            {
              meta: "KaliszOnline · auf Polnisch",
              title: "„Kalisz hat wieder einen eigenen Flügel. Alaudis One begeisterte Leszek Możdżer“",
              link: { href: PRESS.kaliszOnline, label: "Artikel lesen" },
            },
            {
              meta: "Nasze Miasto Kalisz · auf Polnisch",
              title: "„Feierliche Einweihung des Flügels Alaudis, gebaut von einem Kalischer Unternehmen“",
              link: { href: PRESS.naszeMiasto, label: "Artikel lesen" },
            },
            {
              meta: "Fryderyk-Chopin-Gesellschaft · auf Polnisch",
              title: "„Konzert zur Einweihung des neuen Flügels Alaudis von SAP Renovation aus Kalisz“",
              link: { href: PRESS.chopin, label: "Artikel lesen" },
            },
            {
              meta: "wKaliszu · auf Polnisch",
              title: "„Flügel-Spaziergang durch Kalisz und Besuch in der Werkstatt“",
              link: { href: PRESS.wKaliszu, label: "Artikel lesen" },
            },
          ],
        },
        {
          heading: "Für Medien",
          body: [
            "Sie bereiten einen Beitrag über den Alaudis Flügel vor? Gern stellen wir Fotos und Informationen zum Instrument bereit und vermitteln ein Gespräch mit seinen Erbauern. Fotos und Aufnahmen unserer Veranstaltungen finden Sie auch in der Galerie „Einblicke“.",
          ],
          link: { href: "/galeria", label: "Galerie öffnen" },
        },
      ],
    },
    fr: {
      eyebrow: "Actualités et presse",
      title: "Actualités ALAUDIS",
      lead: "Premières, concerts et événements autour du nouveau piano à queue polonais de Kalisz, et ce que les médias écrivent sur nous.",
      sections: [
        {
          heading: "Événements",
          items: [
            {
              meta: "4 décembre 2026 · Kalisz",
              title: "Visite de l’atelier où est né Alaudis",
              text: "Vendredi à 12 h, l’Office de tourisme de Kalisz invite le public dans l’atelier SAP Renovation, rue Obozowa 18. Les visiteurs verront comment on restaure les pianos anciens et à quoi ressemble un instrument de l’intérieur. L’entrée est gratuite.",
              link: { href: PRESS.wKaliszu, label: "Détails sur wKaliszu (en polonais)" },
            },
            {
              meta: "29 novembre 2026 · Kalisz",
              title: "Promenade « Sur la route des pianos de Kalisz »",
              text: "Une promenade gratuite à travers les lieux liés à l’histoire de la facture de pianos dans la ville. Rendez-vous dimanche à 12 h près du piano de l’hôtel de ville, Główny Rynek 20. Organisée par l’Office de tourisme de Kalisz.",
              link: { href: "/tradycja", label: "Découvrir la tradition de Kalisz" },
            },
            {
              meta: "29 octobre 2026 · Kalisz",
              title: "Première du piano à queue ALAUDIS ONE",
              text: "Le premier modèle de la marque a été présenté officiellement dans l’aula Prof. Jerzy Rubiński de la Faculté de pédagogie et des beaux-arts de l’Université Adam Mickiewicz à Kalisz. Se sont produits Łukasz Byrdy, le duo Per Quattro et Leszek Możdżer. La soirée était coorganisée par la Faculté, en partenariat avec la Société Frédéric Chopin. Le concert était accompagné d’une exposition de photographies de Wojciech Neubauer documentant la naissance de l’instrument.",
              link: { href: "/artysci", label: "Les artistes du concert de première" },
            },
            {
              meta: "Septembre 2026 · Kalisz",
              title: "Adam Makowicz joue sur Alaudis",
              text: "Adam Makowicz a joué sur un piano à queue Alaudis à l’Akcelerator Kultury de Kalisz.",
            },
          ],
        },
        {
          heading: "Dans la presse",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "« Une nouvelle marque de piano ? Dans ce marché ? Oui, vraiment ! »",
              link: { href: PRESS.pianoAtlas.fr, label: "Lire l’article" },
            },
            {
              meta: "KaliszOnline · en polonais",
              title: "« Kalisz a de nouveau son propre piano. Alaudis One a enchanté Leszek Możdżer »",
              link: { href: PRESS.kaliszOnline, label: "Lire l’article" },
            },
            {
              meta: "Nasze Miasto Kalisz · en polonais",
              title: "« Inauguration solennelle du piano Alaudis, construit par une entreprise de Kalisz »",
              link: { href: PRESS.naszeMiasto, label: "Lire l’article" },
            },
            {
              meta: "Société Frédéric Chopin · en polonais",
              title: "« Concert inaugurant le nouveau piano Alaudis de SAP Renovation, Kalisz »",
              link: { href: PRESS.chopin, label: "Lire l’article" },
            },
            {
              meta: "wKaliszu · en polonais",
              title: "« Promenade des pianos à Kalisz et visite de l’atelier »",
              link: { href: PRESS.wKaliszu, label: "Lire l’article" },
            },
          ],
        },
        {
          heading: "Pour les médias",
          body: [
            "Vous préparez un sujet sur le piano à queue Alaudis ? Nous fournissons volontiers des photographies et des informations sur l’instrument et organisons un entretien avec ses créateurs. Les photographies et enregistrements de nos événements sont également disponibles dans la galerie « En images ».",
          ],
          link: { href: "/galeria", label: "Ouvrir la galerie" },
        },
      ],
    },
    es: {
      eyebrow: "Actualidad y prensa",
      title: "Actualidad ALAUDIS",
      lead: "Presentaciones, conciertos y eventos en torno al nuevo piano de cola polaco de Kalisz, y lo que los medios escriben sobre nosotros.",
      sections: [
        {
          heading: "Eventos",
          items: [
            {
              meta: "4 de diciembre de 2026 · Kalisz",
              title: "Visita al taller donde nació Alaudis",
              text: "El viernes a las 12:00, la Oficina de Información Turística de Kalisz invita a visitar el taller de SAP Renovation, en la calle Obozowa 18. Los asistentes verán cómo se restauran los pianos antiguos y cómo es un instrumento por dentro. La participación es gratuita.",
              link: { href: PRESS.wKaliszu, label: "Detalles en wKaliszu (en polaco)" },
            },
            {
              meta: "29 de noviembre de 2026 · Kalisz",
              title: "Paseo «Por la ruta de los pianos de Kalisz»",
              text: "Un paseo gratuito por los lugares vinculados a la historia pianística de la ciudad. Punto de encuentro: el domingo a las 12:00 junto al piano del ayuntamiento, Główny Rynek 20. Lo organiza la Oficina de Información Turística de Kalisz.",
              link: { href: "/tradycja", label: "Descubra la tradición de Kalisz" },
            },
            {
              meta: "29 de octubre de 2026 · Kalisz",
              title: "Presentación del piano de cola ALAUDIS ONE",
              text: "El primer modelo de la marca se presentó oficialmente en el Aula Prof. Jerzy Rubiński de la Facultad de Pedagogía y Bellas Artes de la Universidad Adam Mickiewicz en Kalisz. Actuaron Łukasz Byrdy, el dúo Per Quattro y Leszek Możdżer. La velada fue coorganizada por la Facultad, con la Sociedad Fryderyk Chopin como entidad colaboradora. El concierto estuvo acompañado de una exposición de fotografías de Wojciech Neubauer que documentan la creación del instrumento.",
              link: { href: "/artysci", label: "Los artistas del concierto de presentación" },
            },
            {
              meta: "Septiembre de 2026 · Kalisz",
              title: "Adam Makowicz toca un Alaudis",
              text: "Adam Makowicz tocó un piano de cola Alaudis en el Akcelerator Kultury de Kalisz.",
            },
          ],
        },
        {
          heading: "En la prensa",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "«¿Una nueva marca de piano? ¿En este mercado? ¡Sí, de verdad!»",
              link: { href: PRESS.pianoAtlas.es, label: "Lea el artículo" },
            },
            {
              meta: "KaliszOnline · en polaco",
              title: "«Kalisz vuelve a tener su propio piano de cola. Alaudis One cautivó a Leszek Możdżer»",
              link: { href: PRESS.kaliszOnline, label: "Lea el artículo" },
            },
            {
              meta: "Nasze Miasto Kalisz · en polaco",
              title: "«Inauguración solemne del piano de cola Alaudis. Lo ha construido una empresa de Kalisz»",
              link: { href: PRESS.naszeMiasto, label: "Lea el artículo" },
            },
            {
              meta: "Sociedad Fryderyk Chopin · en polaco",
              title: "«Concierto inaugural del nuevo modelo de piano de cola Alaudis, de la empresa SAP Renovation de Kalisz»",
              link: { href: PRESS.chopin, label: "Lea el artículo" },
            },
            {
              meta: "wKaliszu · en polaco",
              title: "«Paseo pianístico por Kalisz y visita al taller»",
              link: { href: PRESS.wKaliszu, label: "Lea el artículo" },
            },
          ],
        },
        {
          heading: "Para los medios",
          body: [
            "¿Prepara un reportaje sobre el piano de cola Alaudis? Con mucho gusto le facilitaremos fotografías e información sobre el instrumento y concertaremos una entrevista con sus creadores. Las fotografías y grabaciones de nuestros eventos también están disponibles en la galería «En imágenes».",
          ],
          link: { href: "/galeria", label: "Abra la galería" },
        },
      ],
    },
    it: {
      eyebrow: "Notizie e stampa",
      title: "Notizie ALAUDIS",
      lead: "Presentazioni, concerti ed eventi dedicati al nuovo pianoforte a coda polacco di Kalisz, e ciò che i media scrivono di noi.",
      sections: [
        {
          heading: "Eventi",
          items: [
            {
              meta: "4 dicembre 2026 · Kalisz",
              title: "Visita al laboratorio in cui è nato Alaudis",
              text: "Venerdì alle 12:00 l’Ufficio informazioni turistiche di Kalisz invita il pubblico nel laboratorio SAP Renovation, in via Obozowa 18. I partecipanti vedranno come si restaurano i pianoforti d’epoca e com’è fatto uno strumento al suo interno. La partecipazione è gratuita.",
              link: { href: PRESS.wKaliszu, label: "Dettagli su wKaliszu (in polacco)" },
            },
            {
              meta: "29 novembre 2026 · Kalisz",
              title: "Passeggiata «Sulle tracce dei pianoforti di Kalisz»",
              text: "Una passeggiata gratuita nei luoghi legati alla storia pianistica della città. Ritrovo domenica alle 12:00 presso il pianoforte del municipio, Główny Rynek 20. L’iniziativa è organizzata dall’Ufficio informazioni turistiche di Kalisz.",
              link: { href: "/tradycja", label: "Scopri la tradizione di Kalisz" },
            },
            {
              meta: "29 ottobre 2026 · Kalisz",
              title: "Presentazione del pianoforte a coda ALAUDIS ONE",
              text: "Il primo modello del marchio è stato presentato ufficialmente nell’Aula Prof. Jerzy Rubiński della Facoltà di Pedagogia e Belle Arti dell’Università Adam Mickiewicz a Kalisz. Si sono esibiti Łukasz Byrdy, il duo Per Quattro e Leszek Możdżer. La serata è stata coorganizzata dalla Facoltà; partner dell’evento è stata la Società Fryderyk Chopin. Il concerto è stato accompagnato da una mostra di fotografie di Wojciech Neubauer che documentano la nascita dello strumento.",
              link: { href: "/artysci", label: "Gli artisti del concerto di presentazione" },
            },
            {
              meta: "Settembre 2026 · Kalisz",
              title: "Adam Makowicz suona un Alaudis",
              text: "Adam Makowicz ha suonato un pianoforte a coda Alaudis all’Akcelerator Kultury di Kalisz.",
            },
          ],
        },
        {
          heading: "Dicono di noi",
          items: [
            {
              meta: "Online Piano Atlas",
              title: "«Un nuovo marchio di pianoforti? In questo mercato? Sì, davvero!»",
              link: { href: PRESS.pianoAtlas.it, label: "Leggi l’articolo" },
            },
            {
              meta: "KaliszOnline · in polacco",
              title: "«Kalisz ha di nuovo un pianoforte tutto suo. Alaudis One ha conquistato Leszek Możdżer»",
              link: { href: PRESS.kaliszOnline, label: "Leggi l’articolo" },
            },
            {
              meta: "Nasze Miasto Kalisz · in polacco",
              title: "«Inaugurazione solenne del pianoforte a coda Alaudis, costruito da un’azienda di Kalisz»",
              link: { href: PRESS.naszeMiasto, label: "Leggi l’articolo" },
            },
            {
              meta: "Società Fryderyk Chopin · in polacco",
              title: "«Concerto di inaugurazione del nuovo modello di pianoforte a coda Alaudis dell’azienda SAP Renovation di Kalisz»",
              link: { href: PRESS.chopin, label: "Leggi l’articolo" },
            },
            {
              meta: "wKaliszu · in polacco",
              title: "«Passeggiata pianistica per Kalisz e visita al laboratorio»",
              link: { href: PRESS.wKaliszu, label: "Leggi l’articolo" },
            },
          ],
        },
        {
          heading: "Per i media",
          body: [
            "Stai preparando un servizio sul pianoforte a coda Alaudis? Saremo lieti di fornirti fotografie e informazioni sullo strumento e di organizzare un’intervista con i suoi creatori. Fotografie e registrazioni dei nostri eventi sono disponibili anche nella galleria «In immagini».",
          ],
          link: { href: "/galeria", label: "Apri la galleria" },
        },
      ],
    },
  },

  // ========================================================
  // ARTYŚCI
  // ========================================================
  artysci: {
    pl: {
      eyebrow: "Artyści",
      title: "Artyści przy fortepianie ALAUDIS",
      lead: "Fortepian sprawdza się dopiero pod palcami pianisty. Oto muzycy, którzy zagrali na Alaudis, i mistrz, który nadał mu ostateczne brzmienie.",
      sections: [
        {
          heading: "Koncert premierowy, 29 października 2026",
          body: [
            "Premierowy wieczór w Auli im. prof. Jerzego Rubińskiego w Kaliszu pokazał instrument w trzech odsłonach: w recitalu chopinowskim, w grze na cztery ręce i w jazzowej improwizacji.",
          ],
          items: [
            {
              meta: "Fortepian, improwizacja",
              title: "Leszek Możdżer",
              text: "Urodzony w 1971 roku w Gdańsku pianista jazzowy, kompozytor i producent, jeden z najwybitniejszych polskich muzyków jazzowych. Nagrał ponad sto albumów, wśród nich „Komedę”, „Kaczmarek by Możdżer” oraz „Polskę” w trio z Larsem Danielssonem i Zoharem Fresco. Laureat Fryderyków i Paszportu „Polityki”.\n\nKoncert premierowy zamknął własnymi utworami i improwizacjami. Sięgnął też po „Liberetto” Larsa Danielssona, „Przygodę z Marią” Jana Ptaszyna Wróblewskiego i Etiudę „Rewolucyjną” Chopina. Jak relacjonował portal KaliszOnline, artysta wysoko ocenił brzmienie fortepianu i uznał go za konstrukcję światowej klasy.",
              link: { href: PRESS.kaliszOnline, label: "Relacja KaliszOnline" },
            },
            {
              meta: "Fortepian",
              title: "Łukasz Byrdy",
              text: "Absolwent Akademii Muzycznej im. I. J. Paderewskiego w Poznaniu i Universität der Künste w Berlinie. Uczestnik II etapu XVII Międzynarodowego Konkursu Pianistycznego im. Fryderyka Chopina w Warszawie (2015), zwycięzca Międzynarodowego Konkursu Chopinowskiego w Hanowerze (2019) i półfinalista konkursu Honens w Calgary (2022). W 2017 roku wydał debiutancką płytę z koncertami Chopina i Mozarta w wersji kameralnej. Wykłada w Akademii Muzycznej w Poznaniu i na Uniwersytecie im. Adama Mickiewicza.\n\nKoncert premierowy otworzył interpretacjami utworów Fryderyka Chopina.",
            },
            {
              meta: "Duet fortepianowy na cztery ręce",
              title: "Per Quattro",
              text: "Duet założony w 2016 roku przez Joannę Kaczmarską-Bieżyńską i Roberta Adamczaka, pianistów i pedagogów związanych z Kaliszem i Uniwersytetem im. Adama Mickiewicza. Wykonuje muzykę na cztery ręce i na dwa fortepiany, występował między innymi na festiwalu „Chopin nad wodami Motławy” w Gdańsku i na Konfrontacjach Chopinowskich w Antoninie. W 2025 roku nakładem CD Accord ukazał się album „Per Quattro” z muzyką Schuberta, Debussy’ego i Faurégo.\n\nNa koncercie premierowym duet wykonał muzykę Chopina, trzy tańce węgierskie Johannesa Brahmsa oraz „Libertango” Astora Piazzolli.",
            },
            {
              meta: "Fortepian, młode talenty",
              title: "Antonina Waliszewska",
              text: "Pianistka z Konina, uczennica Państwowej Szkoły Muzycznej II stopnia im. F. Chopina w Poznaniu w klasie fortepianu Joanny Marcinkowskiej. Laureatka ponad stu konkursów pianistycznych, stypendystka programu „Młoda Polska” Ministra Kultury i Dziedzictwa Narodowego oraz Fundacji Santander. Występowała między innymi w Muzeum Fryderyka Chopina w Warszawie, w Żelazowej Woli, w Wiedniu i w Paryżu, a jej recital w Pałacu Myśliwskim w Antoninie transmitowało Polskie Radio Chopin.\n\nNa fortepianie Alaudis zagrała podczas wizyty w naszej pracowni. Nagrania i fotografie z tego spotkania znajdziesz w galerii „W kadrze”.",
              link: { href: "/galeria", label: "Otwórz galerię" },
            },
          ],
        },
        {
          heading: "Pierwsze spotkania z instrumentem",
          body: [
            "Zanim Alaudis ONE trafił na scenę, poznawali go pianiści podczas kameralnych spotkań. Jak podaje KaliszOnline, zagrali na nim między innymi Rafał Blechacz, Adam Makowicz, Piotr Pawlak i Michał Tokaj.",
            "We wrześniu 2026 roku Adam Makowicz wystąpił na fortepianie Alaudis w kaliskim Akceleratorze Kultury.",
          ],
        },
        {
          items: [
            {
              meta: "Regulacja i intonacja",
              title: "Peter Salisbury",
              text: "Regulację i końcową intonację Alaudis ONE powierzono Peterowi Salisbury’emu, głównemu technikowi koncertowemu londyńskiej Royal Festival Hall.\n\nZaczynał jako technik w firmie Steinway, a w Southbank Centre od ponad dwóch dekad przygotowuje fortepiany dla czołowych pianistów świata. Znany jest także z fortepianów koncertowych wyposażonych w dwa wymienne mechanizmy gry.",
              link: { href: "/historia", label: "Zobacz, jak powstaje Alaudis" },
            },
          ],
        },
        {
          heading: "Młode talenty",
          body: [
            "W naszej pracowni gościmy także młodych pianistów. Fotografie z wizyty Antoniny Waliszewskiej oraz z koncertów i spotkań z artystami znajdziesz w galerii „W kadrze”.",
          ],
          link: { href: "/galeria", label: "Otwórz galerię" },
        },
      ],
    },
    en: {
      eyebrow: "Artists",
      title: "Artists at the ALAUDIS grand piano",
      lead: "A grand piano proves itself only under a pianist’s hands. These are the musicians who have played Alaudis, and the master who gave it its final voice.",
      sections: [
        {
          heading: "Premiere concert, 29 October 2026",
          body: [
            "The premiere evening in the Prof. Jerzy Rubiński Hall in Kalisz showed the instrument in three settings: a Chopin recital, four-hand playing and jazz improvisation.",
          ],
          items: [
            {
              meta: "Piano, improvisation",
              title: "Leszek Możdżer",
              text: "Born in Gdańsk in 1971, he is a jazz pianist, composer and producer, and one of Poland’s most distinguished jazz musicians. He has recorded more than a hundred albums, among them “Komeda”, “Kaczmarek by Możdżer” and “Polska” in a trio with Lars Danielsson and Zohar Fresco. He has won Fryderyk awards and the Paszport Polityki prize.\n\nHe closed the premiere concert with his own pieces and improvisations. He also played Lars Danielsson’s “Liberetto”, Jan Ptaszyn Wróblewski’s “Przygoda z Marią” and Chopin’s “Revolutionary” Étude. According to KaliszOnline, he spoke highly of the piano’s sound and called it a world-class design.",
              link: { href: PRESS.kaliszOnline, label: "KaliszOnline report (in Polish)" },
            },
            {
              meta: "Piano",
              title: "Łukasz Byrdy",
              text: "A graduate of the Ignacy Jan Paderewski Academy of Music in Poznań and the Berlin University of the Arts. He reached the second stage of the 17th International Fryderyk Chopin Piano Competition in Warsaw (2015), won the International Chopin Competition in Hanover (2019) and was a semifinalist of the Honens competition in Calgary (2022). His debut album, released in 2017, features concertos by Chopin and Mozart in chamber versions. He teaches at the Academy of Music in Poznań and at Adam Mickiewicz University.\n\nHe opened the premiere concert with interpretations of works by Fryderyk Chopin.",
            },
            {
              meta: "Piano duo, four hands",
              title: "Per Quattro",
              text: "A duo founded in 2016 by Joanna Kaczmarska-Bieżyńska and Robert Adamczak, pianists and teachers associated with Kalisz and Adam Mickiewicz University. It performs music for four hands and for two pianos, and has appeared at the “Chopin nad wodami Motławy” festival in Gdańsk and the Chopin Confrontations in Antonin, among others. In 2025 CD Accord released the album “Per Quattro” with music by Schubert, Debussy and Fauré.\n\nAt the premiere concert the duo performed music by Chopin, three Hungarian Dances by Johannes Brahms and Astor Piazzolla’s “Libertango”.",
            },
            {
              meta: "Piano, young talents",
              title: "Antonina Waliszewska",
              text: "A pianist from Konin and a student of Joanna Marcinkowska at the Fryderyk Chopin Secondary Music School in Poznań. She has won prizes at more than a hundred piano competitions and holds scholarships from the Polish Minister of Culture’s “Młoda Polska” programme and the Santander Foundation. She has performed at the Fryderyk Chopin Museum in Warsaw, in Żelazowa Wola, Vienna and Paris, among others, and her recital at the Hunting Palace in Antonin was broadcast by Polish Radio Chopin.\n\nShe played the Alaudis grand piano during a visit to our workshop. Recordings and photographs from that meeting can be found in the “In focus” gallery.",
              link: { href: "/galeria", label: "Open the gallery" },
            },
          ],
        },
        {
          heading: "First encounters with the instrument",
          body: [
            "Before Alaudis ONE reached the stage, pianists got to know it at smaller, private meetings. According to KaliszOnline, those who played it include Rafał Blechacz, Adam Makowicz, Piotr Pawlak and Michał Tokaj.",
            "In September 2026 Adam Makowicz performed on an Alaudis grand piano at the Akcelerator Kultury in Kalisz.",
          ],
        },
        {
          items: [
            {
              meta: "Regulation and voicing",
              title: "Peter Salisbury",
              text: "The regulation and final voicing of Alaudis ONE were entrusted to Peter Salisbury, chief concert technician of London’s Royal Festival Hall.\n\nHe started out as a technician with Steinway and has spent more than two decades at the Southbank Centre preparing pianos for the world’s leading pianists. He is also known for concert grands fitted with two interchangeable actions.",
              link: { href: "/historia", label: "See how an Alaudis is made" },
            },
          ],
        },
        {
          heading: "Young talents",
          body: [
            "Our workshop also welcomes young pianists. Photographs from the visit of Antonina Waliszewska, and from concerts and meetings with artists, can be found in the “In focus” gallery.",
          ],
          link: { href: "/galeria", label: "Open the gallery" },
        },
      ],
    },
    de: {
      eyebrow: "Künstler",
      title: "Künstler am ALAUDIS Flügel",
      lead: "Ein Flügel beweist sich erst unter den Händen eines Pianisten. Dies sind die Musiker, die auf Alaudis gespielt haben, und der Meister, der ihm seinen endgültigen Klang gab.",
      sections: [
        {
          heading: "Premierenkonzert, 29. Oktober 2026",
          body: [
            "Der Premierenabend in der Prof.-Jerzy-Rubiński-Aula in Kalisz zeigte das Instrument in drei Rollen: im Chopin-Recital, im vierhändigen Spiel und in der Jazzimprovisation.",
          ],
          items: [
            {
              meta: "Klavier, Improvisation",
              title: "Leszek Możdżer",
              text: "Der 1971 in Danzig geborene Jazzpianist, Komponist und Produzent zählt zu den bedeutendsten Jazzmusikern Polens. Er hat mehr als hundert Alben aufgenommen, darunter „Komeda“, „Kaczmarek by Możdżer“ und „Polska“ im Trio mit Lars Danielsson und Zohar Fresco. Er wurde mit Fryderyk-Preisen und dem Paszport Polityki ausgezeichnet.\n\nDas Premierenkonzert beschloss er mit eigenen Stücken und Improvisationen. Er spielte außerdem „Liberetto“ von Lars Danielsson, „Przygoda z Marią“ von Jan Ptaszyn Wróblewski und Chopins „Revolutionsetüde“. Wie das Portal KaliszOnline berichtete, lobte er den Klang des Flügels und nannte ihn eine Konstruktion von Weltklasse.",
              link: { href: PRESS.kaliszOnline, label: "Bericht von KaliszOnline (auf Polnisch)" },
            },
            {
              meta: "Klavier",
              title: "Łukasz Byrdy",
              text: "Absolvent der Ignacy-Jan-Paderewski-Musikakademie in Posen und der Universität der Künste Berlin. Er erreichte die zweite Runde des 17. Internationalen Fryderyk-Chopin-Klavierwettbewerbs in Warschau (2015), gewann den Internationalen Chopin-Wettbewerb in Hannover (2019) und war Halbfinalist des Honens-Wettbewerbs in Calgary (2022). Sein Debütalbum von 2017 enthält Konzerte von Chopin und Mozart in Kammerfassung. Er lehrt an der Musikakademie in Posen und an der Adam-Mickiewicz-Universität.\n\nDas Premierenkonzert eröffnete er mit Interpretationen von Werken Fryderyk Chopins.",
            },
            {
              meta: "Klavierduo zu vier Händen",
              title: "Per Quattro",
              text: "Das Duo wurde 2016 von Joanna Kaczmarska-Bieżyńska und Robert Adamczak gegründet, Pianisten und Pädagogen, die mit Kalisz und der Adam-Mickiewicz-Universität verbunden sind. Es spielt Musik zu vier Händen und für zwei Klaviere und trat unter anderem beim Festival „Chopin nad wodami Motławy“ in Danzig und bei den Chopin-Konfrontationen in Antonin auf. 2025 erschien bei CD Accord das Album „Per Quattro“ mit Musik von Schubert, Debussy und Fauré.\n\nBeim Premierenkonzert spielte das Duo Musik von Chopin, drei Ungarische Tänze von Johannes Brahms und „Libertango“ von Astor Piazzolla.",
            },
            {
              meta: "Klavier, junge Talente",
              title: "Antonina Waliszewska",
              text: "Die Pianistin aus Konin ist Schülerin von Joanna Marcinkowska an der Staatlichen Fryderyk-Chopin-Musikschule in Posen. Sie ist Preisträgerin von mehr als hundert Klavierwettbewerben und Stipendiatin des Programms „Młoda Polska“ des polnischen Kulturministers sowie der Santander-Stiftung. Sie trat unter anderem im Fryderyk-Chopin-Museum in Warschau, in Żelazowa Wola, in Wien und in Paris auf; ihr Recital im Jagdschloss Antonin wurde vom Polnischen Rundfunk Chopin übertragen.\n\nAuf dem Alaudis Flügel spielte sie bei einem Besuch in unserer Werkstatt. Aufnahmen und Fotos dieser Begegnung finden Sie in der Galerie „Einblicke“.",
              link: { href: "/galeria", label: "Galerie öffnen" },
            },
          ],
        },
        {
          heading: "Erste Begegnungen mit dem Instrument",
          body: [
            "Bevor Alaudis ONE auf die Bühne kam, lernten Pianisten ihn bei kleineren, privaten Treffen kennen. Laut KaliszOnline spielten darauf unter anderem Rafał Blechacz, Adam Makowicz, Piotr Pawlak und Michał Tokaj.",
            "Im September 2026 spielte Adam Makowicz im Akcelerator Kultury in Kalisz auf einem Alaudis Flügel.",
          ],
        },
        {
          items: [
            {
              meta: "Regulierung und Intonation",
              title: "Peter Salisbury",
              text: "Regulierung und abschließende Intonation des Alaudis ONE lagen in den Händen von Peter Salisbury, dem leitenden Konzerttechniker der Londoner Royal Festival Hall.\n\nEr begann als Techniker bei Steinway und bereitet im Southbank Centre seit mehr als zwei Jahrzehnten Flügel für die führenden Pianisten der Welt vor. Bekannt ist er auch für Konzertflügel mit zwei austauschbaren Mechaniken.",
              link: { href: "/historia", label: "So entsteht ein Alaudis" },
            },
          ],
        },
        {
          heading: "Junge Talente",
          body: [
            "In unserer Werkstatt sind auch junge Pianistinnen und Pianisten zu Gast. Fotos vom Besuch von Antonina Waliszewska sowie von Konzerten und Begegnungen mit Künstlern finden Sie in der Galerie „Einblicke“.",
          ],
          link: { href: "/galeria", label: "Galerie öffnen" },
        },
      ],
    },
    fr: {
      eyebrow: "Artistes",
      title: "Les artistes au piano ALAUDIS",
      lead: "Un piano à queue ne se révèle que sous les doigts d’un pianiste. Voici les musiciens qui ont joué sur Alaudis, et le maître qui lui a donné sa voix définitive.",
      sections: [
        {
          heading: "Concert de première, 29 octobre 2026",
          body: [
            "La soirée de première, dans l’aula Prof. Jerzy Rubiński à Kalisz, a montré l’instrument sous trois visages : le récital Chopin, le jeu à quatre mains et l’improvisation jazz.",
          ],
          items: [
            {
              meta: "Piano, improvisation",
              title: "Leszek Możdżer",
              text: "Né à Gdańsk en 1971, ce pianiste de jazz, compositeur et producteur compte parmi les plus grands musiciens de jazz polonais. Il a enregistré plus de cent albums, dont « Komeda », « Kaczmarek by Możdżer » et « Polska » en trio avec Lars Danielsson et Zohar Fresco. Il est lauréat de prix Fryderyk et du Paszport Polityki.\n\nIl a clos le concert de première avec ses propres pièces et improvisations. Il a également joué « Liberetto » de Lars Danielsson, « Przygoda z Marią » de Jan Ptaszyn Wróblewski et l’Étude « Révolutionnaire » de Chopin. Selon le portail KaliszOnline, il a salué la sonorité du piano et l’a qualifié de construction de classe mondiale.",
              link: { href: PRESS.kaliszOnline, label: "Compte rendu de KaliszOnline (en polonais)" },
            },
            {
              meta: "Piano",
              title: "Łukasz Byrdy",
              text: "Diplômé de l’Académie de musique Ignacy Jan Paderewski de Poznań et de l’Université des arts de Berlin. Il a atteint le deuxième tour du 17e Concours international de piano Frédéric Chopin de Varsovie (2015), remporté le Concours international Chopin de Hanovre (2019) et été demi-finaliste du concours Honens à Calgary (2022). Son premier album, paru en 2017, réunit des concertos de Chopin et de Mozart en version de chambre. Il enseigne à l’Académie de musique de Poznań et à l’Université Adam Mickiewicz.\n\nIl a ouvert le concert de première avec des interprétations d’œuvres de Frédéric Chopin.",
            },
            {
              meta: "Duo de piano à quatre mains",
              title: "Per Quattro",
              text: "Duo fondé en 2016 par Joanna Kaczmarska-Bieżyńska et Robert Adamczak, pianistes et pédagogues liés à Kalisz et à l’Université Adam Mickiewicz. Il joue la musique à quatre mains et pour deux pianos et s’est produit notamment au festival « Chopin nad wodami Motławy » à Gdańsk et aux Confrontations Chopin d’Antonin. En 2025, l’album « Per Quattro », consacré à Schubert, Debussy et Fauré, est paru chez CD Accord.\n\nLors du concert de première, le duo a interprété de la musique de Chopin, trois Danses hongroises de Johannes Brahms et « Libertango » d’Astor Piazzolla.",
            },
            {
              meta: "Piano, jeunes talents",
              title: "Antonina Waliszewska",
              text: "Pianiste originaire de Konin, élève de Joanna Marcinkowska à l’École nationale de musique Frédéric Chopin de Poznań. Lauréate de plus de cent concours de piano, elle est boursière du programme « Młoda Polska » du ministre polonais de la Culture et de la Fondation Santander. Elle s’est produite notamment au Musée Frédéric Chopin de Varsovie, à Żelazowa Wola, à Vienne et à Paris, et son récital au Palais de chasse d’Antonin a été retransmis par la Radio polonaise Chopin.\n\nElle a joué sur le piano à queue Alaudis lors d’une visite dans notre atelier. Les enregistrements et les photographies de cette rencontre se trouvent dans la galerie « En images ».",
              link: { href: "/galeria", label: "Ouvrir la galerie" },
            },
          ],
        },
        {
          heading: "Premières rencontres avec l’instrument",
          body: [
            "Avant qu’Alaudis ONE ne monte sur scène, des pianistes l’ont découvert lors de rencontres plus intimes. Selon KaliszOnline, Rafał Blechacz, Adam Makowicz, Piotr Pawlak et Michał Tokaj comptent parmi ceux qui l’ont joué.",
            "En septembre 2026, Adam Makowicz a joué sur un piano à queue Alaudis à l’Akcelerator Kultury de Kalisz.",
          ],
        },
        {
          items: [
            {
              meta: "Réglage et harmonisation",
              title: "Peter Salisbury",
              text: "Le réglage et l’harmonisation finale d’Alaudis ONE ont été confiés à Peter Salisbury, technicien de concert en chef du Royal Festival Hall de Londres.\n\nIl a débuté comme technicien chez Steinway et prépare depuis plus de vingt ans, au Southbank Centre, les pianos des plus grands pianistes du monde. Il est également connu pour ses pianos de concert dotés de deux mécaniques interchangeables.",
              link: { href: "/historia", label: "Découvrir comment naît un Alaudis" },
            },
          ],
        },
        {
          heading: "Jeunes talents",
          body: [
            "Notre atelier accueille aussi de jeunes pianistes. Les photographies de la visite d’Antonina Waliszewska, ainsi que des concerts et rencontres avec les artistes, se trouvent dans la galerie « En images ».",
          ],
          link: { href: "/galeria", label: "Ouvrir la galerie" },
        },
      ],
    },
    es: {
      eyebrow: "Artistas",
      title: "Artistas al piano ALAUDIS",
      lead: "Un piano de cola solo se revela bajo los dedos de un pianista. Estos son los músicos que han tocado un Alaudis y el maestro que le dio su voz definitiva.",
      sections: [
        {
          heading: "Concierto de presentación, 29 de octubre de 2026",
          body: [
            "La velada de presentación, en el Aula Prof. Jerzy Rubiński de Kalisz, mostró el instrumento en tres facetas: el recital chopiniano, la interpretación a cuatro manos y la improvisación jazzística.",
          ],
          items: [
            {
              meta: "Piano, improvisación",
              title: "Leszek Możdżer",
              text: "Nacido en Gdansk en 1971, este pianista de jazz, compositor y productor es uno de los músicos de jazz polacos más destacados. Ha grabado más de cien álbumes, entre ellos «Komeda», «Kaczmarek by Możdżer» y «Polska», en trío con Lars Danielsson y Zohar Fresco. Ha sido galardonado con premios Fryderyk y con el Paszport Polityki.\n\nCerró el concierto de presentación con obras propias e improvisaciones. Interpretó también «Liberetto» de Lars Danielsson, «Przygoda z Marią» de Jan Ptaszyn Wróblewski y el Estudio «Revolucionario» de Chopin. Según informó el portal KaliszOnline, el artista valoró muy positivamente el sonido del piano y lo consideró una construcción de talla mundial.",
              link: { href: PRESS.kaliszOnline, label: "Crónica de KaliszOnline (en polaco)" },
            },
            {
              meta: "Piano",
              title: "Łukasz Byrdy",
              text: "Titulado por la Academia de Música Ignacy Jan Paderewski de Poznań y por la Universidad de las Artes de Berlín. Participó en la segunda fase del XVII Concurso Internacional de Piano Fryderyk Chopin de Varsovia (2015), ganó el Concurso Internacional Chopin de Hanóver (2019) y fue semifinalista del concurso Honens de Calgary (2022). En 2017 publicó su disco de debut, con conciertos de Chopin y Mozart en versión de cámara. Es profesor en la Academia de Música de Poznań y en la Universidad Adam Mickiewicz.\n\nAbrió el concierto de presentación con interpretaciones de obras de Frédéric Chopin.",
            },
            {
              meta: "Dúo de piano a cuatro manos",
              title: "Per Quattro",
              text: "Dúo fundado en 2016 por Joanna Kaczmarska-Bieżyńska y Robert Adamczak, pianistas y pedagogos vinculados a Kalisz y a la Universidad Adam Mickiewicz. Interpreta música a cuatro manos y para dos pianos, y ha actuado, entre otros escenarios, en el festival «Chopin nad wodami Motławy» de Gdansk y en las Confrontaciones Chopinianas de Antonin. En 2025, el sello CD Accord publicó el álbum «Per Quattro», con música de Schubert, Debussy y Fauré.\n\nEn el concierto de presentación, el dúo interpretó música de Chopin, tres Danzas húngaras de Johannes Brahms y «Libertango» de Astor Piazzolla.",
            },
            {
              meta: "Piano, jóvenes talentos",
              title: "Antonina Waliszewska",
              text: "Pianista de Konin, alumna de la clase de piano de Joanna Marcinkowska en la Escuela Estatal de Música de segundo grado Fryderyk Chopin de Poznań. Premiada en más de cien concursos de piano, es becaria del programa «Młoda Polska» del ministro de Cultura y Patrimonio Nacional de Polonia y de la Fundación Santander. Ha actuado, entre otros lugares, en el Museo Fryderyk Chopin de Varsovia, en Żelazowa Wola, en Viena y en París, y su recital en el Palacio de Caza de Antonin fue retransmitido por la emisora Polskie Radio Chopin.\n\nTocó el piano de cola Alaudis durante una visita a nuestro taller. Las grabaciones y fotografías de aquel encuentro pueden verse en la galería «En imágenes».",
              link: { href: "/galeria", label: "Abra la galería" },
            },
          ],
        },
        {
          heading: "Primeros encuentros con el instrumento",
          body: [
            "Antes de que Alaudis ONE llegara al escenario, varios pianistas lo conocieron en encuentros privados. Según KaliszOnline, lo han tocado, entre otros, Rafał Blechacz, Adam Makowicz, Piotr Pawlak y Michał Tokaj.",
            "En septiembre de 2026, Adam Makowicz actuó al piano de cola Alaudis en el Akcelerator Kultury de Kalisz.",
          ],
        },
        {
          items: [
            {
              meta: "Regulación y entonación",
              title: "Peter Salisbury",
              text: "La regulación y la entonación final de Alaudis ONE se confiaron a Peter Salisbury, técnico de concierto principal del Royal Festival Hall de Londres.\n\nComenzó como técnico en Steinway y, desde hace más de dos décadas, prepara en el Southbank Centre los pianos de cola para los pianistas más destacados del mundo. Es conocido también por sus pianos de cola de concierto dotados de dos mecanismos intercambiables.",
              link: { href: "/historia", label: "Descubra cómo nace un Alaudis" },
            },
          ],
        },
        {
          heading: "Jóvenes talentos",
          body: [
            "Nuestro taller recibe también a jóvenes pianistas. Las fotografías de la visita de Antonina Waliszewska, así como de conciertos y encuentros con artistas, pueden verse en la galería «En imágenes».",
          ],
          link: { href: "/galeria", label: "Abra la galería" },
        },
      ],
    },
    it: {
      eyebrow: "Artisti",
      title: "Gli artisti al pianoforte ALAUDIS",
      lead: "Un pianoforte a coda si rivela soltanto sotto le dita di un pianista. Ecco i musicisti che hanno suonato un Alaudis e il maestro che gli ha dato la sua voce definitiva.",
      sections: [
        {
          heading: "Concerto di presentazione, 29 ottobre 2026",
          body: [
            "La serata di presentazione, nell’Aula Prof. Jerzy Rubiński di Kalisz, ha mostrato lo strumento in tre vesti: il recital chopiniano, l’esecuzione a quattro mani e l’improvvisazione jazz.",
          ],
          items: [
            {
              meta: "Pianoforte, improvvisazione",
              title: "Leszek Możdżer",
              text: "Nato a Danzica nel 1971, pianista jazz, compositore e produttore, è uno dei più illustri musicisti jazz polacchi. Ha inciso oltre cento album, tra cui «Komeda», «Kaczmarek by Możdżer» e «Polska», in trio con Lars Danielsson e Zohar Fresco. È stato insignito dei premi Fryderyk e del Paszport Polityki.\n\nHa chiuso il concerto di presentazione con brani propri e improvvisazioni. Ha eseguito inoltre «Liberetto» di Lars Danielsson, «Przygoda z Marią» di Jan Ptaszyn Wróblewski e lo Studio «Rivoluzionario» di Chopin. Come ha riferito il portale KaliszOnline, l’artista ha espresso grande apprezzamento per il suono del pianoforte, definendolo una costruzione di livello mondiale.",
              link: { href: PRESS.kaliszOnline, label: "Resoconto di KaliszOnline (in polacco)" },
            },
            {
              meta: "Pianoforte",
              title: "Łukasz Byrdy",
              text: "Diplomato all’Accademia di Musica Ignacy Jan Paderewski di Poznań e all’Università delle Arti di Berlino. Ha partecipato al secondo turno del XVII Concorso Pianistico Internazionale Fryderyk Chopin di Varsavia (2015), ha vinto il Concorso Internazionale Chopin di Hannover (2019) ed è stato semifinalista del concorso Honens di Calgary (2022). Nel 2017 ha pubblicato il suo album d’esordio, con concerti di Chopin e Mozart in versione cameristica. Insegna all’Accademia di Musica di Poznań e all’Università Adam Mickiewicz.\n\nHa aperto il concerto di presentazione con le sue interpretazioni di composizioni di Fryderyk Chopin.",
            },
            {
              meta: "Duo pianistico a quattro mani",
              title: "Per Quattro",
              text: "Duo fondato nel 2016 da Joanna Kaczmarska-Bieżyńska e Robert Adamczak, pianisti e didatti legati a Kalisz e all’Università Adam Mickiewicz. Esegue musica a quattro mani e per due pianoforti e si è esibito, tra l’altro, al festival «Chopin nad wodami Motławy» di Danzica e alle «Konfrontacje Chopinowskie» (Confronti chopiniani) di Antonin. Nel 2025 l’etichetta CD Accord ha pubblicato l’album «Per Quattro», con musiche di Schubert, Debussy e Fauré.\n\nAl concerto di presentazione il duo ha eseguito musiche di Chopin, tre Danze ungheresi di Johannes Brahms e «Libertango» di Astor Piazzolla.",
            },
            {
              meta: "Pianoforte, giovani talenti",
              title: "Antonina Waliszewska",
              text: "Pianista di Konin, allieva della classe di pianoforte di Joanna Marcinkowska alla Scuola Statale di Musica di secondo grado Fryderyk Chopin di Poznań. Premiata in oltre cento concorsi pianistici, è borsista del programma «Młoda Polska» del Ministro della Cultura e del Patrimonio Nazionale polacco e della Fondazione Santander. Si è esibita, tra l’altro, al Museo Fryderyk Chopin di Varsavia, a Żelazowa Wola, a Vienna e a Parigi, e il suo recital al Palazzo di caccia di Antonin è stato trasmesso dall’emittente Polskie Radio Chopin.\n\nHa suonato il pianoforte a coda Alaudis durante una visita al nostro laboratorio. Trovi registrazioni e fotografie di quell’incontro nella galleria «In immagini».",
              link: { href: "/galeria", label: "Apri la galleria" },
            },
          ],
        },
        {
          heading: "Primi incontri con lo strumento",
          body: [
            "Prima che Alaudis ONE salisse sul palco, alcuni pianisti lo hanno conosciuto nel corso di incontri raccolti. Secondo KaliszOnline, lo hanno suonato, tra gli altri, Rafał Blechacz, Adam Makowicz, Piotr Pawlak e Michał Tokaj.",
            "Nel settembre 2026 Adam Makowicz si è esibito su un pianoforte a coda Alaudis all’Akcelerator Kultury di Kalisz.",
          ],
        },
        {
          items: [
            {
              meta: "Regolazione e intonazione",
              title: "Peter Salisbury",
              text: "La regolazione e l’intonazione finale di Alaudis ONE sono state affidate a Peter Salisbury, capo tecnico da concerto della Royal Festival Hall di Londra.\n\nHa iniziato come tecnico presso Steinway e da oltre vent’anni, al Southbank Centre, prepara i pianoforti per i più grandi pianisti del mondo. È noto anche per i suoi pianoforti a coda da concerto dotati di due meccaniche intercambiabili.",
              link: { href: "/historia", label: "Scopri come nasce un Alaudis" },
            },
          ],
        },
        {
          heading: "Giovani talenti",
          body: [
            "Il nostro laboratorio accoglie anche giovani pianisti. Trovi le fotografie della visita di Antonina Waliszewska, dei concerti e degli incontri con gli artisti nella galleria «In immagini».",
          ],
          link: { href: "/galeria", label: "Apri la galleria" },
        },
      ],
    },
  },

  // ========================================================
  // KALISKA TRADYCJA
  // ========================================================
  tradycja: {
    pl: {
      eyebrow: "Dziedzictwo",
      title: "Kalisz, miasto fortepianów",
      lead: "Alaudis nie powstał w przypadkowym miejscu. Kalisz buduje fortepiany od pokoleń, a nasz instrument jest kolejnym rozdziałem tej historii.",
      sections: [
        {
          heading: "Od warsztatu do fabryki",
          body: [
            "Kaliskie tradycje budowy fortepianów sięgają XVIII wieku. Ich najsłynniejszy rozdział otworzył Gustaw Arnold Fibiger, który w 1873 roku założył w mieście pracownię naprawczą, a w 1878 roku ukończył swój pierwszy fortepian. Tę datę przyjmuje się za początek Fabryki Fortepianów i Pianin Arnold Fibiger.",
            "Rozgłos przyniósł firmie wielki fortepian koncertowy o długości 240 cm, pokazany w 1885 roku na wystawie w Warszawie. Przed I wojną światową fabryka mogła wytwarzać ponad tysiąc instrumentów rocznie i należała do czołówki polskiego przemysłu fortepianowego.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "Po II wojnie światowej zakład upaństwowiono i nadano mu nazwę „Calisia”. Pianina i fortepiany z Kalisza trafiały między innymi do Skandynawii, a w 1954 roku w mieście powstało Technikum Budowy Fortepianów, które kształciło kolejne pokolenia fachowców. Fabryka działała do 2007 roku.",
          ],
        },
        {
          heading: "Miasto, które wciąż zna się na fortepianach",
          body: [
            "Wraz z zamknięciem fabryki rzemiosło nie zniknęło. Jak podaje KaliszOnline, w Kaliszu i okolicy działa dziś ponad 40 firm naprawiających i odnawiających fortepiany oraz pianina.",
            "Jedną z nich jest SAP Renovation. Od 1990 roku nasz zespół odrestaurował 14 000 instrumentów, poznając od środka konstrukcje największych światowych producentów.",
          ],
        },
        {
          heading: "Alaudis: nowy rozdział",
          body: [
            "Z tego doświadczenia wyrósł Alaudis, pierwszy od kilkunastu lat fortepian skonstruowany i wykonany w Kaliszu. Nad modelem ONE 178 pracował 77-osobowy zespół.",
            "Nazwa pochodzi od łacińskiego słowa alauda, czyli skowronek: niewielki ptak, którego śpiew niesie się daleko.",
          ],
          link: { href: "/historia", label: "Zobacz, jak powstaje Alaudis" },
        },
      ],
    },
    en: {
      eyebrow: "Heritage",
      title: "Kalisz, a city of pianos",
      lead: "Alaudis was not born in a random place. Kalisz has been building pianos for generations, and our instrument is the next chapter of that story.",
      sections: [
        {
          heading: "From workshop to factory",
          body: [
            "The piano-making tradition of Kalisz goes back to the 18th century. Its most famous chapter was opened by Gustaw Arnold Fibiger, who set up a repair workshop in the city in 1873 and completed his first grand piano in 1878. That date is regarded as the beginning of the Arnold Fibiger Grand and Upright Piano Factory.",
            "The company made its name with a 240 cm concert grand shown at the Warsaw exhibition in 1885. Before the First World War the factory was capable of producing more than a thousand instruments a year and was among the leaders of the Polish piano industry.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "After the Second World War the factory was nationalised and renamed “Calisia”. Upright and grand pianos from Kalisz were exported to Scandinavia and beyond, and in 1954 a technical school of piano building was founded in the city to train new generations of craftsmen. The factory operated until 2007.",
          ],
        },
        {
          heading: "A city that still knows pianos",
          body: [
            "The craft did not disappear when the factory closed. According to KaliszOnline, more than 40 companies repairing and restoring grand and upright pianos operate in and around Kalisz today.",
            "SAP Renovation is one of them. Since 1990 our team has restored 14,000 instruments, learning from the inside the designs of the world’s greatest makers.",
          ],
        },
        {
          heading: "Alaudis: a new chapter",
          body: [
            "Out of that experience grew Alaudis, the first grand piano in more than a decade to be designed and built in Kalisz. A team of 77 people worked on the ONE 178 model.",
            "The name comes from the Latin word alauda, the lark: a small bird whose song carries far.",
          ],
          link: { href: "/historia", label: "See how an Alaudis is made" },
        },
      ],
    },
    de: {
      eyebrow: "Tradition",
      title: "Kalisz, Stadt der Flügel",
      lead: "Alaudis ist nicht an einem zufälligen Ort entstanden. In Kalisz werden seit Generationen Flügel und Klaviere gebaut, und unser Instrument ist das nächste Kapitel dieser Geschichte.",
      sections: [
        {
          heading: "Von der Werkstatt zur Fabrik",
          body: [
            "Die Kalischer Klavierbautradition reicht bis ins 18. Jahrhundert zurück. Ihr berühmtestes Kapitel schlug Gustaw Arnold Fibiger auf, der 1873 in der Stadt eine Reparaturwerkstatt gründete und 1878 seinen ersten Flügel vollendete. Dieses Datum gilt als Beginn der Flügel- und Pianofabrik Arnold Fibiger.",
            "Bekannt wurde das Unternehmen durch einen 240 cm langen Konzertflügel, der 1885 auf der Warschauer Ausstellung gezeigt wurde. Vor dem Ersten Weltkrieg konnte die Fabrik mehr als tausend Instrumente im Jahr herstellen und gehörte zur Spitze der polnischen Klavierindustrie.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "Nach dem Zweiten Weltkrieg wurde das Werk verstaatlicht und in „Calisia“ umbenannt. Klaviere und Flügel aus Kalisz gingen unter anderem nach Skandinavien, und 1954 entstand in der Stadt ein Technikum für Klavierbau, das neue Generationen von Fachleuten ausbildete. Die Fabrik bestand bis 2007.",
          ],
        },
        {
          heading: "Eine Stadt, die Flügel noch immer versteht",
          body: [
            "Mit der Schließung der Fabrik verschwand das Handwerk nicht. Laut KaliszOnline sind in Kalisz und Umgebung heute mehr als 40 Betriebe tätig, die Flügel und Klaviere reparieren und restaurieren.",
            "Einer davon ist SAP Renovation. Seit 1990 hat unser Team 14.000 Instrumente restauriert und dabei die Konstruktionen der größten Hersteller der Welt von innen kennengelernt.",
          ],
        },
        {
          heading: "Alaudis: ein neues Kapitel",
          body: [
            "Aus dieser Erfahrung ist Alaudis hervorgegangen, der erste Flügel seit mehr als einem Jahrzehnt, der in Kalisz konstruiert und gebaut wurde. Am Modell ONE 178 arbeitete ein Team von 77 Personen.",
            "Der Name stammt vom lateinischen Wort alauda, die Lerche: ein kleiner Vogel, dessen Gesang weit trägt.",
          ],
          link: { href: "/historia", label: "So entsteht ein Alaudis" },
        },
      ],
    },
    fr: {
      eyebrow: "Héritage",
      title: "Kalisz, ville des pianos",
      lead: "Alaudis n’est pas né dans un lieu choisi au hasard. Kalisz construit des pianos depuis des générations, et notre instrument est le nouveau chapitre de cette histoire.",
      sections: [
        {
          heading: "De l’atelier à la fabrique",
          body: [
            "La tradition de la facture de pianos à Kalisz remonte au XVIIIe siècle. Son chapitre le plus célèbre a été ouvert par Gustaw Arnold Fibiger, qui fonda en 1873 un atelier de réparation dans la ville et acheva en 1878 son premier piano à queue. Cette date est considérée comme le début de la Fabrique de pianos Arnold Fibiger.",
            "L’entreprise s’est fait connaître grâce à un piano de concert de 240 cm présenté en 1885 à l’exposition de Varsovie. Avant la Première Guerre mondiale, la fabrique pouvait produire plus de mille instruments par an et comptait parmi les premières de l’industrie polonaise du piano.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "Après la Seconde Guerre mondiale, l’usine fut nationalisée et rebaptisée « Calisia ». Les pianos droits et à queue de Kalisz partaient notamment vers la Scandinavie, et en 1954 une école technique de facture de pianos fut créée dans la ville pour former de nouvelles générations d’artisans. La fabrique a fonctionné jusqu’en 2007.",
          ],
        },
        {
          heading: "Une ville qui connaît toujours les pianos",
          body: [
            "Le savoir-faire n’a pas disparu avec la fermeture de la fabrique. Selon KaliszOnline, plus de 40 entreprises réparant et restaurant des pianos sont aujourd’hui actives à Kalisz et dans ses environs.",
            "SAP Renovation est l’une d’elles. Depuis 1990, notre équipe a restauré 14 000 instruments, découvrant de l’intérieur les constructions des plus grands facteurs du monde.",
          ],
        },
        {
          heading: "Alaudis : un nouveau chapitre",
          body: [
            "De cette expérience est né Alaudis, le premier piano à queue conçu et construit à Kalisz depuis plus d’une décennie. Une équipe de 77 personnes a travaillé sur le modèle ONE 178.",
            "Le nom vient du mot latin alauda, l’alouette : un petit oiseau dont le chant porte loin.",
          ],
          link: { href: "/historia", label: "Découvrir comment naît un Alaudis" },
        },
      ],
    },
    es: {
      eyebrow: "Legado",
      title: "Kalisz, ciudad de pianos",
      lead: "Alaudis no nació en un lugar cualquiera. Kalisz construye pianos desde hace generaciones, y nuestro instrumento es el siguiente capítulo de esa historia.",
      sections: [
        {
          heading: "Del taller a la fábrica",
          body: [
            "La tradición de la construcción de pianos en Kalisz se remonta al siglo XVIII. Su capítulo más célebre lo abrió Gustaw Arnold Fibiger, que en 1873 fundó en la ciudad un taller de reparación y en 1878 terminó su primer piano de cola. Esa fecha se considera el inicio de la Fábrica de Pianos de Cola y Pianos Verticales Arnold Fibiger.",
            "La empresa se dio a conocer gracias a un gran piano de cola de concierto de 240 cm de longitud, presentado en 1885 en la exposición de Varsovia. Antes de la Primera Guerra Mundial, la fábrica podía producir más de mil instrumentos al año y figuraba entre las primeras de la industria pianística polaca.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "Tras la Segunda Guerra Mundial, la fábrica fue nacionalizada y recibió el nombre de «Calisia». Los pianos verticales y de cola de Kalisz se enviaban, entre otros destinos, a Escandinavia, y en 1954 se creó en la ciudad la Escuela Técnica de Construcción de Pianos, que formó a nuevas generaciones de especialistas. La fábrica funcionó hasta 2007.",
          ],
        },
        {
          heading: "Una ciudad que sigue entendiendo de pianos",
          body: [
            "El oficio no desapareció con el cierre de la fábrica. Según KaliszOnline, en Kalisz y sus alrededores trabajan hoy más de 40 empresas que reparan y restauran pianos de cola y verticales.",
            "SAP Renovation es una de ellas. Desde 1990, nuestro equipo ha restaurado 14 000 instrumentos y ha conocido por dentro la construcción de los instrumentos de los mayores fabricantes del mundo.",
          ],
        },
        {
          heading: "Alaudis: un nuevo capítulo",
          body: [
            "De esa experiencia nació Alaudis, el primer piano de cola diseñado y construido en Kalisz en más de una década. En el modelo ONE 178 trabajó un equipo de 77 personas.",
            "El nombre procede de la palabra latina alauda, es decir, alondra: un ave pequeña cuyo canto llega lejos.",
          ],
          link: { href: "/historia", label: "Descubra cómo nace un Alaudis" },
        },
      ],
    },
    it: {
      eyebrow: "Eredità",
      title: "Kalisz, città dei pianoforti",
      lead: "Alaudis non è nato in un luogo qualunque. A Kalisz si costruiscono pianoforti da generazioni, e il nostro strumento è il nuovo capitolo di questa storia.",
      sections: [
        {
          heading: "Dal laboratorio alla fabbrica",
          body: [
            "La tradizione della costruzione di pianoforti a Kalisz risale al XVIII secolo. Il suo capitolo più celebre fu aperto da Gustaw Arnold Fibiger, che nel 1873 fondò in città un laboratorio di riparazione e nel 1878 completò il suo primo pianoforte a coda. Questa data è considerata l’inizio della Fabbrica di Pianoforti a Coda e Verticali Arnold Fibiger.",
            "A dare notorietà all’azienda fu un grande pianoforte a coda da concerto lungo 240 cm, presentato nel 1885 all’esposizione di Varsavia. Alla vigilia della Prima guerra mondiale la fabbrica era in grado di produrre oltre mille strumenti all’anno ed era tra le prime dell’industria pianistica polacca.",
          ],
        },
        {
          heading: "Calisia",
          body: [
            "Dopo la Seconda guerra mondiale lo stabilimento fu nazionalizzato e ribattezzato «Calisia». I pianoforti verticali e a coda di Kalisz raggiungevano, tra l’altro, la Scandinavia, e nel 1954 in città fu fondato l’Istituto Tecnico per la Costruzione di Pianoforti, che formò nuove generazioni di specialisti. La fabbrica rimase in attività fino al 2007.",
          ],
        },
        {
          heading: "Una città che di pianoforti se ne intende ancora",
          body: [
            "Con la chiusura della fabbrica il mestiere non è scomparso. Secondo KaliszOnline, a Kalisz e nei dintorni operano oggi più di 40 aziende che riparano e restaurano pianoforti a coda e verticali.",
            "SAP Renovation è una di queste. Dal 1990 il nostro team ha restaurato 14.000 strumenti, imparando a conoscere dall’interno le soluzioni costruttive dei più grandi costruttori del mondo.",
          ],
        },
        {
          heading: "Alaudis: un nuovo capitolo",
          body: [
            "Da questa esperienza è nato Alaudis, il primo pianoforte a coda progettato e costruito a Kalisz da oltre un decennio. Al modello ONE 178 ha lavorato un team di 77 persone.",
            "Il nome deriva dalla parola latina alauda, cioè allodola: un piccolo uccello il cui canto si diffonde lontano.",
          ],
          link: { href: "/historia", label: "Scopri come nasce un Alaudis" },
        },
      ],
    },
  },
};
