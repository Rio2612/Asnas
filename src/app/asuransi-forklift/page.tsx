import type { Metadata } from "next";
import { Clock, HardHat, Package, Shield, Wrench, Zap } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Forklift Indonesia | Pabrik, Gudang & Logistik",
  description: "Asuransi forklift untuk pabrik, gudang, dan logistik di Indonesia. Perlindungan forklift diesel, electric, dan reach truck dari kerusakan fisik dan operasional.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-forklift" },
  openGraph: { title: "Asuransi Forklift Indonesia | Pabrik, Gudang & Logistik", description: "Asuransi forklift untuk pabrik, gudang, dan logistik di Indonesia. Perlindungan forklift diesel, electric, dan reach truck dari kerusakan fisik dan operasional.", url: "https://duniaasuransi.com/asuransi-forklift" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Forklift Indonesia"
      description="Proteksi lengkap untuk forklift dan material handling equipment di pabrik, gudang, dermaga, dan fasilitas logistik Anda."
      benefits={[
        { icon: HardHat, title: "Semua Jenis Forklift", desc: "Forklift diesel, LPG, electric, reach truck, dan order picker semua kapasitas." },
        { icon: Shield, title: "Kerusakan Operasional", desc: "Menabrak rak, dinding, kecelakaan saat memindahkan barang, dan insiden gudang." },
        { icon: Zap, title: "Forklift Elektrik", desc: "Coverage khusus forklift elektrik termasuk baterai dan sistem pengisian daya." },
        { icon: Package, title: "TPL Muatan", desc: "Tanggung jawab terhadap kerusakan barang atau properti pihak ketiga." },
        { icon: Wrench, title: "Mast & Fork", desc: "Perlindungan untuk mast, fork, dan attachment dari kerusakan mekanik." },
        { icon: Clock, title: "24/7 Operation", desc: "Coverage berlaku selama jam operasional shift pagi, siang, dan malam." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kerusakan fisik", "Kebakaran", "TPL dasar"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Kerusakan mekanikal", "Fork & mast", "Forklift listrik", "Muatan coverage"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Baterai EV", "Loss of hire", "PA operator", "Fleet"] },
      ]}
      faqs={[
        { q: "Apakah forklift elektrik di gudang bisa diasuransikan?", a: "Ya, forklift elektrik termasuk baterai dapat diasuransikan. Nilai baterai perlu dicantumkan secara terpisah." },
        { q: "Coverage berlaku untuk kecelakaan di dalam gudang?", a: "Ya, kerusakan akibat operasional di dalam gudang termasuk dalam coverage standar." },
        { q: "Apakah ada coverage untuk barang yang rusak akibat forklift?", a: "Ada tambahan TPL (Third Party Liability) yang menanggung kerusakan barang atau properti pihak ketiga." },
        { q: "Apakah bisa untuk forklift rental?", a: "Ya, perusahaan rental forklift dapat mengasuransikan unit mereka dengan program khusus rental." },
      ]}
      relatedLinks={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Asuransi Gudang", href: "/asuransi-gudang" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
