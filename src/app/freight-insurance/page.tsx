import type { Metadata } from "next";
import { Anchor, FileText, MapPin, Package, Shield, Ship } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Freight Insurance Indonesia | Asuransi Biaya Pengiriman",
  description: "Freight insurance untuk melindungi biaya pengiriman kargo di Indonesia. Jika kargo hilang total, biaya freight tetap bisa diklaim.",
  alternates: { canonical: "https://duniaasuransi.com/freight-insurance" },
  openGraph: { title: "Freight Insurance Indonesia | Asuransi Biaya Pengiriman", description: "Freight insurance untuk melindungi biaya pengiriman kargo di Indonesia. Jika kargo hilang total, biaya freight tetap bisa diklaim.", url: "https://duniaasuransi.com/freight-insurance" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Freight Insurance Indonesia"
      description="Perlindungan biaya pengiriman (freight) yang tidak dapat dikembalikan jika terjadi kehilangan total kargo."
      benefits={[
        { icon: Package, title: "Freight at Risk", desc: "Menanggung biaya freight yang tidak dapat dikembalikan oleh carrier jika kargo hilang total." },
        { icon: Ship, title: "Advanced Freight", desc: "Perlindungan freight yang dibayar di muka (prepaid freight) dari risiko kehilangan." },
        { icon: FileText, title: "Earned Freight", desc: "Menanggung freight yang sudah diperoleh carrier dan tidak bisa dikembalikan." },
        { icon: Shield, title: "Multi-mode", desc: "Coverage berlaku untuk freight via laut, udara, dan darat." },
        { icon: Anchor, title: "Terpadu dengan Kargo", desc: "Dapat dikombinasikan dengan polis marine cargo untuk perlindungan lengkap." },
        { icon: MapPin, title: "Rute Internasional", desc: "Coverage untuk freight domestik dan pengiriman internasional." },
      ]}
      policyTiers={[
        { name: "Basic Freight", tag: "Dasar", features: ["Total loss only", "Prepaid freight", "Sea freight"] },
        { name: "Standard Freight", tag: "Populer", highlighted: true, features: ["Total & partial loss", "Multi-modal", "Air & sea freight", "Advance freight"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Earned freight", "Additional charges", "Currency fluctuation"] },
      ]}
      faqs={[
        { q: "Apa itu freight at risk?", a: "Freight at risk adalah biaya pengiriman yang dibebankan kepada pemilik kargo dan tidak bisa dikembalikan jika kargo hilang. Freight insurance melindungi biaya ini." },
        { q: "Apakah freight insurance terpisah dari cargo insurance?", a: "Ya, freight insurance adalah polis terpisah. Namun keduanya bisa dikombinasikan untuk perlindungan total nilai CIF kargo." },
        { q: "Kapan freight insurance diperlukan?", a: "Saat Anda membayar freight di muka dan tidak ada jaminan pengembalian jika kargo hilang. Terutama untuk pengiriman dengan nilai freight besar." },
        { q: "Apakah berlaku untuk air freight?", a: "Ya, freight insurance berlaku untuk pengiriman via udara (air freight) maupun laut dan darat." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Marine Insurance", href: "/marine-insurance" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
