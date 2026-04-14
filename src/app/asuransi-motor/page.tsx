import type { Metadata } from "next";
import { Car, Clock, HeartPulse, Lock, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Motor Indonesia | All Risk & TLO Motor",
  description: "Asuransi sepeda motor All Risk dan TLO di Indonesia. Lindungi motor Anda dari kecelakaan, pencurian, dan kerusakan. Premi terjangkau mulai ratusan ribu.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-motor" },
  openGraph: { title: "Asuransi Motor Indonesia | All Risk & TLO Motor", description: "Asuransi sepeda motor All Risk dan TLO di Indonesia. Lindungi motor Anda dari kecelakaan, pencurian, dan kerusakan. Premi terjangkau mulai ratusan ribu.", url: "https://duniaasuransi.com/asuransi-motor" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Kendaraan"
      title="Asuransi Sepeda Motor Indonesia"
      description="Perlindungan lengkap untuk sepeda motor Anda — dari motor bebek hingga motor premium, All Risk maupun TLO."
      benefits={[
        { icon: Shield, title: "All Risk Motor", desc: "Menanggung semua kerusakan fisik motor akibat kecelakaan, tabrakan, dan insiden tak terduga." },
        { icon: Lock, title: "Perlindungan Pencurian", desc: "Ganti rugi penuh jika motor dicuri, termasuk proses hukum yang dibantu konsultan kami." },
        { icon: Wrench, title: "Bengkel Rekanan", desc: "Perbaikan di bengkel resmi merek atau bengkel rekanan terpercaya di seluruh Indonesia." },
        { icon: Car, title: "TLO Motor", desc: "Pilihan hemat untuk perlindungan kehilangan total dan pencurian dengan premi lebih rendah." },
        { icon: HeartPulse, title: "PA Pengendara", desc: "Opsional: personal accident untuk pengendara termasuk cacat tetap dan meninggal dunia." },
        { icon: Clock, title: "Proses Klaim Mudah", desc: "Laporkan klaim via WhatsApp, konsultan membantu seluruh proses tanpa antrian." },
      ]}
      policyTiers={[
        { name: "TLO Motor", tag: "Ekonomis", features: ["Kehilangan total >75%", "Pencurian", "Premi paling hemat", "Cocok motor >3 tahun"] },
        { name: "All Risk Motor", tag: "Populer", highlighted: true, features: ["Kerusakan parsial", "Kecelakaan", "Pencurian", "Bengkel rekanan", "PA opsional"] },
        { name: "All Risk + PA", tag: "Lengkap", features: ["All Risk Motor +", "PA pengendara", "PA penumpang", "Towing service", "Ambulans darurat"] },
      ]}
      faqs={[
        { q: "Apakah motor tua bisa diasuransikan All Risk?", a: "Motor bisa diasuransikan All Risk umumnya hingga usia 10 tahun. Di atas 10 tahun umumnya hanya TLO." },
        { q: "Berapa premi asuransi motor per tahun?", a: "Premi TLO motor sekitar 0.5-1% dari harga motor per tahun. All Risk lebih tinggi tergantung tahun dan merek." },
        { q: "Apakah motor modifikasi bisa diasuransikan?", a: "Bisa, namun modifikasi perlu dilaporkan ke perusahaan asuransi. Nilai pertanggungan disesuaikan dengan kondisi aktual." },
        { q: "Bagaimana jika motor hilang dicuri?", a: "Laporkan ke polisi dan hubungi kami segera. Surat kehilangan dari kepolisian diperlukan untuk proses klaim pencurian." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Asuransi Mobil", href: "/asuransi-mobil" },
        { label: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
