import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              B1G
            </span>
            <span className="brand-copy">
              <strong>{siteConfig.name}</strong>
              <small>Premium Streaming</small>
            </span>
          </Link>
          <p className="footer-intro">
            Live channels, movies, series, sports, and simple setup on every major device.
          </p>
        </div>

        <div>
          <h2>Quick links</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2>Support</h2>
          <div className="footer-links">
            <a href={whatsappUrl("Hi, I need help with B1G IPTV.")} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp support
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© 2026 B1G IPTV. All rights reserved.</p>
        <p>Fast setup · Secure support · All major devices</p>
      </div>
    </footer>
  );
}
