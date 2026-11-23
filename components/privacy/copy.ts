// ==========================================================
// POLITYKA PRYWATNOŚCI — TEKSTY (PL / EN / DE / FR)
// ==========================================================
// Tu zmieniasz treść polityki. Każdy język ma te same punkty.
// Po zmianie treści popraw też datę w polu „updated”.
//
// Co opisuje polityka (stan strony na dzień wersji):
// - formularze przygotowują e-mail w programie pocztowym
//   odwiedzającego — strona niczego nie zapisuje na serwerze,
// - statystyki Vercel włączają się dopiero po zgodzie,
// - podgląd 360 ładuje się z serwisu Sirv, galeria z Sanity.
// ==========================================================

export type PrivacyLocale = "pl" | "en" | "de" | "fr";

export const PRIVACY_EMAIL = "info@saprenovation.com";
export const PRIVACY_PHONE = "+48 62 501 30 30";

type Section = { title: string; paragraphs: string[] };

export const privacyCopy: Record<PrivacyLocale, {
  eyebrow: string; title: string; lead: string; sections: Section[];
  updated: string; cookieSettings: string; questionsTitle: string; questionsText: string; contact: string;
}> = {
  pl: {
    eyebrow: "ALAUDIS",
    title: "Polityka prywatności",
    lead: "Jak przetwarzamy dane osobowe osób odwiedzających stronę alaudis.eu i kontaktujących się z nami.",
    sections: [
      {
        title: "1. Administrator danych",
        paragraphs: [
          "Administratorem danych osobowych jest SAP Renovation Sp. z o.o., ul. Obozowa 18, 62-800 Kalisz, Polska, wpisana do Krajowego Rejestru Sądowego pod numerem 0000125505, NIP 6181893417 — właściciel marki ALAUDIS.",
          `Kontakt w sprawach danych osobowych: ${PRIVACY_EMAIL}, tel. ${PRIVACY_PHONE}.`,
        ],
      },
      {
        title: "2. Jakie dane przetwarzamy",
        paragraphs: [
          "Przetwarzamy dane, które sam nam podajesz, kontaktując się z nami e-mailem, telefonicznie, SMS-em lub przez WhatsApp, zgłaszając się na zwiedzanie manufaktury albo wysyłając konfigurację fortepianu: imię i nazwisko, adres e-mail, numer telefonu, liczbę osób i proponowane terminy wizyty, wybraną konfigurację instrumentu oraz treść wiadomości.",
          "Formularze na stronie (zgłoszenie na zwiedzanie, konfigurator) nie zapisują danych na naszym serwerze. Przygotowują gotową wiadomość w Twoim programie pocztowym — dane trafiają do nas dopiero wtedy, gdy sam ją wyślesz.",
          "Podanie danych jest dobrowolne, ale bez nich nie możemy odpowiedzieć na zapytanie, umówić wizyty ani przygotować wyceny.",
        ],
      },
      {
        title: "3. Cele i podstawy prawne",
        paragraphs: [
          "Dane wykorzystujemy, aby odpowiedzieć na zapytanie, umówić wizytę w atelier lub zwiedzanie manufaktury, przygotować wycenę i — jeśli dojdzie do współpracy — zawrzeć i wykonać umowę (art. 6 ust. 1 lit. b RODO).",
          "Po zakończeniu sprawy przechowujemy korespondencję w celu ustalenia, dochodzenia lub obrony roszczeń, co jest naszym prawnie uzasadnionym interesem (art. 6 ust. 1 lit. f RODO). Dane z faktur przetwarzamy, ponieważ wymagają tego przepisy podatkowe i rachunkowe (art. 6 ust. 1 lit. c RODO).",
          "Nie wysyłamy informacji handlowych bez Twojej zgody i nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany.",
        ],
      },
      {
        title: "4. Komu przekazujemy dane",
        paragraphs: [
          "Dane powierzamy wyłącznie podmiotom, które pomagają nam prowadzić stronę i obsługiwać zapytania: dostawcy hostingu strony, dostawcom poczty elektronicznej, a przy realizacji zamówienia także firmom transportowym, ubezpieczycielowi i biuru rachunkowemu. Jeśli wybierzesz kontakt przez WhatsApp, wiadomość obsługuje dostawca tej usługi. Nie sprzedajemy danych.",
          "Część dostawców usług technicznych ma siedzibę poza Europejskim Obszarem Gospodarczym, w szczególności w Stanach Zjednoczonych. W takich przypadkach dane są przekazywane na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub decyzji stwierdzającej odpowiedni stopień ochrony.",
        ],
      },
      {
        title: "5. Jak długo przechowujemy dane",
        paragraphs: [
          "Dane z zapytań przechowujemy przez czas prowadzenia korespondencji, a następnie do upływu terminu przedawnienia ewentualnych roszczeń. Dane związane z umową i fakturami przechowujemy przez okres wymagany przepisami prawa.",
        ],
      },
      {
        title: "6. Twoje prawa",
        paragraphs: [
          `Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia, a także prawo wniesienia sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie. Aby skorzystać z tych praw, napisz na adres ${PRIVACY_EMAIL}.`,
          "Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).",
        ],
      },
      {
        title: "7. Pliki cookies, pamięć przeglądarki i statystyki",
        paragraphs: [
          "Nasza strona nie używa plików cookies do reklamy ani do śledzenia między stronami. W pamięci Twojej przeglądarki zapisujemy wyłącznie to, co jest potrzebne do działania strony: Twój wybór dotyczący prywatności oraz konfigurację fortepianu, żebyś mógł do niej wrócić.",
          "Anonimowe statystyki odwiedzin i szybkości działania strony (Vercel Analytics i Speed Insights) włączamy dopiero wtedy, gdy klikniesz „Akceptuję” w oknie dotyczącym prywatności. Nie korzystają one z plików cookies i nie pozwalają nam Cię rozpoznać. Swój wybór możesz zmienić w każdej chwili, klikając „Ustawienia cookies” na dole strony.",
          "Serwer, na którym działa strona, zapisuje standardowe dane techniczne każdej wizyty (m.in. adres IP, datę i rodzaj przeglądarki) wyłącznie w celu zapewnienia bezpieczeństwa i poprawnego działania strony.",
        ],
      },
      {
        title: "8. Treści z serwisów zewnętrznych",
        paragraphs: [
          "Podgląd fortepianu 360° na podstronie „Odkryj modele” ładuje się z serwisu Sirv, a zdjęcia i filmy w galerii — z serwisu Sanity. Aby je wyświetlić, Twoja przeglądarka łączy się z serwerami tych dostawców i przekazuje im dane techniczne, takie jak adres IP.",
          "Zdjęcie lub film własnego wnętrza, które wgrywasz w podglądzie 3D, pozostają wyłącznie w Twojej przeglądarce — nie są wysyłane na nasz serwer.",
        ],
      },
      {
        title: "9. Zdjęcia i filmy z wydarzeń",
        paragraphs: [
          `W galerii publikujemy fotorelacje i nagrania z koncertów oraz wydarzeń z udziałem ALAUDIS. Jeśli jesteś na nich widoczny i nie chcesz, aby dany materiał był dostępny na stronie, napisz na adres ${PRIVACY_EMAIL} — usuniemy go.`,
        ],
      },
      {
        title: "10. Zmiany polityki",
        paragraphs: [
          "Politykę prywatności możemy aktualizować, gdy zmieni się sposób działania strony lub przepisy. Aktualna wersja jest zawsze dostępna na tej stronie.",
        ],
      },
    ],
    updated: "Wersja z dnia 24 listopada 2026 r.",
    cookieSettings: "Ustawienia cookies",
    questionsTitle: "Masz pytania?",
    questionsText: "Napisz do nas — chętnie wyjaśnimy, jak dbamy o Twoje dane.",
    contact: "Kontakt",
  },
  en: {
    eyebrow: "ALAUDIS",
    title: "Privacy Policy",
    lead: "How we process the personal data of people who visit alaudis.eu and contact us.",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "The controller of your personal data is SAP Renovation Sp. z o.o., ul. Obozowa 18, 62-800 Kalisz, Poland, entered in the National Court Register (KRS) under number 0000125505, tax identification number (NIP) 6181893417 — the owner of the ALAUDIS brand.",
          `Contact for personal data matters: ${PRIVACY_EMAIL}, tel. ${PRIVACY_PHONE}.`,
        ],
      },
      {
        title: "2. What data we process",
        paragraphs: [
          "We process the data you give us yourself when you contact us by e-mail, telephone, text message or WhatsApp, apply for a manufactory tour or send us a piano configuration: your name, e-mail address, telephone number, the number of visitors and proposed dates, the chosen configuration of the instrument and the content of your message.",
          "The forms on this website (the tour application and the configurator) do not store data on our server. They prepare a ready message in your own e-mail program — the data reaches us only when you send it yourself.",
          "Providing data is voluntary, but without it we cannot answer your enquiry, arrange a visit or prepare a quotation.",
        ],
      },
      {
        title: "3. Purposes and legal bases",
        paragraphs: [
          "We use the data to answer your enquiry, arrange a visit to the atelier or a manufactory tour, prepare a quotation and — if we work together — conclude and perform a contract (Article 6(1)(b) GDPR).",
          "Once a matter is closed, we keep the correspondence in order to establish, pursue or defend claims, which is our legitimate interest (Article 6(1)(f) GDPR). We process invoice data because tax and accounting law requires it (Article 6(1)(c) GDPR).",
          "We do not send commercial information without your consent and we do not make automated decisions about you.",
        ],
      },
      {
        title: "4. Who receives the data",
        paragraphs: [
          "We entrust data only to parties that help us run the website and handle enquiries: the website hosting provider and e-mail providers and, when an order is carried out, also transport companies, the insurer and the accounting office. If you choose to contact us through WhatsApp, the message is handled by the provider of that service. We do not sell data.",
          "Some technical service providers are based outside the European Economic Area, in particular in the United States. In such cases data is transferred on the basis of standard contractual clauses approved by the European Commission or an adequacy decision.",
        ],
      },
      {
        title: "5. How long we keep the data",
        paragraphs: [
          "We keep enquiry data for as long as the correspondence lasts and then until any possible claims become time-barred. Data connected with a contract and invoices is kept for the period required by law.",
        ],
      },
      {
        title: "6. Your rights",
        paragraphs: [
          `You have the right to access your data, to have it rectified or erased, to restrict its processing and to data portability, as well as the right to object to processing based on our legitimate interest. To exercise these rights, write to ${PRIVACY_EMAIL}.`,
          "You also have the right to lodge a complaint with the President of the Personal Data Protection Office in Poland (ul. Stawki 2, 00-193 Warsaw).",
        ],
      },
      {
        title: "7. Cookies, browser storage and statistics",
        paragraphs: [
          "Our website does not use cookies for advertising or for tracking across websites. In your browser’s storage we save only what the site needs in order to work: your privacy choice and your piano configuration, so that you can come back to it.",
          "Anonymous statistics on visits and site speed (Vercel Analytics and Speed Insights) are switched on only when you click “Accept” in the privacy window. They do not use cookies and do not allow us to identify you. You can change your choice at any time by clicking “Cookie settings” at the bottom of the page.",
          "The server on which the website runs records standard technical data for each visit (including the IP address, date and browser type) solely to keep the site secure and working correctly.",
        ],
      },
      {
        title: "8. Content from external services",
        paragraphs: [
          "The 360° piano viewer on the “Discover the models” page is loaded from the Sirv service, and the photographs and films in the gallery from the Sanity service. To display them, your browser connects to these providers’ servers and passes technical data to them, such as your IP address.",
          "A photograph or film of your own interior that you upload in the 3D viewer stays in your browser only — it is not sent to our server.",
        ],
      },
      {
        title: "9. Photographs and films from events",
        paragraphs: [
          `In the gallery we publish photographs and recordings from concerts and events involving ALAUDIS. If you appear in them and do not want a given item to be available on the website, write to ${PRIVACY_EMAIL} and we will remove it.`,
        ],
      },
      {
        title: "10. Changes to this policy",
        paragraphs: [
          "We may update this privacy policy when the way the website works or the law changes. The current version is always available on this page.",
        ],
      },
    ],
    updated: "Version dated 24 November 2026.",
    cookieSettings: "Cookie settings",
    questionsTitle: "Any questions?",
    questionsText: "Write to us — we will gladly explain how we look after your data.",
    contact: "Contact",
  },
  de: {
    eyebrow: "ALAUDIS",
    title: "Datenschutzerklärung",
    lead: "Wie wir personenbezogene Daten der Besucher von alaudis.eu und der Personen verarbeiten, die mit uns Kontakt aufnehmen.",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher für die Verarbeitung personenbezogener Daten ist die SAP Renovation Sp. z o.o., ul. Obozowa 18, 62-800 Kalisz, Polen, eingetragen im polnischen Landesgerichtsregister (KRS) unter der Nummer 0000125505, Steuernummer (NIP) 6181893417 — Inhaberin der Marke ALAUDIS.",
          `Kontakt in Datenschutzfragen: ${PRIVACY_EMAIL}, Tel. ${PRIVACY_PHONE}.`,
        ],
      },
      {
        title: "2. Welche Daten wir verarbeiten",
        paragraphs: [
          "Wir verarbeiten die Daten, die Sie uns selbst mitteilen, wenn Sie uns per E-Mail, Telefon, SMS oder WhatsApp kontaktieren, sich für eine Manufakturführung anmelden oder uns eine Flügelkonfiguration senden: Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Personenzahl und Terminvorschläge, die gewählte Konfiguration des Instruments sowie den Inhalt Ihrer Nachricht.",
          "Die Formulare auf dieser Website (Anmeldung zur Führung, Konfigurator) speichern keine Daten auf unserem Server. Sie bereiten eine fertige Nachricht in Ihrem eigenen E-Mail-Programm vor — die Daten erreichen uns erst, wenn Sie die Nachricht selbst absenden.",
          "Die Angabe der Daten ist freiwillig; ohne sie können wir jedoch Ihre Anfrage nicht beantworten, keinen Besuch vereinbaren und kein Angebot erstellen.",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen",
        paragraphs: [
          "Wir nutzen die Daten, um Ihre Anfrage zu beantworten, einen Besuch im Atelier oder eine Manufakturführung zu vereinbaren, ein Angebot zu erstellen und — falls es zur Zusammenarbeit kommt — einen Vertrag zu schließen und zu erfüllen (Art. 6 Abs. 1 lit. b DSGVO).",
          "Nach Abschluss des Vorgangs bewahren wir die Korrespondenz auf, um Ansprüche feststellen, geltend machen oder abwehren zu können; dies ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Rechnungsdaten verarbeiten wir, weil steuer- und handelsrechtliche Vorschriften dies verlangen (Art. 6 Abs. 1 lit. c DSGVO).",
          "Wir versenden keine Werbung ohne Ihre Einwilligung und treffen keine automatisierten Entscheidungen über Sie.",
        ],
      },
      {
        title: "4. Empfänger der Daten",
        paragraphs: [
          "Wir geben Daten ausschließlich an Stellen weiter, die uns beim Betrieb der Website und bei der Bearbeitung von Anfragen unterstützen: den Hosting-Anbieter der Website und E-Mail-Anbieter sowie, bei der Ausführung eines Auftrags, auch Transportunternehmen, den Versicherer und das Buchhaltungsbüro. Wenn Sie uns über WhatsApp kontaktieren, wird die Nachricht vom Anbieter dieses Dienstes übermittelt. Wir verkaufen keine Daten.",
          "Einige technische Dienstleister haben ihren Sitz außerhalb des Europäischen Wirtschaftsraums, insbesondere in den Vereinigten Staaten. In diesen Fällen erfolgt die Übermittlung auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln oder eines Angemessenheitsbeschlusses.",
        ],
      },
      {
        title: "5. Speicherdauer",
        paragraphs: [
          "Daten aus Anfragen speichern wir für die Dauer der Korrespondenz und anschließend bis zum Ablauf der Verjährungsfrist möglicher Ansprüche. Vertrags- und Rechnungsdaten speichern wir für den gesetzlich vorgeschriebenen Zeitraum.",
        ],
      },
      {
        title: "6. Ihre Rechte",
        paragraphs: [
          `Sie haben das Recht auf Auskunft über Ihre Daten, auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht, der Verarbeitung auf Grundlage unseres berechtigten Interesses zu widersprechen. Um diese Rechte auszuüben, schreiben Sie an ${PRIVACY_EMAIL}.`,
          "Sie haben außerdem das Recht, Beschwerde beim Präsidenten des polnischen Amtes für den Schutz personenbezogener Daten (ul. Stawki 2, 00-193 Warschau) einzulegen.",
        ],
      },
      {
        title: "7. Cookies, Browserspeicher und Statistik",
        paragraphs: [
          "Unsere Website verwendet keine Cookies für Werbung oder für websiteübergreifendes Tracking. Im Speicher Ihres Browsers legen wir nur ab, was für den Betrieb der Website nötig ist: Ihre Datenschutz-Auswahl und Ihre Flügelkonfiguration, damit Sie zu ihr zurückkehren können.",
          "Anonyme Statistiken zu Besuchen und zur Geschwindigkeit der Website (Vercel Analytics und Speed Insights) schalten wir erst ein, wenn Sie im Datenschutz-Fenster auf „Akzeptieren“ klicken. Sie verwenden keine Cookies und ermöglichen uns nicht, Sie zu erkennen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ am Ende der Seite ändern.",
          "Der Server, auf dem die Website läuft, speichert bei jedem Besuch übliche technische Daten (unter anderem IP-Adresse, Datum und Browsertyp), ausschließlich um die Sicherheit und den ordnungsgemäßen Betrieb der Website zu gewährleisten.",
        ],
      },
      {
        title: "8. Inhalte externer Dienste",
        paragraphs: [
          "Die 360°-Ansicht des Flügels auf der Seite „Modelle entdecken“ wird vom Dienst Sirv geladen, Fotos und Filme der Galerie vom Dienst Sanity. Um sie anzuzeigen, verbindet sich Ihr Browser mit den Servern dieser Anbieter und übermittelt ihnen technische Daten wie Ihre IP-Adresse.",
          "Ein Foto oder Film Ihres eigenen Raums, den Sie in der 3D-Ansicht hochladen, bleibt ausschließlich in Ihrem Browser — er wird nicht an unseren Server gesendet.",
        ],
      },
      {
        title: "9. Fotos und Filme von Veranstaltungen",
        paragraphs: [
          `In der Galerie veröffentlichen wir Fotos und Aufnahmen von Konzerten und Veranstaltungen mit ALAUDIS. Wenn Sie darauf zu sehen sind und nicht möchten, dass ein bestimmter Beitrag auf der Website verfügbar ist, schreiben Sie an ${PRIVACY_EMAIL} — wir entfernen ihn.`,
        ],
      },
      {
        title: "10. Änderungen dieser Erklärung",
        paragraphs: [
          "Wir können diese Datenschutzerklärung aktualisieren, wenn sich die Funktionsweise der Website oder die Rechtslage ändert. Die aktuelle Fassung ist stets auf dieser Seite abrufbar.",
        ],
      },
    ],
    updated: "Fassung vom 24. November 2026.",
    cookieSettings: "Cookie-Einstellungen",
    questionsTitle: "Haben Sie Fragen?",
    questionsText: "Schreiben Sie uns — wir erklären gern, wie wir mit Ihren Daten umgehen.",
    contact: "Kontakt",
  },
  fr: {
    eyebrow: "ALAUDIS",
    title: "Politique de confidentialité",
    lead: "Comment nous traitons les données personnelles des personnes qui visitent alaudis.eu et qui nous contactent.",
    sections: [
      {
        title: "1. Responsable du traitement",
        paragraphs: [
          "Le responsable du traitement des données personnelles est SAP Renovation Sp. z o.o., ul. Obozowa 18, 62-800 Kalisz, Pologne, inscrite au Registre judiciaire national polonais (KRS) sous le numéro 0000125505, numéro d’identification fiscale (NIP) 6181893417 — propriétaire de la marque ALAUDIS.",
          `Contact pour les questions relatives aux données personnelles : ${PRIVACY_EMAIL}, tél. ${PRIVACY_PHONE}.`,
        ],
      },
      {
        title: "2. Quelles données nous traitons",
        paragraphs: [
          "Nous traitons les données que vous nous communiquez vous-même en nous contactant par e-mail, par téléphone, par SMS ou via WhatsApp, en vous inscrivant à une visite de la manufacture ou en nous envoyant une configuration de piano : nom et prénom, adresse e-mail, numéro de téléphone, nombre de personnes et dates proposées, configuration choisie de l’instrument et contenu de votre message.",
          "Les formulaires du site (inscription à la visite, configurateur) n’enregistrent aucune donnée sur notre serveur. Ils préparent un message prêt à l’envoi dans votre propre logiciel de messagerie — les données ne nous parviennent que lorsque vous l’envoyez vous-même.",
          "La communication des données est facultative, mais sans elles nous ne pouvons ni répondre à votre demande, ni organiser une visite, ni établir un devis.",
        ],
      },
      {
        title: "3. Finalités et bases juridiques",
        paragraphs: [
          "Nous utilisons les données pour répondre à votre demande, organiser une visite de l’atelier ou de la manufacture, établir un devis et — en cas de collaboration — conclure et exécuter un contrat (article 6, paragraphe 1, point b) du RGPD).",
          "Une fois l’affaire close, nous conservons la correspondance afin de constater, d’exercer ou de défendre des droits, ce qui constitue notre intérêt légitime (article 6, paragraphe 1, point f) du RGPD). Nous traitons les données de facturation parce que la législation fiscale et comptable l’exige (article 6, paragraphe 1, point c) du RGPD).",
          "Nous n’envoyons aucune information commerciale sans votre consentement et ne prenons aucune décision automatisée à votre égard.",
        ],
      },
      {
        title: "4. À qui nous transmettons les données",
        paragraphs: [
          "Nous ne confions les données qu’aux entités qui nous aident à exploiter le site et à traiter les demandes : l’hébergeur du site et les fournisseurs de messagerie électronique ainsi que, lors de l’exécution d’une commande, les transporteurs, l’assureur et le cabinet comptable. Si vous choisissez de nous contacter via WhatsApp, le message est acheminé par le fournisseur de ce service. Nous ne vendons pas de données.",
          "Certains prestataires techniques sont établis en dehors de l’Espace économique européen, notamment aux États-Unis. Dans ce cas, les données sont transférées sur la base des clauses contractuelles types approuvées par la Commission européenne ou d’une décision d’adéquation.",
        ],
      },
      {
        title: "5. Durée de conservation",
        paragraphs: [
          "Nous conservons les données issues des demandes pendant la durée de la correspondance, puis jusqu’à l’expiration du délai de prescription d’éventuelles réclamations. Les données liées au contrat et aux factures sont conservées pendant la durée exigée par la loi.",
        ],
      },
      {
        title: "6. Vos droits",
        paragraphs: [
          `Vous disposez d’un droit d’accès à vos données, de rectification, d’effacement, de limitation du traitement et de portabilité, ainsi que du droit de vous opposer au traitement fondé sur notre intérêt légitime. Pour exercer ces droits, écrivez à ${PRIVACY_EMAIL}.`,
          "Vous avez également le droit d’introduire une réclamation auprès du Président de l’Office polonais de protection des données personnelles (ul. Stawki 2, 00-193 Varsovie).",
        ],
      },
      {
        title: "7. Cookies, stockage du navigateur et statistiques",
        paragraphs: [
          "Notre site n’utilise pas de cookies à des fins publicitaires ni de suivi entre sites. Dans le stockage de votre navigateur, nous n’enregistrons que ce qui est nécessaire au fonctionnement du site : votre choix en matière de confidentialité et la configuration de votre piano, afin que vous puissiez la retrouver.",
          "Les statistiques anonymes de fréquentation et de rapidité du site (Vercel Analytics et Speed Insights) ne sont activées que lorsque vous cliquez sur « J’accepte » dans la fenêtre de confidentialité. Elles n’utilisent pas de cookies et ne nous permettent pas de vous identifier. Vous pouvez modifier votre choix à tout moment en cliquant sur « Paramètres des cookies » en bas de page.",
          "Le serveur qui héberge le site enregistre, à chaque visite, des données techniques standard (notamment l’adresse IP, la date et le type de navigateur), uniquement pour assurer la sécurité et le bon fonctionnement du site.",
        ],
      },
      {
        title: "8. Contenus de services externes",
        paragraphs: [
          "La vue à 360° du piano sur la page « Découvrir les modèles » est chargée depuis le service Sirv, et les photographies et films de la galerie depuis le service Sanity. Pour les afficher, votre navigateur se connecte aux serveurs de ces prestataires et leur transmet des données techniques telles que votre adresse IP.",
          "La photographie ou le film de votre propre intérieur que vous importez dans la vue 3D reste uniquement dans votre navigateur — il n’est pas envoyé à notre serveur.",
        ],
      },
      {
        title: "9. Photographies et films d’événements",
        paragraphs: [
          `Dans la galerie, nous publions des photographies et des enregistrements de concerts et d’événements avec ALAUDIS. Si vous y apparaissez et ne souhaitez pas qu’un contenu soit accessible sur le site, écrivez à ${PRIVACY_EMAIL} — nous le retirerons.`,
        ],
      },
      {
        title: "10. Modifications de la politique",
        paragraphs: [
          "Nous pouvons mettre à jour cette politique de confidentialité lorsque le fonctionnement du site ou la législation évolue. La version en vigueur est toujours disponible sur cette page.",
        ],
      },
    ],
    updated: "Version du 24 novembre 2026.",
    cookieSettings: "Paramètres des cookies",
    questionsTitle: "Des questions ?",
    questionsText: "Écrivez-nous — nous vous expliquerons volontiers comment nous protégeons vos données.",
    contact: "Contact",
  },
};
