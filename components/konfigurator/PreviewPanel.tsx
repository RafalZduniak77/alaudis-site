"use client";

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
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔥 LEWA CZĘŚĆ */}
      <div className="absolute left-0 top-0 h-full w-[60%] flex items-center justify-center px-10">
        <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">

          {/* CURRENT */}
          <img
            src={current}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              next ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* NEXT */}
          {next && (
            <img
              src={next}
              className="absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-300"
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
        <img src="/logo-alaudis.png" className="w-[120px]" />
      </div>
    </>
  );
}
