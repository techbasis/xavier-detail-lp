"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Sparkles, Droplets, Check } from "lucide-react";

const services = [
  {
    id: "ppf",
    icon: Shield,
    title: "PPF Protection",
    subtitle: "Paint Protection Film",
    description:
      "Protecao invisivel de ultima geracao contra riscos, pedras e desgaste diario. Preserva a pintura original do seu veiculo.",
    features: [
      "Protecao contra riscos",
      "Garantia estendida",
      "Auto-regeneracao",
      "Instalacao profissional",
    ],
    image: "/images/ppf-real.png",
  },
  {
    id: "detailing",
    icon: Sparkles,
    title: "Detalhamento",
    subtitle: "Automotivo",
    description:
      "Limpeza profunda e cuidado completo com cada detalhe do seu veiculo. Restauramos a beleza interior e exterior.",
    features: [
      "Limpeza profunda",
      "Polimento premium",
      "Higienizacao interna",
      "Acabamento perfeito",
    ],
    image: "/images/detailing-real.png",
  },
  {
    id: "ceramic",
    icon: Droplets,
    title: "Nano Ceramico",
    subtitle: "Revestimento",
    description:
      "Nanotecnologia ceramica que proporciona hidrofobicidade extrema, brilho intenso e protecao duradoura.",
    features: [
      "Hidrofobicidade extrema",
      "Brilho intenso",
      "Protecao UV",
      "Durabilidade superior",
    ],
    image: "/images/hero-car.jpg",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const activeService = services[active];

  return (
    <section id="servicos" className="relative z-10 overflow-hidden px-6 py-24 md:py-32">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-slow absolute -left-[5%] top-[5%] h-[600px] w-[600px] rounded-full bg-white/[0.07] blur-[150px]" />
        <div className="animate-drift-medium absolute -right-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-white/[0.06] blur-[130px]" />
        <div className="animate-drift-fast absolute left-[30%] top-[20%] h-[400px] w-[400px] rounded-full bg-white/[0.05] blur-[120px]" />
        <div className="animate-drift-slow absolute bottom-[20%] left-[60%] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-[100px]" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-widest text-muted-foreground">
            NOSSOS SERVICOS
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-6xl">
            {"Servicos "}
            <span className="italic text-accent">Premium</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] tracking-widest text-muted-foreground">
                  SERVICO EM DESTAQUE
                </p>
                <p className="text-lg font-bold text-foreground">
                  {activeService.title}
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = i === active;
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(i)}
                  className={`service-card-glow rounded-xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "service-card-active -translate-y-3 scale-[1.03] border-foreground/20 bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_8px_24px_rgba(0,0,0,0.7),0_0_30px_rgba(255,255,255,0.06)]"
                      : "border-border/30 bg-[#141414] hover:-translate-y-1 hover:border-border/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                      <Icon className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        {service.title}
                      </span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  {isActive && (
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <Check className="h-4 w-4 text-foreground" />
                          {f}
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
