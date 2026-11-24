// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// Wersja językowa: IT
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("it", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="model214" />
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Modello di alta gamma"
        title={["ALAUDIS", "LEO 214"]}
        description="Più profondo, più presente e dal carattere più concertistico. ALAUDIS LEO 214 è stato pensato come un modello per chi desidera un respiro sonoro più ampio, una proiezione più larga e una presenza dello strumento ancora più marcata in un interno di pregio."
        actions={[
          { href: "/it/konfigurator?model=214", label: "Apri il configuratore" },
          { href: "/it/odkryj-modele?model=214", label: "Guardalo in 3D" },
        ]}
        scroll="Scorri verso il basso"
      />

      <ModelStorySignature model="214" language="IT" />

      <ModelSoundCharacter
        eyebrow="Carattere del suono"
        lead="ALAUDIS LEO 214 sviluppa il linguaggio sonoro del marchio verso una dimensione più ampia e una presenza più intensa. Offre un suono più aperto, più profondo nei bassi e più proiettato nel registro centrale, conservando finezza, eleganza e nobiltà musicale."
        text="È un modello per chi desidera sentire un respiro più ampio dello strumento: una proiezione più larga, un volume più percepibile e una tavolozza dinamica più ricca. Rimane raffinato, ma con una presenza scenica più decisa."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destinazione
            </p>
            <h3 className="mt-4 text-2xl font-light">Salotto e palcoscenico cameristico</h3>
            <p className="mt-5 leading-8 text-white">Ideale per residenze spaziose, sale da musica private, boutique hotel e palcoscenici cameristici, dove lo strumento deve essere non solo bello, ma anche più incisivo e dotato di maggiore proiezione sonora.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interni ideali
            </p>
            <h3 className="mt-4 text-2xl font-light">Spazio, luce, presenza</h3>
            <p className="mt-5 leading-8 text-white">Si esprime al meglio in interni moderni di pregio, appartamenti classici, sale di rappresentanza e spazi in cui il pianoforte a coda deve diventare il centro evidente della composizione.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identità del modello
            </p>
            <h3 className="mt-4 text-2xl font-light">Tra eleganza e grandezza</h3>
            <p className="mt-5 leading-8 text-white">ALAUDIS LEO 214 è la proposta per chi desidera conservare la classe estetica di un modello di alta gamma, entrando però in una dimensione sonora più ampia e in una personalità scenica più forte dello strumento.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galleria
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 in finiture di pregio
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="ALAUDIS LEO 214 - vista 1" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.jpg" alt="ALAUDIS LEO 214 - vista 2" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="ALAUDIS LEO 214 - vista 3" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="IT" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Il prossimo passo
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configura ALAUDIS LEO 214 o guardalo in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Passa al configuratore per definire finitura e dettagli, oppure guarda il modello nell’anteprima 3D e verificane la presenza nello spazio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/it/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Apri il configuratore
            </Link>

            <Link
              href="/it/odkryj-modele?model=214"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Guardalo in 3D
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
