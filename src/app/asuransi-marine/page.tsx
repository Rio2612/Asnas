import type { Metadata } from "next";
import { Anchor, Clock, MapPin, Package, Shield, Ship } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Marine Indonesia | Kargo, Kapal & Pengiriman",
  description: "Asuransi marine terpercaya di Indonesia — kargo laut/udara/darat, hull & machinery, protection & indemnity. Proteksi pengiriman barang dan armada kapal.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-marine" },
  openGraph: { title: "Asuransi Marine Indonesia | Kargo, Kapal & Pengiriman", description: "Asuransi marine terpercaya di Indonesia — kargo laut/udara/darat, hull & machinery, protection & indemnity. Proteksi pengiriman barang dan armada kapal.", url: "https://duniaasuransi.com/asuransi-marine" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Asuransi Marine Indonesia"
      description="Solusi perlindungan komprehensif untuk pengiriman kargo dan armada kapal di Indonesia dan internasional."
      benefits={[
        { icon: Anchor, title: "Marine Cargo", desc: "Perlindungan kargo saat pengiriman via laut, udara, dan darat." },
        { icon: Ship, title: "Hull & Machinery", desc: "Asuransi kapal untuk badan kapal dan mesin penggerak." },
        { icon: Shield, title: "Protection & Indemnity", desc: "Liability untuk pemilik kapal terhadap kru dan pihak ketiga." },
        { icon: Package, title: "Freight Insurance", desc: "Perlindungan biaya pengiriman yang tidak bisa dikembalikan." },
        { icon: MapPin, title: "Jangkauan Global", desc: "Coverage pengiriman domestik dan internasional." },
        { icon: Clock, title: "All Risk Marine", desc: "Perlindungan all risk atau named perils sesuai kebutuhan." },
      ]}
      policyTiers={[
        { name: "Institute Cargo C", tag: "Basic", features: ["Named perils saja", "Kebakaran & ledakan", "Bangkai kapal", "Biaya penyelamatan"] },
        { name: "Institute Cargo B", tag: "Standard", highlighted: true, features: ["Semua C +", "Gempa & gunung berapi", "Banjir & bencana", "Overboard", "Pencurian"] },
        { name: "Institute Cargo A", tag: "All Risk", features: ["All risk coverage", "Semua risiko kecuali dikecualikan", "Coverage terlengkap", "Recommended untuk kargo berharga"] },
      ]}
      faqs={[
        { q: "Apa itu Institute Cargo Clause A, B, C?", a: "Ini adalah standar polis kargo internasional. ICC A adalah all risk (paling komprehensif), ICC B adalah named perils extended, ICC C adalah named perils basic." },
        { q: "Apakah bisa untuk pengiriman antar pulau?", a: "Ya, marine cargo berlaku untuk pengiriman domestik antar pulau via kapal maupun jalur darat dan udara." },
        { q: "Berapa nilai pertanggungan yang tepat?", a: "Nilai pertanggungan minimal adalah nilai CIF (Cost + Insurance + Freight) kargo. Tambahkan 10-15% untuk biaya tak terduga." },
        { q: "Apakah bisa klaim jika kargo tiba rusak?", a: "Ya, segera laporkan dalam 3 hari setelah penerimaan. Survey kerusakan akan dilakukan sebelum proses klaim dimulai." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Asuransi Kapal", href: "/asuransi-kapal" },
        { label: "Marine Insurance", href: "/marine-insurance" },
        { label: "Freight Insurance", href: "/freight-insurance" },
      ]}
      ctaTitle="Konsultasi Asuransi Marine & Kargo"
    />
  );
}
