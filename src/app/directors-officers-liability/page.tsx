import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Directors & Officers Liability | Asuransi D&O Indonesia",
  description: "Directors & Officers (D&O) liability insurance Indonesia. Proteksi pribadi direktur dan komisaris dari tuntutan hukum akibat keputusan manajerial.",
  alternates: { canonical: "https://duniaasuransi.com/directors-officers-liability" },
  openGraph: { title: "Directors & Officers Liability | Asuransi D&O Indonesia", description: "Directors & Officers (D&O) liability insurance Indonesia. Proteksi pribadi direktur dan komisaris dari tuntutan hukum akibat keputusan manajerial.", url: "https://duniaasuransi.com/directors-officers-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Directors & Officers Liability (D&O) Indonesia"
      description="Lindungi aset pribadi direktur dan komisaris dari tuntutan hukum pemegang saham, regulator, atau pihak ketiga atas keputusan dalam kapasitas jabatan."
      benefits={[
        { icon: Users, title: "Proteksi Direktur Pribadi", desc: "Melindungi aset pribadi direktur dan komisaris dari klaim akibat keputusan bisnis." },
        { icon: Scale, title: "Tuntutan Pemegang Saham", desc: "Perlindungan dari class action atau tuntutan pemegang saham atas pengelolaan perusahaan." },
        { icon: Shield, title: "Investigasi Regulator", desc: "Menanggung biaya hukum selama investigasi oleh OJK, KPK, atau regulator lainnya." },
        { icon: FileText, title: "Legal Defense", desc: "Biaya pengacara, persidangan, dan negosiasi settlement untuk klaim D&O." },
        { icon: Building2, title: "Company Reimbursement", desc: "Kompensasi perusahaan untuk biaya yang dibayarkan atas nama direktur." },
        { icon: AlertTriangle, title: "Employment Practices", desc: "Perluasan untuk tuntutan dari karyawan terkait diskriminasi atau keputusan HR." },
      ]}
      policyTiers={[
        { name: "D&O Basic", tag: "UKM/Startup", features: ["Personal protection", "Legal defense", "Rp2M limit", "Listed & private co"] },
        { name: "D&O Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Company reimbursement", "Securities coverage", "Regulatory investigation", "Rp10M limit"] },
        { name: "D&O Enterprise", tag: "Tbk/Korporat", features: ["Semua Standard +", "Employment practices", "Crisis management", "Rp50M+ limit", "Global coverage"] },
      ]}
      faqs={[
        { q: "Apakah D&O hanya untuk perusahaan publik (Tbk)?", a: "Tidak, perusahaan swasta, startup, yayasan, dan koperasi juga membutuhkan D&O. Bahkan startup yang menerima investasi sering diwajibkan memiliki D&O." },
        { q: "Apakah D&O menanggung tindak pidana?", a: "Tidak. D&O tidak menanggung tindak pidana yang disengaja, fraud, atau pelanggaran hukum yang disadari." },
        { q: "Bagaimana jika direktur digugat secara pribadi?", a: "Polis D&O Side A melindungi aset pribadi direktur ketika perusahaan tidak bisa atau tidak mau mengambil alih biaya hukumnya." },
        { q: "Apakah komisaris independen perlu D&O?", a: "Ya, komisaris independen termasuk dalam cakupan D&O karena mereka juga bertanggung jawab atas keputusan dewan." },
      ]}
      relatedLinks={[
        { label: "Professional Indemnity", href: "/asuransi-professional-indemnity" },
        { label: "Employers Liability", href: "/employers-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
