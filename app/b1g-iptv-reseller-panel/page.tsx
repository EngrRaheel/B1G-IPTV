import type { Metadata } from "next";
import { ArrowRight, BadgeDollarSign, CircleGauge, Clock3, Film, Globe2, Headphones, LayoutDashboard, MonitorSmartphone, Signal, Sparkles, Tv } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { commonFaqs, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "B1G IPTV Reseller Panel",
  description: "Start an IPTV reseller business with flexible credits, a smart management panel, instant activation, and responsive technical support.",
  alternates: { canonical: "/b1g-iptv-reseller-panel" },
};

const highlights = [
  { icon: Tv, value: "40,000+", label: "Live channels", text: "Local and international broadcasts." },
  { icon: Film, value: "80,000+", label: "Movies & VOD", text: "A broad, frequently updated library." },
  { icon: BadgeDollarSign, value: "Flexible", label: "Your pricing", text: "Choose your own retail margins." },
  { icon: LayoutDashboard, value: "Simple", label: "Smart panel", text: "Manage users, subscriptions, and credits." },
];

const benefits = [
  { icon: BadgeDollarSign, title: "High profit margins", text: "Low operating costs and flexible credit plans give you room to build a sustainable offer." },
  { icon: CircleGauge, title: "Full panel access", text: "Create users, extend subscriptions, monitor credits, and keep customers organized." },
  { icon: Signal, title: "Stable, fast servers", text: "Streaming infrastructure designed for uptime, consistent performance, and reduced buffering." },
  { icon: Headphones, title: "Responsive support", text: "Get practical help when you have activation, panel, or customer setup questions." },
  { icon: Clock3, title: "Instant activation", text: "Create or renew customer accounts from the panel without a long manual process." },
  { icon: MonitorSmartphone, title: "Multi-device support", text: "Serve customers using smart TVs, Firestick, phones, tablets, computers, and MAG boxes." },
];

export default function ResellerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reseller opportunity"
        title="Start your IPTV business with B1G"
        description="Use reliable streaming infrastructure, flexible credit plans, and a straightforward management panel to build your own customer base."
        primaryLabel="View credit plans"
        primaryMessage="Hi, I would like details about the B1G IPTV reseller credit plans."
        secondary={{ label: "How it works", href: "/b1g-iptv-reseller-panel#how-it-works" }}
      >
        <div className="reseller-dashboard">
          <div className="dashboard-top"><span><span className="status-dot" /> Panel online</span><strong>B1G Reseller</strong></div>
          <div className="dashboard-metrics"><div><span>Active users</span><strong>1,284</strong><small>+12.8%</small></div><div><span>Credits</span><strong>3,640</strong><small>Ready to use</small></div></div>
          <div className="dashboard-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="dashboard-row"><span>Recent activations</span><span>Today</span></div>
          <div className="dashboard-lines"><i /><i /><i /></div>
        </div>
      </PageHero>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Built for your growth" title="What you get as a B1G IPTV reseller" description="Everything you need to activate customers, manage credits, and grow at your own pace." />
          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, value, label, text }) => <article key={label} className="highlight-card"><Icon aria-hidden="true" /><strong>{value}</strong><h3>{label}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="how-it-works">
        <div className="site-container">
          <SectionHeading eyebrow="Why B1G" title="A reseller program designed to scale" description="A practical foundation for launching without complex infrastructure or specialist technical skills." />
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => <article key={title} className="benefit-card"><span className="benefit-number">0{index + 1}</span><span className="benefit-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="reseller-cta"><div className="site-container reseller-cta-inner"><div><span className="eyebrow">Build your customer base</span><h2>Ready to become a reseller?</h2><p>Ask about credit bundles, panel access, setup, and onboarding.</p></div><a className="button button-primary" href={whatsappUrl("Hi, I want to become a B1G IPTV reseller.")} target="_blank" rel="noreferrer">Talk to the reseller team <ArrowRight aria-hidden="true" /></a></div></section>
      <FaqSection faqs={commonFaqs} />
      <ContactStrip />
    </main>
  );
}
