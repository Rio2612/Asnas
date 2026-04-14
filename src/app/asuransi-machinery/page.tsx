import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Machinery & Alat Berat Indonesia | Crane, Excavator, Forklift",
  description: "Asuransi machinery dan alat berat terpercaya di Indonesia — crane, excavator, bulldozer, forklift, wheel loader. Perlindungan mesin industri dan alat konstruksi.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-machinery" },
  openGraph: { title: "Asuransi Machinery & Alat Berat Indonesia | Crane, Excavator, Forklift", description: "Asuransi machinery dan alat berat terpercaya di Indonesia — crane, excavator, bulldozer, forklift, wheel loader. Perlindungan mesin industri dan alat konstruksi.", url: "https://duniaasuransi.com/asuransi-machinery" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Mesin & Alat Berat"
      title="Asuransi Machinery Indonesia"
      description="Solusi perlindungan komprehensif untuk mesin industri dan peralatan berat — dari excavator tambang hingga forklift pabrik."
      benefits={[
        { icon: HardHat, title: "Semua Jenis Alat Berat", desc: "Menanggung excavator, bulldozer, crane, grader, forklift, dan semua unit alat berat." },
        { icon: Wrench, title: "Kerusakan Mekanik & Listrik", desc: "Perlindungan dari kerusakan internal mesin, sistem hidrolik, dan komponen listrik." },
        { icon: Shield, title: "Risiko Operasional", desc: "Termasuk overturning, collision, dan kerusakan akibat kesalahan operator." },
        { icon: Clock, title: "Breakdown Coverage", desc: "Penggantian biaya perbaikan akibat kerusakan mendadak yang tidak terduga." },
        { icon: MapPin, title: "On-site Coverage", desc: "Coverage berlaku di lokasi proyek, tambang, area kerja, dan saat transit." },
        { icon: BarChart, title: "Fleet Alat Berat", desc: "Program khusus untuk manajemen armada alat berat dengan pelaporan terpusat." },
      ]}
      policyTiers={[
        { name: "Basic Machinery", tag: "Dasar", features: ["Kerusakan fisik eksternal", "Pencurian alat berat", "Risiko kebakaran", "Kecelakaan di lokasi kerja"] },
        { name: "Standard Machinery", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Kerusakan mekanik", "Sistem hidrolik", "Transit coverage", "Third party liability"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Breakdown mesin", "Sewa alat pengganti", "Loss of hire", "Overhaul coverage"] },
      ]}
      faqs={[
        { q: "Apa saja alat berat yang bisa diasuransikan?", a: "Excavator, bulldozer, crane, wheel loader, motor grader, forklift, vibro roller, compactor, aerial work platform, dan semua jenis alat berat konstruksi dan pertambangan." },
        { q: "Apakah kerusakan akibat salah operasi ditanggung?", a: "Tergantung polis. Beberapa polis menanggung operator error, namun biasanya dengan deductible yang lebih tinggi." },
        { q: "Apakah bisa diasuransikan untuk alat berat rental?", a: "Ya, perusahaan rental alat berat bisa mengasuransikan unit mereka. Konsultasikan kebutuhan khusus Anda dengan kami." },
        { q: "Apakah coverage berlaku saat alat berat dimuat di kapal?", a: "Diperlukan endorsement marine transit untuk coverage saat alat berat diangkut via laut atau udara." },
      ]}
      relatedLinks={[
        { label: "Asuransi Excavator", href: "/asuransi-excavator" },
        { label: "Asuransi Crane", href: "/asuransi-crane" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
