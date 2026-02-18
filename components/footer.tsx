import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-xavier.jpg"
            alt="Xavier Detail"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-foreground">
              XAVIER
            </span>
            <span className="text-[8px] tracking-[0.3em] text-muted-foreground">
              DETAIL
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          {"Xavier Detail \u00a9 2025. Todos os direitos reservados."}
        </p>

        <p className="text-xs text-muted-foreground">
          Rua Cosme de Farias N{"\u00b0"}4, Boca do Rio - BA
        </p>
      </div>
    </footer>
  );
}
