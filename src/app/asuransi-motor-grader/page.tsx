import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Motor Grader | Alat Berat Pembangunan Jalan",
  description: "Asuransi motor grader untuk proyek jalan, airport, dan tambang di Indonesia. Perlindungan kerusakan fisik, mekanikal, dan operasional.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-motor-grader" },
  openGraph: { title: "Asuransi Motor Grader | Alat Berat Pembangunan Jalan", description: "Asuransi motor grader untuk proyek jalan, airport, dan tambang di Indonesia. Perlindungan kerusakan fisik, mekanikal, dan operasional.", url: "https://duniaasuransi.com/asuransi-motor-grader" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Motor Grader Indonesia"
      description="Perlindungan komprehensif untuk motor grader yang digunakan dalam pembangunan jalan, runway bandara, dan area pertambangan."
      benefits={[
        { icon: HardHat, title: "Proyek Jalan & Runway", desc: "Coverage khusus untuk motor grader pada proyek jalan raya, tol, dan landasan pacu." },
        { icon: Shield, title: "Kerusakan Fisik", desc: "Perlindungan dari kerusakan akibat operasional di medan tidak rata." },
        { icon: Wrench, title: "Blade & Circle", desc: "Coverage untuk blade, circle assembly, dan komponen utama grader." },
        { icon: Clock, title: "Area Tambang", desc: "Berlaku untuk motor grader yang beroperasi di area jalan tambang." },
        { icon: MapPin, title: "Seluruh Indonesia", desc: "Coverage nasional untuk proyek jalan di seluruh wilayah Indonesia." },
        { icon: BarChart, title: "Fleet Grader", desc: "Program khusus untuk kontraktor dengan armada motor grader." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kerusakan fisik", "Kebakaran", "Pencurian"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Breakdown mesin", "Blade coverage", "TPL"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Loss of hire", "PA operator", "Fleet"] },
      ]}
      faqs={[
        { q: "Apakah motor grader di proyek jalan tol bisa diasuransikan?", a: "Ya, motor grader di semua jenis proyek jalan dapat diasuransikan. Nilai pertanggungan sesuai replacement cost." },
        { q: "Bagaimana klaim jika blade rusak akibat batu keras?", a: "Kerusakan mendadak pada blade akibat benturan dengan batu atau objek keras termasuk risiko yang bisa diklaim." },
        { q: "Apakah tersedia coverage untuk proyek di luar Jawa?", a: "Ya, coverage berlaku nasional termasuk proyek di Sumatera, Kalimantan, Sulawesi, dan Papua." },
        { q: "Berapa lama proses klaim untuk grader?", a: "Tergantung nilai klaim. Umumnya 7-21 hari kerja setelah survei dan dokumen lengkap." },
      ]}
      relatedLinks={[
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
