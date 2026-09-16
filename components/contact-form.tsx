"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`B1G IPTV website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <Input name="name" required placeholder="John Doe" className="form-control" />
        </label>
        <label>
          <span>Email address</span>
          <Input name="email" type="email" required placeholder="john@example.com" className="form-control" />
        </label>
      </div>
      <label>
        <span>Your message</span>
        <Textarea name="message" required placeholder="Tell us how we can help..." className="form-control form-textarea" />
      </label>
      <button className="button button-primary" type="submit">
        Send message <Send aria-hidden="true" />
      </button>
      {sent && <p className="form-note" role="status">Your email app should now be ready with this message.</p>}
    </form>
  );
}
