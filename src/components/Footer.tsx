export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/80 px-6 py-12 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="text-cyan text-glow-cyan">▲</span>
          <span>Influen<span className="text-magenta">X</span>ers</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          // Truth at the edge of the algorithm.
        </div>
        <div className="font-mono text-[10px] text-muted-foreground">© 2026 — All bots reserved.</div>
      </div>
    </footer>
  );
}
