import type { Metadata } from "next";
import { Clock3, Mail, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact B1G IPTV Support",
  description: "Contact B1G IPTV for account activation, installation help, billing questions, reseller enquiries, and technical support.",
  alternates: { canonical: "/contact-b1g-iptv" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Direct assistance" title="Get in touch with customer support" description="Our team can help with activation, player setup, account questions, billing, and reseller enquiries." primaryLabel="Chat on WhatsApp" primaryMessage="Hi, I need help with B1G IPTV." compact>
        <div className="support-hours"><Clock3 aria-hidden="true" /><span><small>Typical response</small><strong>Within a few minutes</strong><p>For the quickest help, include your device type and a short description of the issue.</p></span></div>
      </PageHero>

      <section className="section">
        <div className="site-container contact-option-grid">
          <a href={whatsappUrl("Hi, I need B1G IPTV support.")} target="_blank" rel="noreferrer"><span><MessageCircle aria-hidden="true" /></span><small>Fastest response</small><h2>WhatsApp support</h2><p>Use instant messaging for activation, troubleshooting, and setup guidance.</p><strong>Open WhatsApp</strong></a>
          <a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer"><span><Send aria-hidden="true" /></span><small>Updates & help</small><h2>Telegram</h2><p>Ask general questions and receive setup or service updates.</p><strong>Open Telegram</strong></a>
          <a href={`mailto:${siteConfig.email}`}><span><Mail aria-hidden="true" /></span><small>Detailed questions</small><h2>Email support</h2><p>Ideal for business enquiries, billing, and more detailed technical issues.</p><strong>{siteConfig.email}</strong></a>
        </div>
      </section>

      <section className="section section-muted"><div className="site-container form-layout"><div><span className="eyebrow">Contact us</span><h2>Send us a message</h2><p>Share a few details and your preferred email app will open with a ready-to-send message.</p><div className="form-promise"><Clock3 aria-hidden="true" /><span><strong>Response target</strong>Within 12 hours for email enquiries</span></div></div><ContactForm /></div></section>
    </main>
  );
}
