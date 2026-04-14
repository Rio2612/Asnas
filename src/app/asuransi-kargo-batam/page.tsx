import type { Metadata } from "next";
import { FileText, MapPin, Package, Shield, Ship } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Kargo Batam | Proteksi Pengiriman Batam-Singapura",
  description: "Asuransi kargo khusus untuk perdagangan di Batam, FTZ, dan jalur Batam-Singapura. Perlindungan ekspor-impor kargo Kepulauan Riau.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-kargo-batam" },
  openGraph: { title: "Asuransi Kargo Batam | Proteksi Pengiriman Batam-Singapura", description: "Asuransi kargo khusus untuk perdagangan di Batam, FTZ, dan jalur Batam-Singapura. Perlindungan ekspor-impor kargo Kepulauan Riau.", url: "https://duniaasuransi.com/asuransi-kargo-batam" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Asuransi Kargo Batam & Kepulauan Riau"
      description="Solusi asuransi kargo khusus untuk aktivitas perdagangan di Batam Free Trade Zone dan jalur ekspor-impor Batam-Singapura-Indonesia."
      benefits={[
        { icon: Package, title: "FTZ Batam Coverage", desc: "Perlindungan kargo dalam kawasan Free Trade Zone Batam dan sekitarnya." },
        { icon: Ship, title: "Rute Batam-Singapura", desc: "Coverage khusus untuk pengiriman feri dan kapal di rute Batam-Singapura." },
        { icon: Shield, title: "Re-ekspor & Transit", desc: "Perlindungan barang re-ekspor dan kargo dalam proses transit di Batam." },
        { icon: Package, title: "Warehouse Storage", desc: "Coverage untuk barang yang disimpan sementara di gudang Batam." },
        { icon: MapPin, title: "Multi-modal Transport", desc: "Perlindungan door-to-door untuk kargo dari Batam ke seluruh Indonesia." },
        { icon: FileText, title: "Customs Documentation", desc: "Bantuan dokumentasi klaim yang sesuai prosedur bea cukai FTZ." },
      ]}
      policyTiers={[
        { name: "Basic Cargo", tag: "Dasar", features: ["Named perils ICC C", "Pelabuhan Batam", "Single shipment"] },
        { name: "Standard Cargo", tag: "Populer", highlighted: true, features: ["ICC B coverage", "FTZ storage", "Re-ekspor", "Rute Singapura", "Open cover available"] },
        { name: "All Risk Batam", tag: "Komprehensif", features: ["ICC A all risk", "Multi-modal", "Warehouse", "Door-to-door", "Regional coverage"] },
      ]}
      faqs={[
        { q: "Apakah coverage berlaku di Free Trade Zone Batam?", a: "Ya, asuransi kargo berlaku untuk barang dalam FTZ Batam termasuk saat penyimpanan di gudang dan proses bongkar muat." },
        { q: "Bagaimana untuk kargo ekspor ke Singapura?", a: "Kargo ekspor ke Singapura bisa diasuransikan dengan polis marine cargo ICC A/B/C. Coverage dimulai dari gudang Batam hingga gudang tujuan di Singapura." },
        { q: "Apakah tersedia open cover untuk pengiriman rutin?", a: "Ya, open cover tersedia untuk shipper yang melakukan pengiriman rutin dari/ke Batam." },
        { q: "Bagaimana prosedur klaim untuk kargo yang rusak di Batam?", a: "Hubungi kami segera, amankan bukti kerusakan, dan kami akan mengirimkan surveyor ke lokasi di Batam." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Marine Insurance", href: "/marine-insurance" },
        { label: "Freight Insurance", href: "/freight-insurance" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
