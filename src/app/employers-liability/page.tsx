import type { Metadata } from "next";
import { Building2, FileText, HeartPulse, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Employers Liability Indonesia | Asuransi Kecelakaan Kerja Karyawan",
  description: "Employers liability insurance untuk perusahaan di Indonesia. Perlindungan dari tuntutan karyawan akibat kecelakaan kerja atau penyakit akibat kerja.",
  alternates: { canonical: "https://duniaasuransi.com/employers-liability" },
  openGraph: { title: "Employers Liability Indonesia | Asuransi Kecelakaan Kerja Karyawan", description: "Employers liability insurance untuk perusahaan di Indonesia. Perlindungan dari tuntutan karyawan akibat kecelakaan kerja atau penyakit akibat kerja.", url: "https://duniaasuransi.com/employers-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Employers Liability Insurance Indonesia"
      description="Lindungi bisnis Anda dari tuntutan hukum karyawan yang menderita cedera atau penyakit akibat kondisi kerja di bawah tanggung jawab perusahaan."
      benefits={[
        { icon: Users, title: "Perlindungan Tuntutan Karyawan", desc: "Menanggung kompensasi akibat tuntutan hukum karyawan atas cedera kerja." },
        { icon: HeartPulse, title: "Penyakit Akibat Kerja", desc: "Coverage untuk occupational disease yang timbul dari kondisi kerja perusahaan." },
        { icon: Scale, title: "Legal Defense", desc: "Biaya pengacara dan litigasi untuk membela tuntutan kecelakaan kerja." },
        { icon: Shield, title: "Pengecualian BPJS", desc: "Melengkapi celah perlindungan yang tidak dicakup program BPJS Ketenagakerjaan." },
        { icon: Building2, title: "Multi-Site Coverage", desc: "Coverage untuk karyawan di berbagai lokasi operasional perusahaan." },
        { icon: FileText, title: "Contractor Employees", desc: "Bisa diperluas untuk karyawan subkontraktor dan tenaga outsourcing." },
      ]}
      policyTiers={[
        { name: "Basic EL", tag: "Dasar", features: ["Cedera karyawan", "Legal defense", "Rp1M limit", "1 lokasi"] },
        { name: "Standard EL", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Occupational disease", "Multi-lokasi", "Contractor employees", "Rp5M limit"] },
        { name: "Enterprise EL", tag: "Industri Berat", features: ["Semua Standard +", "Unlimited limit", "Global coverage", "Aggregate cover", "Full legal suite"] },
      ]}
      faqs={[
        { q: "Apa perbedaan employers liability dengan BPJS Ketenagakerjaan?", a: "BPJS adalah jaminan sosial yang bersifat wajib dan terbatas. Employers Liability menanggung tuntutan hukum di luar batas kompensasi BPJS, termasuk biaya pengacara." },
        { q: "Apakah pekerja magang atau PKL termasuk dalam coverage?", a: "Tergantung polis. Pekerja magang, PKL, dan freelancer bisa dimasukkan sebagai endorsement. Konsultasikan dengan kami." },
        { q: "Apakah penyakit akibat paparan bahan kimia ditanggung?", a: "Ya, occupational disease termasuk penyakit akibat paparan bahan berbahaya di tempat kerja bisa ditanggung dengan endorsement yang tepat." },
        { q: "Apakah tersedia untuk industri dengan risiko tinggi (tambang, konstruksi)?", a: "Ya, namun premium akan lebih tinggi sesuai tingkat risiko industri. Tersedia untuk semua sektor industri." },
      ]}
      relatedLinks={[
        { label: "Public Liability", href: "/public-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Asuransi Limbah B3", href: "/asuransi-limbah-b3" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
