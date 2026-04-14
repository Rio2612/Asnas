import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Excavator Indonesia | Alat Berat Tambang & Konstruksi",
  description: "Asuransi excavator untuk tambang dan konstruksi di Indonesia. Lindungi unit excavator Anda dari kerusakan fisik, kerusakan mesin, dan risiko operasional.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-excavator" },
  openGraph: { title: "Asuransi Excavator Indonesia | Alat Berat Tambang & Konstruksi", description: "Asuransi excavator untuk tambang dan konstruksi di Indonesia. Lindungi unit excavator Anda dari kerusakan fisik, kerusakan mesin, dan risiko operasional.", url: "https://duniaasuransi.com/asuransi-excavator" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Excavator Indonesia"
      description="Perlindungan komprehensif untuk excavator standar, mini excavator, dan excavator mining dari kerusakan operasional, mekanik, dan risiko lokasi kerja."
      benefits={[
        { icon: HardHat, title: "Semua Jenis Excavator", desc: "Mini excavator, excavator standar, long arm, hingga mining excavator semua kapasitas." },
        { icon: Shield, title: "Kerusakan Operasional", desc: "Menanggung kerusakan akibat menabrak benda keras, terbalik, dan insiden operasional." },
        { icon: Wrench, title: "Komponen Utama", desc: "Perlindungan bucket, arm, boom, track, dan sistem hidrolik dari kerusakan." },
        { icon: Clock, title: "Tambang & Konstruksi", desc: "Coverage berlaku di area tambang, proyek jalan, gedung, dan semua lokasi kerja." },
        { icon: MapPin, title: "Transit Coverage", desc: "Perlindungan saat excavator diangkut antar lokasi menggunakan flatbed trailer." },
        { icon: BarChart, title: "Fleet Excavator", desc: "Program asuransi armada excavator dengan pengelolaan terpusat untuk perusahaan rental." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kerusakan fisik", "Kebakaran", "Pencurian", "Area kerja terbatas"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Kerusakan mekanik", "Sistem hidrolik", "Transit", "TPL coverage"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Breakdown coverage", "Loss of hire", "PA operator", "Fleet reporting"] },
      ]}
      faqs={[
        { q: "Apakah excavator tambang (mining) bisa diasuransikan?", a: "Ya, excavator untuk pertambangan dapat diasuransikan dengan polis khusus. Diperlukan survei lokasi dan kondisi unit." },
        { q: "Bagaimana jika excavator terbalik saat operasi?", a: "Overturning (terbalik) termasuk risiko yang ditanggung dalam polis All Risk alat berat standar." },
        { q: "Apakah excavator yang disewa (rental) bisa diklaim?", a: "Coverage berlaku berdasarkan siapa yang memegang polis. Perusahaan rental dan penyewa dapat memiliki polis terpisah." },
        { q: "Apakah track (rantai excavator) yang aus ditanggung?", a: "Keausan normal (wear and tear) tidak ditanggung. Kerusakan track akibat insiden mendadak bisa diklaim." },
      ]}
      relatedLinks={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Bulldozer", href: "/asuransi-bulldozer" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Panduan Asuransi Alat Berat", href: "/blog/panduan-asuransi-alat-berat" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
