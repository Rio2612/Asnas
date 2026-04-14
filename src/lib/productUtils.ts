import type { Metadata } from "next";
import { LucideIcon } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";
import type { Benefit, PolicyTier, FaqItem, RelatedLink } from "@/components/sections/ProductPage";

export interface ProductConfig {
  badge: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  description: string;
  benefits: Benefit[];
  policyTiers: PolicyTier[];
  faqs: FaqItem[];
  relatedLinks?: RelatedLink[];
  ctaTitle?: string;
  schemaServiceType?: string;
}

export function buildMetadata(config: ProductConfig): Metadata {
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: `https://duniaasuransi.com${config.canonicalPath}` },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://duniaasuransi.com${config.canonicalPath}`,
    },
  };
}

export function buildJsonLd(config: ProductConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    provider: {
      "@type": "InsuranceAgency",
      name: "Dunia Asuransi",
      url: "https://duniaasuransi.com",
    },
    areaServed: "Indonesia",
    serviceType: config.schemaServiceType ?? "Insurance",
    description: config.metaDescription,
  };
}
