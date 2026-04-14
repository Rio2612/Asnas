import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Alat Berat Indonesia | Excavator, Bulldozer, Crane, Forklift",
  description: "Asuransi alat berat terpercaya di Indonesia — excavator, bulldozer, crane, forklift, wheel loader, motor grader. Proteksi operasional dan mekanikal terlengkap.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-alat-berat" },
  openGraph: { title: "Asuransi Alat Berat Indonesia | Excavator, Bulldozer, Crane, Forklift", description: "Asuransi alat berat terpercaya di Indonesia — excavator, bulldozer, crane, forklift, wheel loader, motor grader. Proteksi operasional dan mekanikal terlengkap.", url: "https://duniaasuransi.com/asuransi-alat-berat" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat Indonesia"
      title="Asuransi Alat Berat Terlengkap Indonesia"
      description="Solusi asuransi menyeluruh untuk semua jenis alat berat — dari excavator tambang hingga crane konstruksi bertingkat."
      benefits={[
        { icon: HardHat, title: "20+ Jenis Alat Berat", desc: "Excavator, bulldozer, crane, forklift, grader, wheel loader, compactor, dan semua alat berat lainnya." },
        { icon: Shield, title: "Kerusakan Fisik & Mekanikal", desc: "Perlindungan menyeluruh dari kerusakan eksternal maupun internal unit alat berat." },
        { icon: MapPin, title: "Coverage Area Kerja", desc: "Berlaku di lokasi konstruksi, pertambangan, pabrik, dan area kerja lainnya." },
        { icon: Clock, title: "Transit Antar Proyek", desc: "Perlindungan saat unit diangkut menggunakan lowboy atau trailer." },
        { icon: Wrench, title: "Breakdown Mesin", desc: "Coverage kerusakan mendadak mesin dan komponen mekanikal." },
        { icon: BarChart, title: "Manajemen Armada", desc: "Sistem pelaporan dan pengelolaan klaim terpusat untuk armada besar." },
      ]}
      policyTiers={[
        { name: "Basic Heavy Equipment", tag: "Dasar", features: ["Kerusakan fisik eksternal", "Kebakaran", "Pencurian unit", "Area kerja spesifik"] },
        { name: "Standard Heavy Equipment", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Kerusakan mekanikal", "Transit coverage", "TPL liability", "Operator error"] },
        { name: "Comprehensive HE", tag: "Enterprise", features: ["Semua Standard +", "Breakdown coverage", "Loss of hire", "PA operator", "Fleet management", "Risk survey"] },
      ]}
      faqs={[
        { q: "Alat berat apa saja yang bisa diasuransikan?", a: "Semua alat berat konstruksi dan pertambangan: excavator, bulldozer, crane (tower/mobile/crawler), wheel loader, grader, forklift, compactor, vibro roller, telescopic handler, dan lainnya." },
        { q: "Apakah alat berat impor (CBU) bisa diasuransikan?", a: "Ya, alat berat CBU maupun CKD dapat diasuransikan. Nilai pertanggungan berdasarkan harga perolehan atau replacement cost." },
        { q: "Apakah ada program khusus untuk perusahaan rental alat berat?", a: "Ya, kami memiliki program khusus rental company termasuk coverage untuk unit yang sedang disewakan kepada pihak ketiga." },
        { q: "Bagaimana survei untuk alat berat di lokasi terpencil?", a: "Survei dapat dilakukan on-site atau menggunakan laporan teknis dan dokumentasi foto. Konsultan kami akan mengatur sesuai kondisi." },
      ]}
      relatedLinks={[
        { label: "Asuransi Excavator", href: "/asuransi-excavator" },
        { label: "Asuransi Crane", href: "/asuransi-crane" },
        { label: "Asuransi Bulldozer", href: "/asuransi-bulldozer" },
        { label: "Panduan Asuransi Alat Berat", href: "/blog/panduan-asuransi-alat-berat" },
      ]}
      ctaTitle="Dapatkan Penawaran Asuransi Alat Berat Terbaik"
    />
  );
}
