import { Mail, MessageCircle, Send } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function ContactStrip() {
  return (
    <section className="section contact-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Support when you need it"
          title="Get in touch with B1G IPTV"
          description="Choose the channel that works best for activation, setup, billing, or technical support."
        />
        <div className="contact-grid">
          <a className="contact-card" href={whatsappUrl("Hi, I need B1G IPTV support.")} target="_blank" rel="noreferrer">
            <span className="contact-icon"><MessageCircle aria-hidden="true" /></span>
            <h3>WhatsApp Support</h3>
            <p>Fast help with activation, account questions, and troubleshooting.</p>
            <span className="text-link">Open WhatsApp</span>
          </a>
          <a className="contact-card" href={siteConfig.telegramUrl} target="_blank" rel="noreferrer">
            <span className="contact-icon"><Send aria-hidden="true" /></span>
            <h3>Telegram</h3>
            <p>Get updates, setup guidance, and help from the support team.</p>
            <span className="text-link">Open Telegram</span>
          </a>
          <a className="contact-card" href={`mailto:${siteConfig.email}`}>
            <span className="contact-icon"><Mail aria-hidden="true" /></span>
            <h3>Email Support</h3>
            <p>Send detailed billing, reseller, or technical questions by email.</p>
            <span className="text-link">{siteConfig.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
