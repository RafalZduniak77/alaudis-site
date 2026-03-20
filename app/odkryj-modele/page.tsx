import Image from "next/image";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis background"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <header className="relative z-20">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pt-12 pb-6 lg:px-10">
            <div className="ml-8 flex items-center gap-4">
              <a
                href="/"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Powrót
              </a>
            </div>

            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Logo Alaudis"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            <div className="justify-self-end">
              <a
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator
              </a>
            </div>
          </div>
        </header>

        <div className="relative z-20 px-6 pb-16 pt-8 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis AR Experience
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Odkryj modele
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
              Obejrzyj fortepian w 3D, obróć go, przybliż i sprawdź, jak wygląda
              w realnym wnętrzu. To pierwszy krok do pełnego doświadczenia
              Alaudis: konfigurator + AR preview.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlaudisARPreview />
        </div>
      </section>

      <Footer />
    </main>
  );
}
