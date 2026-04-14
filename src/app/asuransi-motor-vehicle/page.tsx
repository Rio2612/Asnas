import type { Metadata } from "next";
import { Car, Clock, FileText, Shield, Users, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Motor Vehicle Insurance | Fleet & Armada Kendaraan Indonesia",
  description: "Motor vehicle insurance untuk armada perusahaan dan kendaraan operasional di Indonesia. All Risk & TLO untuk berbagai jenis kendaraan bermotor.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-motor-vehicle" },
  openGraph: { title: "Motor Vehicle Insurance | Fleet & Armada Kendaraan Indonesia", description: "Motor vehicle insurance untuk armada perusahaan dan kendaraan operasional di Indonesia. All Risk & TLO untuk berbagai jenis kendaraan bermotor.", url: "https://duniaasuransi.com/asuransi-motor-vehicle" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Armada"
      title="Motor Vehicle Insurance Indonesia"
      description="Solusi asuransi menyeluruh untuk armada kendaraan perusahaan — mulai pick-up, minibus, sedan dinas, hingga bus operasional."
      benefits={[
        { icon: Car, title: "Multi-Unit Coverage", desc: "Satu polis untuk seluruh armada dengan pengelolaan terpusat dan premi yang efisien." },
        { icon: Shield, title: "All Risk Armada", desc: "Perlindungan kerusakan fisik untuk semua unit kendaraan dalam armada." },
        { icon: Users, title: "PA Driver & Penumpang", desc: "Personal accident untuk pengemudi dan penumpang kendaraan dinas perusahaan." },
        { icon: FileText, title: "Fleet Reporting", desc: "Laporan berkala status polis, klaim, dan pembaruan data armada secara digital." },
        { icon: Clock, title: "On-Call Support", desc: "Layanan darurat 24 jam untuk kendaraan armada yang mengalami kecelakaan." },
        { icon: Wrench, title: "Bengkel Nasional", desc: "Jaringan bengkel rekanan luas untuk perbaikan armada di seluruh Indonesia." },
      ]}
      policyTiers={[
        { name: "TLO Armada", tag: "Hemat", features: ["Total loss & pencurian", "Rate per unit rendah", "Untuk armada besar"] },
        { name: "All Risk Armada", tag: "Populer", highlighted: true, features: ["Kerusakan parsial", "PA pengemudi", "Fleet reporting", "Pengelolaan terpusat"] },
        { name: "Fleet Premium", tag: "Enterprise", features: ["All Risk +", "PA pengemudi & penumpang", "Risk management", "BI coverage", "Dedicated adjuster"] },
      ]}
      faqs={[
        { q: "Berapa minimal unit untuk fleet insurance?", a: "Minimal 5 unit untuk mendapatkan program fleet. Semakin banyak unit, semakin kompetitif rate preminya." },
        { q: "Apakah bisa mix kendaraan berbeda dalam satu polis?", a: "Ya, polis fleet bisa mencakup berbagai jenis kendaraan (sedan, pick-up, bus) dalam satu polis dengan schedule tersendiri." },
        { q: "Bagaimana pengelolaan klaim untuk armada besar?", a: "Kami menyediakan dedicated contact person dan sistem pelaporan terpusat untuk mempermudah pengelolaan klaim armada." },
        { q: "Apakah driver baru perlu dilaporkan?", a: "Perubahan pengemudi tidak memerlukan endorsement untuk polis armada standar. Pastikan pengemudi memiliki SIM yang berlaku." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Asuransi Truk", href: "/asuransi-truk" },
        { label: "Asuransi Mobil", href: "/asuransi-mobil" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
