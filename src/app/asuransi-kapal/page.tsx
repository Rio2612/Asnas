import type { Metadata } from "next";
import { Anchor, FileText, MapPin, Shield, Ship, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Kapal Indonesia | Hull & Machinery Insurance",
  description: "Asuransi kapal (hull & machinery) untuk armada kapal niaga, kapal tanker, dan kapal penumpang di Indonesia. Konsultasi dengan spesialis marine kami.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-kapal" },
  openGraph: { title: "Asuransi Kapal Indonesia | Hull & Machinery Insurance", description: "Asuransi kapal (hull & machinery) untuk armada kapal niaga, kapal tanker, dan kapal penumpang di Indonesia. Konsultasi dengan spesialis marine kami.", url: "https://duniaasuransi.com/asuransi-kapal" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Asuransi Kapal Indonesia (Hull & Machinery)"
      description="Perlindungan untuk badan kapal (hull) dan mesin kapal dari kerusakan akibat tabrakan, cuaca buruk, dan risiko laut lainnya."
      benefits={[
        { icon: Ship, title: "Hull Coverage", desc: "Menanggung kerusakan badan kapal akibat tabrakan, kandas, cuaca buruk, dan insiden laut." },
        { icon: Wrench, title: "Machinery Insurance", desc: "Perlindungan mesin utama, mesin bantu, dan sistem propulsi kapal." },
        { icon: Anchor, title: "Collision Liability", desc: "Menanggung tanggung jawab terhadap kapal lain yang ditabrak." },
        { icon: Shield, title: "Salvage & General Average", desc: "Menanggung biaya penyelamatan dan kontribusi general average." },
        { icon: MapPin, title: "Trading Area", desc: "Coverage sesuai area pelayaran: lokal, ASEAN, atau worldwide." },
        { icon: FileText, title: "Deductible Rendah", desc: "Pilihan deductible yang sesuai untuk berbagai ukuran kapal." },
      ]}
      policyTiers={[
        { name: "IHC Limited", tag: "Kapal Kecil", features: ["Hull coverage", "Machinery basic", "Total loss & CTL", "Pelayaran lokal"] },
        { name: "IHC Standard", tag: "Populer", highlighted: true, features: ["Semua Limited +", "Collision liability", "Salvage", "Particular average", "ASEAN trading"] },
        { name: "IHC Comprehensive", tag: "Armada", features: ["Semua Standard +", "P&I integration", "Worldwide trading", "War & strikes", "Sue & labour"] },
      ]}
      faqs={[
        { q: "Apa itu hull & machinery insurance?", a: "Hull menanggung kerusakan fisik badan kapal. Machinery menanggung kerusakan mesin kapal. Keduanya biasanya dikombinasikan dalam satu polis." },
        { q: "Apakah tersedia untuk kapal penumpang?", a: "Ya, kapal penumpang dapat diasuransikan. Tambahan P&I (Protection & Indemnity) diperlukan untuk liability terhadap penumpang." },
        { q: "Bagaimana dengan kapal yang sudah berusia tua?", a: "Kapal tua masih bisa diasuransikan tapi memerlukan survei kondisi. Premium akan lebih tinggi untuk kapal di atas 15-20 tahun." },
        { q: "Apakah kapal dalam kondisi dok (drydock) tercakup?", a: "Ya, coverage berlaku saat kapal dalam dry dock untuk perbaikan atau pemeliharaan." },
      ]}
      relatedLinks={[
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Protection & Indemnity", href: "/protection-indemnity" },
        { label: "Hull & Machinery", href: "/hull-machinery-insurance" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
