import type { Metadata } from "next";
import { Clock, MapPin, Package, Shield, Ship, Truck } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Pengiriman Barang | Proteksi Kargo Domestik & Ekspor",
  description: "Asuransi pengiriman barang untuk kargo domestik dan ekspor-impor Indonesia. Lindungi kiriman Anda dari kerusakan dan kehilangan selama transit.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-pengiriman-barang" },
  openGraph: { title: "Asuransi Pengiriman Barang | Proteksi Kargo Domestik & Ekspor", description: "Asuransi pengiriman barang untuk kargo domestik dan ekspor-impor Indonesia. Lindungi kiriman Anda dari kerusakan dan kehilangan selama transit.", url: "https://duniaasuransi.com/asuransi-pengiriman-barang" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Asuransi Pengiriman Barang Indonesia"
      description="Perlindungan for semua jenis pengiriman barang — dari paket kecil hingga kargo kontainer besar — via darat, laut, dan udara."
      benefits={[
        { icon: Package, title: "Semua Jenis Barang", desc: "Dari barang konsumsi, mesin, hingga kargo khusus dan barang berbahaya." },
        { icon: Truck, title: "Pengiriman Darat", desc: "Coverage untuk pengiriman via truk antar kota dan antar pulau." },
        { icon: Ship, title: "Pengiriman Laut", desc: "Perlindungan kargo kapal antar pulau dan ekspor-impor." },
        { icon: Clock, title: "Pengiriman Udara", desc: "Coverage cepat untuk kargo udara termasuk express cargo." },
        { icon: MapPin, title: "Door-to-Door", desc: "Coverage dari gudang pengirim hingga gudang penerima." },
        { icon: Shield, title: "All Risk Option", desc: "Pilihan ICC A untuk perlindungan paling komprehensif." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Named perils", "Pengiriman domestik", "Single shipment"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["ICC B coverage", "Darat & laut", "Door-to-door", "Open cover available"] },
        { name: "All Risk", tag: "Lengkap", features: ["ICC A all risk", "Semua moda", "Ekspor-impor", "Valuable goods"] },
      ]}
      faqs={[
        { q: "Apakah pengiriman paket e-commerce bisa diasuransikan?", a: "Untuk pengiriman e-commerce volume besar, tersedia blanket policy yang menanggung semua pengiriman dalam periode tertentu." },
        { q: "Berapa minimal nilai kargo untuk diasuransikan?", a: "Tidak ada minimum nilai. Namun untuk kargo bernilai rendah, biaya premi mungkin tidak efisien. Konsultasikan kebutuhan Anda dengan kami." },
        { q: "Apakah barang pecah belah bisa diklaim?", a: "Barang pecah belah bisa diklaim jika kerusakan terbukti akibat kecelakaan, bukan akibat packaging yang tidak memadai." },
        { q: "Apakah bisa untuk pengiriman ke seluruh Indonesia?", a: "Ya, coverage berlaku untuk pengiriman ke seluruh wilayah Indonesia termasuk daerah terpencil." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Freight Insurance", href: "/freight-insurance" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
