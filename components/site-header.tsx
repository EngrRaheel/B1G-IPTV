"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="B1G IPTV home">
          <span className="brand-mark" aria-hidden="true">
            B1G
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>Premium Streaming</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
          Get Started
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
