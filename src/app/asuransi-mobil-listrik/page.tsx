import type { Metadata } from "next";
import { Car, Clock, HeartPulse, Shield, Wrench, Zap } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Mobil Listrik Indonesia | EV Insurance OJK",
  description: "Asuransi mobil listrik (EV/BEV) di Indonesia sesuai regulasi OJK terbaru. Perlindungan baterai, komponen elektrik, dan risiko khusus kendaraan listrik.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-mobil-listrik" },
  openGraph: { title: "Asuransi Mobil Listrik Indonesia | EV Insurance OJK", description: "Asuransi mobil listrik (EV/BEV) di Indonesia sesuai regulasi OJK terbaru. Perlindungan baterai, komponen elektrik, dan risiko khusus kendaraan listrik.", url: "https://duniaasuransi.com/asuransi-mobil-listrik" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Kendaraan Listrik"
      title="Asuransi Mobil Listrik Indonesia"
      description="Asuransi khusus untuk kendaraan listrik (EV/BEV) yang mencakup baterai, motor listrik, dan komponen elektrik dengan rate OJK terbaru."
      benefits={[
        { icon: Zap, title: "Perlindungan Baterai", desc: "Menanggung kerusakan baterai EV akibat kecelakaan, arus pendek, dan defek produksi yang dikonfirmasi surveyor." },
        { icon: Shield, title: "All Risk EV", desc: "Semua risiko fisik kendaraan listrik termasuk kerusakan komponen elektrik dan software failure." },
        { icon: Car, title: "Charging Equipment", desc: "Opsional: perlindungan untuk home charging unit (wallbox) dari kerusakan dan pencurian." },
        { icon: Wrench, title: "Bengkel EV Rekanan", desc: "Jaringan bengkel resmi dan rekanan yang memiliki teknisi tersertifikasi untuk kendaraan listrik." },
        { icon: Clock, title: "Deductible OR Rp500K", desc: "Deductible own risk Rp 500.000 per kejadian sesuai ketentuan OJK untuk kendaraan listrik." },
        { icon: HeartPulse, title: "Towing & Rescue", desc: "Layanan derek gratis jika baterai habis di jalan atau kendaraan tidak bisa dikendarai." },
      ]}
      policyTiers={[
        { name: "TLO EV", tag: "Ekonomis", features: ["Kehilangan total akibat kecelakaan", "Pencurian kendaraan", "Rate OJK maksimal", "Deductible Rp500K/kejadian"] },
        { name: "All Risk EV Standar", tag: "Populer", highlighted: true, features: ["Semua TLO EV +", "Kerusakan parsial", "Komponen elektrik", "Baterai coverage", "Towing service"] },
        { name: "All Risk EV Plus", tag: "Lengkap", features: ["Semua All Risk Standar +", "Home charger coverage", "Bencana alam & banjir", "PA pengemudi", "Layanan 24 jam"] },
      ]}
      faqs={[
        { q: "Apakah baterai EV ditanggung jika rusak?", a: "Ya, kerusakan baterai akibat kecelakaan atau klaim yang ditanggung polis akan diganti. Kerusakan baterai akibat usia normal tidak tercover." },
        { q: "Berapa rate premi untuk mobil listrik?", a: "Rate EV menggunakan rate maksimal OJK ditambah surcharge. Deductible per kejadian Rp 500.000 sesuai ketentuan OJK." },
        { q: "Apakah ada bengkel resmi untuk klaim EV?", a: "Ya, kami bekerja sama dengan bengkel resmi merek EV dan bengkel rekanan tersertifikasi untuk penanganan kendaraan listrik." },
        { q: "Apakah mobil hybrid masuk kategori EV?", a: "Kendaraan hybrid (HEV) umumnya menggunakan rate konvensional, sedangkan plug-in hybrid (PHEV) dan full electric (BEV) menggunakan rate EV." },
      ]}
      relatedLinks={[
        { label: "Asuransi Mobil", href: "/asuransi-mobil" },
        { label: "Kalkulator Premi", href: "/kalkulator-premi-mobil" },
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
      ]}
      ctaTitle="Dapatkan Penawaran Asuransi Mobil Listrik Terbaik"
    />
  );
}
