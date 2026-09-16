import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "B1G IPTV | Premium Live TV, Movies & Sports",
    template: "%s | B1G IPTV",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "B1G IPTV",
    "IPTV subscription",
    "B1G Player",
    "IPTV reseller panel",
    "IPTV installation guide",
    "live TV streaming",
    "4K IPTV",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "B1G IPTV | Premium Live TV, Movies & Sports",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "B1G IPTV | Premium Live TV, Movies & Sports",
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08152e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
