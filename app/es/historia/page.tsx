"use client";

import { useEffect, useRef, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

type StorySection = {
  eyebrow: string;
  title: string;
  text: string[];
  image: string;
  imageAlt: string;
  align: "left" | "right";
};

const storySections: StorySection[] = [
  {
    eyebrow: "El universo Alaudis",
    title: "Un piano de cola con alma propia",
    text: [
      "SAP Alaudis es un piano de cola extraordinario cuyo propósito es capturar la belleza cautivadora y el sonido del canto de la alondra. Nació del deseo de crear un instrumento magistral, capaz de maravillar por su sonoridad, de conmover y de convertirse en la prolongación natural del alma del pianista.",
      "El piano de cola Alaudis es obra de manos humanas, de paciencia y de amor por el sonido. No recurrimos a la producción en serie: cada instrumento nace de forma individual, en un proceso lleno de precisión y de maestría artesanal.",
      "Nuestro objetivo no es solo construir un piano de cola, sino crear una obra de arte, un instrumento con alma que cautive tanto al pianista como al oyente.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "El alma del piano de cola Alaudis",
    align: "left",
  },
  {
    eyebrow: "Material y filosofía",
    title: "El piano de cola es madera que suena",
    text: [
      "Todo empieza por la madera. Tablas en apariencia corrientes, apiladas, esperan su momento: el instante en que se convertirán en sonido. En ellas se esconde la futura alma del piano de cola.",
      "En SAP Alaudis elegimos la madera como un artista elige los colores de su cuadro. Buscamos en ella armonía, elasticidad y alma. Cada especie tiene su propia voz: el abeto de resonancia aporta calidez y profundidad, el abedul añade precisión, y el arce y el haya, fuerza y durabilidad.",
      "La madera madura durante años en condiciones naturales antes de llegar a manos de nuestros maestros. Solo entonces comienza la verdadera transformación: de materia prima a portadora de emociones.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Madera para la construcción del piano de cola Alaudis",
    align: "right",
  },
  {
    eyebrow: "Caja",
    title: "Estabilidad y resonancia de la estructura",
    text: [
      "La caja de Alaudis se construye con láminas de arce seleccionado de unos milímetros de grosor. El arce confiere a la estructura flexibilidad y elasticidad.",
      "Colocamos cada capa siguiendo la dirección de la fibra y, a continuación, las encolamos y curvamos sobre un molde especial. Bajo presión y temperatura controladas, las láminas forman el aro de la caja, de una sola pieza, que conserva su forma con absoluta precisión.",
      "Este aro laminado garantiza una rigidez estructural excepcional, minimiza las tensiones y aumenta la estabilidad de la afinación, al tiempo que permite que la caja colabore activamente con la tabla armónica.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Estabilidad y resonancia de la estructura del piano de cola",
    align: "left",
  },
  {
    eyebrow: "Lacado",
    title: "Profundidad de la superficie y protección",
    text: [
      "El lacado del piano de cola SAP Alaudis se ha realizado con el máximo esmero mediante el sistema de lacado de ICA, prestigioso fabricante italiano de recubrimientos destinados a instrumentos.",
      "Sobre la caja y los elementos del mueble se aplicaron 6 capas de fondo y 9 capas de laca de poliéster de acabado, lo que garantiza un brillo excepcional, resistencia a los arañazos y durabilidad.",
      "Este ciclo de acabado multicapa permite obtener una superficie lisa, profunda y con brillo de espejo, que no solo realza la estética, sino que además protege la estructura del instrumento durante muchos años.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lacado del piano de cola Alaudis",
    align: "right",
  },
  {
    eyebrow: "Acabado",
    title: "Pulido y calidad final",
    text: [
      "SAP Renovation es uno de los líderes europeos en el ámbito de los acabados de pianos de cola. A lo largo de más de tres décadas, nuestro equipo ha restaurado 14 000 instrumentos.",
      "El proceso de lijado y pulido en SAP Renovation aúna la maestría artesanal con la tecnología moderna. En el caso del piano de cola SAP Alaudis, se llevó a cabo con una atención excepcional a cada detalle.",
      "La superficie final del piano de cola SAP Alaudis no solo deslumbra por su brillo y su estética, sino que constituye además una parte integrante de la estructura del instrumento.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Acabado del piano de cola Alaudis",
    align: "left",
  },
  {
    eyebrow: "Tabla armónica",
    title: "El corazón de la proyección y del timbre",
    text: [
      "La tabla armónica del piano de cola Alaudis está realizada en abeto de calidad tonal, suministrado por el prestigioso fabricante Strunz, y constituye un elemento clave de la construcción acústica del instrumento.",
      "Cuidadosamente curada y seleccionada, y ajustada con precisión a la estructura de la caja, la madera crea una superficie resonante activa que transmite y amplifica las vibraciones de las cuerdas.",
      "Concebida según las mejores tradiciones de la construcción de pianos, la tabla armónica proporciona al instrumento plena proyección sonora y equilibrio tonal, desde los graves profundos hasta los agudos diáfanos.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Tabla armónica del piano de cola Alaudis",
    align: "right",
  },
  {
    eyebrow: "Puentes",
    title: "Transmisión precisa de las vibraciones",
    text: [
      "Los puentes de Alaudis se han fabricado en arce duro seleccionado, curado y con la humedad estabilizada.",
      "Su construcción laminada se ha reforzado además con una cubierta de arce macizo, lo que asegura una estabilidad mecánica excepcional y una afinación estable y duradera.",
      "Esta construcción garantiza una gran rigidez en sentido longitudinal, gracias a la cual la energía de las vibraciones de las cuerdas se transmite a la tabla armónica con la máxima eficacia.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Puentes del piano de cola Alaudis",
    align: "left",
  },
  {
    eyebrow: "Encordado",
    title: "Escala, energía y estabilidad de la afinación",
    text: [
      "En el encordado del piano de cola SAP Alaudis hemos empleado clavijas de afinación Diamant y un juego de cuerdas de acero fabricadas con alambre Röslau.",
      "La escala del encordado se ha diseñado con un programa de cálculo específico, que optimiza los diámetros, las longitudes vibrantes y las tensiones previstas teniendo en cuenta la inarmonicidad y las características sonoras deseadas.",
      "En el piano de cola SAP Alaudis es fundamental que la elección del alambre, de las clavijas y de los parámetros de la escala se corresponda con la resistencia del bastidor y de toda la estructura.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Encordado del piano de cola Alaudis",
    align: "right",
  },
  {
    eyebrow: "Cuerdas graves",
    title: "El fundamento del registro grave",
    text: [
      "Las cuerdas graves las ha suministrado la empresa alemana Hellerbass, especializada en cuerdas graves entorchadas con precisión para fabricantes y restauradores.",
      "Su construcción sustenta un fundamento sonoro profundo y lleno, y permite mantener la claridad y la proyección del sonido en el registro más grave.",
      "Son precisamente estos elementos los que contribuyen a la riqueza y la majestuosidad de toda la extensión del piano de cola.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Cuerdas graves Heller en el piano de cola Alaudis",
    align: "left",
  },
  {
    eyebrow: "Mecanismo",
    title: "Respuesta y control",
    text: [
      "El mecanismo de macillos del piano de cola SAP Alaudis se ha construido con componentes de alta gama de Louis Renner GmbH, líder mundial en la fabricación de mecanismos de piano.",
      "Unos macillos conformados con precisión, unos mangos estables y una geometría del mecanismo regulada con exactitud aseguran un ataque limpio, una repetición rápida y un control total de la dinámica del sonido.",
      "Gracias a esta construcción, SAP Alaudis se distingue por una respuesta excepcional del teclado y ofrece un tacto preciso desde el pianissimo hasta el pleno fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Mecanismo Louis Renner del piano de cola Alaudis",
    align: "right",
  },
  {
    eyebrow: "Teclado",
    title: "Precisión y comodidad al tocar",
    text: [
      "El teclado del piano de cola SAP Alaudis se ha desarrollado en colaboración con la prestigiosa firma Kluge, considerada uno de los mejores fabricantes de teclados de alta gama.",
      "El ajuste perfecto de las teclas, la precisión de ejecución y los detalles estéticos subrayan el carácter lujoso del instrumento y contribuyen a su perfecto funcionamiento.",
      "El teclado se convierte así no solo en un dispositivo mecánico, sino en parte integrante de la expresión artística del pianista.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Teclado Kluge del piano de cola Alaudis",
    align: "left",
  },
  {
    eyebrow: "Entonación",
    title: "La regulación final del sonido",
    text: [
      "La entonación del piano de cola SAP Alaudis es una de las etapas más exigentes del proceso de acabado, el momento en que la técnica se encuentra con el arte.",
      "Cada macillo se conforma y se entona individualmente para lograr el equilibrio ideal entre ataque, proyección y timbre.",
      "El resultado es un sonido de espectro armónico completo, con un equilibrio ideal entre los registros y esa excepcional cualidad cantable característica de la alondra.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Regulación final y entonación del piano de cola Alaudis",
    align: "right",
  },
];

export default function HistoriaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          threshold: 0.58,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <HomeHeader locale="es" variant="page" />

      <AlaudisStory language="ES" full />

      <section className="relative">
        <div className="relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            {storySections.map((section, index) => (
              <div
                key={section.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/8" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/4 via-transparent to-black/12" />
              </div>
            ))}
          </div>

          <div id="alaudis-craft" className="relative z-10 scroll-mt-24">
            {storySections.map((section, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={section.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="flex h-screen items-center"
                >
                  <div
                    className={`w-full px-6 sm:px-10 lg:px-16 ${
                      section.align === "right"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[540px] rounded-[22px] border border-white/10 bg-black/50 px-5 py-5 backdrop-blur-[4px] transition-all duration-500 sm:px-7 sm:py-6 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-35"
                      }`}
                    >
                      <p className="text-xs text-white uppercase">
                        {section.eyebrow}
                      </p>

                      <h2 className="mt-3 text-[25px] font-light leading-tight text-white sm:text-[28px]">{section.title}</h2>

                      <div className="mt-4 space-y-2 text-[15px] leading-[1.55] text-white sm:text-[16px] sm:leading-[1.58]">
                        {section.text.map((paragraph, i) => (
                          <p key={`${section.title}-${i}`}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

<section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Siguiente paso
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Conozca Alaudis más de cerca
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Descubra los modelos, acceda al configurador o concierte una
            conversación privada para hablar de instrumentos creados según la
            filosofía Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/es/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Descubra los modelos
            </Link>
            <Link
              href="/es/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Concierte una conversación privada
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
