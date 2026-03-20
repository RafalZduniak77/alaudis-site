"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
  imageSrc: string;
};

export default function PreviewPanel({ imageSrc }: Props) {
  const [current, setCurrent] = useState(imageSrc);
  const [next, setNext] = useState<string | null>(null);

  useEffect(() => {
    if (imageSrc !== current) {
      setNext(imageSrc);

      const timeout = setTimeout(() => {
        setCurrent(imageSrc);
        setNext(null);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [imageSrc]);

  return (
    <>
      {/* 🔥 TŁO */}
      <Image src="/hero.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔥 LEWA CZĘŚĆ (ZDJĘCIE) */}
      <div className="absolute left-0 top-0 h-full w-[60%] flex items-center justify-center px-10">

        <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">

          {/* CURRENT */}
          <Image
            src={current}
            alt=""
            fill
            className={`object-contain transition-opacity duration-300 ${
              next ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* NEXT */}
          {next && (
            <Image
              src={next}
              alt=""
              fill
              className="object-contain opacity-100 transition-opacity duration-300"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* 🔙 STRZAŁKA */}
      <Link
        href="/"
        className="absolute left-6 top-10 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg"
      >
        ←
      </Link>

      {/* LOGO */}
      <div className="absolute left-[30%] top-10 z-30 -translate-x-1/2">
        <Image src="/logo-alaudis.png" alt="" width={120} height={50} />
      </div>
    </>
  );
}
