import type { Metadata } from "next";
import { CheckCircle2, Clock3, Download, Headphones, ShieldCheck } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { FaqSection } from "@/components/faq-section";
import { InstallationTabs } from "@/components/installation-tabs";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { commonFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "B1G IPTV Installation Guide | Player & APK Setup",
  description: "Follow step-by-step instructions to install B1G Player or another compatible IPTV app on Android, Firestick, smart TV, Apple, Windows, or MAG Box.",
  alternates: { canonical: "/b1g-iptv-installation-guide" },
};

export default function InstallationGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="Setup guide"
        title="B1G IPTV installation guide"
        description="Activate B1G IPTV on your preferred device with clear, step-by-step instructions. Most setups take less than five minutes."
        primaryLabel="Start free trial"
        primaryMessage="Hi, I would like a B1G IPTV trial and setup help."
        secondary={{ label: "Contact support", href: "/contact-b1g-iptv" }}
      >
        <div className="setup-visual"><div className="setup-device"><div className="setup-screen"><Download aria-hidden="true" /><strong>5637737</strong><span>B1G Player code</span></div></div><div className="setup-badge setup-badge-one"><Clock3 aria-hidden="true" /><span><strong>Under 5 min</strong>Quick setup</span></div><div className="setup-badge setup-badge-two"><ShieldCheck aria-hidden="true" /><span><strong>Guided</strong>Support available</span></div></div>
      </PageHero>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Choose your device" title="Compatible device setup" description="Select your platform to see the installation steps and recommended player options." />
          <InstallationTabs />
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container support-banner"><div className="support-banner-icon"><Headphones aria-hidden="true" /></div><div><span className="eyebrow">One-to-one help</span><h2>Stuck during setup?</h2><p>Send support your device model and a screenshot of the problem. We will guide you through the next step.</p></div><a href="/contact-b1g-iptv" className="button button-primary">Get support <CheckCircle2 aria-hidden="true" /></a></div>
      </section>
      <FaqSection faqs={commonFaqs} />
      <ContactStrip />
    </main>
  );
}
