import type { Metadata } from "next";
import { AlertTriangle, Anchor, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Protection & Indemnity Insurance | P&I untuk Pemilik Kapal Indonesia",
  description: "Protection & Indemnity (P&I) insurance untuk pemilik kapal di Indonesia. Liability terhadap kru, penumpang, pencemaran minyak, dan pihak ketiga.",
  alternates: { canonical: "https://duniaasuransi.com/protection-indemnity" },
  openGraph: { title: "Protection & Indemnity Insurance | P&I untuk Pemilik Kapal Indonesia", description: "Protection & Indemnity (P&I) insurance untuk pemilik kapal di Indonesia. Liability terhadap kru, penumpang, pencemaran minyak, dan pihak ketiga.", url: "https://duniaasuransi.com/protection-indemnity" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Protection & Indemnity (P&I) Insurance Indonesia"
      description="P&I insurance melindungi pemilik kapal dari liability hukum terhadap kru, penumpang, pihak ketiga, dan kerusakan lingkungan."
      benefits={[
        { icon: Users, title: "Crew Liability", desc: "Menanggung kompensasi cedera, sakit, atau kematian awak kapal." },
        { icon: Shield, title: "Cargo Liability", desc: "Tanggung jawab atas kerusakan atau kehilangan kargo yang diangkut." },
        { icon: AlertTriangle, title: "Pollution Liability", desc: "Liability pencemaran minyak dan bahan berbahaya dari kapal." },
        { icon: Anchor, title: "Wreck Removal", desc: "Biaya pengangkatan bangkai kapal yang diwajibkan otoritas pelabuhan." },
        { icon: Scale, title: "Passenger Liability", desc: "Tanggung jawab cedera penumpang kapal penumpang." },
        { icon: FileText, title: "Legal Costs", desc: "Menanggung biaya hukum dan representasi dalam klaim P&I." },
      ]}
      policyTiers={[
        { name: "P&I Basic", tag: "Kapal Kecil", features: ["Crew liability", "Cargo liability", "Oil pollution basic", "Port authority claims"] },
        { name: "P&I Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Wreck removal", "Extended pollution", "Passenger liability", "Legal costs"] },
        { name: "P&I Comprehensive", tag: "Armada", features: ["Semua Standard +", "Unlimited pollution", "Stowaway", "Quarantine", "War extension"] },
      ]}
      faqs={[
        { q: "Apakah P&I wajib untuk kapal di Indonesia?", a: "Kapal dengan bobot tertentu diwajibkan memiliki jaminan finansial untuk oil pollution liability. P&I adalah cara umum untuk memenuhi kewajiban ini." },
        { q: "Apa perbedaan P&I dengan H&M?", a: "H&M menanggung kerusakan fisik kapal (hull) dan mesin. P&I menanggung liability terhadap pihak ketiga: kru, kargo, lingkungan, dan lainnya." },
        { q: "Apakah P&I tersedia melalui P&I club?", a: "Kami dapat membantu Anda bergabung dengan P&I club internasional atau mendapatkan P&I melalui pasar asuransi Indonesia." },
        { q: "Apakah kapal feri penumpang perlu P&I?", a: "Ya, kapal feri sangat memerlukan P&I khususnya untuk passenger liability dan oil pollution sesuai peraturan Kemenhub." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kapal", href: "/asuransi-kapal" },
        { label: "Hull & Machinery", href: "/hull-machinery-insurance" },
        { label: "Asuransi Marine", href: "/asuransi-marine" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
