// ==========================================================
// SEO - ALAUDIS
// ==========================================================
// Jedno miejsce na tytuły, opisy, adresy kanoniczne, hreflang
// i dane strukturalne wszystkich podstron w PL / EN / DE / FR / ES / IT.
// Aby zmienić tekst widoczny w Google, wystarczy edytować
// obiekt PAGES poniżej.
// ==========================================================

import type { Metadata } from "next";

export const SITE_URL = "https://alaudis.eu";
export const SITE_NAME = "ALAUDIS";
export const OG_IMAGE = "/og-alaudis.jpg";

export const seoLocales = ["pl", "en", "de", "fr", "es", "it"] as const;
export type SeoLocale = (typeof seoLocales)[number];

// Tylko produkcja (alaudis.eu) może być indeksowana.
// Podglądy Vercel i środowisko lokalne dostają noindex.
export const isIndexable = process.env.VERCEL_ENV === "production";

const OG_LOCALE: Record<SeoLocale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
};

type PageCopy = { label: string; title: string; description: string };

type PageDefinition = {
  path: string;
  image?: string;
  copy: Record<SeoLocale, PageCopy>;
};

const PAGES = {
  home: {
    path: "",
    copy: {
      pl: {
        label: "ALAUDIS",
        title: "ALAUDIS – nowy polski fortepian | Manufaktura fortepianów w Kaliszu",
        description:
          "ALAUDIS to nowy polski fortepian, ręcznie budowany w manufakturze w Kaliszu. Trzy modele: ONE 178, LEO 214 i koncertowy DREAM 275. Skonfiguruj własny instrument.",
      },
      en: {
        label: "ALAUDIS",
        title: "ALAUDIS – The New Polish Grand Piano | Handcrafted in Kalisz",
        description:
          "ALAUDIS is the new Polish grand piano, built by hand in our manufactory in Kalisz, Poland. Three models: ONE 178, LEO 214 and the DREAM 275 concert grand.",
      },
      de: {
        label: "ALAUDIS",
        title: "ALAUDIS – Der neue polnische Flügel | Flügelmanufaktur in Kalisz",
        description:
          "ALAUDIS ist der neue polnische Flügel, in Handarbeit gefertigt in unserer Manufaktur in Kalisz. Drei Modelle: ONE 178, LEO 214 und der Konzertflügel DREAM 275.",
      },
      fr: {
        label: "ALAUDIS",
        title: "ALAUDIS – Le nouveau piano à queue polonais | Manufacture à Kalisz",
        description:
          "ALAUDIS est le nouveau piano à queue polonais, fabriqué à la main dans notre manufacture de Kalisz. Trois modèles : ONE 178, LEO 214 et le piano de concert DREAM 275.",
      },
      es: {
        label: "ALAUDIS",
        title: "ALAUDIS – El nuevo piano de cola polaco | Manufactura en Kalisz",
        description:
          "ALAUDIS es el nuevo piano de cola polaco, construido a mano en nuestra manufactura de Kalisz. Tres modelos: ONE 178, LEO 214 y el piano de cola de concierto DREAM 275.",
      },
      it: {
        label: "ALAUDIS",
        title: "ALAUDIS – Il nuovo pianoforte a coda polacco | Manifattura a Kalisz",
        description:
          "ALAUDIS è il nuovo pianoforte a coda polacco, costruito a mano nella nostra manifattura di Kalisz. Tre modelli: ONE 178, LEO 214 e il gran coda da concerto DREAM 275.",
      },
    },
  },
  model178: {
    path: "/fortepiany/alaudis-178",
    copy: {
      pl: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – polski fortepian salonowy, ręcznie budowany",
        description:
          "ALAUDIS ONE 178: fortepian o długości 178 cm, ręcznie budowany w Kaliszu. Mechanizm Renner, klawiatura Kluge, świerk rezonansowy Strunz. Liryczne, zrównoważone brzmienie.",
      },
      en: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – Handcrafted Polish Grand Piano, 178 cm",
        description:
          "ALAUDIS ONE 178: a 178 cm grand piano built by hand in Kalisz, Poland. Renner action, Kluge keyboard, Strunz tonewood spruce. A lyrical, balanced and elegant voice.",
      },
      de: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – Handgefertigter Flügel aus Polen, 178 cm",
        description:
          "ALAUDIS ONE 178: ein 178 cm langer Flügel, in Handarbeit in Kalisz gebaut. Renner-Mechanik, Kluge-Klaviatur, Resonanzfichte von Strunz. Lyrischer, ausgewogener Klang.",
      },
      fr: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – Piano à queue polonais fait main, 178 cm",
        description:
          "ALAUDIS ONE 178 : un piano à queue de 178 cm fabriqué à la main à Kalisz. Mécanique Renner, clavier Kluge, épicéa de résonance Strunz. Une voix lyrique et équilibrée.",
      },
      es: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – Piano de cola polaco hecho a mano, 178 cm",
        description:
          "ALAUDIS ONE 178: un piano de cola de 178 cm construido a mano en Kalisz. Mecanismo Renner, teclado Kluge, abeto de resonancia Strunz. Un sonido lírico y equilibrado.",
      },
      it: {
        label: "ALAUDIS ONE 178",
        title: "ALAUDIS ONE 178 – Pianoforte a coda polacco fatto a mano, 178 cm",
        description:
          "ALAUDIS ONE 178: un pianoforte a coda di 178 cm costruito a mano a Kalisz. Meccanica Renner, tastiera Kluge, abete di risonanza Strunz. Un suono lirico ed equilibrato.",
      },
    },
  },
  model214: {
    path: "/fortepiany/alaudis-214",
    copy: {
      pl: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – polski fortepian o koncertowym charakterze",
        description:
          "ALAUDIS LEO 214: fortepian 214 cm o głębszej obecności i szerszej projekcji brzmienia. Ręczne rzemiosło z Kalisza dla przestrzeni, które wymagają większej skali.",
      },
      en: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – Polish Grand Piano with a Concert Character",
        description:
          "ALAUDIS LEO 214: a 214 cm grand piano with deeper presence and wider projection. Handcrafted in Kalisz, Poland, for spaces that call for greater scale.",
      },
      de: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – Polnischer Flügel mit Konzertcharakter",
        description:
          "ALAUDIS LEO 214: ein 214 cm langer Flügel mit tieferer Präsenz und weiterer Klangprojektion. Handarbeit aus Kalisz für Räume, die größere Dimensionen verlangen.",
      },
      fr: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – Piano à queue polonais au caractère de concert",
        description:
          "ALAUDIS LEO 214 : un piano à queue de 214 cm à la présence plus profonde et à la projection plus ample. Fabriqué à la main à Kalisz pour les espaces de grande échelle.",
      },
      es: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – Piano de cola polaco con carácter de concierto",
        description:
          "ALAUDIS LEO 214: un piano de cola de 214 cm con una presencia más profunda y una proyección sonora más amplia. Artesanía de Kalisz para espacios que exigen mayor escala.",
      },
      it: {
        label: "ALAUDIS LEO 214",
        title: "ALAUDIS LEO 214 – Pianoforte a coda polacco, carattere da concerto",
        description:
          "ALAUDIS LEO 214: un pianoforte a coda di 214 cm dalla presenza più profonda e dalla proiezione sonora più ampia. Artigianato di Kalisz per spazi di scala maggiore.",
      },
    },
  },
  model275: {
    path: "/fortepiany/alaudis-275",
    copy: {
      pl: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – polski fortepian koncertowy",
        description:
          "ALAUDIS DREAM 275: największa forma koncertowa marki. Fortepian koncertowy 275 cm o pełnej skali brzmienia, tworzony z myślą o salach koncertowych i wielkich estradach.",
      },
      en: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – Polish Concert Grand Piano",
        description:
          "ALAUDIS DREAM 275: the largest concert form of the brand. A 275 cm concert grand piano with a full scale of sound, created for concert halls and the great stages.",
      },
      de: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – Polnischer Konzertflügel",
        description:
          "ALAUDIS DREAM 275: die größte Konzertform der Marke. Ein 275 cm langer Konzertflügel mit voller Klangskala, geschaffen für Konzertsäle und große Bühnen.",
      },
      fr: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – Piano de concert polonais",
        description:
          "ALAUDIS DREAM 275 : la plus grande forme de concert de la marque. Un piano de concert de 275 cm à la pleine échelle sonore, conçu pour les salles de concert et les grandes scènes.",
      },
      es: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – Piano de cola de concierto polaco",
        description:
          "ALAUDIS DREAM 275: la mayor forma de concierto de la marca. Un piano de cola de concierto de 275 cm, con toda la amplitud sonora, para salas de concierto y grandes escenarios.",
      },
      it: {
        label: "ALAUDIS DREAM 275",
        title: "ALAUDIS DREAM 275 – Pianoforte gran coda da concerto polacco",
        description:
          "ALAUDIS DREAM 275: la più grande forma da concerto del marchio. Un gran coda di 275 cm dalla piena ampiezza sonora, per sale da concerto e grandi palcoscenici.",
      },
    },
  },
  historia: {
    path: "/historia",
    copy: {
      pl: {
        label: "Historia i rzemiosło",
        title: "Jak powstaje fortepian ALAUDIS – manufaktura i rzemiosło",
        description:
          "Od sezonowanego drewna po intonację: zobacz, jak w kaliskiej manufakturze ręcznie powstaje fortepian ALAUDIS. Korpus z klonu, świerkowa płyta rezonansowa, mechanizm Renner.",
      },
      en: {
        label: "Story and craftsmanship",
        title: "How an ALAUDIS Grand Piano Is Made – Manufactory and Craft",
        description:
          "From seasoned wood to final voicing: see how an ALAUDIS grand piano is built by hand in Kalisz, Poland. Maple rim, spruce soundboard, Renner action.",
      },
      de: {
        label: "Geschichte und Handwerk",
        title: "Wie ein ALAUDIS Flügel entsteht – Manufaktur und Handwerk",
        description:
          "Vom abgelagerten Holz bis zur Intonation: So entsteht ein ALAUDIS Flügel in Handarbeit in Kalisz. Rim aus Ahorn, Resonanzboden aus Fichte, Renner-Mechanik.",
      },
      fr: {
        label: "Histoire et savoir-faire",
        title: "Comment naît un piano ALAUDIS – manufacture et savoir-faire",
        description:
          "Du bois séché à l’harmonisation finale : découvrez comment un piano à queue ALAUDIS est fabriqué à la main à Kalisz. Ceinture en érable, table en épicéa, mécanique Renner.",
      },
      es: {
        label: "Historia y artesanía",
        title: "Cómo nace un piano de cola ALAUDIS – manufactura y artesanía",
        description:
          "De la madera curada a la entonación: descubra cómo se construye a mano un piano de cola ALAUDIS en Kalisz. Caja de arce, tabla armónica de abeto, mecanismo Renner.",
      },
      it: {
        label: "Storia e artigianato",
        title: "Come nasce un pianoforte a coda ALAUDIS – manifattura e artigianato",
        description:
          "Dal legno stagionato all’intonazione: scopri come nasce a mano un pianoforte a coda ALAUDIS a Kalisz. Fascia in acero, tavola armonica in abete, meccanica Renner.",
      },
    },
  },
  konfigurator: {
    path: "/konfigurator",
    copy: {
      pl: {
        label: "Konfigurator",
        title: "Konfigurator fortepianu ALAUDIS – wykończenie, kolor, detale",
        description:
          "Skomponuj własny fortepian ALAUDIS: wybierz model, wykończenie i kolor, młotki, tłumiki oraz detale. Zapisz konfigurację i umów prywatną konsultację.",
      },
      en: {
        label: "Configurator",
        title: "ALAUDIS Grand Piano Configurator – Finish, Colour, Details",
        description:
          "Compose your own ALAUDIS grand piano: choose the model, finish and colour, hammers, dampers and details. Save your configuration and book a private consultation.",
      },
      de: {
        label: "Konfigurator",
        title: "ALAUDIS Flügel-Konfigurator – Oberfläche, Farbe, Details",
        description:
          "Stellen Sie Ihren eigenen ALAUDIS Flügel zusammen: Modell, Oberfläche und Farbe, Hämmer, Dämpfer und Details. Konfiguration speichern und private Beratung vereinbaren.",
      },
      fr: {
        label: "Configurateur",
        title: "Configurateur de piano à queue ALAUDIS – finition, couleur, détails",
        description:
          "Composez votre propre piano à queue ALAUDIS : modèle, finition et couleur, marteaux, étouffoirs et détails. Enregistrez votre configuration et réservez une consultation privée.",
      },
      es: {
        label: "Configurador",
        title: "Configurador del piano de cola ALAUDIS – acabado, color, detalles",
        description:
          "Componga su propio piano de cola ALAUDIS: modelo, acabado y color, macillos, apagadores y detalles. Guarde su configuración y reserve un asesoramiento privado.",
      },
      it: {
        label: "Configuratore",
        title: "Configuratore del pianoforte ALAUDIS – finitura, colore, dettagli",
        description:
          "Componi il tuo pianoforte a coda ALAUDIS: modello, finitura e colore, martelletti, smorzatori e dettagli. Salva la configurazione e prenota una consulenza privata.",
      },
    },
  },
  kontakt: {
    path: "/kontakt",
    copy: {
      pl: {
        label: "Kontakt",
        title: "Kontakt – ALAUDIS, polski producent fortepianów | Kalisz",
        description:
          "Skontaktuj się z ALAUDIS: prywatna konsultacja, dobór modelu i wizyta w atelier. SAP Renovation, ul. Obozowa 18, 62-800 Kalisz.",
      },
      en: {
        label: "Contact",
        title: "Contact – ALAUDIS, Polish Grand Piano Maker | Kalisz, Poland",
        description:
          "Contact ALAUDIS for a private consultation, model advice or an atelier visit. SAP Renovation, Obozowa 18, 62-800 Kalisz, Poland.",
      },
      de: {
        label: "Kontakt",
        title: "Kontakt – ALAUDIS, polnischer Flügelhersteller | Kalisz",
        description:
          "Kontaktieren Sie ALAUDIS: private Beratung, Modellauswahl und Besuch im Atelier. SAP Renovation, Obozowa 18, 62-800 Kalisz, Polen.",
      },
      fr: {
        label: "Contact",
        title: "Contact – ALAUDIS, facteur de pianos polonais | Kalisz",
        description:
          "Contactez ALAUDIS : consultation privée, choix du modèle et visite de l’atelier. SAP Renovation, Obozowa 18, 62-800 Kalisz, Pologne.",
      },
      es: {
        label: "Contacto",
        title: "Contacto – ALAUDIS, fabricante polaco de pianos de cola | Kalisz",
        description:
          "Póngase en contacto con ALAUDIS: asesoramiento privado, elección del modelo y visita al atelier. SAP Renovation, Obozowa 18, 62-800 Kalisz, Polonia.",
      },
      it: {
        label: "Contatti",
        title: "Contatti – ALAUDIS, costruttore polacco di pianoforti | Kalisz",
        description:
          "Contatta ALAUDIS per una consulenza privata, la scelta del modello e una visita all’atelier. SAP Renovation, Obozowa 18, 62-800 Kalisz, Polonia.",
      },
    },
  },
  odkryjModele: {
    path: "/odkryj-modele",
    copy: {
      pl: {
        label: "Odkryj modele",
        title: "Fortepiany ALAUDIS w 3D i AR – zobacz model we własnym wnętrzu",
        description:
          "Obejrzyj fortepian ALAUDIS w 3D, obróć go, przybliż i sprawdź w rozszerzonej rzeczywistości, jak wygląda w Twoim wnętrzu.",
      },
      en: {
        label: "Discover the models",
        title: "ALAUDIS Grand Pianos in 3D and AR – See It in Your Own Space",
        description:
          "Explore an ALAUDIS grand piano in 3D, rotate it, zoom in and use augmented reality to see how it looks in your own interior.",
      },
      de: {
        label: "Modelle entdecken",
        title: "ALAUDIS Flügel in 3D und AR – im eigenen Raum erleben",
        description:
          "Erleben Sie einen ALAUDIS Flügel in 3D, drehen und vergrößern Sie ihn und sehen Sie per Augmented Reality, wie er in Ihrem Raum wirkt.",
      },
      fr: {
        label: "Découvrir les modèles",
        title: "Pianos à queue ALAUDIS en 3D et RA – dans votre propre intérieur",
        description:
          "Découvrez un piano à queue ALAUDIS en 3D, faites-le pivoter, zoomez et voyez en réalité augmentée comment il s’intègre à votre intérieur.",
      },
      es: {
        label: "Descubra los modelos",
        title: "Pianos de cola ALAUDIS en 3D y RA – véalos en su propio espacio",
        description:
          "Contemple un piano de cola ALAUDIS en 3D, gírelo, amplíelo y compruebe en realidad aumentada cómo queda en su propio espacio.",
      },
      it: {
        label: "Scopri i modelli",
        title: "Pianoforti a coda ALAUDIS in 3D e AR – nel tuo ambiente",
        description:
          "Osserva un pianoforte a coda ALAUDIS in 3D, ruotalo, ingrandiscilo e scopri in realtà aumentata come si inserisce nel tuo ambiente.",
      },
    },
  },
  odwiedzAtelier: {
    path: "/odwiedz-atelier",
    copy: {
      pl: {
        label: "Odwiedź atelier",
        title: "Odwiedź atelier ALAUDIS w Kaliszu – manufaktura fortepianów",
        description:
          "Umów wizytę w atelier ALAUDIS w Kaliszu. Zobacz instrumenty z bliska, poznaj proces ich powstawania i porozmawiaj o własnym fortepianie.",
      },
      en: {
        label: "Visit the atelier",
        title: "Visit the ALAUDIS Atelier in Kalisz – Polish Piano Manufactory",
        description:
          "Arrange a visit to the ALAUDIS atelier in Kalisz, Poland. See the instruments up close, discover how they are made and talk about your own grand piano.",
      },
      de: {
        label: "Atelier besuchen",
        title: "Besuchen Sie das ALAUDIS Atelier in Kalisz – Flügelmanufaktur",
        description:
          "Vereinbaren Sie einen Besuch im ALAUDIS Atelier in Kalisz. Erleben Sie die Instrumente aus der Nähe, ihre Entstehung und sprechen Sie über Ihren eigenen Flügel.",
      },
      fr: {
        label: "Visiter l’atelier",
        title: "Visitez l’atelier ALAUDIS à Kalisz – manufacture de pianos",
        description:
          "Organisez une visite de l’atelier ALAUDIS à Kalisz. Découvrez les instruments de près, leur fabrication, et parlons de votre propre piano à queue.",
      },
      es: {
        label: "Visite el atelier",
        title: "Visite el atelier ALAUDIS en Kalisz – manufactura de pianos",
        description:
          "Concierte una visita al atelier ALAUDIS en Kalisz. Vea los instrumentos de cerca, conozca cómo se crean y hable con nosotros de su propio piano de cola.",
      },
      it: {
        label: "Visita l’atelier",
        title: "Visita l’atelier ALAUDIS a Kalisz – manifattura di pianoforti",
        description:
          "Prenota una visita all’atelier ALAUDIS di Kalisz. Osserva gli strumenti da vicino, scopri come nascono e parlaci del tuo pianoforte a coda.",
      },
    },
  },
  zwiedzanieManufaktury: {
    path: "/zwiedzanie-manufaktury",
    copy: {
      pl: {
        label: "Zwiedzanie manufaktury",
        title: "Zwiedzanie manufaktury ALAUDIS w Kaliszu – zgłoś udział",
        description:
          "Zobacz, jak powstają fortepiany ALAUDIS. Bezpłatne, ok. 4-godzinne oprowadzanie po manufakturze w Kaliszu – zgłoś chęć udziału indywidualnie lub w małej grupie.",
      },
      en: {
        label: "Manufactory tour",
        title: "ALAUDIS Manufactory Tour in Kalisz – Register Your Interest",
        description:
          "See how ALAUDIS grand pianos are made. Register for a free, approx. 4-hour guided tour of the manufactory in Kalisz, Poland – individually or in a small group.",
      },
      de: {
        label: "Manufakturführung",
        title: "Führung durch die ALAUDIS Manufaktur in Kalisz – jetzt anmelden",
        description:
          "Erleben Sie, wie ALAUDIS-Flügel entstehen. Melden Sie sich für eine kostenlose, ca. 4-stündige Führung durch die Manufaktur in Kalisz an – einzeln oder in einer kleinen Gruppe.",
      },
      fr: {
        label: "Visite de la manufacture",
        title: "Visite de la manufacture ALAUDIS à Kalisz – inscrivez-vous",
        description:
          "Découvrez comment naissent les pianos ALAUDIS. Inscrivez-vous à une visite guidée gratuite d’environ 4 heures de la manufacture à Kalisz – seul ou en petit groupe.",
      },
      es: {
        label: "Visita a la manufactura",
        title: "Visita a la manufactura ALAUDIS en Kalisz – envíe su solicitud",
        description:
          "Descubra cómo nacen los pianos de cola ALAUDIS. Visita guiada gratuita, de unas 4 horas, a la manufactura de Kalisz: solicítela de forma individual o en un grupo reducido.",
      },
      it: {
        label: "Visita alla manifattura",
        title: "Visita alla manifattura ALAUDIS di Kalisz – invia la richiesta",
        description:
          "Scopri come nascono i pianoforti a coda ALAUDIS. Visita guidata gratuita, di circa 4 ore, alla manifattura di Kalisz: richiedila da solo o in piccolo gruppo.",
      },
    },
  },
  dlaArchitektow: {
    path: "/dla-architektow",
    copy: {
      pl: {
        label: "Dla architektów",
        title: "Fortepian we wnętrzu – ALAUDIS dla architektów i projektantów",
        description:
          "Współpraca projektowa z ALAUDIS: fortepian dopasowany do wnętrza, indywidualne wykończenia, modele 3D i wsparcie dla architektów oraz projektantów wnętrz.",
      },
      en: {
        label: "For architects",
        title: "A Grand Piano in the Interior – ALAUDIS for Architects",
        description:
          "Design collaboration with ALAUDIS: a grand piano tailored to the interior, bespoke finishes, 3D models and support for architects and interior designers.",
      },
      de: {
        label: "Für Architekten",
        title: "Der Flügel im Raum – ALAUDIS für Architekten und Designer",
        description:
          "Projektzusammenarbeit mit ALAUDIS: ein Flügel passend zum Interieur, individuelle Oberflächen, 3D-Modelle und Unterstützung für Architekten und Innenarchitekten.",
      },
      fr: {
        label: "Pour les architectes",
        title: "Le piano à queue dans l’intérieur – ALAUDIS pour les architectes",
        description:
          "Collaboration de projet avec ALAUDIS : un piano à queue adapté à l’intérieur, finitions sur mesure, modèles 3D et accompagnement des architectes et décorateurs.",
      },
      es: {
        label: "Para arquitectos",
        title: "El piano de cola en el interior – ALAUDIS para arquitectos",
        description:
          "Colaboración en proyectos con ALAUDIS: un piano de cola adaptado al interior, acabados a medida, modelos 3D y apoyo para arquitectos e interioristas.",
      },
      it: {
        label: "Per gli architetti",
        title: "Il pianoforte a coda negli interni – ALAUDIS per gli architetti",
        description:
          "Collaborazione progettuale con ALAUDIS: un pianoforte a coda in armonia con l’ambiente, finiture personalizzate, modelli 3D e supporto per architetti e interior designer.",
      },
    },
  },
  aktualnosci: {
    path: "/aktualnosci",
    copy: {
      pl: {
        label: "Aktualności i prasa",
        title: "Aktualności i prasa – fortepian ALAUDIS | Premiery i koncerty",
        description:
          "Premiera fortepianu ALAUDIS ONE w Kaliszu, koncerty, wydarzenia i publikacje prasowe o nowym polskim fortepianie.",
      },
      en: {
        label: "News and press",
        title: "News and Press – ALAUDIS Grand Piano | Premieres and Concerts",
        description:
          "The premiere of the ALAUDIS ONE grand piano in Kalisz, concerts, events and press coverage of the new Polish grand piano.",
      },
      de: {
        label: "Aktuelles und Presse",
        title: "Aktuelles und Presse – ALAUDIS Flügel | Premieren und Konzerte",
        description:
          "Die Premiere des Flügels ALAUDIS ONE in Kalisz, Konzerte, Veranstaltungen und Pressestimmen zum neuen polnischen Flügel.",
      },
      fr: {
        label: "Actualités et presse",
        title: "Actualités et presse – piano ALAUDIS | Premières et concerts",
        description:
          "La première du piano à queue ALAUDIS ONE à Kalisz, les concerts, les événements et la presse sur le nouveau piano à queue polonais.",
      },
      es: {
        label: "Actualidad y prensa",
        title: "Actualidad y prensa – ALAUDIS | Presentaciones y conciertos",
        description:
          "La presentación del piano de cola ALAUDIS ONE en Kalisz, conciertos, eventos y artículos de prensa sobre el nuevo piano de cola polaco.",
      },
      it: {
        label: "Notizie e stampa",
        title: "Notizie e stampa – pianoforte ALAUDIS | Presentazioni e concerti",
        description:
          "La presentazione del pianoforte a coda ALAUDIS ONE a Kalisz, i concerti, gli eventi e gli articoli di stampa sul nuovo pianoforte a coda polacco.",
      },
    },
  },
  rzemioslo: {
    path: "/rzemioslo",
    copy: {
      pl: {
        label: "Rzemiosło",
        title: "Rzemiosło ALAUDIS – jak powstaje fortepian, filmy z manufaktury",
        description:
          "Zobacz na filmach, jak w kaliskiej manufakturze powstaje fortepian ALAUDIS: rama żeliwna, płyta rezonansowa, żebra, naciąg i wykończenie.",
      },
      en: {
        label: "Craft",
        title: "ALAUDIS Craftsmanship – How a Grand Piano Is Made, in Film",
        description:
          "Watch how an ALAUDIS grand piano is made in the Kalisz manufactory: the cast-iron frame, soundboard, ribs, stringing and finishing.",
      },
      de: {
        label: "Handwerk",
        title: "ALAUDIS Handwerk – wie ein Flügel entsteht, in Filmen",
        description:
          "Sehen Sie in Filmen, wie in der Manufaktur in Kalisz ein ALAUDIS-Flügel entsteht: Gussrahmen, Resonanzboden, Rippen, Besaitung und Oberfläche.",
      },
      fr: {
        label: "Savoir-faire",
        title: "Savoir-faire ALAUDIS – la naissance d’un piano à queue, en vidéo",
        description:
          "Découvrez en vidéo comment naît un piano ALAUDIS à la manufacture de Kalisz : cadre en fonte, table d’harmonie, barres, cordage et finition.",
      },
      es: {
        label: "Artesanía",
        title: "Artesanía ALAUDIS – cómo nace un piano de cola, en vídeo",
        description:
          "Vea en vídeo cómo nace un piano de cola ALAUDIS en la manufactura de Kalisz: bastidor de hierro fundido, tabla armónica, barras armónicas, encordado y acabado.",
      },
      it: {
        label: "Artigianato",
        title: "Artigianato ALAUDIS – come nasce un pianoforte a coda, in video",
        description:
          "Guarda nei video come nasce un pianoforte a coda ALAUDIS nella manifattura di Kalisz: telaio in ghisa, tavola armonica, catene, incordatura e finitura.",
      },
    },
  },
  artysci: {
    path: "/artysci",
    copy: {
      pl: {
        label: "Artyści",
        title: "Artyści przy fortepianie ALAUDIS – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, duet Per Quattro, Adam Makowicz: pianiści, którzy zagrali na polskim fortepianie ALAUDIS, oraz Peter Salisbury, autor jego intonacji.",
      },
      en: {
        label: "Artists",
        title: "Artists at the ALAUDIS Grand Piano – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, the Per Quattro duo, Adam Makowicz: the pianists who have played the Polish ALAUDIS grand piano, and Peter Salisbury, who voiced it.",
      },
      de: {
        label: "Künstler",
        title: "Künstler am ALAUDIS Flügel – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, das Duo Per Quattro, Adam Makowicz: Pianisten, die auf dem polnischen ALAUDIS Flügel gespielt haben, und Peter Salisbury, der ihn intonierte.",
      },
      fr: {
        label: "Artistes",
        title: "Les artistes au piano ALAUDIS – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, le duo Per Quattro, Adam Makowicz : les pianistes qui ont joué sur le piano à queue polonais ALAUDIS, et Peter Salisbury, qui l’a harmonisé.",
      },
      es: {
        label: "Artistas",
        title: "Artistas al piano de cola ALAUDIS – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, el dúo Per Quattro, Adam Makowicz: los pianistas que han tocado el piano de cola polaco ALAUDIS, y Peter Salisbury, autor de su entonación.",
      },
      it: {
        label: "Artisti",
        title: "Gli artisti al pianoforte ALAUDIS – Możdżer, Byrdy, Per Quattro",
        description:
          "Leszek Możdżer, Łukasz Byrdy, il duo Per Quattro, Adam Makowicz: i pianisti che hanno suonato il pianoforte polacco ALAUDIS, e Peter Salisbury, che lo ha intonato.",
      },
    },
  },
  tradycja: {
    path: "/tradycja",
    copy: {
      pl: {
        label: "Kaliska tradycja",
        title: "Kalisz, miasto fortepianów – od Fibigera i Calisii do ALAUDIS",
        description:
          "Historia budowy fortepianów w Kaliszu: pracownia Arnolda Fibigera z 1873 roku, fabryka Calisia i ALAUDIS, pierwszy od lat fortepian skonstruowany i wykonany w Kaliszu.",
      },
      en: {
        label: "Kalisz heritage",
        title: "Kalisz, a City of Pianos – from Fibiger and Calisia to ALAUDIS",
        description:
          "The history of piano making in Kalisz, Poland: Arnold Fibiger’s workshop of 1873, the Calisia factory and ALAUDIS, the first grand piano designed and built in Kalisz in years.",
      },
      de: {
        label: "Kalischer Tradition",
        title: "Kalisz, Stadt der Flügel – von Fibiger und Calisia zu ALAUDIS",
        description:
          "Die Geschichte des Klavierbaus in Kalisz: Arnold Fibigers Werkstatt von 1873, die Fabrik Calisia und ALAUDIS, der erste seit Jahren in Kalisz konstruierte und gebaute Flügel.",
      },
      fr: {
        label: "Tradition de Kalisz",
        title: "Kalisz, ville des pianos – de Fibiger et Calisia à ALAUDIS",
        description:
          "L’histoire de la facture de pianos à Kalisz : l’atelier d’Arnold Fibiger de 1873, la fabrique Calisia et ALAUDIS, premier piano à queue conçu et construit à Kalisz depuis des années.",
      },
      es: {
        label: "Tradición de Kalisz",
        title: "Kalisz, ciudad de pianos – de Fibiger y Calisia a ALAUDIS",
        description:
          "La historia de la construcción de pianos en Kalisz: el taller de Arnold Fibiger (1873), la fábrica Calisia y ALAUDIS, el primer piano de cola diseñado y construido en Kalisz en años.",
      },
      it: {
        label: "La tradizione di Kalisz",
        title: "Kalisz, città dei pianoforti – da Fibiger e Calisia ad ALAUDIS",
        description:
          "La costruzione di pianoforti a Kalisz: il laboratorio di Arnold Fibiger (1873), la fabbrica Calisia e ALAUDIS, primo pianoforte a coda progettato e costruito in città dopo anni.",
      },
    },
  },
  politykaPrywatnosci: {
    path: "/polityka-prywatnosci",
    copy: {
      pl: {
        label: "Polityka prywatności",
        title: "Polityka prywatności – ALAUDIS",
        description:
          "Jak ALAUDIS (SAP Renovation Sp. z o.o.) przetwarza dane osobowe: kontakt, zgłoszenia na zwiedzanie manufaktury, pliki cookies, statystyki i Twoje prawa.",
      },
      en: {
        label: "Privacy policy",
        title: "Privacy Policy – ALAUDIS",
        description:
          "How ALAUDIS (SAP Renovation Sp. z o.o.) processes personal data: contact, manufactory tour applications, cookies, statistics and your rights.",
      },
      de: {
        label: "Datenschutz",
        title: "Datenschutzerklärung – ALAUDIS",
        description:
          "Wie ALAUDIS (SAP Renovation Sp. z o.o.) personenbezogene Daten verarbeitet: Kontakt, Anmeldungen zur Manufakturführung, Cookies, Statistik und Ihre Rechte.",
      },
      fr: {
        label: "Politique de confidentialité",
        title: "Politique de confidentialité – ALAUDIS",
        description:
          "Comment ALAUDIS (SAP Renovation Sp. z o.o.) traite les données personnelles : contact, inscriptions à la visite de la manufacture, cookies, statistiques et vos droits.",
      },
      es: {
        label: "Política de privacidad",
        title: "Política de privacidad – ALAUDIS",
        description:
          "Cómo trata ALAUDIS (SAP Renovation Sp. z o.o.) los datos personales: contacto, solicitudes de visita a la manufactura, cookies, estadísticas y sus derechos.",
      },
      it: {
        label: "Informativa sulla privacy",
        title: "Informativa sulla privacy – ALAUDIS",
        description:
          "Come ALAUDIS (SAP Renovation Sp. z o.o.) tratta i dati personali: contatti, richieste di visita alla manifattura, cookie, statistiche e diritti degli interessati.",
      },
    },
  },
} satisfies Record<string, PageDefinition>;

export type SeoPage = keyof typeof PAGES;
export const seoPages = Object.keys(PAGES) as SeoPage[];

// ----------------------------------------------------------
// ADRESY
// ----------------------------------------------------------
export function localePrefix(locale: SeoLocale) {
  return locale === "pl" ? "" : `/${locale}`;
}

export function pageUrl(locale: SeoLocale, page: SeoPage) {
  return `${SITE_URL}${localePrefix(locale)}${PAGES[page].path}`;
}

// Every page with its address and texts — used by the site menu and the search box.
export function sitePages(locale: SeoLocale) {
  return seoPages.map((page) => ({
    page,
    href: `${localePrefix(locale)}${PAGES[page].path}` || "/",
    ...PAGES[page].copy[locale],
  }));
}

export function pageLabel(locale: SeoLocale, page: SeoPage) {
  return PAGES[page].copy[locale].label;
}

// hreflang: sześć języków + x-default (wersja angielska dla reszty świata).
export function languageAlternates(urlFor: (locale: SeoLocale) => string) {
  return {
    ...Object.fromEntries(seoLocales.map((locale) => [locale, urlFor(locale)])),
    "x-default": urlFor("en"),
  };
}

// ----------------------------------------------------------
// METADANE
// ----------------------------------------------------------
export function rootMetadata(locale: SeoLocale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: PAGES.home.copy[locale].title,
    description: PAGES.home.copy[locale].description,
    robots: { index: isIndexable, follow: isIndexable },
    icons: {
      // Small files on purpose: the icon is fetched on every page.
      icon: [
        { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/apple-touch-icon-alaudis-transparent-v4.png",
    },
  };
}

export function pageMetadata(locale: SeoLocale, page: SeoPage): Metadata {
  const { title, description } = PAGES[page].copy[locale];
  const url = pageUrl(locale, page);
  const image = { url: OG_IMAGE, width: 1200, height: 630, alt: title };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates((language) => pageUrl(language, page)),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: OG_LOCALE[locale],
      alternateLocale: seoLocales
        .filter((language) => language !== locale)
        .map((language) => OG_LOCALE[language]),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

// ----------------------------------------------------------
// DANE STRUKTURALNE (schema.org)
// ----------------------------------------------------------
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const ORGANIZATION_DESCRIPTION: Record<SeoLocale, string> = {
  pl: "ALAUDIS to polski producent fortepianów. Instrumenty powstają ręcznie w manufakturze SAP Renovation w Kaliszu.",
  en: "ALAUDIS is a Polish grand piano maker. The instruments are built by hand in the SAP Renovation manufactory in Kalisz, Poland.",
  de: "ALAUDIS ist ein polnischer Flügelhersteller. Die Instrumente entstehen in Handarbeit in der Manufaktur von SAP Renovation in Kalisz.",
  fr: "ALAUDIS est un facteur de pianos à queue polonais. Les instruments sont fabriqués à la main dans la manufacture SAP Renovation à Kalisz.",
  es: "ALAUDIS es un fabricante polaco de pianos de cola. Los instrumentos se construyen a mano en la manufactura de SAP Renovation en Kalisz.",
  it: "ALAUDIS è un costruttore polacco di pianoforti a coda. Gli strumenti nascono a mano nella manifattura di SAP Renovation a Kalisz.",
};

function organizationSchema(locale: SeoLocale) {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: ["Alaudis", "SAP Alaudis", "Alaudis Pianos"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-alaudis.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    description: ORGANIZATION_DESCRIPTION[locale],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Obozowa 18",
      postalCode: "62-800",
      addressLocality: "Kalisz",
      addressCountry: "PL",
    },
    telephone: "+48625013030",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+48625013030",
        email: "info@saprenovation.com",
        contactType: "customer service",
        availableLanguage: ["pl", "en", "de", "fr"],
        hoursAvailable: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
      },
      {
        "@type": "ContactPoint",
        telephone: "+48668216442",
        contactType: "sales",
        availableLanguage: ["pl", "en", "de", "fr"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+48606384105",
        contactType: "sales",
        availableLanguage: ["pl", "en", "de", "fr"],
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "SAP Renovation",
      legalName: "SAP Renovation Sp. z o.o.",
      taxID: "6181893417",
      url: "https://saprenovation.com",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61579105662197", "https://www.instagram.com/alaudis_piano_factory/"],
  };
}

export function pageSchema(locale: SeoLocale, page: SeoPage) {
  const home = PAGES.home.copy[locale];
  const graph: Record<string, unknown>[] = [];

  if (page === "home" || page === "kontakt" || page === "odwiedzAtelier" || page === "zwiedzanieManufaktury") {
    graph.push(organizationSchema(locale));
  }

  if (page === "home") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: pageUrl(locale, "home"),
      inLanguage: locale,
      description: home.description,
      publisher: { "@id": ORGANIZATION_ID },
    });
  } else {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: home.label,
          item: pageUrl(locale, "home"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: PAGES[page].copy[locale].label,
          item: pageUrl(locale, page),
        },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
