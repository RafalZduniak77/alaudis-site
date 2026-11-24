import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export const metadata = pageMetadata("en", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="en" />
      <HomeHero
        alt="Alaudis – the new Polish grand piano"
        eyebrow="The new Polish grand piano"
        title={["Craft,", "detail, identity."]}
        actions={[
          { href: "/en/konfigurator", label: "Open configurator" },
          { href: "/en/odkryj-modele?model=178", label: "Discover the models in 3D" },
        ]}
        scroll="Scroll down"
      />


      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="EN" />

      {/* ====================================================
          CONTACT SECTION
         ==================================================== */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Private consultation
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Let&apos;s talk about your Alaudis
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Contact us to discuss the model, finish, sound character, and the
            individual composition of your Alaudis grand piano.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Contact us
            </Link>

            <Link
              href="/en/odwiedz-atelier"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Visit the atelier
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          HISTORY SECTION
         ==================================================== */}

      {/* MOBILE: clickable block */}
      <Link
        href="/en/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">
          Alaudis Contact
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Find your piano
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
          Talk to us about models, finishes and configuration options. Arrange a
          private consultation or a visit to our atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Contact
          </span>
        </div>
      </Link>


      <Footer />
    </main>
  );
}
