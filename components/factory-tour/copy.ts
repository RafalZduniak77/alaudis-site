// ==========================================================
// ZWIEDZANIE MANUFAKTURY — TEKSTY PL / EN / DE / FR
// ==========================================================

export type TourLanguage = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

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
  ES: {
    home: "/es", atelier: "/es/odwiedz-atelier",
    hero: {
      eyebrow: "Manufactura ALAUDIS · Kalisz",
      title: "Visita a la manufactura",
      text: "Descubra cómo nace un piano de cola ALAUDIS: de la madera y la tabla armónica, pasando por el acabado, hasta la regulación y la entonación finales. La visita guiada gratuita dura unas 4 horas y se realiza de forma individual o en grupos reducidos, previa solicitud.",
      cta: "Solicite su visita",
    },
    stagesEyebrow: "El recorrido", stagesTitle: "Lo que verá en la manufactura",
    stages: {
      wood: { title: "La madera", text: "Selección y preparación de la madera de la que nacen la caja y los elementos resonantes del instrumento." },
      soundboard: { title: "La tabla armónica", text: "El corazón del sonido: la tabla armónica, los puentes y el encordado, el lugar donde nace el carácter del sonido." },
      finish: { title: "El acabado", text: "Lacado, lijado y pulido: la especialidad de SAP Renovation, perfeccionada en 14 000 instrumentos." },
      voicing: { title: "Regulación y entonación", text: "La última etapa: el ajuste preciso del mecanismo y del sonido antes de que el piano de cola llegue a su propietario." },
    },
    infoEyebrow: "Cómo funciona", infoTitle: "De la solicitud a la visita",
    info: [
      { title: "Solicitud", text: "Rellene el formulario e indique la fecha que prefiere y el número de personas." },
      { title: "Confirmación", text: "Nos pondremos en contacto con usted para acordar el día y la hora exactos de la visita." },
      { title: "Visita", text: "Un recorrido guiado por la manufactura con nuestro equipo, que concluye con la posibilidad de tocar un piano de cola ALAUDIS." },
    ],
    formEyebrow: "Formulario de solicitud", formTitle: "Solicite una visita a la manufactura",
    formText: "Envíe su solicitud: le responderemos y confirmaremos la fecha. La solicitud no constituye todavía una reserva.",
    address: "Obozowa 18, 62-800 Kalisz, Polonia",
    highlights: [
      { title: "De la madera a la entonación", text: "Descubra cómo nace un piano de cola ALAUDIS: de la madera y la tabla armónica, pasando por el acabado, hasta la regulación y la entonación finales." },
      { title: "Gratuita, unas 4 horas", text: "La visita guiada a la manufactura es gratuita y dura unas 4 horas." },
      { title: "Individual o en grupo reducido", text: "Las visitas se realizan de forma individual o en grupos reducidos, previa solicitud." },
    ],
    facts: [{ label: "Duración", value: "aprox. 4 horas" }, { label: "Participación", value: "gratuita" }],
    form: {
      name: "Nombre y apellidos", email: "Correo electrónico", phone: "Teléfono", people: "Número de personas",
      peopleOptions: ["1", "2", "3–5", "6–10", "Grupo de más de 10 personas"],
      tourLanguage: "Idioma de la visita", languageOptions: ["Inglés", "Polaco", "Alemán"],
      date: "Fecha preferida", altDate: "Fecha alternativa",
      message: "Mensaje", messagePlaceholder: "P. ej., grupo escolar, interés por un modelo concreto, necesidades de accesibilidad…",
      consent: "Acepto que ALAUDIS / SAP Renovation se ponga en contacto conmigo en relación con mi solicitud de visita.",
      required: "* campos obligatorios", choose: "Seleccione…",
      submit: "Enviar solicitud", subject: "Solicitud de visita a la manufactura ALAUDIS",
      sentEyebrow: "Casi listo", sentTitle: "El mensaje le espera en su programa de correo",
      sentText: "Hemos abierto un mensaje ya preparado con su solicitud: solo tiene que enviarlo. Si su programa de correo no se ha abierto, escriba directamente a",
      back: "Volver al formulario",
      sending: "Enviando…", doneEyebrow: "Gracias", doneTitle: "Su solicitud se ha enviado",
      doneText: "Nos pondremos en contacto con usted para confirmar la fecha de la visita. Si tiene alguna pregunta, escriba a",
      error: "No se ha podido enviar la solicitud. Inténtelo de nuevo en unos instantes o escriba directamente a",
    },
  },
  IT: {
    home: "/it", atelier: "/it/odwiedz-atelier",
    hero: {
      eyebrow: "Manifattura ALAUDIS · Kalisz",
      title: "Visita alla manifattura",
      text: "Scopri come nasce un pianoforte a coda ALAUDIS: dal legno e dalla tavola armonica, passando per la finitura, fino alla regolazione e all’intonazione finali. La visita guidata gratuita dura circa 4 ore e si svolge individualmente o in piccoli gruppi, previa richiesta.",
      cta: "Richiedi una visita",
    },
    stagesEyebrow: "Il percorso", stagesTitle: "Che cosa vedrai in manifattura",
    stages: {
      wood: { title: "Il legno", text: "Selezione e preparazione del legno da cui nascono la cassa e gli elementi risonanti dello strumento." },
      soundboard: { title: "La tavola armonica", text: "Il cuore del suono: la tavola armonica, i ponticelli e l’incordatura: il luogo in cui nasce il carattere del suono." },
      finish: { title: "La finitura", text: "Verniciatura, levigatura e lucidatura: la specialità di SAP Renovation, perfezionata su 14.000 strumenti." },
      voicing: { title: "Regolazione e intonazione", text: "L’ultima fase: la messa a punto precisa della meccanica e del suono, prima che il pianoforte a coda raggiunga il suo proprietario." },
    },
    infoEyebrow: "Come funziona", infoTitle: "Dalla richiesta alla visita",
    info: [
      { title: "Richiesta", text: "Compila il modulo indicando la data preferita e il numero di persone." },
      { title: "Conferma", text: "Ti contatteremo per concordare il giorno e l’ora esatti della visita." },
      { title: "Visita", text: "Una visita guidata alla manifattura con il nostro team, che si conclude con la possibilità di suonare un pianoforte a coda ALAUDIS." },
    ],
    formEyebrow: "Modulo di richiesta", formTitle: "Richiedi una visita alla manifattura",
    formText: "Invia la tua richiesta: ti risponderemo e confermeremo la data. La richiesta non costituisce ancora una prenotazione.",
    address: "Obozowa 18, 62-800 Kalisz, Polonia",
    highlights: [
      { title: "Dal legno all’intonazione", text: "Scopri come nasce un pianoforte a coda ALAUDIS: dal legno e dalla tavola armonica, passando per la finitura, fino alla regolazione e all’intonazione finali." },
      { title: "Gratuita, circa 4 ore", text: "La visita guidata alla manifattura è gratuita e dura circa 4 ore." },
      { title: "Individualmente o in piccolo gruppo", text: "Le visite si svolgono individualmente o in piccoli gruppi, previa richiesta." },
    ],
    facts: [{ label: "Durata", value: "circa 4 ore" }, { label: "Partecipazione", value: "gratuita" }],
    form: {
      name: "Nome e cognome", email: "E-mail", phone: "Telefono", people: "Numero di persone",
      peopleOptions: ["1", "2", "3–5", "6–10", "Gruppo di oltre 10 persone"],
      tourLanguage: "Lingua della visita", languageOptions: ["Inglese", "Polacco", "Tedesco"],
      date: "Data preferita", altDate: "Data alternativa",
      message: "Messaggio", messagePlaceholder: "Ad es. gruppo scolastico, interesse per un modello specifico, esigenze di accessibilità…",
      consent: "Acconsento a essere contattato/a da ALAUDIS / SAP Renovation in merito alla mia richiesta di visita.",
      required: "* campi obbligatori", choose: "Scegli…",
      submit: "Invia la richiesta", subject: "Richiesta di visita alla manifattura ALAUDIS",
      sentEyebrow: "Quasi fatto", sentTitle: "Il messaggio ti aspetta nel tuo programma di posta",
      sentText: "Abbiamo aperto un messaggio già pronto con la tua richiesta: basta inviarlo. Se il programma di posta non si è aperto, scrivi direttamente a",
      back: "Torna al modulo",
      sending: "Invio in corso…", doneEyebrow: "Grazie", doneTitle: "La tua richiesta è stata inviata",
      doneText: "Ti ricontatteremo per confermare la data della visita. Per qualsiasi domanda, scrivi a",
      error: "Non è stato possibile inviare la richiesta. Riprova tra qualche istante oppure scrivi direttamente a",
    },
  },
};
