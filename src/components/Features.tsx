import { motion } from "framer-motion";
import { Bot, Heart, UserX, MessageSquare } from "lucide-react";
import { CountUp } from "./CountUp";

const features = [
  { icon: Bot, title: "Puntuacion de Deteccion de Bots", stat: 99.2, suffix: "%", desc: "Clasificador de red neuronal entrenado con 40M de cuentas marcadas.", color: "#F77737" },
  { icon: Heart, title: "Autenticidad de Engagement", stat: 87, suffix: "%", desc: "Detecta likes de pods, anillos de comentarios y granjas de vistas.", color: "#833AB4" },
  { icon: UserX, title: "% Seguidores Falsos", stat: 71, suffix: "%", desc: "Analisis de clusters revela seguidores comprados e inactivos.", color: "#FD1D1D" },
  { icon: MessageSquare, title: "Sentimiento de Contenido", stat: 94, suffix: "%", desc: "NLP en tiempo real evalua la autenticidad de cada hilo de comentarios.", color: "#F77737" },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">// CAPACIDADES</div>
        <h2 className="max-w-2xl font-display text-4xl font-bold md:text-6xl">
          Senales de nivel <span className="text-cyan text-glow-cyan">forense</span>.
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-lg border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-cyan/60"
            style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          >
            <div
              className="absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
              style={{ boxShadow: `0 0 40px ${f.color}40, inset 0 0 20px ${f.color}10` }}
            />
            <f.icon className="h-8 w-8" style={{ color: f.color, filter: `drop-shadow(0 0 8px ${f.color})` }} />
            <div className="mt-6 font-mono text-4xl font-bold" style={{ color: f.color }}>
              <CountUp to={f.stat} suffix={f.suffix} decimals={f.stat % 1 ? 1 : 0} />
            </div>
            <h3 className="mt-3 font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
