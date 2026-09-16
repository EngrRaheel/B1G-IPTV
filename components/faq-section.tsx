"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

type Faq = { question: string; answer: string };

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="section section-muted">
      <div className="site-container faq-layout">
        <SectionHeading
          eyebrow="Need help?"
          title="Frequently asked questions"
          description="Quick answers about subscriptions, compatibility, payments, and setup."
          align="left"
        />
        <Accordion className="faq-list" type="single" collapsible defaultValue="faq-0">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="faq-item">
              <AccordionTrigger className="faq-question">{faq.question}</AccordionTrigger>
              <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
