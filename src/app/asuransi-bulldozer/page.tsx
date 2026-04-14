import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Bulldozer | Proteksi Alat Berat Konstruksi & Tambang",
  description: "Asuransi bulldozer untuk konstruksi dan pertambangan Indonesia. Perlindungan kerusakan fisik, mekanik, dan operasional untuk semua jenis bulldozer.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-bulldozer" },
  openGraph: { title: "Asuransi Bulldozer | Proteksi Alat Berat Konstruksi & Tambang", description: "Asuransi bulldozer untuk konstruksi dan pertambangan Indonesia. Perlindungan kerusakan fisik, mekanik, dan operasional untuk semua jenis bulldozer.", url: "https://duniaasuransi.com/asuransi-bulldozer" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Bulldozer Indonesia"
      description="Lindungi unit bulldozer Anda dari kerusakan fisik, breakdown mesin, dan risiko operasional di proyek konstruksi dan area pertambangan."
      benefits={[
        { icon: HardHat, title: "Semua Tipe Bulldozer", desc: "D6, D7, D8, D9, D10 dan semua ukuran bulldozer untuk konstruksi dan pertambangan." },
        { icon: Shield, title: "Kerusakan Fisik", desc: "Perlindungan dari benturan, terbalik, dan kerusakan akibat kondisi medan berat." },
        { icon: Wrench, title: "Sistem Dozer Blade", desc: "Coverage blade, ripper, frame, dan komponen utama dari kerusakan." },
        { icon: Clock, title: "Operasional 24/7", desc: "Coverage berlaku selama jam operasional di area proyek dan tambang." },
        { icon: MapPin, title: "Area Tambang", desc: "Perlindungan khusus untuk operasi di area tambang dengan risiko tinggi." },
        { icon: BarChart, title: "Breakdown Mesin", desc: "Penggantian biaya perbaikan akibat kerusakan mendadak mesin dan drivetrain." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kerusakan fisik eksternal", "Kebakaran", "Pencurian"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Breakdown mesin", "Komponen utama", "TPL coverage"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Loss of hire", "PA operator", "Fleet management"] },
      ]}
      faqs={[
        { q: "Apakah coverage berlaku saat bulldozer diangkut via trailer?", a: "Diperlukan endorsement transit. Hubungi kami untuk memastikan coverage penuh termasuk periode pengangkutan." },
        { q: "Bagaimana jika bulldozer terbalik di area tambang?", a: "Overturning adalah risiko yang ditanggung. Laporkan segera, kami bantu proses klaim termasuk biaya righting." },
        { q: "Apakah komponen aus (blade, track) bisa diklaim?", a: "Keausan normal tidak ditanggung. Kerusakan mendadak akibat benda keras atau benturan bisa diklaim." },
        { q: "Berapa estimasi premi asuransi bulldozer per tahun?", a: "Premi bervariasi berdasarkan nilai unit, usia, lokasi operasi, dan jenis coverage. Hubungi kami untuk penawaran." },
      ]}
      relatedLinks={[
        { label: "Asuransi Excavator", href: "/asuransi-excavator" },
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
