import type { Metadata } from "next";
import { Anchor, FileText, Globe, Package, Shield, Ship } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Marine Insurance Indonesia | Cargo & Hull Coverage",
  description: "Marine insurance solutions in Indonesia for cargo, hull & machinery, and freight. English-language service for international trading companies.",
  alternates: { canonical: "https://duniaasuransi.com/marine-insurance" },
  openGraph: { title: "Marine Insurance Indonesia | Cargo & Hull Coverage", description: "Marine insurance solutions in Indonesia for cargo, hull & machinery, and freight. English-language service for international trading companies.", url: "https://duniaasuransi.com/marine-insurance" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Marine Insurance"
      title="Marine Insurance Indonesia"
      description="Comprehensive marine insurance solutions for Indonesian and international businesses — cargo, hull, freight, and P&I coverage."
      benefits={[
        { icon: Anchor, title: "Cargo Insurance", desc: "Protection for goods in transit by sea, air, and land under ICC clauses." },
        { icon: Ship, title: "Hull & Machinery", desc: "Coverage for vessel hull and engine against damage and total loss." },
        { icon: Package, title: "Freight Insurance", desc: "Protection for freight costs that cannot be recovered in event of loss." },
        { icon: Shield, title: "P&I Coverage", desc: "Protection & Indemnity for shipowners liability to crew and third parties." },
        { icon: Globe, title: "Worldwide Coverage", desc: "Coverage for domestic and international trade routes." },
        { icon: FileText, title: "English Service", desc: "Full English-language service from quotation to claim settlement." },
      ]}
      policyTiers={[
        { name: "ICC C", tag: "Basic", features: ["Named perils", "Fire & explosion", "Stranding & sinking", "General average"] },
        { name: "ICC B", tag: "Standard", highlighted: true, features: ["All ICC C +", "Earthquake & volcano", "Washing overboard", "Water ingress", "Total theft"] },
        { name: "ICC A", tag: "All Risk", features: ["All risk coverage", "Full protection", "Theft & pilferage", "Contamination", "War & strikes (optional)"] },
      ]}
      faqs={[
        { q: "What is Institute Cargo Clause A vs B vs C?", a: "ICC A provides the broadest all risk coverage. ICC B covers named perils with some extensions. ICC C covers the most basic named perils only. ICC A is recommended for valuable cargo." },
        { q: "How do I file a marine cargo claim?", a: "Note your exception on the delivery receipt, arrange independent survey within 3 days, collect documents (B/L, invoice, photos), and contact us immediately." },
        { q: "Is marine insurance required for letter of credit (LC)?", a: "Most LCs require marine insurance as a condition. We can issue certificates accepted by major banks and trade finance institutions." },
        { q: "Can I get open cover policy for regular shipments?", a: "Yes, open cover (open policy) is available for regular shippers with automatic coverage for all declared shipments." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Asuransi Kapal", href: "/asuransi-kapal" },
        { label: "Freight Insurance", href: "/freight-insurance" },
        { label: "Protection & Indemnity", href: "/protection-indemnity" },
      ]}
      ctaTitle="Get Your Marine Insurance Quote"
    />
  );
}
