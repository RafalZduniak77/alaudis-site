import type { AlaudisModelId } from "./alaudisModels";

export type StoryLanguage = "PL" | "EN" | "DE" | "FR";

type BrandStory = {
  collectionId: string;
  collectionLabel: string;
  storyLabel: string;
  title: [string, string, string];
  origin: string;
  nameMeaning: string;
  symbolism: string;
  family: string;
  models: Record<AlaudisModelId, { label: string; story: string }>;
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
    collectionLabel: "Rodzina fortepianów ALAUDIS",
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
        label: "Pierwszy skowronek",
        story:
          "Początek naszej muzycznej opowieści. Pierwszy własny głos, któremu nadaliśmy życie.",
      },
      "214": {
        label: "Drugi skowronek",
        story:
          "Kolejny krok w rozwoju naszej myśli konstruktorskiej, wyraz odwagi w poszukiwaniu własnej drogi.",
      },
      "275": {
        label: "Trzeci skowronek",
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
    readStory: "Poznaj historię trzech skowronków",
  },
  EN: {
    collectionId: "models",
    collectionLabel: "The ALAUDIS grand piano family",
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
        label: "The first lark",
        story:
          "The beginning of our musical story. The first voice of our own that we brought to life.",
      },
      "214": {
        label: "The second lark",
        story:
          "The next step in the evolution of our piano design, an expression of the courage to find our own way.",
      },
      "275": {
        label: "The third lark",
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
    readStory: "Discover the story of the three larks",
  },
  DE: {
    collectionId: "modelle",
    collectionLabel: "Die ALAUDIS Flügelfamilie",
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
        label: "Die erste Lerche",
        story:
          "Der Beginn unserer musikalischen Geschichte. Die erste eigene Stimme, die wir zum Leben erweckt haben.",
      },
      "214": {
        label: "Die zweite Lerche",
        story:
          "Der nächste Schritt in der Entwicklung unserer Konstruktionskunst, Ausdruck des Mutes, einen eigenen Weg zu gehen.",
      },
      "275": {
        label: "Die dritte Lerche",
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
    readStory: "Die Geschichte der drei Lerchen entdecken",
  },
  FR: {
    collectionId: "modeles",
    collectionLabel: "La famille de pianos à queue ALAUDIS",
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
        label: "La première alouette",
        story:
          "Le début de notre histoire musicale. La première voix qui nous est propre et à laquelle nous avons donné vie.",
      },
      "214": {
        label: "La deuxième alouette",
        story:
          "Une nouvelle étape dans l’évolution de notre conception du piano, l’expression de l’audace de tracer notre propre voie.",
      },
      "275": {
        label: "La troisième alouette",
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
    readStory: "Découvrir l’histoire des trois alouettes",
  },
};

export function getStoryLanguagePrefix(language: StoryLanguage) {
  return language === "PL" ? "" : `/${language.toLowerCase()}`;
}
