import type { Metadata } from "next";
import { AlertTriangle, Building2, Clock, FileText, Scale, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Liability Limbah B3 | Jaminan Wajib Perusahaan Industri",
  description: "Asuransi liability limbah B3 sebagai jaminan wajib bagi perusahaan penghasil limbah B3 di Indonesia sesuai regulasi KLHK. Konsultasi gratis.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-liability-limbah-b3" },
  openGraph: { title: "Asuransi Liability Limbah B3 | Jaminan Wajib Perusahaan Industri", description: "Asuransi liability limbah B3 sebagai jaminan wajib bagi perusahaan penghasil limbah B3 di Indonesia sesuai regulasi KLHK. Konsultasi gratis.", url: "https://duniaasuransi.com/asuransi-liability-limbah-b3" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability B3"
      title="Asuransi Liability Limbah B3"
      description="Jaminan finansial berupa asuransi liability untuk memenuhi kewajiban regulasi KLHK bagi perusahaan penghasil, pengolah, dan pengangkut limbah B3."
      benefits={[
        { icon: FileText, title: "Jaminan Regulasi KLHK", desc: "Memenuhi kewajiban penyediaan jaminan finansial sesuai peraturan KLHK dan PP lingkungan hidup." },
        { icon: AlertTriangle, title: "Tumpahan & Pencemaran", desc: "Menanggung biaya dampak tumpahan limbah B3 dan pemulihan lingkungan." },
        { icon: Scale, title: "Kompensasi Masyarakat", desc: "Menanggung kompensasi untuk masyarakat yang terdampak pencemaran B3." },
        { icon: Shield, title: "Biaya Remediasi", desc: "Penggantian biaya pembersihan dan remediasi lahan tercemar." },
        { icon: Building2, title: "Pemantauan Lingkungan", desc: "Coverage untuk biaya monitoring lingkungan pasca-insiden." },
        { icon: Clock, title: "Emergency Response", desc: "Menanggung biaya respons darurat untuk menangani tumpahan limbah B3." },
      ]}
      policyTiers={[
        { name: "Jaminan Dasar", tag: "Wajib Regulasi", features: ["Sesuai ketentuan KLHK", "Third party liability", "Cleanup costs", "Legal defense"] },
        { name: "Jaminan Standar", tag: "Populer", highlighted: true, features: ["Semua Dasar +", "Extended remediation", "Community compensation", "Regulatory fines", "Emergency response"] },
        { name: "Jaminan Komprehensif", tag: "Industri Besar", features: ["Semua Standar +", "Multi-site", "Crisis management", "Unlimited cleanup", "Long-term monitoring"] },
      ]}
      faqs={[
        { q: "Apakah asuransi limbah B3 diwajibkan oleh peraturan?", a: "Ya, PP No. 22/2021 dan peraturan KLHK mewajibkan perusahaan penghasil limbah B3 tertentu menyediakan jaminan finansial yang salah satunya bisa berupa asuransi." },
        { q: "Berapa nilai jaminan yang harus disediakan?", a: "Nilai jaminan ditentukan berdasarkan jenis dan volume limbah B3 yang dihasilkan. Konsultan kami dapat membantu kalkulasi sesuai regulasi." },
        { q: "Apakah sertifikat asuransi bisa digunakan untuk perizinan?", a: "Ya, bukti asuransi liability B3 dapat diserahkan kepada KLHK sebagai bukti pemenuhan jaminan finansial untuk keperluan perizinan." },
        { q: "Apakah berlaku untuk semua jenis limbah B3?", a: "Polis disesuaikan dengan jenis limbah B3 yang dihasilkan perusahaan. Konsultasikan jenis limbah spesifik dengan kami." },
      ]}
      relatedLinks={[
        { label: "Asuransi Limbah B3", href: "/asuransi-limbah-b3" },
        { label: "Public Liability", href: "/public-liability" },
        { label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
