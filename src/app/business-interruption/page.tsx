import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Business Interruption Insurance | Asuransi Gangguan Usaha",
  description: "Business interruption insurance melindungi pendapatan bisnis Anda saat operasional terhenti akibat bencana atau kerusakan properti. Konsultasi gratis.",
  alternates: { canonical: "https://duniaasuransi.com/business-interruption" },
  openGraph: { title: "Business Interruption Insurance | Asuransi Gangguan Usaha", description: "Business interruption insurance melindungi pendapatan bisnis Anda saat operasional terhenti akibat bencana atau kerusakan properti. Konsultasi gratis.", url: "https://duniaasuransi.com/business-interruption" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Business Interruption Insurance Indonesia"
      description="Ketika properti Anda rusak, BI insurance memastikan bisnis tetap berjalan secara finansial — mengganti kehilangan laba kotor dan biaya tetap selama masa pemulihan."
      benefits={[
        { icon: Shield, title: "Pengganti Laba Kotor", desc: "Mengganti seluruh laba kotor yang hilang selama periode bisnis tidak beroperasi." },
        { icon: Flame, title: "Biaya Tetap Operasional", desc: "Menanggung biaya tetap seperti gaji karyawan, sewa, dan cicilan yang tetap berjalan." },
        { icon: Wrench, title: "Biaya Tambahan", desc: "Mengganti biaya ekstra yang dikeluarkan untuk mempercepat pemulihan operasional." },
        { icon: Lock, title: "Indemnity Period Fleksibel", desc: "Pilihan periode ganti rugi 6, 12, 18, atau 24 bulan sesuai kebutuhan bisnis." },
        { icon: Zap, title: "Triggers Otomatis", desc: "Klaim BI otomatis terpicu saat klaim properti yang berkaitan diterima dan diproses." },
        { icon: CloudRain, title: "Auditor Independen", desc: "Perhitungan kerugian oleh auditor independen untuk hasil klaim yang objektif dan adil." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kebakaran & ledakan", "Perlindungan dasar", "Tanggung jawab pihak ketiga"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Perluasan bencana alam", "Coverage lebih luas", "Klaim lebih mudah"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Gempa bumi & tsunami", "Terorisme & sabotase", "Extended coverage"] },
      ]}
      faqs={[
        { q: "Bagaimana cara mengajukan polis ini?", a: "Hubungi konsultan kami via WhatsApp. Kami akan membantu proses pengajuan dari survei hingga penerbitan polis." },
        { q: "Berapa lama polis bisa diterbitkan?", a: "Polis umumnya diterbitkan dalam 1-3 hari kerja setelah dokumen lengkap dan premi dibayarkan." },
        { q: "Apakah ada survei sebelum polis terbit?", a: "Untuk objek tertentu diperlukan survei singkat. Tim kami akan mengatur jadwal yang sesuai." },
        { q: "Bagaimana proses klaim?", a: "Laporkan klaim sesegera mungkin melalui WhatsApp kami. Konsultan akan memandu seluruh proses klaim hingga selesai." },
      ]}
      relatedLinks={[{ label: "Property All Risk", href: "/property-all-risk" }, { label: "Industrial All Risk", href: "/industrial-all-risk" }, { label: "Machinery Breakdown", href: "/machinery-breakdown" }]}
    />
  );
}
