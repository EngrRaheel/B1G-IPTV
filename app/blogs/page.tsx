import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Trophy } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "B1G IPTV Blogs, Insights & Guides",
  description: "Read B1G IPTV guides for watching NFL, NBA, MLB, NHL, MLS, UFC, WWE, boxing, and other live sports across your devices.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero eyebrow="Insights & guides" title="Watch smarter with B1G IPTV" description="Practical guides for live sports, device setup, and getting the best experience from your subscription." primaryLabel="Start free trial" primaryMessage="Hi, I would like a B1G IPTV free trial." compact>
        <div className="blog-hero-art"><Trophy aria-hidden="true" /><strong>Sports streaming guides</strong><span>NFL · NBA · MLB · NHL · MLS · PPV</span></div>
      </PageHero>
      <section className="section"><div className="site-container blog-grid">{blogPosts.map((post, index) => <article key={post.slug} className={`blog-card ${index === 0 ? "blog-card-featured" : ""}`}><div className="blog-cover"><span>{post.label}</span><Trophy aria-hidden="true" /><small>Guide {String(index + 1).padStart(2, "0")}</small></div><div className="blog-card-body"><p className="blog-date"><CalendarDays aria-hidden="true" /> Updated June 20, 2026</p><h2><Link href={`/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="text-button" href={`/${post.slug}`}>Read guide <ArrowRight aria-hidden="true" /></Link></div></article>)}</div></section>
    </main>
  );
}
