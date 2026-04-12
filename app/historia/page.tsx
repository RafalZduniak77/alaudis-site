"use client";

/**
 * ============================================
 * ALAUDIS – HISTORIA (SCROLL OVERLAY EFFECT)
 * Efekt:
 * - sekcja sticky (zatrzymuje się)
 * - zdjęcia nachodzą na siebie
 * - tekst lekki, bez ramek
 * ============================================
 */

import Image from "next/image";

const sections = [
  {
    title: "Fortepian o własnej duszy",
    text: "SAP Alaudis to niezwykły fortepian, którego celem jest uchwycenie czarującego piękna i dźwięku śpiewu skowronka.",
    image: "/historia/1 Dusza.jpg",
  },
  {
    title: "Fortepian to drewno, które gra",
    text: "Wszystko zaczyna się od drewna. Każdy element niesie w sobie przyszłe brzmienie instrumentu.",
    image: "/historia/2 Drewno gra.jpg",
  },
  {
    title: "Rezonans konstrukcji",
    text: "Konstrukcja fortepianu to precyzyjna równowaga napięć i rezonansu.",
    image: "/historia/3 Rezonans konstrukcji.jpg",
  },
  {
    title: "Lakierowanie",
    text: "Proces wykończenia nadaje instrumentowi jego ostateczny charakter wizualny.",
    image: "/historia/4 Lakierowanie.jpg",
  },
  {
    title: "Wykończenie",
    text: "Każdy detal dopracowywany jest ręcznie przez mistrzów rzemiosła.",
    image: "/historia/5 Wykończenie.jpg",
  },
  {
    title: "Dno rezonansowe",
    text: "To serce instrumentu, które odpowiada za jego brzmienie.",
    image: "/historia/6 Dno rezonansowe.jpg",
  },
  {
    title: "Mostki klonowe",
    text: "Precyzyjnie wykonane mostki przekazują drgania strun.",
    image: "/historia/7 Mostki klonowe.jpg",
  },
  {
    title: "Naciąg",
    text: "Struny są napinane z ogromną precyzją.",
    image: "/historia/8 Naciag.jpg",
  },
  {
    title: "Struny basowe",
    text: "Struny Heller zapewniają głębię i siłę brzmienia.",
    image: "/historia/9 Struny basowe Heller.jpg",
  },
  {
    title: "Mechanizm",
    text: "Mechanizm Renner odpowiada za perfekcyjną reakcję klawiatury.",
    image: "/historia/10 Mechanizm Renner.jpg",
  },
  {
    title: "Klawiatura",
    text: "Klawiatura Kluge zapewnia najwyższą precyzję gry.",
    image: "/historia/11 Klawiatura Kluge.jpg",
  },
  {
    title: "Ostateczna regulacja",
    text: "Końcowa intonacja nadaje instrumentowi jego unikalny charakter.",
    image: "/historia/12 Ostateczna regulacja intonacja.jpg",
  },
];

export default function HistoriaPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-sm tracking-[0.3em] text-neutral-400 mb-4">
            DZIEDZICTWO I RZEMIOSŁO
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Świat Alaudis
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm">
            Poznaj filozofię marki i proces tworzenia instrumentów.
          </p>
        </div>
      </section>

      {/* SCROLL SECTION */}
      <section className="relative h-[500vh]">
        {/* STICKY WRAPPER */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {sections.map((item, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                zIndex: i,
              }}
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* TEXT */}
              <div className="absolute bottom-20 left-10 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-light mb-4">
                  {item.title}
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
