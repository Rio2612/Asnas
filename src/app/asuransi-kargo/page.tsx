import type { Metadata } from "next";
import { Anchor, CloudRain, FileText, MapPin, Package, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Kargo Indonesia | Proteksi Pengiriman Barang",
  description: "Asuransi kargo untuk pengiriman barang via laut, udara, dan darat di Indonesia. Lindungi kiriman Anda dari kerusakan, kehilangan, dan force majeure.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-kargo" },
  openGraph: { title: "Asuransi Kargo Indonesia | Proteksi Pengiriman Barang", description: "Asuransi kargo untuk pengiriman barang via laut, udara, dan darat di Indonesia. Lindungi kiriman Anda dari kerusakan, kehilangan, dan force majeure.", url: "https://duniaasuransi.com/asuransi-kargo" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Asuransi Kargo Indonesia"
      description="Perlindungan komprehensif untuk kargo yang dikirim via laut, udara, dan darat — cocok untuk eksportir, importir, dan trader."
      benefits={[
        { icon: Package, title: "Semua Mode Transportasi", desc: "Coverage untuk pengiriman via kapal, pesawat, truk, dan kombinasi multi-modal." },
        { icon: Shield, title: "Kerusakan Fisik", desc: "Menanggung kerusakan fisik kargo akibat kecelakaan, penanganan kasar, dan insiden transit." },
        { icon: Anchor, title: "Kehilangan Total", desc: "Ganti rugi penuh jika kargo hilang akibat kapal tenggelam atau kebakaran." },
        { icon: MapPin, title: "Pencurian & Perampokan", desc: "Perlindungan dari pencurian partial maupun total selama transit." },
        { icon: CloudRain, title: "Bencana Alam", desc: "Coverage untuk kerusakan akibat badai, banjir, dan bencana alam selama perjalanan." },
        { icon: FileText, title: "General Average", desc: "Menanggung kontribusi general average yang dibebankan kepada pemilik kargo." },
      ]}
      policyTiers={[
        { name: "ICC C (Basic)", tag: "Hemat", features: ["Named perils", "Kebakaran", "Tabrakan kapal", "Bongkar muat darurat"] },
        { name: "ICC B (Standard)", tag: "Populer", highlighted: true, features: ["Semua ICC C +", "Gempa & gunung api", "Washing overboard", "Masuknya air", "Pencurian total"] },
        { name: "ICC A (All Risk)", tag: "Komprehensif", features: ["All risk coverage", "Kecuali dikecualikan", "Pencurian parsial", "Kerusakan bertahap", "Piracy coverage"] },
      ]}
      faqs={[
        { q: "Apakah kargo elektronik bisa diasuransikan?", a: "Ya, barang elektronik bisa diasuransikan. Pastikan packaging memenuhi standar untuk menghindari penolakan klaim akibat packaging buruk." },
        { q: "Berapa lama polis kargo berlaku?", a: "Polis per-shipment berlaku untuk satu perjalanan. Polis open cover berlaku untuk semua pengiriman dalam periode tertentu." },
        { q: "Apakah tersedia untuk kargo curah (bulk cargo)?", a: "Ya, kargo curah seperti batu bara, CPO, dan mineral bisa diasuransikan dengan terms khusus bulk commodity." },
        { q: "Bagaimana cara klaim jika kargo rusak?", a: "Nota keberatan kepada carrier, survei independen, kumpulkan dokumen (B/L, invoice, foto), laporkan dalam 3 hari. Kami bantu prosesnya." },
      ]}
      relatedLinks={[
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Marine Insurance", href: "/marine-insurance" },
        { label: "Freight Insurance", href: "/freight-insurance" },
        { label: "Asuransi Kapal", href: "/asuransi-kapal" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
