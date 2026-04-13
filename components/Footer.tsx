import Link from "next/link";

// ==========================================================
// FOOTER - ALAUDIS
// ==========================================================
// Co zawiera ta wersja:
// 1. kolumna ALAUDIS
// 2. dodany link: Facebook Alaudis
// 3. kolumny MODELS / CONFIGURATOR / COMPANY
// 4. styl zgodny z obecną stroną
// ==========================================================

const FACEBOOK_ALAUDIS_URL =
  "https://www.facebook.com/profile.php?id=61579105662197&locale=pl_PL";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-black px-6 py-16 sm:px-10 lg:px-16">
      {/* ====================================================
          GŁÓWNA SIATKA FOOTERA
         ==================================================== */}
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* ==================================================
            KOLUMNA 1 - ALAUDIS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            ALAUDIS
          </p>

          <p className="mt-8 text-[15px] text-white/88">Polish Grand Piano</p>

          <Link
            href={FACEBOOK_ALAUDIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-[15px] text-white/68 transition hover:text-white"
          >
            Facebook Alaudis
          </Link>
        </div>

        {/* ==================================================
            KOLUMNA 2 - MODELS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            MODELS
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/88">
            <Link
              href="/fortepiany/alaudis-178"
              className="transition hover:text-white/68"
            >
              Alaudis 178
            </Link>

            <Link
              href="/fortepiany/alaudis-214"
              className="transition hover:text-white/68"
            >
              Alaudis 214
            </Link>

            <Link
              href="/fortepiany/alaudis-275"
              className="transition hover:text-white/68"
            >
              Alaudis 275
            </Link>
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 3 - CONFIGURATOR
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            CONFIGURATOR
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/88">
            <Link
              href="/konfigurator"
              className="transition hover:text-white/68"
            >
              Choose finish
            </Link>

            <Link
              href="/konfigurator"
              className="transition hover:text-white/68"
            >
              Choose color
            </Link>

            <Link
              href="/konfigurator"
              className="transition hover:text-white/68"
            >
              Accessories
            </Link>
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 4 - COMPANY
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            COMPANY
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/88">
            <Link href="/historia" className="transition hover:text-white/68">
              About
            </Link>

            <Link href="/historia" className="transition hover:text-white/68">
              Factory
            </Link>

            <Link href="/kontakt" className="transition hover:text-white/68">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* ====================================================
          DÓŁ FOOTERA
         ==================================================== */}
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          © 2026 ALAUDIS
        </p>
      </div>
    </footer>
  );
}

