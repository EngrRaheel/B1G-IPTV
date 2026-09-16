import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clapperboard,
  Gamepad2,
  Globe2,
  Laptop,
  MonitorSmartphone,
  Play,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Tv,
  Zap,
} from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { SectionHeading } from "@/components/section-heading";
import { commonFaqs, siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "B1G IPTV Subscription & Reseller Panel",
  description:
    "Stream live TV, sports, movies, and series in HD and 4K with B1G IPTV. Explore flexible plans, fast activation, and support for all major devices.",
  alternates: { canonical: "/" },
};

const devices = [
  { icon: Tv, label: "Firestick & Fire TV" },
  { icon: MonitorSmartphone, label: "Samsung & LG TVs" },
  { icon: TabletSmartphone, label: "iOS & Tablets" },
  { icon: Smartphone, label: "Android TV & Phones" },
  { icon: Laptop, label: "Windows & Mac" },
  { icon: Radio, label: "MAG & IPTV Boxes" },
];

const sports = [
  ["NFL", "National Football League"],
  ["NBA", "Basketball Association"],
  ["UFC", "Pay-Per-View Events"],
  ["MLB", "Major League Baseball"],
  ["NHL", "National Hockey League"],
  ["NCAA", "College Sports"],
];

const steps = [
  {
    number: "01",
    title: "Choose a subscription",
    text: "Select the subscription period and quality level that fit your viewing needs.",
  },
  {
    number: "02",
    title: "Receive your account",
    text: "Get your login credentials and clear setup instructions after activation.",
  },
  {
    number: "03",
    title: "Start streaming",
    text: "Sign in on your preferred device and enjoy channels, movies, and series.",
  },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "English",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <PageHero
        eyebrow="Welcome to premium streaming"
        title="B1G IPTV subscription & reseller panel"
        description="Access thousands of live TV channels, movies, and series with smooth HD and 4K streaming across every major device."
        primaryLabel="Free 6-hour trial"
        primaryMessage="Hi, I would like a free B1G IPTV trial."
        secondary={{ label: "View plans", href: "/#pricing" }}
      >
        <div className="stream-card">
          <div className="stream-card-top">
            <span className="live-pill"><span /> LIVE</span>
            <span className="quality-pill">4K UHD</span>
          </div>
          <div className="screen-preview">
            <div className="screen-glow" />
            <span className="play-button"><Play fill="currentColor" aria-hidden="true" /></span>
            <p>Thousands of channels.<br />One simple subscription.</p>
          </div>
          <div className="metric-row">
            <div><strong>35K+</strong><span>Live channels</span></div>
            <div><strong>50K+</strong><span>Movies</span></div>
            <div><strong>10K+</strong><span>TV series</span></div>
          </div>
        </div>
      </PageHero>

      <section className="trust-bar" aria-label="Service benefits">
        <div className="site-container trust-grid">
          <p><Zap aria-hidden="true" /><span><strong>Instant activation</strong>Start watching quickly</span></p>
          <p><ShieldCheck aria-hidden="true" /><span><strong>Stable streaming</strong>Optimized HD and 4K</span></p>
          <p><Globe2 aria-hidden="true" /><span><strong>Worldwide access</strong>Use your favorite device</span></p>
          <p><Sparkles aria-hidden="true" /><span><strong>Fast support</strong>Help whenever you need it</span></p>
        </div>
      </section>

      <section className="section">
        <div className="site-container feature-split">
          <div>
            <SectionHeading
              eyebrow="Movies, series, and more"
              title="Entertainment that moves with you"
              description="Watch USA local channels, national networks, sports, news, kids content, international TV, and an extensive on-demand library."
              align="left"
            />
            <div className="device-grid">
              {devices.map(({ icon: Icon, label }) => (
                <div className="device-item" key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <a className="button button-primary" href={whatsappUrl("Hi, I want to subscribe to B1G IPTV.")} target="_blank" rel="noreferrer">
              Buy now <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="device-showcase">
            <div className="image-frame">
              <img src={siteConfig.deviceImageUrl} alt="B1G IPTV supported streaming devices" />
            </div>
            <div className="floating-stat floating-stat-top"><Tv aria-hidden="true" /><span><strong>All devices</strong>One subscription</span></div>
            <div className="floating-stat floating-stat-bottom"><Clapperboard aria-hidden="true" /><span><strong>HD & 4K</strong>Crisp streaming</span></div>
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="section sports-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Never miss the action"
            title="Live sports & global leagues"
            description="Follow regular seasons, playoffs, and major events across the sports you love."
          />
          <div className="sports-grid">
            {sports.map(([league, description], index) => (
              <article className="sport-card" key={league}>
                <span className="sport-index">0{index + 1}</span>
                <Gamepad2 aria-hidden="true" />
                <h3>{league}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <a className="button button-light" href={whatsappUrl("Hi, I would like to explore B1G IPTV sports packages.")} target="_blank" rel="noreferrer">
              Explore sports packages <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Three simple steps"
            title="Getting started is easy"
            description="From choosing a plan to watching your first channel, setup only takes a few minutes."
          />
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="text-button" href="/b1g-iptv-installation-guide">
              Read the complete installation guide <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={commonFaqs} />
      <ContactStrip />
    </main>
  );
}
