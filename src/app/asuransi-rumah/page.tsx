import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Rumah Terbaik Indonesia | Proteksi Hunian Pribadi",
  description: "Asuransi rumah terbaik di Indonesia — lindungi hunian dan isinya dari kebakaran, banjir, gempa, pencurian. Premi mulai ratusan ribu per tahun.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-rumah" },
  openGraph: { title: "Asuransi Rumah Terbaik Indonesia | Proteksi Hunian Pribadi", description: "Asuransi rumah terbaik di Indonesia — lindungi hunian dan isinya dari kebakaran, banjir, gempa, pencurian. Premi mulai ratusan ribu per tahun.", url: "https://duniaasuransi.com/asuransi-rumah" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Asuransi Rumah Terbaik Indonesia"
      description="Rumah adalah investasi terbesar Anda. Lindungi hunian dan seluruh isinya dari risiko kebakaran, bencana alam, pencurian, dan kerusakan tak terduga."
      benefits={[
        { icon: Shield, title: "Struktur Bangunan", desc: "Perlindungan fisik untuk dinding, atap, lantai, dan struktur utama rumah." },
        { icon: Flame, title: "Isi Rumah (Contents)", desc: "Menanggung kerugian perabot, elektronik, pakaian, dan barang berharga dalam rumah." },
        { icon: Wrench, title: "Kebakaran & Bencana", desc: "Proteksi terhadap kebakaran, petir, ledakan, banjir, dan gempa bumi." },
        { icon: Lock, title: "Pencurian", desc: "Perlindungan terhadap pencurian dengan kekerasan dan pembobolan rumah." },
        { icon: Zap, title: "Tanggung Jawab Pribadi", desc: "Menanggung tuntutan hukum pihak ketiga akibat kejadian di lingkungan properti Anda." },
        { icon: CloudRain, title: "Biaya Akomodasi Darurat", desc: "Penggantian biaya penginapan sementara jika rumah tidak dapat dihuni akibat klaim." },
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
      relatedLinks={[{ label: "Asuransi Kebakaran", href: "/asuransi-kebakaran" }, { label: "Property All Risk", href: "/property-all-risk" }, { label: "Asuransi Properti", href: "/asuransi-properti" }]}
    />
  );
}
