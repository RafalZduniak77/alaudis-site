import { defineArrayMember, defineField, defineType } from "sanity";
import CoverInput from "./CoverInput";

const languages = [{ name: "pl", title: "Polski (PL)" }, { name: "en", title: "Angielski (EN)" }, { name: "de", title: "Niemiecki (DE)" }, { name: "fr", title: "Francuski (FR)" }];
const localizedString = defineType({ name: "galleryLocalizedString", title: "Wersje językowe", type: "object", fields: languages.map(lang => defineField({ ...lang, type: "string", validation: rule => rule.max(240) })) });
const localizedText = defineType({ name: "galleryLocalizedText", title: "Wersje językowe", type: "object", fields: languages.map(lang => defineField({ ...lang, type: "text", rows: 3, validation: rule => rule.max(1000) })) });

const album = defineType({
  name: "galleryAlbum", title: "Album", type: "document",
  groups: [{ name: "details", title: "Dane albumu", default: true }, { name: "photos", title: "Zdjęcia" }, { name: "cover", title: "Okładka" }, { name: "seo", title: "SEO albumu" }],
  initialValue: { category: "instruments" },
  fields: [
    defineField({ name: "title", title: "Tytuł albumu", type: "galleryLocalizedString", group: "details", description: "Uzupełnij polski tytuł. Pozostałe wersje językowe możesz dodać później; do tego czasu wyświetli się wersja polska.", validation: rule => rule.custom(value => (value as { pl?: string } | undefined)?.pl?.trim() ? true : "Wpisz polski tytuł albumu.") }),
    defineField({ name: "slug", title: "Adres albumu", type: "slug", group: "details", description: "Kliknij „Generuj” po wpisaniu tytułu. Adres jest wspólny dla wszystkich języków.", options: { source: doc => (doc.title as { pl?: string })?.pl || "album", maxLength: 96 }, validation: rule => rule.required().custom(value => !value?.current || /^[a-z0-9-]{1,96}$/.test(value.current) ? true : "Adres może zawierać małe litery bez polskich znaków, cyfry i myślniki.") }),
    defineField({ name: "category", title: "Dział", type: "string", group: "details", options: { list: [{ title: "Instrumenty", value: "instruments" }, { title: "Rzemiosło", value: "craft" }, { title: "Wydarzenia", value: "events" }], layout: "radio" }, validation: rule => rule.required() }),
    defineField({ name: "date", title: "Data (opcjonalnie)", type: "date", group: "details", options: { dateFormat: "DD.MM.YYYY" } }),
    defineField({ name: "location", title: "Miejsce (opcjonalnie)", type: "string", group: "details", validation: rule => rule.max(150) }),
    defineField({ name: "description", title: "Krótki opis", type: "galleryLocalizedText", group: "details" }),
    defineField({ name: "seoTitle", title: "Tytuł SEO albumu", type: "galleryLocalizedString", group: "seo", description: "Opcjonalny tytuł strony dla wyszukiwarek i karty przeglądarki. Jeśli pozostawisz puste, użyjemy tytułu albumu. Podgląd próbny nie jest indeksowany." }),
    defineField({ name: "seoDescription", title: "Opis SEO albumu", type: "galleryLocalizedText", group: "seo", description: "Krótko opisz temat albumu naturalnym językiem. To opis strony w metadanych; nie zmienia tekstu widocznego pod okładką. Jeśli pole jest puste, użyjemy krótkiego opisu albumu." }),
    defineField({ name: "author", title: "Wspólny autor zdjęć", type: "string", group: "details", description: "Ten podpis pojawi się przy każdym zdjęciu, które nie ma wpisanego własnego autora.", validation: rule => rule.max(160) }),
    defineField({
      name: "photos", title: "Zdjęcia w albumie", type: "array", group: "photos", description: "Przeciągnij tutaj wiele plików jednocześnie (JPG, PNG, WebP lub AVIF). Przesuwaj miniaturki, aby zmienić kolejność. Kliknij zdjęcie, aby uzupełnić SEO i autora. Przed przesłaniem warto nadać plikowi opisową nazwę, np. alaudis-leo-214-mechanizm.jpg.", options: { layout: "grid", sortable: true },
      of: [defineArrayMember({
        type: "image", title: "Zdjęcie", options: { accept: "image/jpeg,image/png,image/webp,image/avif" },
        fields: [
          defineField({ name: "caption", title: "Tytuł zdjęcia (SEO)", type: "galleryLocalizedString", description: "Np. ALAUDIS LEO 214 — mechanizm fortepianowy. Używany w danych opisujących fotografię i w panelu. Nie wyświetla się jako nazwa nad zdjęciem." }),
          defineField({ name: "seoDescription", title: "Opis zdjęcia (SEO)", type: "galleryLocalizedText", description: "Opisz to, co widać na fotografii: instrument, detal, miejsce lub wydarzenie. Opis trafia do danych zdjęcia i jest dostępny dla czytników ekranu. Pisz naturalnie, bez list powtarzanych słów kluczowych." }),
          defineField({ name: "alt", title: "Tekst alternatywny (ALT)", type: "galleryLocalizedString", description: "Krótki opis zawartości zdjęcia dla osób korzystających z czytnika ekranu i wyszukiwarek. Gdy pole jest puste, strona wykorzysta tytuł SEO zdjęcia lub tytuł albumu.", validation: rule => rule.custom(value => (value as { pl?: string } | undefined)?.pl?.trim() ? true : "Warto dodać polski opis zawartości zdjęcia.").warning() }),
          defineField({ name: "author", title: "Autor tego zdjęcia", type: "string", description: "Pozostaw puste, aby użyć wspólnego autora albumu.", validation: rule => rule.max(160) }),
        ],
        preview: { select: { title: "caption.pl", subtitle: "author", media: "asset" }, prepare: ({ title, subtitle, media }) => ({ title: title || "Zdjęcie — kliknij, aby opisać", subtitle: subtitle || "Autor z albumu", media }) },
        validation: rule => rule.required().assetRequired(),
      })],
      validation: rule => rule.required().min(1).max(2000),
    }),
    defineField({ name: "coverKey", title: "Wybierz okładkę", type: "string", group: "cover", description: "Kliknij miniaturkę. Okładka korzysta z tego samego zdjęcia co album — nie przesyłasz pliku ponownie.", components: { input: CoverInput }, validation: rule => rule.required().custom((value, context) => !value || (context.document?.photos as { _key: string }[] | undefined)?.some(photo => photo._key === value) ? true : "Wybrane zdjęcie zostało usunięte. Wybierz nową okładkę.") }),
  ],
  preview: { select: { title: "title.pl", category: "category", media: "photos.0.asset" }, prepare: ({ title, category, media }) => ({ title: title || "Nowy album", subtitle: ({ instruments: "Instrumenty", craft: "Rzemiosło", events: "Wydarzenia" } as Record<string, string>)[category] || "Album", media }) },
});

export const gallerySchema = [localizedString, localizedText, album];
