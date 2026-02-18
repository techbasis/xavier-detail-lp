"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua Cosme de Farias N\u00b04", "Boca do Rio, Salvador \u2013 BA"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["WhatsApp disponível"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contato@xavierdetail.com"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Serviço Agendado", "Entre em contato"],
  },
];

const serviceOptions = [
  "Detalhamento Automotivo",
  "Nano Revestimento Cerâmico",
  "PPF - Paint Protection Film",
  "Polimento",
  "Higienização Interna",
  "Outro",
];

export function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    servico: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${form.nome}\nServiço: ${form.servico}\nMensagem: ${form.mensagem}`
    );
    window.open(`https://wa.me/message/R7VTVZENE3KFG1?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="relative z-10 px-6 py-24 md:py-32">
      {/* BG gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-foreground/3 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-widest text-muted-foreground">
            CONTATO
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-6xl">
            {"Vamos "}
            <span className="italic text-accent">Conversar</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info Column */}
          <div>
            <h3 className="mb-8 font-serif text-2xl italic text-foreground">
              Informações
            </h3>
            <div className="flex flex-col gap-6">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground">
                      <Icon className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.title}
                      </p>
                      {item.lines.map((l) => (
                        <p
                          key={l}
                          className="text-sm text-muted-foreground"
                        >
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="mb-4 text-[10px] tracking-widest text-muted-foreground">
                REDES SOCIAIS
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/xavierdetail/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/message/R7VTVZENE3KFG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="service-card-glow rounded-2xl border border-border/30 bg-card/50 p-8 backdrop-blur-sm md:p-10"
          >
            <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Solicite um Orçamento
            </h3>
            <p className="mb-8 text-sm text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em até 24
              horas.
            </p>

            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Nome
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) =>
                  setForm({ ...form, nome: e.target.value })
                }
                className="rounded-xl border border-border/40 bg-background/30 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-foreground/30 focus:bg-background/50 focus:outline-none focus:ring-1 focus:ring-foreground/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              />
            </div>

            {/* Servico */}
            <div className="mt-5 flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Serviço de Interesse
              </label>
              <select
                required
                value={form.servico}
                onChange={(e) =>
                  setForm({ ...form, servico: e.target.value })
                }
                className="rounded-xl border border-border/40 bg-background/30 px-5 py-3.5 text-sm text-foreground transition-all focus:border-foreground/30 focus:bg-background/50 focus:outline-none focus:ring-1 focus:ring-foreground/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem */}
            <div className="mt-5 flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Mensagem
              </label>
              <textarea
                rows={4}
                placeholder="Descreva seu veiculo e suas necessidades..."
                value={form.mensagem}
                onChange={(e) =>
                  setForm({ ...form, mensagem: e.target.value })
                }
                className="resize-none rounded-xl border border-border/40 bg-background/30 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-foreground/30 focus:bg-background/50 focus:outline-none focus:ring-1 focus:ring-foreground/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-4 text-sm font-semibold text-background transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Enviar pelo WhatsApp <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
