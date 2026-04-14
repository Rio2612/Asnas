import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Kebakaran Indonesia | FLEXAS & Perluasan",
  description: "Asuransi kebakaran terpercaya di Indonesia dengan jaminan FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Tersedia perluasan banjir, gempa, dan RSMD.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-kebakaran" },
  openGraph: { title: "Asuransi Kebakaran Indonesia | FLEXAS & Perluasan", description: "Asuransi kebakaran terpercaya di Indonesia dengan jaminan FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Tersedia perluasan banjir, gempa, dan RSMD.", url: "https://duniaasuransi.com/asuransi-kebakaran" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Asuransi Kebakaran Indonesia"
      description="Perlindungan dasar terhadap kebakaran, petir, ledakan, kecelakaan pesawat, dan asap. Fondasi perlindungan untuk setiap properti di Indonesia."
      benefits={[
        { icon: Shield, title: "Kebakaran (Fire)", desc: "Penggantian kerugian akibat kebakaran yang tidak disengaja, termasuk kerusakan struktural." },
        { icon: Flame, title: "Petir (Lightning)", desc: "Kerusakan akibat sambaran petir langsung pada bangunan dan instalasi listrik." },
        { icon: Wrench, title: "Ledakan (Explosion)", desc: "Kerusakan akibat ledakan gas, boiler, atau material mudah meledak." },
        { icon: Lock, title: "Kecelakaan Pesawat", desc: "Kerusakan akibat dampak jatuhnya pesawat terbang atau benda yang jatuh dari pesawat." },
        { icon: Zap, title: "Asap (Smoke)", desc: "Kerusakan akibat asap tebal yang merusak bangunan dan isinya." },
        { icon: CloudRain, title: "Perluasan Tersedia", desc: "Banjir, gempa bumi, kerusuhan, banjir bandang, angin topan tersedia sebagai perluasan." },
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
      relatedLinks={[{ label: "Property All Risk", href: "/property-all-risk" }, { label: "Asuransi Rumah", href: "/asuransi-rumah" }, { label: "Gedung Komersial", href: "/asuransi-gedung-komersial" }, { label: "Cara Memilih Asuransi Properti", href: "/blog/cara-memilih-asuransi-properti" }]}
    />
  );
}
