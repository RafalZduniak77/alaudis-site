# ALAUDIS

Next.js, React i TypeScript. `npm ci`, następnie `npm run dev`.

## Galeria — osobna wersja próbna

Praca odbywa się na gałęzi `preview/gallery-cms`. Nie łączyć jej z `main` i nie promować wdrożenia na produkcję bez wyraźnej zgody właściciela. `alaudis.eu` pozostaje na dotychczasowej wersji. Wszystkie trasy galerii mają `noindex, nofollow`.

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

Bez identyfikatora projektu wyświetlane są **jawnie oznaczone, statyczne albumy demonstracyjne**. Nie jest to działający CMS i nie udajemy możliwości zapisu. Po połączeniu źródłem treści staje się Sanity; błąd jego API pokazuje komunikat błędu, nie zastępuje treści demonstracją.

## Obsługa panelu

1. Otworzyć `/panel-galerii`, zalogować się i wybrać „Wszystkie albumy” → nowy album.
2. W „Dane albumu” wpisać tytuł, wygenerować adres, wybrać dział, dodać opis i wspólnego autora. Data i miejsce są opcjonalne. Rozwinąć pola językowe, aby wpisać tłumaczenia PL/EN/DE/FR. Brak tłumaczenia korzysta z wersji polskiej.
3. W „Zdjęcia” przeciągnąć jednocześnie wiele plików JPG/PNG/WebP/AVIF. Zmienić kolejność przez przeciąganie miniaturek. Kliknięcie zdjęcia otwiera podpis, tekst alternatywny i opcjonalnego autora nadpisującego autora albumu.
4. W „Okładka” kliknąć miniaturkę. Zmiana kolejności nie zmienia wybranej okładki. Po usunięciu zdjęcia okładkowego trzeba wybrać nowe.
5. Studio automatycznie zapisuje szkic. „Opublikuj” udostępnia album w galerii. Późniejsze zdjęcia i poprawki również wymagają publikacji zmian. Menu obok publikacji pozwala wycofać album bez kasowania jego danych.

## Dane, obrazy i odświeżanie

- Albumy i oryginały są trwale przechowywane w Sanity Content Lake/Assets. Każde zdjęcie istnieje raz; języki są polami tego samego dokumentu.
- Strona i API odczytują tylko dokumenty opublikowane, pomijając szkice i wersje robocze wydań. Brak publicznych endpointów do zapisu.
- Każde odświeżenie pobiera dane bezpośrednio z Content Lake (`useCdn: false` / domena `api.sanity.io`, `cache: no-store`, trasy dynamiczne). Nie ma cache stron ani zależności od webhooków/deploymentu. Docelowe maksimum 60 sekund należy potwierdzić testem prawdziwej publikacji po połączeniu konta.
- Lista albumów pobiera 12 pozycji, album 24 zdjęcia na partię. Lightbox doładowuje kolejną partię przy końcu. Kontrola wersji albumu zapobiega mieszaniu starej i nowej kolejności przy doładowywaniu.
- Miniaturki mają `srcset`, `sizes`, wymiary i lazy loading. Sanity CDN generuje skompresowane warianty 320–3840 px; lightbox także nie pobiera pełnych oryginałów fotografa. Demonstracja używa optymalizatora Next.js dla istniejących lokalnych zdjęć.
- Yet Another React Lightbox: gesty, powiększenie, strzałki, klawiatura, podpis, autor, przywracanie fokusu i pozycji, ograniczenie animacji zgodnie z `prefers-reduced-motion`.

## Weryfikacja

```bash
npm run test:gallery
npm run build
```

Testy zapytań GROQ działają na lokalnych danych: rozdzielenie szkiców/publikacji, wybór okładki po zmianie kolejności, 31 zdjęć w partiach 24 + 7 oraz ograniczone rozmiary wariantów. Nie zastępują testu działającego CMS.

Przed uznaniem panelu za gotowy trzeba na połączonym projekcie sprawdzić w przeglądarce: nowy szkic, przesłanie 30 zdjęć jednocześnie, zmianę kolejności i okładki, publikację, dodanie kolejnych zdjęć bez zmiany kodu, ponowną publikację, wycofanie oraz widoczność każdej zmiany po odświeżeniu w ciągu 60 sekund. Oddzielnie sprawdzić logowanie i obsługę na rzeczywistym iPadzie/iPhonie; emulacja dotyku nie jest testem Safari na urządzeniu.

## Koszty wariantu

Stan cenników sprawdzony 17.10.2026:

- [Sanity Free](https://www.sanity.io/pricing): **0 USD/mies.**; 2 publiczne datasety, do 20 użytkowników, 100 GB plików i 100 GB transferu miesięcznie, 250 tys. bezpośrednich odczytów API miesięcznie. Przy przekroczeniu limitów trzeba zmienić plan; Free nie oferuje płatnych nadwyżek. Właściciel edytuje jako Administrator; oddzielna rola Editor wymaga Growth.
- Opcjonalny Sanity Growth: **15 USD za użytkownika/mies.**; nadwyżki plików 0,50 USD/GB, transferu 0,30 USD/GB. Nie jest automatycznie włączany.
- [Vercel](https://vercel.com/pricing): podgląd korzysta z istniejącego projektu i jego limitów. Nie ma osobnej stałej opłaty za każdy Preview, ale obowiązują rozliczenia użycia konta. Pro zaczyna się od **20 USD/mies.** za miejsce developera plus ewentualne zużycie. Nie zweryfikowano aktualnego planu ani rachunków właściciela. [Hobby](https://vercel.com/docs/plans/hobby) przeznaczony jest do użytku osobistego i niekomercyjnego.
- Lightbox: biblioteka na licencji MIT, bez opłaty licencyjnej.

Nie uruchomiono nowego płatnego planu. Bez dostępu do rozliczeń nie można obiecać zerowego całkowitego kosztu hostingu.

## Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
