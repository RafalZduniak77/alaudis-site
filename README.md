# ALAUDIS

Next.js, React i TypeScript. `npm ci`, następnie `npm run dev`.

## Galeria — osobna wersja próbna

Praca odbywa się na gałęzi `preview/gallery-cms`. 17.10.2026 właściciel zatwierdził publikację galerii i menu „W KADRZE” na `alaudis.eu` po wyrównaniu dolnych linii kart albumów. Podglądy nadal mają `noindex, nofollow`; produkcja dopuszcza indeksowanie galerii i wskazuje adresy kanoniczne w domenie `alaudis.eu`.

Produkcja wyświetla zaakceptowane dwa albumy z istniejącymi zdjęciami ALAUDIS. Samo wdrożenie nie uruchamia CMS: panel samodzielnego przesyłania zdjęć nadal oczekuje na połączenie Sanity. `next.config.ts` przekazuje typ wdrożenia do wspólnej konfiguracji serwera i Studio. Produkcyjny dataset to `gallery`, a próbny to `gallery_preview`; treści próbnego CMS nie są odczytywane na produkcji. Skrypt importu przykładowego nadal zezwala wyłącznie na `gallery_preview`.

Do późniejszego uruchomienia panelu produkcyjnego potrzebne są: publiczny dataset `gallery`, `NEXT_PUBLIC_SANITY_PROJECT_ID` w środowisku Vercel Production, CORS z poświadczeniami dla dokładnego adresu `https://alaudis.eu` oraz dostęp właściciela do projektu Sanity. Opublikowanie albumów w tym zbiorze zastąpi statyczną kolekcję; przed przełączeniem trzeba przygotować jej treść. Nie utworzono konta, datasetu ani płatnego planu w ramach samej publikacji strony.

Pierwszy podgląd został zbudowany przez Vercel: [galeria](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/galeria), [album](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/galeria/forma-i-brzmienie), [adres panelu](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/panel-galerii). Vercel wymaga zalogowania na konto mające dostęp do projektu. Aby udostępnić podgląd bez logowania do hostingu, właściciel może utworzyć link „Share” dla tego wdrożenia w Vercel. Nie trzeba wyłączać ochrony całego projektu.

Trasy podglądu:

- `/galeria` — albumy i filtry działów.
- `/galeria/forma-i-brzmienie` — przykładowy album.
- `/panel-galerii` — Sanity Studio po podłączeniu projektu; wcześniej czytelny komunikat o brakującym połączeniu.
- `/en/galeria`, `/de/galeria`, `/fr/galeria` — pozostałe języki, te same zdjęcia i adresy albumów.

## Jednorazowe połączenie CMS

1. Zalogować właściciela przez `npx sanity login` i utworzyć projekt Sanity w planie Free. Nie przesyłać haseł ani tokenów w rozmowie.
2. Utworzyć **publiczny** dataset `gallery_preview`. Nazwa jest celowo ustalona w kodzie. Galeria próbna nie korzysta z danych produkcyjnych.
3. W `.env.local` ustawić `NEXT_PUBLIC_SANITY_PROJECT_ID=<identyfikator projektu>`. Ten identyfikator jest publiczny, nie jest kluczem do zapisu.
4. W Vercel ustawić tę samą zmienną **wyłącznie w środowisku Preview, dla gałęzi `preview/gallery-cms`** i ponownie zbudować ten podgląd. Nie dodawać jej do Production.
5. W Sanity → API → CORS origins dodać dokładny adres HTTPS podglądu (bez ścieżki), zaznaczając dostęp z poświadczeniami. Do pracy lokalnej dodać osobno `http://localhost:3000`. Nie używać wildcard.
6. Przydzielić właścicielowi projektu rolę Administrator. Panel używa logowania i uprawnień Sanity. Publiczne API strony obsługuje wyłącznie odczyt; w repozytorium i kodzie przeglądarki nie ma wspólnego tokenu zapisu.
7. Opcjonalnie uruchomić `npm run cms:seed`, aby przesłać fotografie ALAUDIS z repozytorium i utworzyć dwa przykładowe albumy w CMS. Skrypt wymaga zalogowanego użytkownika, działa tylko na `gallery_preview` i pomija już istniejące albumy.

Bez identyfikatora projektu wyświetlane są **statyczne, zatwierdzone albumy z archiwum ALAUDIS**. Nie jest to działający CMS; panel wyjaśnia brak możliwości zapisu. Po połączeniu źródłem treści staje się Sanity; błąd jego API pokazuje komunikat błędu, nie zastępuje treści kolekcją statyczną.

## Obsługa panelu

1. Otworzyć `/panel-galerii`, zalogować się i wybrać „Wszystkie albumy” → nowy album.
2. W „Dane albumu” wpisać tytuł, wygenerować adres, wybrać dział, dodać opis i wspólnego autora. Data i miejsce są opcjonalne. Rozwinąć pola językowe, aby wpisać tłumaczenia PL/EN/DE/FR. Brak tłumaczenia korzysta z wersji polskiej.
3. W „Zdjęcia” przeciągnąć jednocześnie wiele plików JPG/PNG/WebP/AVIF. Zmienić kolejność przez przeciąganie miniaturek. Kliknięcie zdjęcia otwiera **Tytuł zdjęcia (SEO)**, **Opis zdjęcia (SEO)**, **Tekst alternatywny (ALT)** w czterech językach oraz opcjonalnego autora nadpisującego autora albumu. Tytuł zdjęcia nie jest widocznym napisem w galerii.
4. W „Okładka” kliknąć miniaturkę. Zmiana kolejności nie zmienia wybranej okładki. Po usunięciu zdjęcia okładkowego trzeba wybrać nowe.
5. Studio automatycznie zapisuje szkic. „Opublikuj” udostępnia album w galerii. Późniejsze zdjęcia i poprawki również wymagają publikacji zmian. Menu obok publikacji pozwala wycofać album bez kasowania jego danych.

Zakładka „SEO albumu” pozwala ustawić osobny tytuł i opis strony dla wyszukiwarek; puste pola korzystają z tytułu i opisu albumu. Strona generuje metadane albumu, obraz udostępniania oraz dane `ImageGallery`/`ImageObject` dla widocznej partii zdjęć. ALT trafia do standardowego elementu `img`, a dodatkowy opis jest dostępny dla czytników ekranu. Nie dodajemy pól z listami słów kluczowych. Podgląd nadal ma `noindex, nofollow`; produkcja pozwala na indeksowanie, podaje adresy kanoniczne i odpowiedniki językowe PL/EN/DE/FR. Nie zgłaszano osobnej mapy obrazów w Google Search Console. [Wytyczne Google dla zdjęć](https://developers.google.com/search/docs/appearance/google-images).

## Dane, obrazy i odświeżanie

- Albumy i oryginały są trwale przechowywane w Sanity Content Lake/Assets. Każde zdjęcie istnieje raz; języki są polami tego samego dokumentu.
- Strona i API odczytują tylko dokumenty opublikowane, pomijając szkice i wersje robocze wydań. Brak publicznych endpointów do zapisu.
- Każde odświeżenie pobiera dane bezpośrednio z Content Lake (`useCdn: false` / domena `api.sanity.io`, `cache: no-store`, trasy dynamiczne). Nie ma cache stron ani zależności od webhooków/deploymentu. Docelowe maksimum 60 sekund należy potwierdzić testem prawdziwej publikacji po połączeniu konta.
- Lista albumów pobiera 12 pozycji, album 24 zdjęcia na partię. Lightbox doładowuje kolejną partię przy końcu. Kontrola wersji albumu zapobiega mieszaniu starej i nowej kolejności przy doładowywaniu.
- Miniaturki mają `srcset`, `sizes`, wymiary i lazy loading. Sanity CDN generuje skompresowane warianty; dłuższa krawędź jest ograniczona do 3840 px także dla pionowych zdjęć i panoram. Lightbox dobiera rozdzielczość do ekranu, jego gęstości pikseli i zoomu; zachowuje dotychczasowy obraz podczas doładowywania większej wersji. Pobiera bieżące zdjęcie i najwyżej dwóch sąsiadów, nie cały album w wysokiej rozdzielczości. Oryginały fotografa pozostają w CMS. Demonstracja używa optymalizatora Next.js dla istniejących lokalnych zdjęć.
- Yet Another React Lightbox: pełny ekran automatycznie, jeśli pozwala na to przeglądarka, a w pozostałych przypadkach całe dostępne okno. Zdjęcie wykorzystuje maksymalną powierzchnię z zachowaniem proporcji i całego kadru; nie ma dodatkowych odstępów ani widocznych nazw zdjęć. Pozostają gesty, powiększenie, strzałki, klawiatura, autor i licznik (można je ukryć), przywracanie fokusu i pozycji oraz ograniczenie animacji zgodnie z `prefers-reduced-motion`.

## Weryfikacja

```bash
npm run test:gallery
npm run build
```

Testy zapytań GROQ działają na lokalnych danych: rozdzielenie szkiców/publikacji, wybór okładki po zmianie kolejności, 31 zdjęć w partiach 24 + 7 oraz ograniczone rozmiary wariantów. Nie zastępują testu działającego CMS.

Sprawdzone na lokalnym buildzie 17.10.2026: wszystkie cztery języki, szerokości 320/390/768/1024/1440 px, filtrowanie, klawiatura, utrzymanie fokusu w lightboxie, powrót do zdjęcia i pozycji przewijania, pomniejszone pliki zdjęć, ograniczenie animacji oraz swipe/pinch w emulacji telefonu i iPada w Chromium. Testy, TypeScript, ESLint zmienionych plików i `npm run build` przeszły. Vercel potwierdził udane wdrożenie Preview; dostęp bez sesji Vercel zwraca przekierowanie do logowania, więc zdalnych testów przeglądarkowych jeszcze nie wykonano.

Dodatkowo sprawdzono natywny pełny ekran, wypełnienie dostępnego obszaru bez kadrowania, ukrywanie autora/licznika, brak widocznych nazw zdjęć i powrót do albumu. W pomiarze przeglądarki podgląd pobrał 3 warianty zdjęć (bieżące + sąsiedzi), a miniaturki na komputerze miały do 640 px; miniatura okładki mogła ponownie użyć już pobranego większego pliku z pamięci. Osobny test obejmuje brak obsługi Fullscreen API. Metadane albumów i obrazów sprawdzono dla czterech języków, a ograniczenie dłuższej krawędzi do 3840 px dla oryginałów 12000×8000, 8000×12000 i 24000×4000 px — testem funkcji generującej warianty, bez przesyłania tych oryginałów do CMS.

Sanity nie jest jeszcze połączone. Nie zweryfikowano rzeczywistego przesłania 30 zdjęć, przeciągania w Studio, publikacji, aktualizacji i wycofania ani czasu odświeżenia danych z działającego CMS. Pełne kryterium ukończenia pozostaje otwarte.

Ponowny audyt przed publikacją 17.10.2026 (`npm audit --omit=dev`): 0 krytycznych, 9 wysokich i 9 umiarkowanych zgłoszeń w zależnościach Sanity (m.in. narzędzia CLI, glob, YAML/TOML, UUID). Automatyczne poprawki zgodne z wersjami zastosowano wcześniej. Pozostałe propozycje wymagają cofnięcia głównych wersji Sanity i next-sanity; nie zastosowano automatycznego downgrade. Nie jest to audyt potwierdzający brak podatności.

Przed uznaniem panelu za gotowy trzeba na połączonym projekcie sprawdzić w przeglądarce: nowy szkic, przesłanie 30 zdjęć jednocześnie, zmianę kolejności i okładki, publikację, dodanie kolejnych zdjęć bez zmiany kodu, ponowną publikację, wycofanie oraz widoczność każdej zmiany po odświeżeniu w ciągu 60 sekund. Oddzielnie sprawdzić logowanie i obsługę na rzeczywistym iPadzie/iPhonie; emulacja dotyku nie jest testem Safari na urządzeniu.

## Koszty wariantu

Stan cenników sprawdzony 17.10.2026:

- [Sanity Free](https://www.sanity.io/pricing): **0 USD/mies.**; 2 publiczne datasety, do 20 użytkowników, 100 GB plików i 100 GB transferu miesięcznie, 250 tys. bezpośrednich odczytów API miesięcznie. Przy przekroczeniu limitów trzeba zmienić plan; Free nie oferuje płatnych nadwyżek. Właściciel edytuje jako Administrator; oddzielna rola Editor wymaga Growth.
- Opcjonalny Sanity Growth: **15 USD za użytkownika/mies.**; nadwyżki plików 0,50 USD/GB, transferu 0,30 USD/GB. Nie jest automatycznie włączany.
- [Vercel](https://vercel.com/pricing): podgląd korzysta z istniejącego projektu i jego limitów. Nie ma osobnej stałej opłaty za każdy Preview, ale obowiązują rozliczenia użycia konta. Pro zaczyna się od **20 USD/mies.** za miejsce developera plus ewentualne zużycie. Nie zweryfikowano aktualnego planu ani rachunków właściciela. [Hobby](https://vercel.com/docs/plans/hobby) przeznaczony jest do użytku osobistego i niekomercyjnego.
- Lightbox: biblioteka na licencji MIT, bez opłaty licencyjnej.

Nie uruchomiono nowego płatnego planu. Bez dostępu do rozliczeń nie można obiecać zerowego całkowitego kosztu hostingu.
