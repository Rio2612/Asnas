import type { Metadata } from "next";
import { AlertTriangle, BarChart, Clock, Shield, Truck, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Dump Truck Indonesia | Tambang & Konstruksi",
  description: "Asuransi dump truck untuk kegiatan tambang, konstruksi, dan proyek infrastruktur di Indonesia. All Risk & TLO untuk unit dump truck 20-300 ton.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-dump-truck" },
  openGraph: { title: "Asuransi Dump Truck Indonesia | Tambang & Konstruksi", description: "Asuransi dump truck untuk kegiatan tambang, konstruksi, dan proyek infrastruktur di Indonesia. All Risk & TLO untuk unit dump truck 20-300 ton.", url: "https://duniaasuransi.com/asuransi-dump-truck" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Kendaraan Berat"
      title="Asuransi Dump Truck Indonesia"
      description="Perlindungan khusus untuk dump truck operasional di area tambang, proyek konstruksi, dan infrastruktur — termasuk risiko operasional di medan berat."
      benefits={[
        { icon: Truck, title: "Dump Truck Semua Kapasitas", desc: "Menanggung dump truck 20 ton hingga 300+ ton (ultra class) untuk semua merek." },
        { icon: Shield, title: "Operasional Tambang", desc: "Coverage spesifik untuk risiko operasional di area tambang terbuka dan underground." },
        { icon: Wrench, title: "On-site Repair", desc: "Bengkel on-site dan mobile workshop untuk perbaikan cepat di area tambang terpencil." },
        { icon: AlertTriangle, title: "Third Party Liability", desc: "Tanggung jawab terhadap kerusakan atau cedera pihak ketiga di area operasional." },
        { icon: Clock, title: "24/7 Breakdown Support", desc: "Layanan darurat 24 jam untuk kendaraan yang mogok atau rusak di area operasional." },
        { icon: BarChart, title: "Fleet Program", desc: "Program manajemen armada dump truck dengan laporan klaim dan analisis risiko berkala." },
      ]}
      policyTiers={[
        { name: "TLO Dump Truck", tag: "Ekonomis", features: ["Total loss & pencurian", "Area operasional terbatas", "Rate kompetitif"] },
        { name: "All Risk Dump Truck", tag: "Populer", highlighted: true, features: ["Kerusakan parsial", "Area tambang & konstruksi", "TPL coverage", "On-site repair"] },
        { name: "Comprehensive Fleet", tag: "Enterprise", features: ["All Risk +", "Fleet management", "Breakdown 24/7", "BI coverage", "Risk survey"] },
      ]}
      faqs={[
        { q: "Apakah dump truck off-road bisa diasuransikan?", a: "Ya, dump truck off-road untuk tambang (rigid hauler) bisa diasuransikan. Diperlukan survei lokasi dan kondisi unit." },
        { q: "Apa perbedaan asuransi dump truck dengan alat berat?", a: "Dump truck berplat kendaraan diasuransikan dengan polis kendaraan, sementara dump truck tanpa plat (off-road) masuk kategori alat berat (machinery)." },
        { q: "Apakah tersedia untuk kegiatan tambang di Kalimantan dan Papua?", a: "Ya, coverage berlaku di seluruh Indonesia termasuk area tambang terpencil di Kalimantan, Papua, dan Sulawesi." },
        { q: "Berapa lama proses klaim untuk dump truck?", a: "Survei dapat dilakukan on-site. Proses klaim umumnya 7-21 hari kerja tergantung nilai kerugian." },
      ]}
      relatedLinks={[
        { label: "Asuransi Truk", href: "/asuransi-truk" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Asuransi Excavator", href: "/asuransi-excavator" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
