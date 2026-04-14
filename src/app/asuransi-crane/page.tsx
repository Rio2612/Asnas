import type { Metadata } from "next";
import { AlertTriangle, FileText, HardHat, Shield, Users, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Crane Indonesia | Tower Crane & Mobile Crane",
  description: "Asuransi crane tower, mobile crane, dan crawler crane untuk proyek konstruksi di Indonesia. Perlindungan dari kerusakan struktural, jatuh, dan tanggung jawab pihak ketiga.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-crane" },
  openGraph: { title: "Asuransi Crane Indonesia | Tower Crane & Mobile Crane", description: "Asuransi crane tower, mobile crane, dan crawler crane untuk proyek konstruksi di Indonesia. Perlindungan dari kerusakan struktural, jatuh, dan tanggung jawab pihak ketiga.", url: "https://duniaasuransi.com/asuransi-crane" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Crane Indonesia"
      description="Perlindungan khusus untuk tower crane, mobile crane, crawler crane, dan overhead crane dari risiko kerusakan struktural, jatuh, dan tanggung jawab hukum."
      benefits={[
        { icon: HardHat, title: "Tower & Mobile Crane", desc: "Menanggung tower crane, mobile crane, crawler crane, dan overhead crane semua kapasitas." },
        { icon: AlertTriangle, title: "Risiko Jatuh", desc: "Perlindungan akibat crane roboh, muatan jatuh, dan kegagalan struktural." },
        { icon: Shield, title: "Third Party Liability", desc: "Tanggung jawab terhadap kerusakan properti dan cedera akibat operasi crane." },
        { icon: Wrench, title: "Kerusakan Mekanikal", desc: "Coverage kerusakan internal, gearbox, wire rope, dan hook failure." },
        { icon: FileText, title: "Erection & Dismantling", desc: "Perlindungan selama proses pemasangan dan pembongkaran crane di lokasi." },
        { icon: Users, title: "PA Operator Crane", desc: "Personal accident untuk operator crane dan rigger yang bekerja di lokasi." },
      ]}
      policyTiers={[
        { name: "Basic Crane", tag: "Dasar", features: ["Kerusakan fisik eksternal", "Pencurian komponen", "Kebakaran crane", "TPL dasar"] },
        { name: "Standard Crane", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Kerusakan mekanikal", "Wire rope & hook", "Erection & dismantling", "TPL extended"] },
        { name: "Comprehensive Crane", tag: "Lengkap", features: ["Semua Standard +", "PA operator", "Loss of hire", "Business interruption", "Breakdown coverage"] },
      ]}
      faqs={[
        { q: "Apakah tower crane sedang terpasang bisa diasuransikan?", a: "Ya, tower crane yang sedang terpasang di proyek dapat diasuransikan dengan Contractor All Risk atau polis mesin khusus." },
        { q: "Berapa nilai pertanggungan yang tepat untuk crane?", a: "Nilai pertanggungan sebaiknya berdasarkan replacement cost new atau agreed value berdasarkan appraisal independen." },
        { q: "Apakah ada persyaratan sertifikasi untuk klaim crane?", a: "Crane harus memiliki SIO (Surat Izin Operasi) yang valid dan dioperasikan oleh operator bersertifikat SIO." },
        { q: "Bagaimana coverage saat crane transit antar proyek?", a: "Diperlukan endorsement transit. Kami dapat menyiapkan coverage komprehensif termasuk periode transit." },
      ]}
      relatedLinks={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
