const items = [
  "2.3M influencers analizados",
  "847K bots detectados",
  "94% tasa de precision",
  "Confiado por 120+ marcas",
  "40M puntos de datos indexados",
  "Motor de escaneo en tiempo real",
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
