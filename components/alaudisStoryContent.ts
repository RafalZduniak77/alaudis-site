import type { AlaudisModelId } from "./alaudisModels";

export type StoryLanguage = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

type BrandStory = {
  collectionId: string;
  collectionLabel: string;
  collectionTitle: [string, string];
  collectionIntro: string;
  storyLabel: string;
  title: [string, string, string];
  origin: string;
  nameMeaning: string;
  symbolism: string;
  family: string;
  models: Record<AlaudisModelId, { description: string; story: string }>;
  familyLine: string;
  ownVoice: [string, string];
  philosophy: string;
  value: string;
  closing: string;
  discover: string;
  readStory: string;
};

export const alaudisStoryContent: Record<StoryLanguage, BrandStory> = {
  PL: {
    collectionId: "modele",
    collectionLabel: "Kolekcja Alaudis",
    collectionTitle: ["Trzy skale obecności.", "Jedna filozofia rzemiosła."],
    collectionIntro:
      "Każdy model Alaudis powstaje jako osobna interpretacja proporcji, charakteru i brzmienia, od wyrafinowanej obecności salonowej po pełną skalę fortepianu koncertowego.",
    storyLabel: "Dusza naszej marki",
    title: ["Trzy skowronki.", "Trzy głosy.", "Jedna dusza."],
    origin:
      "W języku łacińskim alauda oznacza skowronka, ptaka, którego śpiew od wieków jest symbolem piękna, wolności i harmonii z naturą.",
    nameMeaning: "ALAUDIS jest jedną z form liczby mnogiej tego słowa.",
    symbolism:
      "I właśnie w tej liczbie mnogiej kryje się piękna symbolika naszej marki.",
    family:
      "Nasza rodzina fortepianów to trzy skowronki. Każdy inny, każdy z własnym charakterem, lecz wszystkie zrodzone z tej samej pasji do muzyki i doskonałości rzemiosła.",
    models: {
      "178": {
        description:
          "Liryczna interpretacja fortepianu klasy premium, elegancka, wyważona i stworzona do wnętrz, w których detal ma taką samą wagę jak dźwięk.",
        story:
          "Początek naszej muzycznej opowieści. Pierwszy własny głos, któremu nadaliśmy życie.",
      },
      "214": {
        description:
          "Fortepian o głębszej obecności i szerszej projekcji, dla przestrzeni, które wymagają większej skali, wyrazistości i koncertowego charakteru.",
        story:
          "Kolejny krok w rozwoju naszej myśli konstruktorskiej, wyraz odwagi w poszukiwaniu własnej drogi.",
      },
      "275": {
        description:
          "Największa forma koncertowa Alaudis, pełna skala brzmienia, projekcja i sceniczna obecność zaprojektowana dla najbardziej wymagających przestrzeni.",
        story:
          "Nasze największe marzenie, fortepian koncertowy tworzony z myślą o wielkich estradach świata.",
      },
    },
    familyLine: "Trzy instrumenty. Trzy osobowości. Jedna rodzina.",
    ownVoice: [
      "Skowronek nie naśladuje innych ptaków.",
      "Śpiewa własnym głosem.",
    ],
    philosophy:
      "Tak samo my nie pragniemy tworzyć kopii istniejących fortepianów. Chcemy, aby ALAUDIS miał własną tożsamość, własny charakter i własne miejsce w świecie muzyki.",
    value:
      "Bo największą wartością instrumentu jest nie tylko doskonałość jego wykonania, lecz również to, co potrafi przekazać człowiekowi poprzez muzykę.",
    closing: "Trzy skowronki. Jeden wspólny głos rzemiosła i pasji.",
    discover: "Odkryj model",
    readStory: "Poznaj historię marki",
  },
  EN: {
    collectionId: "models",
    collectionLabel: "Alaudis Collection",
    collectionTitle: ["Three scales of presence.", "One philosophy of craftsmanship."],
    collectionIntro:
      "Each Alaudis model is created as a distinct interpretation of proportion, character and sound, from refined living-space presence to the full scale of a concert grand piano.",
    storyLabel: "The soul of our brand",
    title: ["Three larks.", "Three voices.", "One soul."],
    origin:
      "In Latin, alauda means lark, a bird whose song has long been a symbol of beauty, freedom and harmony with nature.",
    nameMeaning: "ALAUDIS is one of the plural forms of this word.",
    symbolism:
      "It is in this plural form that the beautiful symbolism of our brand lies.",
    family:
      "Our family of grand pianos is a trio of larks. Each is different, each has its own character, yet all are born of the same passion for music and excellence in craftsmanship.",
    models: {
      "178": {
        description:
          "A lyrical interpretation of the premium grand piano, elegant, balanced, and created for interiors where detail matters as much as sound.",
        story:
          "The beginning of our musical story. The first voice of our own that we brought to life.",
      },
      "214": {
        description:
          "A grand piano with deeper presence and broader projection, for spaces that call for greater scale, clarity and a more concert character.",
        story:
          "The next step in the evolution of our piano design, an expression of the courage to find our own way.",
      },
      "275": {
        description:
          "The largest Alaudis concert form, full scale of sound, projection, and stage presence designed for the most demanding spaces.",
        story:
          "Our greatest dream: a concert grand piano created for the world’s great stages.",
      },
    },
    familyLine: "Three instruments. Three personalities. One family.",
    ownVoice: [
      "The lark does not imitate other birds.",
      "It sings with its own voice.",
    ],
    philosophy:
      "In the same spirit, we do not aspire to make copies of existing grand pianos. We want ALAUDIS to have its own identity, its own character and its own place in the world of music.",
    value:
      "For an instrument’s greatest value lies not only in the excellence of its craftsmanship, but also in what it can convey to people through music.",
    closing: "Three larks. One shared voice of craftsmanship and passion.",
    discover: "Discover the model",
    readStory: "Discover our story",
  },
  DE: {
    collectionId: "modelle",
    collectionLabel: "Alaudis Kollektion",
    collectionTitle: ["Drei Größen der Präsenz.", "Eine Philosophie des Handwerks."],
    collectionIntro:
      "Jedes Alaudis-Modell entsteht als eigene Interpretation von Proportion, Charakter und Klang, von kultivierter Wohnraumpräsenz bis zur vollen Größe eines Konzertflügels.",
    storyLabel: "Die Seele unserer Marke",
    title: ["Drei Lerchen.", "Drei Stimmen.", "Eine Seele."],
    origin:
      "Im Lateinischen bedeutet alauda Lerche: ein Vogel, dessen Gesang seit Jahrhunderten für Schönheit, Freiheit und Harmonie mit der Natur steht.",
    nameMeaning: "ALAUDIS ist eine der Pluralformen dieses Wortes.",
    symbolism:
      "Gerade in dieser Mehrzahl liegt die besondere Symbolik unserer Marke.",
    family:
      "Unsere Flügelfamilie besteht aus drei Lerchen. Jede ist anders, jede hat ihren eigenen Charakter. Doch alle entspringen derselben Leidenschaft für Musik und handwerkliche Vollendung.",
    models: {
      "178": {
        description:
          "Eine lyrische Interpretation des Premium-Flügels, elegant, ausgewogen und geschaffen für Interieurs, in denen Detail und Klang die gleiche Bedeutung haben.",
        story:
          "Der Beginn unserer musikalischen Geschichte. Die erste eigene Stimme, die wir zum Leben erweckt haben.",
      },
      "214": {
        description:
          "Ein Flügel mit stärkerer Präsenz und breiterer Projektion, für Räume, die mehr Größe, Klarheit und einen konzertanteren Charakter verlangen.",
        story:
          "Der nächste Schritt in der Entwicklung unserer Konstruktionskunst, Ausdruck des Mutes, einen eigenen Weg zu gehen.",
      },
      "275": {
        description:
          "Die größte Konzertform von Alaudis, volle Klangskala, Projektion und Bühnenpräsenz, entworfen für die anspruchsvollsten Räume.",
        story:
          "Unser größter Traum: ein Konzertflügel, geschaffen für die großen Bühnen der Welt.",
      },
    },
    familyLine: "Drei Instrumente. Drei Persönlichkeiten. Eine Familie.",
    ownVoice: [
      "Die Lerche ahmt keine anderen Vögel nach.",
      "Sie singt mit ihrer eigenen Stimme.",
    ],
    philosophy:
      "Ebenso wenig möchten wir Kopien bestehender Flügel bauen. Wir möchten, dass ALAUDIS eine eigene Identität, einen eigenen Charakter und einen eigenen Platz in der Welt der Musik hat.",
    value:
      "Denn der größte Wert eines Instruments liegt nicht allein in seiner handwerklichen Vollendung, sondern auch in dem, was es dem Menschen durch Musik vermitteln kann.",
    closing: "Drei Lerchen. Eine gemeinsame Stimme für Handwerk und Leidenschaft.",
    discover: "Modell entdecken",
    readStory: "Die Geschichte unserer Marke",
  },
  FR: {
    collectionId: "modeles",
    collectionLabel: "Collection Alaudis",
    collectionTitle: ["Trois échelles de présence.", "Une seule philosophie de l’artisanat."],
    collectionIntro:
      "Chaque modèle Alaudis est conçu comme une interprétation singulière de la proportion, du caractère et du son, d’une présence raffinée dans un intérieur à l’échelle complète d’un piano de concert.",
    storyLabel: "L’âme de notre marque",
    title: ["Trois alouettes.", "Trois voix.", "Une seule âme."],
    origin:
      "En latin, alauda signifie alouette, un oiseau dont le chant symbolise depuis des siècles la beauté, la liberté et l’harmonie avec la nature.",
    nameMeaning: "ALAUDIS est l’une des formes plurielles de ce mot.",
    symbolism:
      "C’est précisément dans ce pluriel que réside toute la symbolique de notre marque.",
    family:
      "Notre famille de pianos à queue réunit trois alouettes. Chacune est différente, chacune possède son propre caractère, mais toutes sont nées de la même passion pour la musique et de la quête d’excellence artisanale.",
    models: {
      "178": {
        description:
          "Une interprétation lyrique du piano premium, élégante, équilibrée et pensée pour les intérieurs où le détail compte autant que le son.",
        story:
          "Le début de notre histoire musicale. La première voix qui nous est propre et à laquelle nous avons donné vie.",
      },
      "214": {
        description:
          "Un piano à queue à la présence plus profonde et à la projection plus large, pour les espaces qui demandent plus d’ampleur, de clarté et un caractère plus concertant.",
        story:
          "Une nouvelle étape dans l’évolution de notre conception du piano, l’expression de l’audace de tracer notre propre voie.",
      },
      "275": {
        description:
          "La plus grande forme de concert Alaudis, pleine échelle sonore, projection et présence scénique conçues pour les espaces les plus exigeants.",
        story:
          "Notre plus grand rêve : un piano à queue de concert créé pour les grandes scènes du monde.",
      },
    },
    familyLine: "Trois instruments. Trois personnalités. Une seule famille.",
    ownVoice: [
      "L’alouette n’imite pas les autres oiseaux.",
      "Elle chante de sa propre voix.",
    ],
    philosophy:
      "De la même manière, nous ne souhaitons pas créer des copies de pianos existants. Nous voulons qu’ALAUDIS ait sa propre identité, son propre caractère et sa propre place dans le monde de la musique.",
    value:
      "Car la plus grande valeur d’un instrument réside non seulement dans l’excellence de sa fabrication, mais aussi dans ce qu’il peut transmettre à chacun à travers la musique.",
    closing: "Trois alouettes. Une même voix, celle de l’artisanat et de la passion.",
    discover: "Découvrir le modèle",
    readStory: "Découvrir notre histoire",
  },
  ES: {
    collectionId: "modelos",
    collectionLabel: "Colección Alaudis",
    collectionTitle: ["Tres escalas de presencia.", "Una sola filosofía artesanal."],
    collectionIntro:
      "Cada modelo Alaudis nace como una interpretación propia de la proporción, el carácter y el sonido, desde la presencia refinada de un salón hasta la plena escala de un piano de cola de concierto.",
    storyLabel: "El alma de nuestra marca",
    title: ["Tres alondras.", "Tres voces.", "Una sola alma."],
    origin:
      "En latín, alauda significa alondra, un ave cuyo canto simboliza desde hace siglos la belleza, la libertad y la armonía con la naturaleza.",
    nameMeaning: "ALAUDIS es una de las formas del plural de esta palabra.",
    symbolism:
      "Y es precisamente en ese plural donde reside el hermoso simbolismo de nuestra marca.",
    family:
      "Nuestra familia de pianos de cola son tres alondras. Cada una distinta, cada una con su propio carácter, pero todas nacidas de la misma pasión por la música y por la excelencia artesanal.",
    models: {
      "178": {
        description:
          "Una interpretación lírica del piano de cola de alta gama, elegante, equilibrada y concebida para interiores en los que el detalle importa tanto como el sonido.",
        story:
          "El comienzo de nuestro relato musical. La primera voz propia a la que dimos vida.",
      },
      "214": {
        description:
          "Un piano de cola de presencia más profunda y proyección más amplia, para espacios que requieren mayor escala, mayor nitidez y un carácter de concierto.",
        story:
          "Un paso más en la evolución de nuestra concepción constructiva, expresión de la valentía de buscar un camino propio.",
      },
      "275": {
        description:
          "La máxima expresión de concierto de Alaudis: plena escala sonora, proyección y presencia escénica concebidas para los espacios más exigentes.",
        story:
          "Nuestro mayor sueño: un piano de cola de concierto creado pensando en los grandes escenarios del mundo.",
      },
    },
    familyLine: "Tres instrumentos. Tres personalidades. Una sola familia.",
    ownVoice: [
      "La alondra no imita a otras aves.",
      "Canta con su propia voz.",
    ],
    philosophy:
      "Del mismo modo, nosotros no aspiramos a crear copias de pianos de cola ya existentes. Queremos que ALAUDIS tenga su propia identidad, su propio carácter y su propio lugar en el mundo de la música.",
    value:
      "Porque el mayor valor de un instrumento no reside solo en la perfección de su factura, sino también en lo que es capaz de transmitir al ser humano a través de la música.",
    closing: "Tres alondras. Una sola voz común, la del oficio y la pasión.",
    discover: "Descubra el modelo",
    readStory: "Conozca la historia de la marca",
  },
  IT: {
    collectionId: "modelli",
    collectionLabel: "Collezione Alaudis",
    collectionTitle: ["Tre dimensioni della presenza.", "Un’unica filosofia artigianale."],
    collectionIntro:
      "Ogni modello Alaudis nasce come un’interpretazione a sé di proporzione, carattere e suono, dalla raffinata presenza da salotto alla piena dimensione di un pianoforte a coda da concerto.",
    storyLabel: "L’anima del nostro marchio",
    title: ["Tre allodole.", "Tre voci.", "Un’unica anima."],
    origin:
      "In latino alauda significa allodola, un uccello il cui canto è da secoli simbolo di bellezza, libertà e armonia con la natura.",
    nameMeaning: "ALAUDIS è una delle forme plurali di questa parola.",
    symbolism:
      "Ed è proprio in questo plurale che si cela la bella simbologia del nostro marchio.",
    family:
      "La nostra famiglia di pianoforti a coda è composta da tre allodole. Ognuna diversa, ognuna con il proprio carattere, ma tutte nate dalla stessa passione per la musica e per l’eccellenza artigianale.",
    models: {
      "178": {
        description:
          "Un’interpretazione lirica del pianoforte a coda di alta gamma, elegante, equilibrata e pensata per interni in cui il dettaglio conta quanto il suono.",
        story:
          "L’inizio del nostro racconto musicale. La prima voce davvero nostra, a cui abbiamo dato vita.",
      },
      "214": {
        description:
          "Un pianoforte a coda dalla presenza più profonda e dalla proiezione più ampia, per spazi che richiedono maggiore ampiezza, maggiore incisività e un carattere da concerto.",
        story:
          "Un passo ulteriore nell’evoluzione del nostro pensiero costruttivo, espressione del coraggio di cercare una strada propria.",
      },
      "275": {
        description:
          "La massima espressione concertistica di Alaudis: piena ampiezza del suono, proiezione e presenza scenica concepite per gli spazi più esigenti.",
        story:
          "Il nostro sogno più grande: un pianoforte a coda da concerto creato pensando ai grandi palcoscenici del mondo.",
      },
    },
    familyLine: "Tre strumenti. Tre personalità. Un’unica famiglia.",
    ownVoice: [
      "L’allodola non imita gli altri uccelli.",
      "Canta con la propria voce.",
    ],
    philosophy:
      "Allo stesso modo, noi non desideriamo creare copie di pianoforti a coda già esistenti. Vogliamo che ALAUDIS abbia una propria identità, un proprio carattere e un proprio posto nel mondo della musica.",
    value:
      "Perché il valore più grande di uno strumento non sta soltanto nella perfezione della sua fattura, ma anche in ciò che sa trasmettere all’uomo attraverso la musica.",
    closing: "Tre allodole. Un’unica voce comune, quella dell’artigianato e della passione.",
    discover: "Scopri il modello",
    readStory: "Scopri la storia del marchio",
  },
};

export function getStoryLanguagePrefix(language: StoryLanguage) {
  return language === "PL" ? "" : `/${language.toLowerCase()}`;
}
