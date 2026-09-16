import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Check } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";
import { blogPosts } from "@/lib/blogs";
import { whatsappUrl } from "@/lib/site";

export function BlogArticle({ post }: { post: BlogPost }) {
  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "B1G IPTV" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="article-hero">
        <div className="site-container article-hero-inner">
          <Link href="/blogs" className="article-back"><ArrowLeft aria-hidden="true" /> All guides</Link>
          <span className="article-label">{post.label}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta"><CalendarDays aria-hidden="true" /> Updated June 20, 2026 · 5 min read</div>
        </div>
      </header>

      <div className="site-container article-layout">
        <article className="article-content">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" />{bullet}</li>)}
                </ul>
              )}
              {section.steps && (
                <div className="article-steps">
                  {section.steps.map((step, index) => (
                    <div key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>
                  ))}
                </div>
              )}
            </section>
          ))}
          <div className="article-cta">
            <div><span>Ready to watch?</span><h2>Start your B1G IPTV trial</h2></div>
            <a className="button button-primary" href={whatsappUrl(`Hi, I read your ${post.label} guide and would like a B1G IPTV trial.`)} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight aria-hidden="true" /></a>
          </div>
        </article>
        <aside className="article-sidebar">
          <div className="sidebar-card"><span>Up next</span><h2>{nextPost.title}</h2><p>{nextPost.excerpt}</p><Link href={`/${nextPost.slug}`}>Read guide <ArrowRight aria-hidden="true" /></Link></div>
          <div className="sidebar-card sidebar-dark"><span>Need help?</span><h2>Talk to support</h2><p>Get help choosing a plan or setting up your device.</p><a href={whatsappUrl("Hi, I need help with B1G IPTV.")} target="_blank" rel="noreferrer">Open WhatsApp <ArrowRight aria-hidden="true" /></a></div>
        </aside>
      </div>
    </main>
  );
}
