import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Public Liability | Tanggung Gugat Umum Bisnis Indonesia",
  description: "Asuransi public liability untuk bisnis Indonesia. Perlindungan dari klaim cedera dan kerusakan properti pihak ketiga di lokasi bisnis Anda.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-public-liability" },
  openGraph: { title: "Asuransi Public Liability | Tanggung Gugat Umum Bisnis Indonesia", description: "Asuransi public liability untuk bisnis Indonesia. Perlindungan dari klaim cedera dan kerusakan properti pihak ketiga di lokasi bisnis Anda.", url: "https://duniaasuransi.com/asuransi-public-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Asuransi Public Liability Indonesia"
      description="Sama dengan Public Liability Insurance — perlindungan bisnis Anda dari tuntutan pihak ketiga di seluruh area operasional."
      benefits={[
        { icon: Shield, title: "Bodily Injury", desc: "Menanggung biaya medis dan kompensasi cedera fisik pihak ketiga di area bisnis." },
        { icon: Building2, title: "Property Damage", desc: "Mengganti kerusakan properti milik pengunjung atau pihak ketiga." },
        { icon: Scale, title: "Legal Defense", desc: "Biaya hukum untuk membela klaim yang diajukan terhadap bisnis Anda." },
        { icon: Users, title: "Event Organizer", desc: "Coverage khusus untuk EO dan penyelenggara acara dari risiko peserta." },
        { icon: FileText, title: "Contractor Liability", desc: "Perlindungan kontraktor dari tuntutan akibat kegiatan konstruksi." },
        { icon: AlertTriangle, title: "Advertising Injury", desc: "Coverage untuk tuntutan terkait pelanggaran hak cipta atau pencemaran nama baik." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "UKM", features: ["Bodily injury", "Property damage", "Legal defense", "1 lokasi"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Multi-lokasi", "Event coverage", "Advertising injury", "Products extension"] },
        { name: "Enterprise", tag: "Korporat", features: ["Semua Standard +", "Global coverage", "Umbrella policy", "Full limit", "Risk management"] },
      ]}
      faqs={[
        { q: "Apakah event organizer memerlukan public liability?", a: "Sangat disarankan bahkan wajib untuk event besar. Cedera peserta, kerusakan venue, atau kegagalan event bisa menimbulkan tuntutan besar." },
        { q: "Apakah tersedia untuk kontraktor?", a: "Ya, kontraktor bangunan dan sipil sangat membutuhkan public liability untuk melindungi dari klaim kerusakan properti sekitar proyek." },
        { q: "Berapa limit coverage minimum yang direkomendasikan?", a: "Minimum Rp 1 miliar untuk UKM, Rp 5-10 miliar untuk perusahaan menengah-besar. Sesuaikan dengan potensi risiko operasional Anda." },
        { q: "Apakah bisa dibeli per event?", a: "Ya, tersedia short-term policy per event untuk EO dan penyelenggara acara yang tidak memerlukan coverage sepanjang tahun." },
      ]}
      relatedLinks={[
        { label: "Public Liability", href: "/public-liability" },
        { label: "Product Liability", href: "/product-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
