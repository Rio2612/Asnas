import type { Metadata } from "next";
import { AlertTriangle, FileText, HardHat, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Liability Indonesia | Tanggung Gugat Bisnis & Profesi",
  description: "Asuransi liability terpercaya di Indonesia — public liability, product liability, professional indemnity, D&O, employers liability. Proteksi hukum bisnis Anda.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-liability" },
  openGraph: { title: "Asuransi Liability Indonesia | Tanggung Gugat Bisnis & Profesi", description: "Asuransi liability terpercaya di Indonesia — public liability, product liability, professional indemnity, D&O, employers liability. Proteksi hukum bisnis Anda.", url: "https://duniaasuransi.com/asuransi-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability (Tanggung Gugat)"
      title="Asuransi Liability Indonesia"
      description="Perlindungan hukum komprehensif untuk bisnis dan profesional Indonesia dari tuntutan pihak ketiga."
      benefits={[
        { icon: Scale, title: "Public Liability", desc: "Perlindungan dari tuntutan cedera atau kerusakan properti pihak ketiga di area bisnis." },
        { icon: Shield, title: "Product Liability", desc: "Tanggung jawab atas produk yang menyebabkan cedera atau kerugian konsumen." },
        { icon: FileText, title: "Professional Indemnity", desc: "Perlindungan profesional dari tuntutan akibat kelalaian atau kesalahan saran." },
        { icon: Users, title: "Directors & Officers", desc: "Proteksi pribadi direktur dan komisaris dari tuntutan hukum dalam kapasitas jabatan." },
        { icon: HardHat, title: "Employers Liability", desc: "Perlindungan terhadap tuntutan karyawan akibat cedera atau penyakit akibat kerja." },
        { icon: AlertTriangle, title: "Asuransi Limbah B3", desc: "Liability khusus untuk bisnis yang menangani limbah berbahaya dan beracun." },
      ]}
      policyTiers={[
        { name: "Basic Liability", tag: "Dasar", features: ["Public liability", "TPL Rp1M", "Bodily injury", "Property damage"] },
        { name: "Standard Liability", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Product liability", "Employer liability", "Legal defense costs", "TPL Rp5M"] },
        { name: "Comprehensive", tag: "Enterprise", features: ["Semua Standard +", "Professional indemnity", "D&O liability", "Pollution liability", "Global coverage"] },
      ]}
      faqs={[
        { q: "Apa itu asuransi liability?", a: "Asuransi liability melindungi bisnis atau individu dari tuntutan hukum pihak ketiga yang mengalami kerugian, cedera, atau kerusakan akibat aktivitas bisnis Anda." },
        { q: "Apakah UKM perlu asuransi liability?", a: "Ya, bahkan UKM pun memerlukan perlindungan dari tuntutan hukum yang bisa sangat merugikan. Premi liability untuk UKM sangat terjangkau." },
        { q: "Berapa lama proses klaim liability?", a: "Klaim liability bisa kompleks karena melibatkan proses hukum. Perusahaan asuransi akan menyediakan legal defense dan mengurus negosiasi dengan penuntut." },
        { q: "Apakah ada liability insurance untuk Limbah B3?", a: "Ya, kami menyediakan pollution liability khusus untuk perusahaan yang menangani, mengolah, atau mengangkut limbah B3." },
      ]}
      relatedLinks={[
        { label: "Public Liability", href: "/public-liability" },
        { label: "Product Liability", href: "/product-liability" },
        { label: "Professional Indemnity", href: "/asuransi-professional-indemnity" },
        { label: "Asuransi Limbah B3", href: "/asuransi-limbah-b3" },
      ]}
      ctaTitle="Konsultasi Asuransi Liability Bisnis Anda"
    />
  );
}
