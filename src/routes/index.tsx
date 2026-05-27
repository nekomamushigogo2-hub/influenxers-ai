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
      { title: "InfluenXers — AI Fake Influencer & Bot Detection" },
      { name: "description", content: "Detect fake followers, bots, and inauthentic engagement in seconds with InfluenXers' AI-powered analysis." },
      { property: "og:title", content: "InfluenXers — AI Fake Influencer & Bot Detection" },
      { property: "og:description", content: "Detect fake followers, bots, and inauthentic engagement in seconds with InfluenXers' AI-powered analysis." },
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
