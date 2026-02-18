"use client";

import { Award, Users, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certificacao Internacional",
    description:
      "Tecnicos certificados pelas melhores marcas mundiais de PPF e ceramica.",
  },
  {
    icon: Users,
    title: "Atendimento Exclusivo",
    description:
      "Cada cliente recebe atencao personalizada do inicio ao fim do projeto.",
  },
  {
    icon: Clock,
    title: "Garantia Estendida",
    description:
      "Oferecemos garantias de ate 10 anos em nossos servicos premium.",
  },
  {
    icon: Star,
    title: "Produtos Premium",
    description:
      "Utilizamos apenas produtos das marcas mais renomadas do mercado.",
  },
];

const stats = [
  { value: "10+", label: "ANOS" },
  { value: "500+", label: "VEICULOS" },
  { value: "100%", label: "SATISFACAO" },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-10 px-6 py-24 md:py-32"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-4 text-xs tracking-widest text-muted-foreground">
              QUEM SOMOS
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {"Paixao por "}
              <span className="italic text-accent">excelencia</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Ha mais de uma decada, a Xavier Detail se dedica a transformar
              veiculos em verdadeiras obras de arte. Nossa equipe de
              especialistas combina tecnicas tradicionais com as mais avancadas
              tecnologias do mercado.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Cada projeto e tratado com o maximo cuidado e atencao aos
              detalhes, garantindo resultados que superam as expectativas dos
              nossos clientes mais exigentes.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-3xl font-bold text-foreground">
                    {s.value}
                  </span>
                  <p className="mt-1 text-[10px] tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="service-card-glow card-hover rounded-xl border border-border/30 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                    <Icon className="h-5 w-5 text-background" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
