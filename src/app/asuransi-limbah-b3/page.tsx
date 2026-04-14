import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Limbah B3 | Pollution Liability untuk Industri Indonesia",
  description: "Asuransi limbah B3 dan pollution liability untuk perusahaan industri di Indonesia. Perlindungan dari tuntutan hukum akibat pencemaran lingkungan.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-limbah-b3" },
  openGraph: { title: "Asuransi Limbah B3 | Pollution Liability untuk Industri Indonesia", description: "Asuransi limbah B3 dan pollution liability untuk perusahaan industri di Indonesia. Perlindungan dari tuntutan hukum akibat pencemaran lingkungan.", url: "https://duniaasuransi.com/asuransi-limbah-b3" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Asuransi Limbah B3 Indonesia"
      description="Perlindungan hukum untuk perusahaan yang menghasilkan, mengolah, atau mengangkut limbah Bahan Berbahaya dan Beracun (B3) dari tuntutan pencemaran."
      benefits={[
        { icon: AlertTriangle, title: "Pollution Liability", desc: "Menanggung tuntutan pihak ketiga akibat pencemaran lingkungan dari limbah B3." },
        { icon: Scale, title: "Biaya Pembersihan", desc: "Mengganti biaya cleanup dan remediasi lokasi yang tercemar limbah B3." },
        { icon: FileText, title: "Denda Regulasi", desc: "Bantuan hukum untuk menghadapi sanksi dan denda dari regulator lingkungan." },
        { icon: Shield, title: "Transportasi Limbah", desc: "Coverage saat limbah B3 sedang diangkut ke fasilitas pengolahan." },
        { icon: Building2, title: "Fasilitas Pengolahan", desc: "Perlindungan untuk TPS, TPA, dan fasilitas pengolahan limbah B3." },
        { icon: Users, title: "Third Party Claims", desc: "Menanggung kompensasi masyarakat yang terdampak pencemaran limbah B3." },
      ]}
      policyTiers={[
        { name: "Basic B3", tag: "Dasar", features: ["Pollution liability", "Third party claims", "Legal defense", "Site-specific"] },
        { name: "Standard B3", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Cleanup costs", "Transportation", "Regulatory fines assistance", "Extended coverage"] },
        { name: "Comprehensive B3", tag: "Enterprise", features: ["Semua Standard +", "Emergency response", "Crisis management", "Unlimited cleanup", "Multi-site"] },
      ]}
      faqs={[
        { q: "Siapa yang wajib memiliki asuransi limbah B3?", a: "Perusahaan penghasil limbah B3 dalam skala tertentu diwajibkan memiliki jaminan finansial termasuk asuransi sesuai PP No. 22/2021 tentang PPLH." },
        { q: "Apakah asuransi ini menanggung pencemaran udara?", a: "Ya, tergantung jenis pencemaran dan polis. Pencemaran udara, air, dan tanah bisa dimasukkan dalam coverage." },
        { q: "Apakah tersedia untuk perusahaan pengangkut limbah B3?", a: "Ya, perusahaan jasa pengangkutan limbah B3 bisa mendapatkan polis khusus untuk risiko tumpahan saat transportasi." },
        { q: "Bagaimana jika pencemaran terjadi bertahun-tahun sebelum ditemukan?", a: "Polis pollution liability dapat menyertakan retroactive date untuk menanggung insiden pencemaran historis." },
      ]}
      relatedLinks={[
        { label: "Asuransi Liability Limbah B3", href: "/asuransi-liability-limbah-b3" },
        { label: "Public Liability", href: "/public-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
