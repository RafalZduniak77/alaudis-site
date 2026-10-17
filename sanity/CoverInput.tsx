import { set, useFormValue, type StringInputProps } from "sanity";
import { galleryDataset, galleryProjectId } from "@/lib/gallery/config";

type PhotoValue = { _key: string; asset?: { _ref?: string }; caption?: { pl?: string } };

export default function CoverInput(props: StringInputProps) {
  const photos = (useFormValue(["photos"]) as PhotoValue[] | undefined) || [];
  const items = photos.filter(photo => photo.asset?._ref);
  const hasSelection = items.some(photo => photo._key === props.value);
  if (!items.length) return <p style={{ fontSize: 14, lineHeight: 1.7 }}>Najpierw dodaj zdjęcia w zakładce „Zdjęcia”, a następnie wybierz tutaj okładkę.</p>;
  return <div role="radiogroup" aria-label="Wybierz zdjęcie na okładkę" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: 12 }}>
    {items.map((photo, index) => {
      const asset = photo.asset!._ref!.match(/^image-(.+)-(\d+x\d+)-([a-z0-9]+)$/);
      if (!asset) return null;
      const selected = props.value === photo._key;
      return <button key={photo._key} type="button" role="radio" aria-checked={selected} disabled={props.readOnly} aria-label={`Okładka: ${photo.caption?.pl || `zdjęcie ${index + 1}`}`} tabIndex={selected || (!hasSelection && index === 0) ? 0 : -1}
        onClick={() => props.onChange(set(photo._key))}
        onKeyDown={event => {
          if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : (index + (event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1) + items.length) % items.length;
          props.onChange(set(items[next]._key));
          const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("button");
          buttons?.[next]?.focus();
        }}
        style={{ padding: 5, border: `2px solid ${selected ? "#2276fc" : "#ccd0d8"}`, borderRadius: 8, cursor: "pointer", background: selected ? "#e8f0ff" : "white", color: "#171a20" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://cdn.sanity.io/images/${galleryProjectId}/${galleryDataset}/${asset[1]}-${asset[2]}.${asset[3]}?w=240&h=160&fit=crop&auto=format&q=70`} alt="" width={240} height={160} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "3/2", objectFit: "cover", borderRadius: 4 }} />
        <span style={{ display: "block", fontSize: 12, padding: "8px 0" }}>{selected ? "✓ Wybrana okładka" : `Zdjęcie ${index + 1}`}</span>
      </button>;
    })}
  </div>;
}
