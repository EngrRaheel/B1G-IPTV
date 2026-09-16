import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog-article";
import { getBlogPost } from "@/lib/blogs";

const post = getBlogPost("how-to-watch-nfl-on-b1g-iptv")!;
export const metadata: Metadata = { title: post.metaTitle, description: post.description, alternates: { canonical: `/${post.slug}` } };
export default function Page() { return <BlogArticle post={post} />; }
