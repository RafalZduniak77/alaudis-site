# ALAUDIS

Next.js, React i TypeScript. `npm ci`, następnie `npm run dev`.

## Galeria i Sanity

Galeria i menu „W KADRZE” zostały zatwierdzone przez właściciela do publikacji na `alaudis.eu`. Połączenie Sanity przygotowano na gałęzi `setup/sanity-gallery`. Podglądy mają `noindex, nofollow`; produkcja dopuszcza indeksowanie galerii i wskazuje adresy kanoniczne w domenie `alaudis.eu`.

Sanity jest połączone z projektem **ALAUDIS Galeria** (`5pcn3xw4`) w organizacji **ALAUDIS**. Właściciel loguje się przez GitHub kontem `RafalZduniak77`. Zaimportowano dwa zatwierdzone albumy, łącznie 14 zdjęć, zachowując adresy, kolejność zdjęć, okładki i cztery wersje językowe. Panel: [alaudis.eu/panel-galerii](https://alaudis.eu/panel-galerii). Ustawienia projektu: [Sanity Manage](https://www.sanity.io/manage/project/5pcn3xw4).

`next.config.ts` przekazuje typ wdrożenia do wspólnej konfiguracji serwera i Studio. Produkcyjny dataset to `gallery`, a próbny to `gallery_preview`; oba są publiczne. Lokalne uruchomienie i Vercel Preview odczytują wyłącznie dane próbne. Produkcja odczytuje `gallery`. Publiczny identyfikator projektu jest zapisany w `lib/gallery/config.ts`; opcjonalna zmienna `NEXT_PUBLIC_SANITY_PROJECT_ID` pozwala go nadpisać. Nie jest to token ani uprawnienie zapisu.

Pierwszy podgląd został zbudowany przez Vercel: [galeria](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/galeria), [album](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/galeria/forma-i-brzmienie), [adres panelu](https://alaudis-site-5iwt3h5az-alaudis-dream-s-projects.vercel.app/panel-galerii). Vercel wymaga zalogowania na konto mające dostęp do projektu. Aby udostępnić podgląd bez logowania do hostingu, właściciel może utworzyć link „Share” dla tego wdrożenia w Vercel. Nie trzeba wyłączać ochrony całego projektu.

Trasy podglądu:

- `/galeria` — albumy i filtry działów.
- `/galeria/forma-i-brzmienie` — przykładowy album.
- `/panel-galerii` — polski panel Sanity Studio wymagający logowania do Sanity.
- `/en/galeria`, `/de/galeria`, `/fr/galeria` — pozostałe języki, te same zdjęcia i adresy albumów.

## Konfiguracja CMS

1. Logowanie do CLI: `npx sanity login`. Nie przesyłać haseł ani tokenów w rozmowie; nie dodawać tokenów do repozytorium ani zmiennych `NEXT_PUBLIC_*`.
2. Zbiory `gallery` i `gallery_preview` są już utworzone. Nie trzeba łączyć kolejnej bazy ani magazynu plików.
3. CORS z poświadczeniami jest skonfigurowany dla `https://alaudis.eu` oraz lokalnego `http://localhost:3100`. Dla nowego podglądu dodać w Sanity → API → CORS origins jego dokładny adres HTTPS, bez ścieżki. Nie używać wildcard.
4. Panel korzysta z logowania i uprawnień Sanity. Publiczne API strony obsługuje wyłącznie odczyt; w repozytorium i kodzie strony nie ma wspólnego tokenu zapisu. Funkcje galerii nie wymagają płatnych dodatków Studio.
5. `npm run cms:seed` importuje albumy archiwalne tylko do `gallery_preview`. Jawne `npm run cms:seed:production` służy do migracji zatwierdzonej kolekcji do `gallery`. Oba polecenia wymagają zalogowanego użytkownika i pomijają istniejące albumy, również szkice z tym samym adresem. Import produkcyjny został już wykonany.

Źródłem opublikowanych treści jest Sanity; błąd jego API pokazuje komunikat błędu, nie zastępuje treści kolekcją statyczną. Import nie uruchamia nowego płatnego planu. Sanity może przyznać automatyczny, czasowy dostęp próbny do płatnych funkcji, których ta galeria nie potrzebuje.

## Obsługa panelu

1. Otworzyć `/panel-galerii`, zalogować się i wybrać „Wszystkie albumy” → nowy album.
2. W „Dane albumu” wpisać tytuł, wygenerować adres, wybrać dział, dodać opis i wspólnego autora. Data i miejsce są opcjonalne. Rozwinąć pola językowe, aby wpisać tłumaczenia PL/EN/DE/FR. Brak tłumaczenia korzysta z wersji polskiej.
3. W „Zdjęcia” przeciągnąć jednocześnie wiele plików JPG/PNG/WebP/AVIF. Zmienić kolejność przez przeciąganie miniaturek. Kliknięcie zdjęcia otwiera **Tytuł zdjęcia (SEO)**, **Opis zdjęcia (SEO)**, **Tekst alternatywny (ALT)** w czterech językach oraz opcjonalnego autora nadpisującego autora albumu. Tytuł zdjęcia nie jest widocznym napisem w galerii.
4. W „Okładka” kliknąć miniaturkę. Zmiana kolejności nie zmienia wybranej okładki. Po usunięciu zdjęcia okładkowego trzeba wybrać nowe.
5. Studio automatycznie zapisuje szkic. „Publikuj” / „Opublikuj” udostępnia album w galerii. Późniejsze zdjęcia i poprawki również wymagają publikacji zmian. Aby wycofać album, wybrać **„Opublikowane” nad formularzem → „Cofnij publikację” na dole** i potwierdzić. Album i zdjęcia pozostają zapisane jako szkic.

Zakładka „SEO albumu” pozwala ustawić osobny tytuł i opis strony dla wyszukiwarek; puste pola korzystają z tytułu i opisu albumu. Strona generuje metadane albumu, obraz udostępniania oraz dane `ImageGallery`/`ImageObject` dla widocznej partii zdjęć. ALT trafia do standardowego elementu `img`, a dodatkowy opis jest dostępny dla czytników ekranu. Nie dodajemy pól z listami słów kluczowych. Podgląd nadal ma `noindex, nofollow`; produkcja pozwala na indeksowanie, podaje adresy kanoniczne i odpowiedniki językowe PL/EN/DE/FR. Nie zgłaszano osobnej mapy obrazów w Google Search Console. [Wytyczne Google dla zdjęć](https://developers.google.com/search/docs/appearance/google-images).

## Dane, obrazy i odświeżanie

- Albumy i oryginały są trwale przechowywane w Sanity Content Lake/Assets. Każde zdjęcie istnieje raz; języki są polami tego samego dokumentu.
- Strona i API odczytują tylko dokumenty opublikowane, pomijając szkice i wersje robocze wydań. Brak publicznych endpointów do zapisu.
- Każde odświeżenie pobiera dane bezpośrednio z Content Lake (`useCdn: false` / domena `api.sanity.io`, `cache: no-store`, trasy dynamiczne). Nie ma cache stron ani zależności od webhooków/deploymentu. W rzeczywistym teście aktualizacja albumu z 30 do 31 zdjęć była widoczna po 1,3 sekundy od kliknięcia publikacji.
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

Po połączeniu Sanity sprawdzono w zalogowanej przeglądarce na osobnym zbiorze `gallery_preview`: utworzenie szkicu, przeciągnięcie 30 plików JPG jednocześnie, trwały zapis, przeciąganie miniaturek, zmianę okładki niezależnie od kolejności, edycję SEO zdjęcia w PL/EN/DE/FR i autora pojedynczego zdjęcia. Publikacja udostępniła album publicznie; dodanie 31. zdjęcia i zmiana okładki były widoczne po 1,3 sekundy bez wdrożenia. Cofnięcie publikacji usunęło album z publicznego API po 1,2 sekundy, zachowując szkic i wszystkie zdjęcia.

Publiczny odczyt rzeczywistych danych CMS przeszedł test czterech języków, ALT, danych `ImageObject`, wspólnego autora i nadpisania przy pojedynczej fotografii, partii 24 + 6 / 24 + 7 oraz galerii i lightboxa przy szerokościach 390/820/1440 px. Szkic dodanego zdjęcia nie był widoczny publicznie przed publikacją. Próba 30 plików używała kopii jednego zdjęcia, więc potwierdza obsługę wielu plików i kolejności, a nie transfer 30 różnych oryginałów z aparatu.

Bez sesji użytkownika panel pokazuje logowanie Sanity (GitHub, Google lub e-mail/hasło); formularz edycji jest niedostępny. Anonimowy odczyt API Sanity nie zwraca szkicu albumu. Nie zapisano tokenów sesji testowej w repozytorium ani w plikach stanu przeglądarki.

Ponowny audyt przed publikacją 17.10.2026 (`npm audit --omit=dev`): 0 krytycznych, 9 wysokich i 9 umiarkowanych zgłoszeń w zależnościach Sanity (m.in. narzędzia CLI, glob, YAML/TOML, UUID). Automatyczne poprawki zgodne z wersjami zastosowano wcześniej. Pozostałe propozycje wymagają cofnięcia głównych wersji Sanity i next-sanity; nie zastosowano automatycznego downgrade. Nie jest to audyt potwierdzający brak podatności.

Nie testowano logowania ani gestów na fizycznym iPadzie/iPhonie; emulacja w Chromium nie jest testem Safari na urządzeniu. Pomiar czasu odświeżenia dotyczy próbnego CMS i lokalnego serwera z produkcyjnym buildem, korzystającego z tego samego mechanizmu odczytu co Vercel.

## Koszty wariantu

Stan cenników sprawdzony 17.10.2026:

- [Sanity Free](https://www.sanity.io/pricing): **0 USD/mies.**; 2 publiczne datasety, do 20 użytkowników, 100 GB plików i 100 GB transferu miesięcznie, 250 tys. bezpośrednich odczytów API miesięcznie. Przy przekroczeniu limitów trzeba zmienić plan; Free nie oferuje płatnych nadwyżek. Właściciel edytuje jako Administrator; oddzielna rola Editor wymaga Growth.
- Opcjonalny Sanity Growth: **15 USD za użytkownika/mies.**; nadwyżki plików 0,50 USD/GB, transferu 0,30 USD/GB. Nie zamówiono płatnej subskrypcji. Nowy projekt otrzymał automatyczny, bezpłatny okres dostępu do dodatkowych funkcji; galeria nie jest od nich zależna.
- [Vercel](https://vercel.com/pricing): podgląd korzysta z istniejącego projektu i jego limitów. Nie ma osobnej stałej opłaty za każdy Preview, ale obowiązują rozliczenia użycia konta. Pro zaczyna się od **20 USD/mies.** za miejsce developera plus ewentualne zużycie. Nie zweryfikowano aktualnego planu ani rachunków właściciela. [Hobby](https://vercel.com/docs/plans/hobby) przeznaczony jest do użytku osobistego i niekomercyjnego.
- Lightbox: biblioteka na licencji MIT, bez opłaty licencyjnej.

Nie uruchomiono nowego płatnego planu. Bez dostępu do rozliczeń nie można obiecać zerowego całkowitego kosztu hostingu.
