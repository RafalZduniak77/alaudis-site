// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// Wersja językowa: EN
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

export const metadata = pageMetadata("en", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="model214" />
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Premium model"
        title={["ALAUDIS", "LEO 214"]}
        description="Deeper, more present and more concert-like in character. ALAUDIS LEO 214 was designed for those who expect greater tonal breath, wider projection and a stronger presence of the instrument in a premium interior."
        actions={[
          { href: "/en/konfigurator?model=214", label: "Open configurator" },
          { href: "/en/odkryj-modele?model=214", label: "View in 3D" },
        ]}
        scroll="Scroll down"
      />

      <ModelStorySignature model="214" language="EN" />

      <ModelSoundCharacter
        eyebrow="Sound character"
        lead="ALAUDIS LEO 214 develops the brand’s tonal language towards a larger scale and stronger presence. It offers a more open sound, deeper bass and a more projecting middle register, while preserving culture, elegance and musical nobility."
        text="This model is for those who want to feel a greater breath of the instrument: wider projection, a more tangible volume and a richer dynamic palette."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Purpose
            </p>
            <h3 className="mt-4 text-2xl font-light">Salon and chamber stage</h3>
            <p className="mt-5 leading-8 text-white">Ideal for spacious residences, private music rooms, boutique hotels and chamber stages where the instrument should be beautiful, present and projecting in sound.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Target interiors
            </p>
            <h3 className="mt-4 text-2xl font-light">Space, light, presence</h3>
            <p className="mt-5 leading-8 text-white">It is best suited to modern premium interiors, classic apartments and representative rooms where the piano becomes the centre of the composition.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Model identity
            </p>
            <h3 className="mt-4 text-2xl font-light">Between elegance and scale</h3>
            <p className="mt-5 leading-8 text-white">ALAUDIS LEO 214 preserves the visual class of a premium model while offering a larger tonal scale and a stronger stage personality.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 in premium finishes
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="ALAUDIS LEO 214 - 1" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.jpg" alt="ALAUDIS LEO 214 - 2" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="ALAUDIS LEO 214 - 3" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="EN" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure ALAUDIS LEO 214 or view it in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Go to the configurator to choose the finish and details, or view the model in 3D and see its presence in space.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Open configurator
            </Link>

            <Link
              href="/en/odkryj-modele?model=214"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View in 3D
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
