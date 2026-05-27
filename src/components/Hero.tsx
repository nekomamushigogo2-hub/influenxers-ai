import { motion } from "framer-motion";
import { ParticleNetwork } from "./ParticleNetwork";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="text-cyan text-glow-cyan">▲</span>
          <span>Influen<span className="text-magenta">X</span>ers</span>
        </div>
        <div className="hidden gap-8 font-mono text-xs uppercase tracking-widest md:flex">
          <a href="#features" className="hover:text-cyan">Funciones</a>
          <a href="#analyzer" className="hover:text-cyan">Analizador</a>
          <a href="#" className="hover:text-cyan">Docs</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Motor de Deteccion IA · v2.4 En Linea
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Tu Influencer...{" "}
          <span className="relative inline-block text-cyan animate-glitch">Es Real?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Detecta seguidores falsos, bots y engagement inautentico en segundos con IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("analyzer")}
            className="group relative overflow-hidden rounded bg-cyan px-10 py-4 font-display text-base font-bold uppercase tracking-widest text-background animate-pulse-glow transition-transform hover:scale-105"
          >
            <span className="relative z-10">Analizar Ahora →</span>
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="rounded border border-border px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-magenta hover:text-magenta"
          >
            Ver Como Funciona
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 w-full max-w-4xl"
        >
          <DashboardMockup />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-12 flex flex-col items-center gap-2 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative rounded-xl border border-cyan/30 bg-card/80 p-4 backdrop-blur-xl shadow-[0_0_60px_#F7773733]">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-magenta" />
          <span className="h-2 w-2 rounded-full bg-[#FD1D1D]" />
          <span className="h-2 w-2 rounded-full bg-[#F77737]" />
        </div>
        <span>dashboard.influenxers.io</span>
        <span className="text-cyan">● EN VIVO</span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <MiniCard label="Autenticidad" value="87" sub="/100" color="#F77737" />
        <MiniCard label="Bots Detectados" value="2.4K" sub="de 19K" color="#833AB4" />
        <MiniCard label="Engagement" value="4.8%" sub="↑ real" color="#FD1D1D" />
      </div>
      <div className="mt-3 h-24 rounded-md border border-border bg-background/60 p-3">
        <div className="flex h-full items-end gap-1">
          {[40, 65, 55, 80, 45, 90, 70, 95, 60, 85, 75, 100, 88, 92, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 3 === 0 ? "#833AB4" : i % 3 === 1 ? "#FD1D1D" : "#F77737", opacity: 0.6 + (h / 250) }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="rounded-md border border-border bg-background/60 p-3 text-left">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-mono text-2xl font-bold" style={{ color, textShadow: `0 0 12px ${color}` }}>{value}</span>
        <span className="font-mono text-xs text-muted-foreground">{sub}</span>
      </div>
    </div>
  );
}
