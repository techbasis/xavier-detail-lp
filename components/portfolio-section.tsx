"use client";

import Image from "next/image";

const portfolio = [
  { src: "/images/work-porsche-911.jpg", alt: "Porsche 911 com revestimento ceramico na Xavier Detail" },
  { src: "/images/work-dodge.jpg", alt: "Dodge com protecao ceramica e brilho intenso" },
  { src: "/images/work-porsche-gt4.jpg", alt: "Porsche Cayman GT4 RS detalhamento completo" },
  { src: "/images/work-camaro.jpg", alt: "Chevrolet Camaro SS com aplicacao de PPF" },
  { src: "/images/work-bmw-moto.jpg", alt: "BMW S1000RR com protecao ceramica na Xavier Detail" },
  { src: "/images/work-audi.jpg", alt: "Audi A3 com nano ceramico na Xavier Detail" },
];

export function PortfolioSection() {
  return (
    <section id="galeria" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-widest text-muted-foreground">
            PORTFOLIO
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-6xl">
            {"Nossos "}
            <span className="italic text-accent">Trabalhos</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border/30"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
