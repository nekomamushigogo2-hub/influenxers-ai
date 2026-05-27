import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Analyzer } from "@/components/Analyzer";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InfluenXers — Deteccion de Influencers Falsos y Bots con IA" },
      { name: "description", content: "Detecta seguidores falsos, bots y engagement inautentico en segundos con el analisis impulsado por IA de InfluenXers." },
      { property: "og:title", content: "InfluenXers — Deteccion de Influencers Falsos y Bots con IA" },
      { property: "og:description", content: "Detecta seguidores falsos, bots y engagement inautentico en segundos con el analisis impulsado por IA de InfluenXers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain relative min-h-screen bg-background text-foreground antialiased">
      <CustomCursor />
      <Hero />
      <Ticker />
      <Features />
      <Analyzer />
      <Footer />
    </main>
  );
}
