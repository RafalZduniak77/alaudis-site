// ==========================================================
// RZEMIOSŁO — FILMY Z PRODUKCJI (PL / EN / DE / FR)
// ==========================================================

export type CraftLanguage = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";
// poster: ready-to-use still for the card; posterSource: the original image (used by the viewer).
export type CraftVideo = { src: string; title: string; text: string; poster?: string; posterSource?: string };

export const craftContent: Record<CraftLanguage, { eyebrow: string; title: string; intro: string; videos: CraftVideo[] }> = {
  "PL": {
    "eyebrow": "Z produkcji Alaudis",
    "title": "Rzemiosło uchwycone w ruchu",
    "intro": "Krótkie materiały video pokazują proces powstawania instrumentu: pracę rąk, detale, powierzchnie, konstrukcję i atmosferę warsztatu, w którym idea Alaudis zamienia się w realny fortepian.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Szlifowanie i dopasowanie ramy żeliwnej",
        "text": "Precyzyjne przygotowanie ramy żeliwnej przed dalszym montażem akustycznym. Ten etap wymaga dokładnego dopasowania powierzchni styku, kontroli osadzenia oraz zachowania właściwej geometrii konstrukcji fortepianu."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Profilowanie żeber płyty rezonansowej",
        "text": "Kształtowanie żeber płyty rezonansowej odpowiedzialnych za stabilność, sprężystość i prawidłową pracę akustyczną dna rezonansowego. Profil żeber ma bezpośredni wpływ na zachowanie krzywizny i reakcję płyty na drgania."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Oczyszczanie żeber z pozostałości kleju",
        "text": "Staranna obróbka żeber po wcześniejszych etapach klejenia. Usunięcie nadmiaru kleju i przygotowanie czystych powierzchni pozwala zachować precyzję połączeń oraz estetykę elementów konstrukcyjnych."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Mechaniczne szlifowanie płyty rezonansowej",
        "text": "Wstępne szlifowanie płyty rezonansowej z użyciem narzędzi mechanicznych. Celem tego etapu jest wyrównanie powierzchni, przygotowanie materiału do dalszej obróbki oraz uzyskanie właściwej jakości pod kolejne prace wykończeniowe."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Ręczne szlifowanie płyty rezonansowej",
        "text": "Delikatne, ręczne wyprowadzenie powierzchni płyty rezonansowej. Ten etap pozwala uzyskać większą kontrolę nad detalem, zachować naturalny charakter drewna i przygotować płytę do pracy jako serce akustyczne instrumentu."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Frezowanie nakładki mostków rezonansowych",
        "text": "Precyzyjna obróbka nakładki mostków rezonansowych. Mostki są jednym z kluczowych elementów transmisji drgań ze strun na płytę rezonansową, dlatego ich geometria, wysokość i jakość powierzchni wymagają wyjątkowej dokładności."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Cięcie i dopasowanie długości mostka wiolinowego",
        "text": "Dopasowanie mostka wiolinowego do wymiarów i geometrii konkretnego instrumentu. Właściwa długość i osadzenie mostka są istotne dla późniejszej pracy strun, przenoszenia energii oraz równowagi brzmieniowej rejestru wiolinowego."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Mechaniczne struganie mostka wiolinowego",
        "text": "Obróbka mostka wiolinowego z zachowaniem wymaganej linii, wysokości i profilu. Ten etap przygotowuje mostek do dalszego dopasowania oraz do prawidłowego współdziałania ze strunami i płytą rezonansową."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Ręczne kalibrowanie powierzchni korpusu",
        "text": "Każdy fragment korpusu jest starannie sprawdzany i ręcznie wyrównywany przez doświadczonego rzemieślnika. Precyzyjne prowadzenie narzędzia pozwala usunąć nawet najmniejsze nierówności oraz przygotować powierzchnię do kolejnych etapów obróbki. To wymagająca praca, w której liczą się doświadczenie, wyczucie materiału i pełna kontrola nad każdym ruchem."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Precyzyjne wyrównywanie korpusu",
        "text": "Powierzchnia korpusu jest stopniowo wyrównywana za pomocą precyzyjnie prowadzonej szlifierki kątowej. Rzemieślnik na bieżąco kontroluje kształt, linię oraz grubość obrabianego materiału, aby uzyskać równą i stabilną powierzchnię. Połączenie specjalistycznego narzędzia z pracą doświadczonej ręki pozwala zachować pełną kontrolę nad każdym etapem obróbki."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Tradycyjna obróbka korpusu strugiem ręcznym",
        "text": "Ręczny strug pozwala rzemieślnikowi niezwykle dokładnie wyrównać powierzchnię korpusu i stopniowo nadać jej właściwy kształt. Każde przejście narzędzia usuwa cienką warstwę drewna, dlatego proces wymaga cierpliwości, doświadczenia i doskonałego wyczucia materiału. To tradycyjna technika stolarska, która daje pełną kontrolę nad detalem i pozwala osiągnąć najwyższą precyzję wykonania."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Frezowanie korpusu dźwięcznicy pod żebra rezonansowe",
        "text": "Przygotowanie miejsc w korpusie dźwięcznicy, w których zostaną osadzone żebra płyty rezonansowej. Frezowanie pozwala uzyskać precyzyjne gniazda montażowe i zapewnić właściwe podparcie dla całej konstrukcji akustycznej."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Ręczne dłutowanie i dopasowanie gniazd płyty rezonansowej",
        "text": "Ręczne dopracowanie miejsc, w których zostanie osadzona płyta rezonansowa. Praca dłutem pozwala uzyskać dokładność, której nie zawsze da się osiągnąć wyłącznie maszynowo, szczególnie w punktach wymagających indywidualnego dopasowania."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Wklejanie i dociskanie płyty rezonansowej",
        "text": "Proces osadzania płyty rezonansowej w konstrukcji instrumentu. Równomierne dociśnięcie ściskami zapewnia stabilne połączenie, prawidłowe przyleganie oraz właściwą integralność akustyczną całego zespołu rezonansowego."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Wklejanie owinięcia korpusu fortepianu Alaudis",
        "text": "Etap klejenia warstw korpusu fortepianu Alaudis. Odpowiednie prowadzenie materiału, kontrola naprężeń i precyzja klejenia są kluczowe dla stabilności konstrukcji oraz eleganckiej linii obudowy instrumentu."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Klejenie i dociskanie korpusu fortepianu Alaudis",
        "text": "Formowanie korpusu fortepianu poprzez klejenie i kontrolowany docisk ściskami. To jeden z etapów, w których rzemiosło konstrukcyjne decyduje o trwałości, stabilności i finalnej geometrii instrumentu."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Precyzyjne pasowanie nóg i liry fortepianu",
        "text": "Każdy element konstrukcji fortepianu ALAUDis jest indywidualnie dopasowywany przez doświadczonego rzemieślnika. Precyzyjne pasowanie nóg oraz liry pedałowej zapewnia właściwą geometrię, stabilność i idealne połączenie wszystkich części instrumentu. To etap wymagający dużej dokładności, ponieważ nawet niewielkie odchylenia mogłyby wpłynąć na prawidłowy montaż i końcowy wygląd fortepianu."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Dokładne pasowanie rolki w nodze fortepianu",
        "text": "Rolka jest starannie dopasowywana do nogi fortepianu ALAUDis, aby zapewnić jej prawidłowe osadzenie, płynną pracę i pełną stabilność instrumentu. Rzemieślnik kontroluje położenie, głębokość oraz dokładność dopasowania każdego elementu. Precyzja na tym etapie wpływa zarówno na bezpieczeństwo użytkowania, jak i na estetykę całej konstrukcji."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Ostateczna intonacja młotków, Peter Salisbury",
        "text": "Finalna intonacja młotków wykonana przez mistrza Petera Salisbury. To ostatni, artystyczny etap pracy nad barwą dźwięku, w którym regulowana jest reakcja młotków, charakter ataku, śpiewność oraz równowaga brzmieniowa całego instrumentu."
      }
    ]
  },
  "EN": {
    "eyebrow": "From Alaudis production",
    "title": "Craftsmanship captured in motion",
    "intro": "Short video materials show the process of creating the instrument: the work of hands, details, surfaces, construction and the atmosphere of the workshop where the idea of Alaudis becomes a real grand piano.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Sanding and fitting the cast-iron frame",
        "text": "Precise preparation of the cast-iron frame before further acoustic assembly. This stage requires careful fitting of contact surfaces, control of the seating points and preservation of the correct geometry of the piano structure."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Profiling the ribs of the soundboard",
        "text": "Shaping the ribs of the soundboard, responsible for stability, elasticity and the proper acoustic work of the resonant surface. The rib profile directly influences the crown and the response of the soundboard to vibration."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Cleaning the ribs from glue residue",
        "text": "Careful processing of the ribs after previous gluing stages. Removing excess glue and preparing clean surfaces helps preserve the precision of joints and the aesthetic quality of the structural elements."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Mechanical sanding of the soundboard",
        "text": "Initial sanding of the soundboard using mechanical tools. The purpose of this stage is to level the surface, prepare the material for further work and achieve the right quality for subsequent finishing operations."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Hand sanding of the soundboard",
        "text": "Delicate manual refinement of the soundboard surface. This stage gives greater control over detail, preserves the natural character of the wood and prepares the board to work as the acoustic heart of the instrument."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Routing the bridge cap",
        "text": "Precise machining of the bridge cap. Bridges are among the key elements transferring string vibration to the soundboard, which is why their geometry, height and surface quality require exceptional accuracy."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Cutting and fitting the length of the treble bridge",
        "text": "Fitting the treble bridge to the dimensions and geometry of the individual instrument. Correct length and seating are essential for string behaviour, energy transfer and tonal balance in the treble register."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Mechanical planing of the treble bridge",
        "text": "Machining the treble bridge while maintaining the required line, height and profile. This stage prepares the bridge for further fitting and for proper cooperation with the strings and the soundboard."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Hand-calibrating the grand piano rim",
        "text": "Every section of the rim is carefully inspected and levelled by hand by an experienced craftsman. Precise guidance of the tool removes even the slightest irregularities and prepares the surface for the next stages of machining. This demanding work calls for experience, a refined feel for the material and complete control of every movement."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Precision levelling of the grand piano rim",
        "text": "The rim surface is gradually levelled with a precisely guided angle grinder. Throughout the process, the craftsman continually checks the shape, contour and thickness of the material to achieve an even, stable surface. Combining a specialist tool with the skill of an experienced hand ensures complete control at every stage of the work."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Traditional shaping of the rim with a hand plane",
        "text": "A hand plane allows the craftsman to level the rim surface with exceptional accuracy and gradually bring it to the required shape. Each pass removes a fine shaving of wood, so the process demands patience, experience and an instinctive feel for the material. This traditional woodworking technique provides complete control over every detail and makes the highest precision possible."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Routing the soundbox body for the soundboard ribs",
        "text": "Preparing the areas in the soundbox body where the soundboard ribs will be seated. Routing allows precise mounting sockets to be created and provides proper support for the entire acoustic structure."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Hand chiselling and fitting the soundboard seats",
        "text": "Manual refinement of the places where the soundboard will be seated. Chisel work allows a level of precision that cannot always be achieved by machine alone, especially in points requiring individual fitting."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Gluing and clamping the soundboard",
        "text": "The process of seating the soundboard in the instrument structure. Even pressure from clamps ensures a stable joint, proper contact and the acoustic integrity of the entire resonant assembly."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Gluing the rim layers of the Alaudis grand piano",
        "text": "The stage of gluing the rim layers of the Alaudis grand piano. Proper handling of the material, control of tension and precision in gluing are crucial for structural stability and the elegant line of the case."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Gluing and clamping the Alaudis piano body",
        "text": "Forming the piano body through gluing and controlled pressure from clamps. This is one of the stages where structural craftsmanship determines durability, stability and final geometry of the instrument."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Precision fitting of the grand piano legs and pedal lyre",
        "text": "Every structural element of an ALAUDis grand piano is individually fitted by an experienced craftsman. The precise fitting of the legs and pedal lyre ensures correct geometry, stability and a seamless connection between all parts of the instrument. This stage demands exceptional accuracy, as even slight deviations could affect proper assembly and the grand piano’s final appearance."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Exact fitting of the caster in the grand piano leg",
        "text": "The caster is carefully fitted into the leg of the ALAUDis grand piano to ensure correct seating, smooth movement and complete stability of the instrument. The craftsman checks the position, depth and accuracy of every element. Precision at this stage contributes both to safe use and to the refined appearance of the entire structure."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Final hammer voicing, Peter Salisbury",
        "text": "Final hammer voicing performed by master Peter Salisbury. This is the final artistic stage of work on tone colour, where hammer response, attack character, singing quality and tonal balance of the entire instrument are refined."
      }
    ]
  },
  "DE": {
    "eyebrow": "Aus der Alaudis-Produktion",
    "title": "Handwerk in Bewegung festgehalten",
    "intro": "Kurze Videomaterialien zeigen den Entstehungsprozess des Instruments: die Arbeit der Hände, Details, Oberflächen, Konstruktion und die Atmosphäre der Werkstatt, in der die Idee von Alaudis zu einem realen Flügel wird.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Schleifen und Anpassen des Gussrahmens",
        "text": "Präzise Vorbereitung des Gussrahmens vor der weiteren akustischen Montage. Dieser Schritt erfordert eine genaue Anpassung der Kontaktflächen, Kontrolle der Auflagepunkte und die Einhaltung der richtigen Geometrie der Klavierkonstruktion."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Profilieren der Rippen des Resonanzbodens",
        "text": "Formgebung der Resonanzbodenrippen, die für Stabilität, Elastizität und die korrekte akustische Arbeit des Resonanzbodens verantwortlich sind. Das Rippenprofil beeinflusst direkt die Wölbung und die Reaktion des Bodens auf Schwingungen."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Reinigung der Rippen von Kleberesten",
        "text": "Sorgfältige Bearbeitung der Rippen nach den vorherigen Klebearbeiten. Das Entfernen von überschüssigem Leim und die Vorbereitung sauberer Flächen sichern präzise Verbindungen und die Ästhetik der Konstruktionselemente."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Maschinelles Schleifen des Resonanzbodens",
        "text": "Erstes Schleifen des Resonanzbodens mit mechanischen Werkzeugen. Ziel ist es, die Oberfläche zu ebnen, das Material für die weitere Bearbeitung vorzubereiten und die richtige Qualität für die folgenden Arbeitsschritte zu erreichen."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Handschliff des Resonanzbodens",
        "text": "Feine manuelle Ausarbeitung der Resonanzbodenoberfläche. Dieser Schritt ermöglicht eine größere Kontrolle über das Detail, bewahrt den natürlichen Charakter des Holzes und bereitet den Boden auf seine Funktion als akustisches Herz des Instruments vor."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Fräsen der Stegauflage",
        "text": "Präzise Bearbeitung der Stegauflage. Die Stege gehören zu den wichtigsten Elementen der Übertragung von Saitenschwingungen auf den Resonanzboden, weshalb Geometrie, Höhe und Oberflächenqualität außergewöhnliche Genauigkeit verlangen."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Schneiden und Anpassen der Länge des Diskantstegs",
        "text": "Anpassung des Diskantstegs an die Maße und Geometrie des konkreten Instruments. Die richtige Länge und Lagerung sind entscheidend für die spätere Arbeit der Saiten, Energieübertragung und klangliche Balance im Diskantregister."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Maschinelles Hobeln des Diskantstegs",
        "text": "Bearbeitung des Diskantstegs unter Einhaltung der erforderlichen Linie, Höhe und Profilierung. Dieser Schritt bereitet den Steg für die weitere Anpassung und die korrekte Zusammenarbeit mit Saiten und Resonanzboden vor."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Manuelles Kalibrieren der Korpusoberfläche",
        "text": "Jeder Bereich des Korpus wird von einem erfahrenen Handwerker sorgfältig geprüft und von Hand plan ausgerichtet. Durch die präzise Führung des Werkzeugs lassen sich selbst kleinste Unebenheiten beseitigen und die Oberfläche für die nächsten Bearbeitungsschritte vorbereiten. Diese anspruchsvolle Arbeit erfordert Erfahrung, ein ausgeprägtes Gespür für das Material und die vollständige Kontrolle über jede Bewegung."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Präzises Ausrichten des Flügelkorpus",
        "text": "Die Korpusoberfläche wird schrittweise mit einem präzise geführten Winkelschleifer plan ausgerichtet. Dabei kontrolliert der Handwerker fortlaufend Form, Kontur und Materialstärke, um eine gleichmäßige und stabile Oberfläche zu erzielen. Die Verbindung eines spezialisierten Werkzeugs mit der Erfahrung geübter Hände gewährleistet die volle Kontrolle über jeden Bearbeitungsschritt."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Traditionelle Bearbeitung des Korpus mit dem Handhobel",
        "text": "Mit dem Handhobel kann der Handwerker die Korpusoberfläche mit außergewöhnlicher Genauigkeit ausrichten und ihr schrittweise die gewünschte Form geben. Bei jedem Zug wird eine feine Holzschicht abgenommen, weshalb dieser Prozess Geduld, Erfahrung und ein hervorragendes Gespür für das Material verlangt. Diese traditionelle Tischlertechnik bietet vollständige Kontrolle über jedes Detail und ermöglicht höchste Präzision in der Ausführung."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Fräsen des Klangkörpers für die Resonanzbodenrippen",
        "text": "Vorbereitung der Bereiche im Klangkörper, in denen die Rippen des Resonanzbodens eingesetzt werden. Das Fräsen ermöglicht präzise Aufnahmen und sichert die richtige Unterstützung der gesamten akustischen Konstruktion."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Handarbeit mit dem Stechbeitel und Anpassung der Resonanzbodenauflagen",
        "text": "Manuelle Nacharbeitung der Stellen, an denen der Resonanzboden eingesetzt wird. Die Arbeit mit dem Stechbeitel ermöglicht eine Genauigkeit, die rein maschinell nicht immer erreichbar ist, besonders an individuell anzupassenden Punkten."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Einleimen und Verpressen des Resonanzbodens",
        "text": "Der Prozess des Einsetzens des Resonanzbodens in die Instrumentenkonstruktion. Gleichmäßiger Druck durch Zwingen sorgt für eine stabile Verbindung, korrekten Kontakt und die akustische Integrität der gesamten Resonanzeinheit."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Einleimen der Rim-Lagen des Alaudis-Flügels",
        "text": "Das Verleimen der Lagen des Flügelkorpus von Alaudis. Die richtige Führung des Materials, Kontrolle der Spannungen und Präzision beim Leimen sind entscheidend für die Stabilität der Konstruktion und die elegante Linie des Gehäuses."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Verleimen und Verpressen des Alaudis-Flügelkorpus",
        "text": "Formgebung des Flügelkorpus durch Verleimen und kontrollierten Druck mit Zwingen. In diesem Arbeitsschritt entscheidet konstruktives Handwerk über Dauerhaftigkeit, Stabilität und finale Geometrie des Instruments."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Präzises Einpassen der Flügelbeine und der Pedallyra",
        "text": "Jedes Konstruktionselement eines ALAUDis-Flügels wird von einem erfahrenen Handwerker individuell eingepasst. Das präzise Anpassen der Beine und der Pedallyra gewährleistet die korrekte Geometrie, Stabilität und eine perfekte Verbindung aller Teile des Instruments. Dieser Arbeitsschritt verlangt höchste Genauigkeit, da bereits geringe Abweichungen die fachgerechte Montage und das endgültige Erscheinungsbild des Flügels beeinträchtigen könnten."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Exaktes Einpassen der Laufrolle in das Flügelbein",
        "text": "Die Laufrolle wird sorgfältig in das Bein des ALAUDis-Flügels eingepasst, um ihren korrekten Sitz, leichtgängige Bewegung und die vollständige Stabilität des Instruments zu gewährleisten. Der Handwerker kontrolliert Position, Einsetztiefe und Passgenauigkeit jedes Elements. Die Präzision in diesem Arbeitsschritt trägt sowohl zur sicheren Nutzung als auch zur Ästhetik der gesamten Konstruktion bei."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Finale Intonation der Hammerköpfe, Peter Salisbury",
        "text": "Die finale Intonation der Hammerköpfe, ausgeführt von Meister Peter Salisbury. Dies ist der letzte künstlerische Schritt der Arbeit am Klang, bei dem Hammerreaktion, Anschlagscharakter, Sanglichkeit und klangliche Balance des gesamten Instruments verfeinert werden."
      }
    ]
  },
  "FR": {
    "eyebrow": "De la production Alaudis",
    "title": "Le savoir-faire capturé en mouvement",
    "intro": "De courtes vidéos montrent le processus de création de l’instrument : le travail des mains, les détails, les surfaces, la construction et l’atmosphère de l’atelier où l’idée d’Alaudis devient un véritable piano à queue.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Ponçage et ajustement du cadre en fonte",
        "text": "Préparation précise du cadre en fonte avant la poursuite de l’assemblage acoustique. Cette étape exige l’ajustement exact des surfaces de contact, le contrôle des points d’appui et le respect de la géométrie de la structure du piano."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Profilage des nervures de la table d’harmonie",
        "text": "Mise en forme des nervures de la table d’harmonie, responsables de la stabilité, de l’élasticité et du bon fonctionnement acoustique de la surface résonante. Leur profil influence directement la courbure et la réponse de la table aux vibrations."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Nettoyage des nervures après les résidus de colle",
        "text": "Travail minutieux sur les nervures après les étapes précédentes de collage. L’élimination de l’excès de colle et la préparation de surfaces propres permettent de préserver la précision des assemblages et l’esthétique des éléments structurels."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Ponçage mécanique de la table d’harmonie",
        "text": "Premier ponçage de la table d’harmonie à l’aide d’outils mécaniques. L’objectif est d’uniformiser la surface, de préparer le matériau aux étapes suivantes et d’obtenir la qualité nécessaire aux travaux de finition."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Ponçage manuel de la table d’harmonie",
        "text": "Finition manuelle délicate de la surface de la table d’harmonie. Cette étape offre un contrôle plus fin du détail, préserve le caractère naturel du bois et prépare la table à devenir le cœur acoustique de l’instrument."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Fraisage du couvre-chevalet",
        "text": "Usinage précis du couvre-chevalet. Les chevalets font partie des éléments essentiels de transmission des vibrations des cordes vers la table d’harmonie ; leur géométrie, leur hauteur et la qualité de leur surface exigent donc une précision exceptionnelle."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Coupe et ajustement de la longueur du chevalet aigu",
        "text": "Ajustement du chevalet aigu aux dimensions et à la géométrie de l’instrument. La bonne longueur et le bon positionnement sont essentiels au travail futur des cordes, à la transmission de l’énergie et à l’équilibre sonore du registre aigu."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Rabotage mécanique du chevalet aigu",
        "text": "Usinage du chevalet aigu en respectant la ligne, la hauteur et le profil requis. Cette étape prépare le chevalet à l’ajustement final et à une coopération correcte avec les cordes et la table d’harmonie."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Calibrage manuel de la surface du corps",
        "text": "Chaque partie du corps est minutieusement contrôlée et nivelée à la main par un artisan expérimenté. Le guidage précis de l’outil permet d’éliminer les moindres irrégularités et de préparer la surface aux étapes d’usinage suivantes. Ce travail exigeant requiert de l’expérience, une parfaite sensibilité au matériau et une maîtrise absolue de chaque geste."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Mise à niveau précise du corps du piano",
        "text": "La surface du corps est progressivement mise à niveau à l’aide d’une meuleuse d’angle guidée avec précision. Tout au long de l’opération, l’artisan contrôle la forme, la ligne et l’épaisseur du matériau afin d’obtenir une surface régulière et stable. L’alliance d’un outil spécialisé et du savoir-faire d’une main expérimentée garantit une maîtrise totale de chaque étape de l’usinage."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Façonnage traditionnel du corps au rabot à main",
        "text": "Le rabot à main permet à l’artisan de niveler la surface du corps avec une extrême précision et de lui donner progressivement sa forme définitive. Chaque passage retire une fine couche de bois ; le processus exige donc patience, expérience et une parfaite sensibilité au matériau. Cette technique traditionnelle d’ébénisterie offre une maîtrise totale du détail et permet d’atteindre la plus haute précision d’exécution."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Fraisage du corps de la caisse harmonique pour les nervures",
        "text": "Préparation des zones du corps de la caisse harmonique où seront logées les nervures de la table d’harmonie. Le fraisage permet d’obtenir des logements précis et d’assurer un soutien correct à l’ensemble de la structure acoustique."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Ciselage manuel et ajustement des logements de la table d’harmonie",
        "text": "Finition manuelle des zones où la table d’harmonie sera installée. Le travail au ciseau permet d’atteindre une précision que la machine seule ne garantit pas toujours, notamment dans les points nécessitant un ajustement individuel."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Collage et serrage de la table d’harmonie",
        "text": "Processus de mise en place de la table d’harmonie dans la structure de l’instrument. Une pression uniforme exercée par les serre-joints assure un assemblage stable, un bon contact et l’intégrité acoustique de tout l’ensemble résonant."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Collage des couches du corps du piano Alaudis",
        "text": "Étape de collage des couches du corps du piano à queue Alaudis. La bonne conduite du matériau, la maîtrise des tensions et la précision du collage sont essentielles pour la stabilité structurelle et la ligne élégante de la caisse."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Collage et serrage du corps du piano Alaudis",
        "text": "Formation du corps du piano par collage et pression contrôlée avec des serre-joints. C’est l’une des étapes où le savoir-faire structurel détermine la durabilité, la stabilité et la géométrie finale de l’instrument."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Ajustage précis des pieds et de la lyre du piano à queue",
        "text": "Chaque élément de la structure d’un piano à queue ALAUDis est ajusté individuellement par un artisan expérimenté. L’ajustage précis des pieds et de la lyre de pédalier garantit une géométrie correcte, une parfaite stabilité et un assemblage irréprochable de toutes les parties de l’instrument. Cette étape exige une grande exactitude, car le moindre écart pourrait compromettre la qualité du montage et l’aspect final du piano."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Ajustage exact de la roulette dans le pied du piano",
        "text": "La roulette est soigneusement ajustée dans le pied du piano à queue ALAUDis afin de garantir son positionnement correct, un roulement fluide et la parfaite stabilité de l’instrument. L’artisan contrôle la position, la profondeur d’insertion et la précision d’ajustage de chaque élément. À ce stade, la précision contribue autant à la sécurité d’utilisation qu’à l’esthétique de l’ensemble de la structure."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Intonation finale des marteaux, Peter Salisbury",
        "text": "Intonation finale des marteaux réalisée par le maître Peter Salisbury. C’est la dernière étape artistique du travail sur la couleur sonore, où sont affinés la réponse des marteaux, le caractère de l’attaque, le chant et l’équilibre sonore de tout l’instrument."
      }
    ]
  },
  "ES": {
    "eyebrow": "De la producción de Alaudis",
    "title": "La artesanía captada en movimiento",
    "intro": "Unos vídeos breves muestran cómo nace el instrumento: el trabajo de las manos, los detalles, las superficies, la construcción y la atmósfera del taller en el que la idea de Alaudis se convierte en un piano de cola real.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Esmerilado y ajuste del bastidor de hierro fundido",
        "text": "Preparación precisa del bastidor de hierro fundido antes de continuar con el montaje acústico. Esta etapa exige un ajuste exacto de las superficies de contacto, el control del asiento y el respeto de la geometría correcta de la estructura del piano."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Perfilado de las barras armónicas",
        "text": "Conformado de las barras armónicas, responsables de la estabilidad, la elasticidad y el correcto comportamiento acústico de la tabla armónica. El perfil de las barras influye directamente en la conservación del bombeo y en la respuesta de la tabla a las vibraciones."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Limpieza de los restos de cola en las barras armónicas",
        "text": "Trabajo minucioso sobre las barras tras las fases previas de encolado. Eliminar el exceso de cola y dejar las superficies limpias permite conservar la precisión de las uniones y la estética de los elementos estructurales."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Lijado mecánico de la tabla armónica",
        "text": "Primer lijado de la tabla armónica con herramientas mecánicas. El objetivo de esta etapa es nivelar la superficie, preparar el material para los trabajos posteriores y obtener la calidad adecuada para las siguientes operaciones de acabado."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Lijado manual de la tabla armónica",
        "text": "Acabado manual y delicado de la superficie de la tabla armónica. Esta etapa permite un mayor control del detalle, conserva el carácter natural de la madera y prepara la tabla para actuar como corazón acústico del instrumento."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Fresado de la cubierta de los puentes",
        "text": "Mecanizado preciso de la cubierta de los puentes. Los puentes son uno de los elementos clave en la transmisión de las vibraciones de las cuerdas a la tabla armónica; por eso su geometría, su altura y la calidad de su superficie exigen una exactitud excepcional."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Corte y ajuste de la longitud del puente de agudos",
        "text": "Ajuste del puente de agudos a las dimensiones y la geometría de cada instrumento. La longitud y el asiento correctos del puente son esenciales para el trabajo posterior de las cuerdas, la transmisión de la energía y el equilibrio sonoro del registro agudo."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Cepillado mecánico del puente de agudos",
        "text": "Mecanizado del puente de agudos respetando la línea, la altura y el perfil requeridos. Esta etapa prepara el puente para su ajuste posterior y para que trabaje correctamente con las cuerdas y la tabla armónica."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Calibrado manual de la superficie de la caja",
        "text": "Un artesano experimentado revisa con esmero cada tramo de la caja y lo nivela a mano. El guiado preciso de la herramienta permite eliminar hasta las más mínimas irregularidades y preparar la superficie para las siguientes fases de trabajo. Es una labor exigente, en la que cuentan la experiencia, la sensibilidad hacia el material y el control absoluto de cada movimiento."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Nivelado preciso de la caja",
        "text": "La superficie de la caja se nivela de forma gradual con una amoladora angular guiada con precisión. El artesano controla en todo momento la forma, la línea y el grosor del material para lograr una superficie uniforme y estable. La unión de una herramienta especializada y una mano experimentada permite mantener el control total en cada fase del trabajo."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Trabajo tradicional de la caja con cepillo de mano",
        "text": "El cepillo de mano permite al artesano nivelar la superficie de la caja con extraordinaria exactitud y darle poco a poco la forma adecuada. Cada pasada de la herramienta retira una fina capa de madera, por lo que el proceso requiere paciencia, experiencia y una excelente sensibilidad hacia el material. Es una técnica tradicional de carpintería que ofrece un control total del detalle y permite alcanzar la máxima precisión de ejecución."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Fresado del aro interior para las barras armónicas",
        "text": "Preparación de las zonas del aro interior en las que encajarán las barras de la tabla armónica. El fresado permite obtener alojamientos de montaje precisos y garantizar un apoyo correcto para toda la estructura acústica."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Trabajo manual a formón y ajuste de los asientos de la tabla armónica",
        "text": "Retoque manual de los puntos en los que se asentará la tabla armónica. El trabajo con el formón permite alcanzar una exactitud que no siempre se consigue solo con máquinas, sobre todo allí donde hace falta un ajuste individual."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Encolado y prensado de la tabla armónica",
        "text": "Proceso de colocación de la tabla armónica en la estructura del instrumento. La presión uniforme de los sargentos garantiza una unión estable, un contacto correcto y la integridad acústica de todo el conjunto resonante."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Encolado del aro de la caja del piano de cola Alaudis",
        "text": "Etapa de encolado de las láminas que forman la caja del piano de cola Alaudis. El guiado adecuado del material, el control de las tensiones y la precisión del encolado son decisivos para la estabilidad de la estructura y la elegante línea del mueble del instrumento."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Encolado y prensado de la caja del piano de cola Alaudis",
        "text": "Conformado de la caja del piano de cola mediante encolado y presión controlada con sargentos. Es una de las etapas en las que el oficio constructivo determina la durabilidad, la estabilidad y la geometría final del instrumento."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Ajuste preciso de las patas y la lira del piano de cola",
        "text": "Un artesano experimentado ajusta individualmente cada elemento de la estructura del piano de cola ALAUDis. El ajuste preciso de las patas y de la lira de pedales garantiza la geometría correcta, la estabilidad y la unión perfecta de todas las partes del instrumento. Es una etapa que exige gran exactitud, ya que incluso una desviación mínima podría afectar al montaje correcto y al aspecto final del piano."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Ajuste exacto de la rueda en la pata del piano de cola",
        "text": "La rueda se ajusta con esmero a la pata del piano de cola ALAUDis para garantizar su asiento correcto, una rodadura suave y la plena estabilidad del instrumento. El artesano controla la posición, la profundidad y la exactitud del ajuste de cada elemento. La precisión en esta etapa repercute tanto en la seguridad de uso como en la estética de toda la estructura."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Entonación final de los macillos, Peter Salisbury",
        "text": "Entonación final de los macillos, realizada por el maestro Peter Salisbury. Es la última etapa, la artística, del trabajo sobre el timbre, en la que se ajustan la respuesta de los macillos, el carácter del ataque, la cantabilidad y el equilibrio sonoro de todo el instrumento."
      }
    ]
  },
  "IT": {
    "eyebrow": "Dalla produzione Alaudis",
    "title": "L’artigianato ripreso in movimento",
    "intro": "Brevi video mostrano come nasce lo strumento: il lavoro delle mani, i dettagli, le superfici, la costruzione e l’atmosfera del laboratorio in cui l’idea di Alaudis diventa un vero pianoforte a coda.",
    "videos": [
      {
        "src": "/historia-video-web/historia-01.mp4",
        "title": "Molatura e adattamento del telaio in ghisa",
        "text": "Preparazione precisa del telaio in ghisa prima di proseguire con il montaggio acustico. Questa fase richiede un adattamento accurato delle superfici di contatto, il controllo dell’appoggio e il rispetto della corretta geometria della struttura del pianoforte."
      },
      {
        "src": "/historia-video-web/historia-02.mp4",
        "title": "Profilatura delle catene della tavola armonica",
        "text": "Sagomatura delle catene, responsabili della stabilità, dell’elasticità e del corretto comportamento acustico della tavola armonica. Il profilo delle catene incide direttamente sul mantenimento della bombatura e sulla risposta della tavola alle vibrazioni."
      },
      {
        "src": "/historia-video-web/historia-03.mp4",
        "title": "Pulizia delle catene dai residui di colla",
        "text": "Lavorazione accurata delle catene dopo le precedenti fasi di incollaggio. Rimuovere la colla in eccesso e preparare superfici pulite consente di preservare la precisione delle giunzioni e l’estetica degli elementi strutturali."
      },
      {
        "src": "/historia-video-web/historia-04.mp4",
        "title": "Levigatura meccanica della tavola armonica",
        "text": "Prima levigatura della tavola armonica con utensili meccanici. Lo scopo di questa fase è spianare la superficie, preparare il materiale alle lavorazioni successive e ottenere la qualità adeguata per i lavori di finitura che seguono."
      },
      {
        "src": "/historia-video-web/historia-05.mp4",
        "title": "Levigatura a mano della tavola armonica",
        "text": "Delicata rifinitura manuale della superficie della tavola armonica. Questa fase consente un maggiore controllo del dettaglio, preserva il carattere naturale del legno e prepara la tavola a lavorare come cuore acustico dello strumento."
      },
      {
        "src": "/historia-video-web/historia-06.mp4",
        "title": "Fresatura della cartella dei ponticelli",
        "text": "Lavorazione di precisione della cartella dei ponticelli. I ponticelli sono tra gli elementi chiave nella trasmissione delle vibrazioni dalle corde alla tavola armonica; per questo la loro geometria, l’altezza e la qualità della superficie richiedono un’accuratezza eccezionale."
      },
      {
        "src": "/historia-video-web/historia-07.mp4",
        "title": "Taglio e adattamento della lunghezza del ponticello degli acuti",
        "text": "Adattamento del ponticello degli acuti alle dimensioni e alla geometria del singolo strumento. La giusta lunghezza e il corretto posizionamento del ponticello sono essenziali per il successivo lavoro delle corde, la trasmissione dell’energia e l’equilibrio sonoro del registro acuto."
      },
      {
        "src": "/historia-video-web/historia-08.mp4",
        "title": "Piallatura meccanica del ponticello degli acuti",
        "text": "Lavorazione del ponticello degli acuti nel rispetto della linea, dell’altezza e del profilo richiesti. Questa fase prepara il ponticello all’adattamento successivo e alla corretta interazione con le corde e la tavola armonica."
      },
      {
        "src": "/historia-video-web/historia-16.mp4",
        "title": "Calibratura manuale della superficie della cassa",
        "text": "Ogni tratto della cassa viene controllato con cura e spianato a mano da un artigiano esperto. La guida precisa dell’utensile permette di eliminare anche le più piccole irregolarità e di preparare la superficie alle fasi di lavorazione successive. È un lavoro impegnativo, in cui contano l’esperienza, la sensibilità per il materiale e il pieno controllo di ogni gesto."
      },
      {
        "src": "/historia-video-web/historia-17.mp4",
        "title": "Spianatura di precisione della cassa",
        "text": "La superficie della cassa viene spianata gradualmente con una smerigliatrice angolare guidata con precisione. L’artigiano controlla costantemente la forma, la linea e lo spessore del materiale, per ottenere una superficie uniforme e stabile. L’unione di un utensile specializzato e di una mano esperta consente di mantenere il pieno controllo in ogni fase della lavorazione."
      },
      {
        "src": "/historia-video-web/historia-18.mp4",
        "title": "Lavorazione tradizionale della cassa con la pialla a mano",
        "text": "La pialla a mano permette all’artigiano di spianare la superficie della cassa con straordinaria accuratezza e di darle gradualmente la forma corretta. Ogni passata dell’utensile asporta un sottile strato di legno: per questo il processo richiede pazienza, esperienza e un’eccellente sensibilità per il materiale. È una tecnica tradizionale di falegnameria, che offre il pieno controllo del dettaglio e consente di raggiungere la massima precisione di esecuzione."
      },
      {
        "src": "/historia-video-web/historia-09.mp4",
        "title": "Fresatura della fascia interna per le catene",
        "text": "Preparazione dei punti della fascia interna in cui verranno alloggiate le catene della tavola armonica. La fresatura consente di ottenere sedi di montaggio precise e di assicurare il giusto sostegno all’intera struttura acustica."
      },
      {
        "src": "/historia-video-web/historia-10.mp4",
        "title": "Lavorazione a scalpello e adattamento manuale delle sedi della tavola armonica",
        "text": "Rifinitura manuale dei punti in cui verrà alloggiata la tavola armonica. Il lavoro con lo scalpello permette di raggiungere un’accuratezza che non sempre si ottiene con le sole macchine, soprattutto nei punti che richiedono un adattamento individuale."
      },
      {
        "src": "/historia-video-web/historia-11.mp4",
        "title": "Incollaggio e serraggio della tavola armonica",
        "text": "L’inserimento della tavola armonica nella struttura dello strumento. La pressione uniforme dei morsetti assicura una giunzione stabile, una perfetta aderenza e l’integrità acustica dell’intero complesso risonante."
      },
      {
        "src": "/historia-video-web/historia-12.mp4",
        "title": "Incollaggio della fascia del pianoforte a coda Alaudis",
        "text": "La fase di incollaggio degli strati che formano la fascia del pianoforte a coda Alaudis. La corretta conduzione del materiale, il controllo delle tensioni e la precisione dell’incollaggio sono decisivi per la stabilità della struttura e per la linea elegante del mobile dello strumento."
      },
      {
        "src": "/historia-video-web/historia-14.mp4",
        "title": "Incollaggio e serraggio della cassa del pianoforte a coda Alaudis",
        "text": "Formatura della cassa del pianoforte a coda mediante incollaggio e pressione controllata con i morsetti. È una delle fasi in cui la maestria costruttiva determina la durata, la stabilità e la geometria finale dello strumento."
      },
      {
        "src": "/historia-video-web/video-19-web.mp4",
        "title": "Adattamento di precisione delle gambe e della lira del pianoforte a coda",
        "text": "Ogni elemento della struttura del pianoforte a coda ALAUDis viene adattato singolarmente da un artigiano esperto. L’adattamento preciso delle gambe e della lira dei pedali assicura la corretta geometria, la stabilità e l’unione perfetta di tutte le parti dello strumento. È una fase che richiede grande accuratezza, perché anche scostamenti minimi potrebbero compromettere il corretto montaggio e l’aspetto finale del pianoforte."
      },
      {
        "src": "/historia-video-web/video-20-web.mp4",
        "title": "Adattamento esatto della rotella nella gamba del pianoforte a coda",
        "text": "La rotella viene adattata con cura alla gamba del pianoforte a coda ALAUDis, per garantirne il corretto alloggiamento, uno scorrimento fluido e la piena stabilità dello strumento. L’artigiano controlla la posizione, la profondità e la precisione di adattamento di ogni elemento. La precisione in questa fase incide tanto sulla sicurezza d’uso quanto sull’estetica dell’intera struttura."
      },
      {
        "src": "/historia-video-web/historia-15.mp4",
        "title": "Intonazione finale dei martelletti, Peter Salisbury",
        "text": "L’intonazione finale dei martelletti, eseguita dal maestro Peter Salisbury. È l’ultima fase, quella artistica, del lavoro sul timbro, in cui si regolano la risposta dei martelletti, il carattere dell’attacco, la cantabilità e l’equilibrio sonoro dell’intero strumento."
      }
    ]
  }
};

// Kadr startowy filmu: /historia-video-web/historia-01.mp4 -> /historia-video-web/posters/historia-01.jpg
export const craftPoster = (src: string) => src.replace("/historia-video-web/", "/historia-video-web/posters/").replace(/\.mp4$/, ".jpg");
