// ==========================================================
// SEO - ALAUDIS
// ==========================================================
// Jedno miejsce na tytuły, opisy, adresy kanoniczne, hreflang
// i dane strukturalne wszystkich podstron w PL / EN / DE / FR.
// Aby zmienić tekst widoczny w Google, wystarczy edytować
// obiekt PAGES poniżej.
// ==========================================================

import type { Metadata } from "next";

export const SITE_URL = "https://alaudis.eu";
export const SITE_NAME = "ALAUDIS";
export const OG_IMAGE = "/og-alaudis.jpg";

export const seoLocales = ["pl", "en", "de", "fr"] as const;
export type SeoLocale = (typeof seoLocales)[number];

// Tylko produkcja (alaudis.eu) może być indeksowana.
// Podglądy Vercel i środowisko lokalne dostają noindex.
export const isIndexable = process.env.VERCEL_ENV === "production";

const OG_LOCALE: Record<SeoLocale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
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

export function pageLabel(locale: SeoLocale, page: SeoPage) {
  return PAGES[page].copy[locale].label;
}

// hreflang: cztery języki + x-default (wersja angielska dla reszty świata).
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
      icon: [
        {
          url: "/favicon-alaudis-transparent-v4.png",
          sizes: "1024x1024",
          type: "image/png",
        },
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
    contactPoint: [
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
      url: "https://saprenovation.com",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61579105662197"],
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
