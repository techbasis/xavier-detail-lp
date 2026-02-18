"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "VEICULOS ATENDIDOS" },
  { value: "10+", label: "ANOS DE EXPERIENCIA" },
  { value: "100%", label: "SATISFACAO" },
  { value: "24h", label: "SUPORTE PREMIUM" },
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Badge */}
        <div className="badge-glow mb-8 flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-2.5 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-foreground shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <span className="text-xs font-medium tracking-widest text-foreground/80">
            PREMIUM AUTOMOTIVE CARE
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          {"Perfeição "}
          <span className="italic text-accent">em cada detalhe</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Elevamos a estética do seu veículo a um novo patamar. PPF, polimento e
          proteção cerâmica com excelência incomparável.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/message/R7VTVZENE3KFG1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90"
          >
            Solicitar Orçamento <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 rounded-full border border-border bg-card/30 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-card/50"
          >
            Nossos Servicos <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        className={`relative z-10 mx-auto mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 transition-all duration-1000 delay-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 text-[10px] tracking-widest text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="relative z-10 mt-16 animate-bounce text-muted-foreground"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
