import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Gedung Komersial | Perkantoran & Ritel Indonesia",
  description: "Asuransi gedung komersial untuk kantor, mall, ruko, dan gedung bertingkat di Indonesia. Perlindungan komprehensif dari kebakaran, bencana, dan tanggung jawab.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-gedung-komersial" },
  openGraph: { title: "Asuransi Gedung Komersial | Perkantoran & Ritel Indonesia", description: "Asuransi gedung komersial untuk kantor, mall, ruko, dan gedung bertingkat di Indonesia. Perlindungan komprehensif dari kebakaran, bencana, dan tanggung jawab.", url: "https://duniaasuransi.com/asuransi-gedung-komersial" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Asuransi Gedung Komersial Indonesia"
      description="Lindungi investasi properti komersial Anda — gedung perkantoran, pusat perbelanjaan, ruko, dan tower apartemen dari semua risiko material."
      benefits={[
        { icon: Shield, title: "Struktur Gedung Bertingkat", desc: "Perlindungan struktural komprehensif untuk gedung berlantai banyak termasuk basement." },
        { icon: Flame, title: "Sistem MEP", desc: "Menanggung kerusakan instalasi listrik, plumbing, HVAC, dan lift." },
        { icon: Wrench, title: "Kaca & Fasad", desc: "Perlindungan khusus untuk kaca, cladding, dan fasad gedung modern." },
        { icon: Lock, title: "Area Parkir & Basement", desc: "Coverage untuk kerusakan di area parkir termasuk banjir dan kecelakaan kendaraan." },
        { icon: Zap, title: "Public Liability", desc: "Tanggung jawab kepada penyewa dan pengunjung gedung." },
        { icon: CloudRain, title: "Loss of Rent", desc: "Penggantian kerugian sewa selama gedung tidak bisa ditempati akibat klaim." },
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
      relatedLinks={[{ label: "Property All Risk", href: "/property-all-risk" }, { label: "Asuransi Properti", href: "/asuransi-properti" }, { label: "Public Liability", href: "/public-liability" }, { label: "Asuransi Kebakaran", href: "/asuransi-kebakaran" }]}
    />
  );
}
