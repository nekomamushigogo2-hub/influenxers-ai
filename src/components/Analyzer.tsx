import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

type Result = {
  handle: string;
  score: number;
  real: number;
  bots: number;
  engagement: number;
  verdict: "AUTHENTIC" | "SUSPICIOUS" | "FAKE";
};

const MOCK: Record<string, Result> = {
  "@realstar": { handle: "@realstar", score: 87, real: 91, bots: 6, engagement: 4.8, verdict: "AUTHENTIC" },
  "@trendyvibes": { handle: "@trendyvibes", score: 52, real: 61, bots: 28, engagement: 1.9, verdict: "SUSPICIOUS" },
  "@megainfluencer": { handle: "@megainfluencer", score: 18, real: 24, bots: 71, engagement: 0.4, verdict: "FAKE" },
};
const KEYS = Object.keys(MOCK);

function pickResult(input: string): Result {
  const k = input.trim().toLowerCase();
  for (const key of KEYS) if (key.toLowerCase().includes(k.replace("@", ""))) return MOCK[key];
  const idx = Math.abs(hash(input || "x")) % KEYS.length;
  return { ...MOCK[KEYS[idx]], handle: input.startsWith("@") ? input : "@" + input };
}
function hash(s: string) { let h = 0; for (const c of s) h = (h << 5) - h + c.charCodeAt(0); return h; }

const verdictColors = {
  AUTHENTIC: "text-[oklch(0.75_0.2_145)] border-[oklch(0.75_0.2_145)] shadow-[0_0_20px_oklch(0.75_0.2_145/50%)]",
  SUSPICIOUS: "text-[oklch(0.82_0.18_85)] border-[oklch(0.82_0.18_85)] shadow-[0_0_20px_oklch(0.82_0.18_85/50%)]",
  FAKE: "text-[oklch(0.65_0.28_25)] border-[oklch(0.65_0.28_25)] shadow-[0_0_20px_oklch(0.65_0.28_25/50%)]",
};

function Gauge({ value }: { value: number }) {
  const r = 80;
  const c = 2 * Math.PI * r;
  const color = value >= 70 ? "oklch(0.75 0.2 145)" : value >= 40 ? "oklch(0.82 0.18 85)" : "oklch(0.65 0.28 25)";
  return (
    <div className="relative h-52 w-52">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="oklch(0.22 0.03 285)" strokeWidth="12" />
        <motion.circle
          cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * value) / 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-mono text-5xl font-bold text-foreground">
          {value}
        </motion.div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Authenticity</div>
      </div>
    </div>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-xs uppercase tracking-wider">
        <span className="text-muted-foreground">{label}</span>
        <span style={{ color }}>{value.toFixed(1)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
        />
      </div>
    </div>
  );
}

export function Analyzer() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const scan = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(pickResult(input));
      setLoading(false);
    }, 1800);
  };

  return (
    <section id="analyzer" className="relative z-10 mx-auto max-w-5xl px-6 py-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">// LIVE_DEMO</div>
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          Run a <span className="text-magenta text-glow-magenta">Scan</span>
        </h2>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          Try one of our demo handles: @realstar · @trendyvibes · @megainfluencer
        </p>
      </motion.div>

      <div className="mt-10 rounded-lg border border-cyan/30 bg-card/40 p-4 backdrop-blur md:p-6">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-magenta" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.18_85)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.2_145)]" />
          </div>
          <span className="ml-2">influenxers ~ scan --target</span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded border border-border bg-background/70 px-4 py-3">
            <span className="font-mono text-cyan">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && scan()}
              placeholder="Enter Instagram / TikTok handle..."
              className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            onClick={scan}
            disabled={loading}
            className="group relative overflow-hidden rounded bg-cyan px-8 py-3 font-display font-bold uppercase tracking-wider text-background transition-all hover:animate-pulse-glow disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Scanning</> : <><Search className="h-4 w-4" /> Scan</>}
            </span>
            {loading && <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-scan" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={result.handle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[auto_1fr]"
            >
              <div className="flex flex-col items-center gap-4">
                <Gauge value={result.score} />
                <div className={`rounded border-2 px-5 py-2 font-display text-sm font-bold tracking-widest ${verdictColors[result.verdict]}`}>
                  {result.verdict}
                </div>
              </div>
              <div className="space-y-6">
                <div className="font-mono text-sm text-muted-foreground">
                  Target: <span className="text-cyan">{result.handle}</span>
                </div>
                <StatBar label="Real Followers" value={result.real} color="oklch(0.75 0.2 145)" />
                <StatBar label="Bot Activity" value={result.bots} color="oklch(0.65 0.28 25)" />
                <StatBar label="Engagement Rate" value={result.engagement * 10} color="var(--cyan)" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
