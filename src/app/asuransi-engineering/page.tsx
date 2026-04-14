import type { Metadata } from "next";
import { BarChart, Building2, FileText, HardHat, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Engineering Indonesia | CAR, EAR, Machinery Breakdown",
  description: "Asuransi engineering terpercaya di Indonesia — Contractor All Risk, Erection All Risk, Machinery Breakdown. Proteksi proyek konstruksi dan pemasangan mesin.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-engineering" },
  openGraph: { title: "Asuransi Engineering Indonesia | CAR, EAR, Machinery Breakdown", description: "Asuransi engineering terpercaya di Indonesia — Contractor All Risk, Erection All Risk, Machinery Breakdown. Proteksi proyek konstruksi dan pemasangan mesin.", url: "https://duniaasuransi.com/asuransi-engineering" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Asuransi Engineering Indonesia"
      description="Solusi asuransi untuk proyek konstruksi, pemasangan mesin, dan industri rekayasa di Indonesia."
      benefits={[
        { icon: HardHat, title: "Contractor All Risk", desc: "Perlindungan proyek konstruksi sipil dari semua risiko selama masa pembangunan." },
        { icon: Wrench, title: "Erection All Risk", desc: "Proteksi pemasangan mesin dan steel structure dari risiko engineering." },
        { icon: Shield, title: "Machinery Breakdown", desc: "Perlindungan kerusakan mendadak mesin industri yang beroperasi." },
        { icon: BarChart, title: "Machinery Loss of Profit", desc: "Pengganti kerugian laba akibat berhentinya mesin produksi." },
        { icon: Building2, title: "Proyek Infrastruktur", desc: "Coverage untuk jembatan, jalan tol, bendungan, dan infrastruktur publik." },
        { icon: FileText, title: "Third Party Liability", desc: "Tanggung jawab terhadap cedera orang dan kerusakan properti selama proyek." },
      ]}
      policyTiers={[
        { name: "CAR Basic", tag: "Proyek Kecil", features: ["Material damage", "Third party liability", "Contractor plant & machinery", "Temporary structures"] },
        { name: "CAR Standard", tag: "Proyek Menengah", highlighted: true, features: ["Semua Basic +", "Surrounding property", "Principal's existing property", "Maintenance period", "Extended maintenance"] },
        { name: "Engineering Plus", tag: "Proyek Besar", features: ["Semua Standard +", "EAR coverage", "Machinery breakdown", "Loss of profit", "Delayed startup coverage"] },
      ]}
      faqs={[
        { q: "Apa bedanya CAR dan EAR?", a: "CAR (Contractor All Risk) untuk proyek konstruksi sipil seperti gedung dan jalan. EAR (Erection All Risk) untuk pemasangan mesin, steel structure, dan plant industri." },
        { q: "Apakah tersedia untuk proyek infrastruktur pemerintah?", a: "Ya, kami melayani kontraktor proyek infrastruktur pemerintah dan swasta di seluruh Indonesia." },
        { q: "Berapa lama polis CAR berlaku?", a: "Polis CAR berlaku sesuai durasi proyek plus periode pemeliharaan. Umumnya 6 bulan hingga 3 tahun." },
        { q: "Apakah sub-kontraktor tercakup dalam polis CAR?", a: "Tergantung struktur polis. Sub-kontraktor bisa dimasukkan sebagai named insured. Konsultasikan kebutuhan Anda." },
      ]}
      relatedLinks={[
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
        { label: "Erection All Risk", href: "/erection-all-risk" },
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
        { label: "Blog Engineering", href: "/blog/asuransi-engineering-untuk-kontraktor" },
      ]}
      ctaTitle="Konsultasi Asuransi Engineering Proyek Anda"
    />
  );
}
