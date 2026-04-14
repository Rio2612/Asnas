import type { Metadata } from "next";
import { Shield, Flame, Wrench, Lock, Zap, CloudRain } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Gudang Logistik | Proteksi Fasilitas Penyimpanan",
  description: "Asuransi gudang untuk fasilitas logistik, cold storage, dan pergudangan di Indonesia. Lindungi bangunan gudang dan stok barang dari berbagai risiko.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-gudang" },
  openGraph: { title: "Asuransi Gudang Logistik | Proteksi Fasilitas Penyimpanan", description: "Asuransi gudang untuk fasilitas logistik, cold storage, dan pergudangan di Indonesia. Lindungi bangunan gudang dan stok barang dari berbagai risiko.", url: "https://duniaasuransi.com/asuransi-gudang" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Asuransi Gudang Indonesia"
      description="Perlindungan komprehensif untuk gudang logistik, cold storage, dan fasilitas penyimpanan — termasuk bangunan, stok barang, dan peralatan pendukung."
      benefits={[
        { icon: Shield, title: "Bangunan Gudang", desc: "Proteksi struktur gudang termasuk atap, dinding, dan loading dock." },
        { icon: Flame, title: "Stok & Inventori", desc: "Perlindungan stok barang, bahan baku, dan produk jadi yang tersimpan." },
        { icon: Wrench, title: "Peralatan Penanganan", desc: "Menanggung kerusakan forklift, conveyor, rak penyimpanan, dan peralatan gudang." },
        { icon: Lock, title: "Cold Storage", desc: "Perlindungan khusus untuk cold storage termasuk kerusakan akibat gangguan pendingin." },
        { icon: Zap, title: "Tanggung Jawab Kargo", desc: "Liability atas barang pihak ketiga yang dititipkan atau disimpan di fasilitas Anda." },
        { icon: CloudRain, title: "Banjir & Bencana", desc: "Perluasan banjir, gempa, dan bencana alam untuk gudang di zona rawan." },
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
      relatedLinks={[{ label: "Property All Risk", href: "/property-all-risk" }, { label: "Asuransi Kargo", href: "/asuransi-kargo" }, { label: "Asuransi Properti", href: "/asuransi-properti" }]}
    />
  );
}
