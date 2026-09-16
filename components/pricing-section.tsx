"use client";

import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/section-heading";
import { plans, whatsappUrl } from "@/lib/site";

function PlanGrid({ tier }: { tier: "standard" | "premium" }) {
  return (
    <div className="pricing-grid">
      {plans[tier].map((plan) => (
        <article key={`${tier}-${plan.duration}`} className={`price-card ${plan.recommended ? "featured" : ""}`}>
          {plan.recommended && <span className="recommended">Recommended</span>}
          <p className="plan-duration">{plan.duration}</p>
          <p className="plan-price">
            <sup>$</sup>
            {plan.price}
          </p>
          <p className="plan-tier">{tier} plan</p>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <Check aria-hidden="true" /> {feature}
              </li>
            ))}
          </ul>
          <a
            className="button button-plan"
            href={whatsappUrl(`Hi, I want the ${tier} ${plan.duration} B1G IPTV plan.`)}
            target="_blank"
            rel="noreferrer"
          >
            Buy now
          </a>
        </article>
      ))}
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="site-container">
        <SectionHeading
          eyebrow="Simple pricing"
          title="B1G IPTV subscription plans"
          description="Choose your plan and stream on all your favorite devices. Ask about extra connections for simultaneous viewing."
        />
        <Tabs defaultValue="standard" className="pricing-tabs">
          <TabsList className="pricing-tab-list">
            <TabsTrigger value="standard" className="pricing-tab-trigger">
              Standard
            </TabsTrigger>
            <TabsTrigger value="premium" className="pricing-tab-trigger">
              Premium
            </TabsTrigger>
          </TabsList>
          <TabsContent value="standard">
            <PlanGrid tier="standard" />
          </TabsContent>
          <TabsContent value="premium">
            <PlanGrid tier="premium" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
