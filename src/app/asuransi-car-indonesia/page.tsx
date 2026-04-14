import type { Metadata } from "next";
import { Building2, Car, Clock, Globe, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Car Insurance Indonesia | Best Auto Insurance for Expats & Business",
  description: "Best car insurance in Indonesia for expats, foreign businesses, and Indonesian drivers. All Risk & TLO coverage from OJK-licensed insurers. English-language service.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-car-indonesia" },
  openGraph: { title: "Car Insurance Indonesia | Best Auto Insurance for Expats & Business", description: "Best car insurance in Indonesia for expats, foreign businesses, and Indonesian drivers. All Risk & TLO coverage from OJK-licensed insurers. English-language service.", url: "https://duniaasuransi.com/asuransi-car-indonesia" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Vehicle Insurance"
      title="Car Insurance Indonesia"
      description="Comprehensive car insurance solutions in Indonesia for expats, multinationals, and local businesses. English-speaking consultants, OJK-compliant coverage."
      benefits={[
        { icon: Car, title: "All Risk Coverage", desc: "Comprehensive protection for all types of physical damage including partial and total loss." },
        { icon: Shield, title: "Third Party Liability", desc: "Protection against legal claims from third parties for bodily injury and property damage." },
        { icon: Globe, title: "English-Language Service", desc: "Full service in English from quotation, policy issuance, to claim assistance." },
        { icon: Building2, title: "OJK-Licensed Insurers", desc: "All our insurance partners are licensed and supervised by OJK (Financial Services Authority)." },
        { icon: Wrench, title: "Nationwide Repair Network", desc: "Access to authorized workshops and preferred repair centers across Indonesia." },
        { icon: Clock, title: "Fast Claim Processing", desc: "Dedicated claim support to guide you through the entire claims process efficiently." },
      ]}
      policyTiers={[
        { name: "TLO", tag: "Budget", features: ["Total loss protection", "Theft coverage", "Affordable premium", "For older vehicles"] },
        { name: "All Risk", tag: "Popular", highlighted: true, features: ["All damage types", "Third party liability", "Workshop network", "Claim assistance"] },
        { name: "Comprehensive", tag: "Complete", features: ["All Risk +", "Natural disasters", "Terrorism & sabotage", "PA driver & passenger", "24/7 roadside assistance"] },
      ]}
      faqs={[
        { q: "Can I get car insurance in Indonesia as an expat?", a: "Yes, expats with valid Indonesian driver's license (SIM) and vehicle registered in Indonesia can get car insurance from any OJK-licensed insurer." },
        { q: "What documents are needed for car insurance in Indonesia?", a: "You need STNK (vehicle registration), KTP or passport (for expats), and BPKB (vehicle ownership document). Our consultant will guide you." },
        { q: "How does the claim process work in Indonesia?", a: "Report the incident to our WhatsApp line immediately. We provide English-language support throughout the entire claim process." },
        { q: "Is there insurance for imported/CBU cars?", a: "Yes, CBU and imported vehicles can be insured. The sum insured should reflect the actual market value or agreed value of the vehicle." },
      ]}
      relatedLinks={[
        { label: "Asuransi Mobil", href: "/asuransi-mobil" },
        { label: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik" },
        { label: "Kalkulator Premi", href: "/kalkulator-premi-mobil" },
      ]}
      ctaTitle="Get Your Car Insurance Quote Today"
    />
  );
}
