import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryMessage?: string;
  secondary?: { label: string; href: string };
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Start Free Trial",
  primaryMessage,
  secondary,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`}>
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappUrl(primaryMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" /> {primaryLabel}
            </a>
            {secondary && (
              <Link className="button button-secondary" href={secondary.href}>
                {secondary.label} <ArrowRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
        {children && <div className="hero-visual">{children}</div>}
      </div>
    </section>
  );
}
