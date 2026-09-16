import type { Metadata } from "next";
import { ArrowRight, CircleGauge, Download, Heart, ListVideo, MonitorPlay, Play, Zap } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { SectionHeading } from "@/components/section-heading";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "B1G IPTV Player App 2026 | APK & Firestick Code",
  description: "Download and set up B1G Player for Firestick, Android TV, Android phones, iOS, Windows, and more. Use Downloader code 5637737.",
  alternates: { canonical: "/b1g-iptv-player-app-latest-version-for-android-firestick" },
};

const playerFaqs = [
  { question: "How do I install B1G Player on a smart TV?", answer: "Install a compatible IPTV player from your TV's app store, then enter the M3U or Xtream Codes details from your subscription message." },
  { question: "Can I use another IPTV player?", answer: "Yes. Standard M3U and Xtream Codes credentials work with many compatible apps, including commonly used TV, mobile, and desktop players." },
  { question: "Do I need to download anything before subscribing?", answer: "You can install the player at any time. An active subscription or trial is only required when you want to load and stream content." },
  { question: "Which devices support B1G Player?", answer: "The service supports Firestick, Android TV, Android phones, iOS, Windows, Mac, and common IPTV boxes." },
];

export default function PlayerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Latest version 2026"
        title="The official B1G IPTV Player app"
        description="Watch live channels, movies, and series after subscribing. B1G Player is designed for Firestick, Android TV, Android phones, and other compatible devices."
        primaryLabel="Download B1G Player"
        primaryMessage="Hi, please send me the latest B1G Player download and setup details."
        secondary={{ label: "Installation guide", href: "/b1g-iptv-installation-guide" }}
      >
        <div className="app-preview"><div className="app-sidebar"><span className="app-logo">B1G</span><i /><i /><i /><i /></div><div className="app-main"><div className="app-top"><span>Good evening</span><small>LIVE · MOVIES · SERIES</small></div><div className="app-feature"><span className="play-button app-play"><Play fill="currentColor" /></span><div><small>Now featured</small><strong>Premium entertainment</strong></div></div><div className="app-cards"><span /><span /><span /></div></div><div className="code-chip"><Download aria-hidden="true" /><span>Downloader code<strong>5637737</strong></span></div></div>
      </PageHero>

      <PricingSection />

      <section className="section innovation-section">
        <div className="site-container">
          <SectionHeading eyebrow="Innovation" title="Engineered for a smoother experience" description="A focused player interface for live TV, on-demand content, and quick access to the channels you use most." />
          <div className="innovation-grid">
            <article><span><ListVideo aria-hidden="true" /></span><h3>Advanced EPG</h3><p>Fast loading and clear channel metadata help you understand what is on now and next.</p></article>
            <article><span><MonitorPlay aria-hidden="true" /></span><h3>Fluid interface</h3><p>Move smoothly between Live TV, Movies, and Series on the big screen.</p></article>
            <article><span><Heart aria-hidden="true" /></span><h3>Smart favorites</h3><p>Keep your most-watched channels and categories close for quicker access.</p></article>
            <article><span><Zap aria-hidden="true" /></span><h3>Optimized streaming</h3><p>Performance tuned for major live events and everyday entertainment.</p></article>
          </div>
        </div>
      </section>

      <section className="performance-section"><div className="site-container performance-grid"><div><span>Performance metrics</span><h2>Made for fast channel changes and clear video</h2><a href={whatsappUrl("Hi, I want to try B1G Player.")} target="_blank" rel="noreferrer">Try B1G Player <ArrowRight aria-hidden="true" /></a></div><div className="performance-stats"><article><CircleGauge aria-hidden="true" /><strong>98%</strong><span>Buffer reduction</span></article><article><Zap aria-hidden="true" /><strong>0.4s</strong><span>Channel switching</span></article><article><MonitorPlay aria-hidden="true" /><strong>4K HDR</strong><span>Video fidelity</span></article></div></div></section>
      <FaqSection faqs={playerFaqs} />
      <ContactStrip />
    </main>
  );
}
