import type { Metadata } from "next";
import { BarChart, Building2, Clock, FileText, Shield, Zap } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Machinery Loss of Profit | Asuransi Kerugian Produksi Indonesia",
  description: "Machinery Loss of Profit (MLOP) menanggung kehilangan laba akibat berhentinya mesin produksi. Solusi untuk industri manufaktur dan pabrik di Indonesia.",
  alternates: { canonical: "https://duniaasuransi.com/machinery-loss-of-profit" },
  openGraph: { title: "Machinery Loss of Profit | Asuransi Kerugian Produksi Indonesia", description: "Machinery Loss of Profit (MLOP) menanggung kehilangan laba akibat berhentinya mesin produksi. Solusi untuk industri manufaktur dan pabrik di Indonesia.", url: "https://duniaasuransi.com/machinery-loss-of-profit" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Machinery Loss of Profit (MLOP) Indonesia"
      description="MLOP melindungi pendapatan bisnis Anda dari kerugian finansial saat mesin utama berhenti beroperasi akibat kerusakan yang ditanggung polis Machinery Breakdown."
      benefits={[
        { icon: BarChart, title: "Pengganti Laba Kotor", desc: "Mengganti laba kotor yang hilang selama mesin tidak bisa beroperasi." },
        { icon: Clock, title: "Biaya Tetap", desc: "Menanggung biaya tetap operasional yang tetap berjalan meski produksi berhenti." },
        { icon: Zap, title: "Extra Expenses", desc: "Penggantian biaya tambahan untuk mempercepat pemulihan produksi." },
        { icon: Building2, title: "Semua Jenis Mesin", desc: "Berlaku untuk semua mesin produksi yang diasuransikan dengan MB." },
        { icon: FileText, title: "Indemnity Period Fleksibel", desc: "Pilih periode ganti rugi 6-24 bulan sesuai kebutuhan bisnis." },
        { icon: Shield, title: "Terpadu dengan MB", desc: "Dirancang bekerja bersama polis Machinery Breakdown sebagai coverage terpadu." },
      ]}
      policyTiers={[
        { name: "MLOP Basic", tag: "Dasar", features: ["Gross profit replacement", "Fixed expenses", "6 bulan indemnity", "1 mesin utama"] },
        { name: "MLOP Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Extra expenses", "12 bulan indemnity", "Multiple machines", "Auditor independen"] },
        { name: "MLOP Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "24 bulan indemnity", "Advanced loss of profit", "Expediting expenses", "Full BI integration"] },
      ]}
      faqs={[
        { q: "Apakah MLOP bisa dibeli tanpa Machinery Breakdown?", a: "Tidak, MLOP adalah perluasan dari polis Machinery Breakdown. Klaim MLOP hanya bisa diajukan jika klaim MB yang mendasarinya disetujui." },
        { q: "Bagaimana cara menghitung kerugian MLOP?", a: "Kerugian dihitung berdasarkan laba kotor historis, disesuaikan dengan kondisi pasar. Auditor independen akan melakukan perhitungan." },
        { q: "Apakah MLOP menanggung kerugian akibat berhentinya mesin utilitas?", a: "Tergantung definisi mesin dalam polis. Mesin utilitas (genset, kompresor) yang tercantum dalam polis MB dapat dilindungi MLOP." },
        { q: "Berapa batas nilai klaim MLOP?", a: "Batas klaim berdasarkan laba kotor yang disepakati dalam polis, sesuai indemnity period yang dipilih." },
      ]}
      relatedLinks={[
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
        { label: "Business Interruption", href: "/business-interruption" },
        { label: "Industrial All Risk", href: "/industrial-all-risk" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
