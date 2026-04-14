import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Hotel Indonesia | Proteksi Properti Hospitality",
  description: "Asuransi khusus untuk hotel, resort, villa, dan properti hospitality di Indonesia. Lindungi bangunan, isi, dan operasional bisnis perhotelan Anda.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-hotel" },
  openGraph: { title: "Asuransi Hotel Indonesia | Proteksi Properti Hospitality", description: "Asuransi khusus untuk hotel, resort, villa, dan properti hospitality di Indonesia. Lindungi bangunan, isi, dan operasional bisnis perhotelan Anda.", url: "https://duniaasuransi.com/asuransi-hotel" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Asuransi Hotel Indonesia"
      description="Paket asuransi komprehensif dirancang khusus untuk industri hospitality — melindungi hotel, resort, dan villa dari berbagai risiko operasional dan fisik."
      benefits={[
        { icon: Shield, title: "Bangunan Hotel", desc: "Perlindungan struktural untuk gedung hotel, lobi, kamar, dan fasilitas umum." },
        { icon: Flame, title: "Furnitur & Peralatan", desc: "Menanggung kerusakan furnitur kamar, peralatan dapur, dan aset FF&E (Furniture, Fixtures & Equipment)." },
        { icon: Wrench, title: "Revenue Protection", desc: "Business interruption coverage untuk mengganti pendapatan kamar yang hilang." },
        { icon: Lock, title: "Liability Tamu", desc: "Tanggung jawab hukum terhadap cedera atau kerusakan yang dialami tamu." },
        { icon: Zap, title: "Food & Beverage", desc: "Perlindungan stok F&B, peralatan restoran, dan bar dari kerusakan." },
        { icon: CloudRain, title: "Kolam Renang & SPA", desc: "Coverage khusus untuk fasilitas kolam renang, SPA, dan area rekreasi." },
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
      relatedLinks={[{ label: "Property All Risk", href: "/property-all-risk" }, { label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Asuransi Liability", href: "/asuransi-liability" }, { label: "Public Liability", href: "/public-liability" }]}
    />
  );
}
