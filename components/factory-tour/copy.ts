// ==========================================================
// ZWIEDZANIE MANUFAKTURY — TEKSTY PL / EN / DE / FR
// ==========================================================

export type TourLanguage = "PL" | "EN" | "DE" | "FR";

// Zgłoszenia na zwiedzanie trafiają do Rafała Zduniaka.
export const TOUR_EMAIL = "rafal.zduniak@alaudis.eu";

export const TOUR_STAGES = [
  { image: "/historia/2 Drewno gra.jpg", key: "wood" },
  { image: "/historia/6 Dno rezonansowe.jpg", key: "soundboard" },
  { image: "/historia/5 Wykończenie.jpg", key: "finish" },
  { image: "/historia/12 Ostateczna regulacja intonacja .jpg", key: "voicing" },
] as const;

type Stage = { title: string; text: string };

type Copy = {
  home: string;
  atelier: string;
  hero: { eyebrow: string; title: string; text: string; cta: string };
  stagesEyebrow: string;
  stagesTitle: string;
  stages: Record<(typeof TOUR_STAGES)[number]["key"], Stage>;
  infoEyebrow: string;
  infoTitle: string;
  info: { title: string; text: string }[];
  /** Ramki pod krokami: co, ile trwa i dla kogo (dawny tekst spod zdjęcia). */
  highlights: { title: string; text: string }[];
  formEyebrow: string;
  formTitle: string;
  formText: string;
  address: string;
  facts: { label: string; value: string }[];
  form: {
    name: string; email: string; phone: string; people: string; peopleOptions: string[];
    tourLanguage: string; languageOptions: string[]; date: string; altDate: string;
    message: string; messagePlaceholder: string; consent: string; required: string; choose: string;
    submit: string; subject: string; sentEyebrow: string; sentTitle: string; sentText: string; back: string;
    sending: string; doneEyebrow: string; doneTitle: string; doneText: string; error: string;
  };
};

export const tourCopy: Record<TourLanguage, Copy> = {
  PL: {
    home: "/", atelier: "/odwiedz-atelier",
    hero: {
      eyebrow: "Manufaktura ALAUDIS · Kalisz",
      title: "Zwiedzanie manufaktury",
      text: "Zobacz, jak powstaje fortepian ALAUDIS — od drewna i dna rezonansowego, przez wykończenie, aż po ostatnią regulację i intonację. Bezpłatne oprowadzanie trwa około 4 godzin — indywidualnie lub w małych grupach, po wcześniejszym zgłoszeniu.",
      cta: "Zgłoś chęć udziału",
    },
    stagesEyebrow: "Trasa zwiedzania", stagesTitle: "Co zobaczysz w manufakturze",
    stages: {
      wood: { title: "Drewno", text: "Dobór i przygotowanie drewna, z którego powstaje korpus i elementy rezonansowe instrumentu." },
      soundboard: { title: "Dno rezonansowe", text: "Serce brzmienia: dno rezonansowe, mostki i naciąg strun — miejsce, w którym rodzi się charakter dźwięku." },
      finish: { title: "Wykończenie", text: "Lakierowanie, szlifowanie i polerowanie — specjalność SAP Renovation, doskonalona przy 14 000 instrumentów." },
      voicing: { title: "Regulacja i intonacja", text: "Ostatni etap: precyzyjne ustawienie mechaniki i brzmienia, zanim fortepian trafi do właściciela." },
    },
    infoEyebrow: "Jak to działa", infoTitle: "Od zgłoszenia do wizyty",
    info: [
      { title: "Zgłoszenie", text: "Wypełnij formularz i podaj preferowany termin oraz liczbę osób." },
      { title: "Potwierdzenie", text: "Skontaktujemy się z Tobą, aby uzgodnić dokładny dzień i godzinę oprowadzania." },
      { title: "Wizyta", text: "Oprowadzanie po manufakturze z naszym zespołem, zakończone możliwością zagrania na fortepianie ALAUDIS." },
    ],
    formEyebrow: "Formularz zgłoszenia", formTitle: "Zgłoś chęć udziału w zwiedzaniu",
    formText: "Wyślij zgłoszenie — odpowiemy i potwierdzimy termin. Zgłoszenie nie jest jeszcze rezerwacją.",
    address: "Obozowa 18, 62-800 Kalisz",
    highlights: [
      { title: "Od drewna po intonację", text: "Zobacz, jak powstaje fortepian ALAUDIS — od drewna i dna rezonansowego, przez wykończenie, aż po ostatnią regulację i intonację." },
      { title: "Bezpłatnie, około 4 godzin", text: "Oprowadzanie po manufakturze jest bezpłatne i trwa około 4 godzin." },
      { title: "Indywidualnie lub w małej grupie", text: "Zwiedzanie odbywa się indywidualnie lub w małych grupach, po wcześniejszym zgłoszeniu." },
    ],
    facts: [{ label: "Czas zwiedzania", value: "ok. 4 godziny" }, { label: "Udział", value: "bezpłatny" }],
    form: {
      name: "Imię i nazwisko", email: "E-mail", phone: "Telefon", people: "Liczba osób",
      peopleOptions: ["1", "2", "3–5", "6–10", "Grupa powyżej 10 osób"],
      tourLanguage: "Język oprowadzania", languageOptions: ["Polski", "Angielski", "Niemiecki"],
      date: "Preferowany termin", altDate: "Termin alternatywny",
      message: "Wiadomość", messagePlaceholder: "Np. grupa szkolna, zainteresowanie konkretnym modelem, potrzeby dostępności…",
      consent: "Wyrażam zgodę na kontakt ze strony ALAUDIS / SAP Renovation w sprawie mojego zgłoszenia na zwiedzanie.",
      required: "* pola wymagane", choose: "Wybierz…",
      submit: "Wyślij zgłoszenie", subject: "Zgłoszenie na zwiedzanie manufaktury ALAUDIS",
      sentEyebrow: "Prawie gotowe", sentTitle: "Wiadomość czeka w Twoim programie pocztowym",
      sentText: "Otworzyliśmy gotową wiadomość ze zgłoszeniem — wystarczy ją wysłać. Jeśli program pocztowy się nie otworzył, napisz bezpośrednio na adres",
      back: "Wróć do formularza",
      sending: "Wysyłanie…", doneEyebrow: "Dziękujemy", doneTitle: "Zgłoszenie zostało wysłane",
      doneText: "Odezwiemy się, aby potwierdzić termin zwiedzania. W razie pytań napisz na adres",
      error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę albo napisz bezpośrednio na adres",
    },
  },
  EN: {
    home: "/en", atelier: "/en/odwiedz-atelier",
    hero: {
      eyebrow: "ALAUDIS Manufactory · Kalisz",
      title: "Manufactory tour",
      text: "See how an ALAUDIS grand piano is made — from the wood and the soundboard, through the finish, to the final regulation and voicing. The free guided tour takes about 4 hours — for individuals or small groups, by prior registration.",
      cta: "Register your interest",
    },
    stagesEyebrow: "The tour", stagesTitle: "What you will see in the manufactory",
    stages: {
      wood: { title: "Wood", text: "Selecting and preparing the wood that becomes the case and the resonant parts of the instrument." },
      soundboard: { title: "Soundboard", text: "The heart of the sound: the soundboard, bridges and stringing — where the instrument’s character is born." },
      finish: { title: "Finish", text: "Lacquering, sanding and polishing — the speciality of SAP Renovation, refined on 14,000 instruments." },
      voicing: { title: "Regulation and voicing", text: "The final stage: precise adjustment of the action and the tone before the piano reaches its owner." },
    },
    infoEyebrow: "How it works", infoTitle: "From registration to visit",
    info: [
      { title: "Registration", text: "Fill in the form with your preferred date and the number of visitors." },
      { title: "Confirmation", text: "We will contact you to agree on the exact day and time of the tour." },
      { title: "Visit", text: "A guided tour of the manufactory with our team, ending with the chance to play an ALAUDIS grand piano." },
    ],
    formEyebrow: "Registration form", formTitle: "Register for a manufactory tour",
    formText: "Send your request — we will reply and confirm the date. A request is not yet a booking.",
    address: "Obozowa 18, 62-800 Kalisz, Poland",
    highlights: [
      { title: "From wood to voicing", text: "See how an ALAUDIS grand piano is made — from the wood and the soundboard, through the finish, to the final regulation and voicing." },
      { title: "Free of charge, about 4 hours", text: "The guided tour of the manufactory is free and takes about 4 hours." },
      { title: "On your own or in a small group", text: "Tours are held for individuals or small groups, by prior registration." },
    ],
    facts: [{ label: "Duration", value: "approx. 4 hours" }, { label: "Admission", value: "free of charge" }],
    form: {
      name: "Full name", email: "E-mail", phone: "Phone", people: "Number of visitors",
      peopleOptions: ["1", "2", "3–5", "6–10", "Group of more than 10"],
      tourLanguage: "Tour language", languageOptions: ["English", "Polish", "German"],
      date: "Preferred date", altDate: "Alternative date",
      message: "Message", messagePlaceholder: "E.g. school group, interest in a specific model, accessibility needs…",
      consent: "I agree to be contacted by ALAUDIS / SAP Renovation regarding my tour request.",
      required: "* required fields", choose: "Choose…",
      submit: "Send request", subject: "ALAUDIS manufactory tour request",
      sentEyebrow: "Almost done", sentTitle: "Your message is ready in your e-mail app",
      sentText: "We have opened a ready-made message with your request — just send it. If your e-mail app did not open, please write directly to",
      back: "Back to the form",
      sending: "Sending…", doneEyebrow: "Thank you", doneTitle: "Your request has been sent",
      doneText: "We will get back to you to confirm the date of your visit. If you have any questions, please write to",
      error: "We could not send your request. Please try again in a moment or write directly to",
    },
  },
  DE: {
    home: "/de", atelier: "/de/odwiedz-atelier",
    hero: {
      eyebrow: "ALAUDIS Manufaktur · Kalisz",
      title: "Manufakturführung",
      text: "Erleben Sie, wie ein ALAUDIS-Flügel entsteht — vom Holz und Resonanzboden über die Oberflächenveredelung bis zur abschließenden Regulierung und Intonation. Die kostenlose Führung dauert etwa 4 Stunden — für Einzelpersonen oder kleine Gruppen, nach vorheriger Anmeldung.",
      cta: "Jetzt anmelden",
    },
    stagesEyebrow: "Die Führung", stagesTitle: "Was Sie in der Manufaktur sehen",
    stages: {
      wood: { title: "Holz", text: "Auswahl und Vorbereitung des Holzes, aus dem Korpus und Resonanzteile des Instruments entstehen." },
      soundboard: { title: "Resonanzboden", text: "Das Herz des Klangs: Resonanzboden, Stege und Besaitung — hier entsteht der Charakter des Instruments." },
      finish: { title: "Oberfläche", text: "Lackieren, Schleifen und Polieren — die Spezialität von SAP Renovation, verfeinert an 14.000 Instrumenten." },
      voicing: { title: "Regulierung und Intonation", text: "Der letzte Schritt: präzise Einstellung von Mechanik und Klang, bevor der Flügel zu seinem Besitzer kommt." },
    },
    infoEyebrow: "Ablauf", infoTitle: "Von der Anmeldung zum Besuch",
    info: [
      { title: "Anmeldung", text: "Füllen Sie das Formular mit Wunschtermin und Personenzahl aus." },
      { title: "Bestätigung", text: "Wir melden uns, um Tag und Uhrzeit der Führung abzustimmen." },
      { title: "Besuch", text: "Führung durch die Manufaktur mit unserem Team — zum Abschluss können Sie selbst auf einem ALAUDIS-Flügel spielen." },
    ],
    formEyebrow: "Anmeldeformular", formTitle: "Für eine Manufakturführung anmelden",
    formText: "Senden Sie Ihre Anfrage — wir antworten und bestätigen den Termin. Die Anfrage ist noch keine Buchung.",
    address: "Obozowa 18, 62-800 Kalisz, Polen",
    highlights: [
      { title: "Vom Holz bis zur Intonation", text: "Erleben Sie, wie ein ALAUDIS-Flügel entsteht — vom Holz und Resonanzboden über die Oberflächenveredelung bis zur abschließenden Regulierung und Intonation." },
      { title: "Kostenlos, etwa 4 Stunden", text: "Die Führung durch die Manufaktur ist kostenlos und dauert etwa 4 Stunden." },
      { title: "Einzeln oder in kleiner Gruppe", text: "Die Führung findet für Einzelpersonen oder kleine Gruppen statt, nach vorheriger Anmeldung." },
    ],
    facts: [{ label: "Dauer", value: "ca. 4 Stunden" }, { label: "Teilnahme", value: "kostenlos" }],
    form: {
      name: "Vor- und Nachname", email: "E-Mail", phone: "Telefon", people: "Anzahl der Personen",
      peopleOptions: ["1", "2", "3–5", "6–10", "Gruppe über 10 Personen"],
      tourLanguage: "Sprache der Führung", languageOptions: ["Deutsch", "Englisch", "Polnisch"],
      date: "Wunschtermin", altDate: "Alternativtermin",
      message: "Nachricht", messagePlaceholder: "Z. B. Schulgruppe, Interesse an einem bestimmten Modell, Barrierefreiheit…",
      consent: "Ich bin damit einverstanden, dass ALAUDIS / SAP Renovation mich zu meiner Anfrage kontaktiert.",
      required: "* Pflichtfelder", choose: "Bitte wählen…",
      submit: "Anfrage senden", subject: "Anfrage Manufakturführung ALAUDIS",
      sentEyebrow: "Fast geschafft", sentTitle: "Ihre Nachricht ist in Ihrem E-Mail-Programm bereit",
      sentText: "Wir haben eine fertige Nachricht mit Ihrer Anfrage geöffnet — Sie müssen sie nur noch senden. Falls sich Ihr E-Mail-Programm nicht geöffnet hat, schreiben Sie bitte direkt an",
      back: "Zurück zum Formular",
      sending: "Wird gesendet…", doneEyebrow: "Vielen Dank", doneTitle: "Ihre Anfrage wurde gesendet",
      doneText: "Wir melden uns bei Ihnen, um den Termin der Führung zu bestätigen. Bei Fragen schreiben Sie bitte an",
      error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie direkt an",
    },
  },
  FR: {
    home: "/fr", atelier: "/fr/odwiedz-atelier",
    hero: {
      eyebrow: "Manufacture ALAUDIS · Kalisz",
      title: "Visite de la manufacture",
      text: "Découvrez comment naît un piano à queue ALAUDIS — du bois et de la table d’harmonie à la finition, jusqu’au réglage et à l’harmonisation finale. La visite guidée gratuite dure environ 4 heures — seul ou en petit groupe, sur inscription préalable.",
      cta: "S’inscrire",
    },
    stagesEyebrow: "Le parcours", stagesTitle: "Ce que vous verrez à la manufacture",
    stages: {
      wood: { title: "Le bois", text: "Sélection et préparation du bois qui formera la caisse et les éléments résonants de l’instrument." },
      soundboard: { title: "La table d’harmonie", text: "Le cœur du son : table d’harmonie, chevalets et cordage — là où naît le caractère de l’instrument." },
      finish: { title: "La finition", text: "Laquage, ponçage et polissage — la spécialité de SAP Renovation, perfectionnée sur 14 000 instruments." },
      voicing: { title: "Réglage et harmonisation", text: "La dernière étape : l’ajustement précis de la mécanique et du son avant que le piano ne rejoigne son propriétaire." },
    },
    infoEyebrow: "Déroulement", infoTitle: "De l’inscription à la visite",
    info: [
      { title: "Inscription", text: "Remplissez le formulaire en indiquant la date souhaitée et le nombre de visiteurs." },
      { title: "Confirmation", text: "Nous vous contacterons pour convenir du jour et de l’heure exacts de la visite." },
      { title: "Visite", text: "Une visite guidée de la manufacture avec notre équipe, qui se termine par la possibilité de jouer sur un piano ALAUDIS." },
    ],
    formEyebrow: "Formulaire d’inscription", formTitle: "S’inscrire à une visite de la manufacture",
    formText: "Envoyez votre demande — nous vous répondrons pour confirmer la date. La demande ne vaut pas encore réservation.",
    address: "Obozowa 18, 62-800 Kalisz, Pologne",
    highlights: [
      { title: "Du bois à l’harmonisation", text: "Découvrez comment naît un piano à queue ALAUDIS — du bois et de la table d’harmonie, en passant par la finition, jusqu’au réglage final et à l’harmonisation." },
      { title: "Gratuit, environ 4 heures", text: "La visite guidée de la manufacture est gratuite et dure environ 4 heures." },
      { title: "Seul ou en petit groupe", text: "La visite se fait individuellement ou en petits groupes, sur inscription préalable." },
    ],
    facts: [{ label: "Durée", value: "environ 4 heures" }, { label: "Participation", value: "gratuite" }],
    form: {
      name: "Nom et prénom", email: "E-mail", phone: "Téléphone", people: "Nombre de visiteurs",
      peopleOptions: ["1", "2", "3–5", "6–10", "Groupe de plus de 10 personnes"],
      tourLanguage: "Langue de la visite", languageOptions: ["Anglais", "Polonais", "Allemand"],
      date: "Date souhaitée", altDate: "Date alternative",
      message: "Message", messagePlaceholder: "Par ex. groupe scolaire, intérêt pour un modèle précis, besoins d’accessibilité…",
      consent: "J’accepte d’être contacté(e) par ALAUDIS / SAP Renovation au sujet de ma demande de visite.",
      required: "* champs obligatoires", choose: "Choisir…",
      submit: "Envoyer la demande", subject: "Demande de visite de la manufacture ALAUDIS",
      sentEyebrow: "Presque terminé", sentTitle: "Votre message est prêt dans votre messagerie",
      sentText: "Nous avons ouvert un message prêt à l’envoi avec votre demande — il ne reste qu’à l’envoyer. Si votre messagerie ne s’est pas ouverte, écrivez directement à",
      back: "Retour au formulaire",
      sending: "Envoi en cours…", doneEyebrow: "Merci", doneTitle: "Votre demande a été envoyée",
      doneText: "Nous vous recontacterons pour confirmer la date de la visite. Pour toute question, écrivez à",
      error: "Votre demande n’a pas pu être envoyée. Veuillez réessayer dans un instant ou écrire directement à",
    },
  },
};
