// ==========================================================
// RZEMIOSŁO — FILMY Z PRODUKCJI (PL / EN / DE / FR)
// ==========================================================

export type CraftLanguage = "PL" | "EN" | "DE" | "FR";
export type CraftVideo = { src: string; title: string; text: string; poster?: string };

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
  }
};

// Kadr startowy filmu: /historia-video-web/historia-01.mp4 -> /historia-video-web/posters/historia-01.jpg
export const craftPoster = (src: string) => src.replace("/historia-video-web/", "/historia-video-web/posters/").replace(/\.mp4$/, ".jpg");
