const items = [
  "2.3M influencers analyzed",
  "847K bots detected",
  "94% accuracy rate",
  "Trusted by 120+ brands",
  "40M data points indexed",
  "Real-time scanning engine",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 border-y border-cyan/20 bg-card/30 py-4 backdrop-blur overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap font-mono text-sm uppercase tracking-widest">
        {row.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="text-cyan">▲</span>
            <span className="text-foreground">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
