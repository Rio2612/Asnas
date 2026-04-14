import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Public Liability Insurance Indonesia | Asuransi Tanggung Gugat Umum",
  description: "Public liability insurance untuk bisnis di Indonesia. Perlindungan dari tuntutan cedera dan kerusakan properti pihak ketiga di lokasi bisnis Anda.",
  alternates: { canonical: "https://duniaasuransi.com/public-liability" },
  openGraph: { title: "Public Liability Insurance Indonesia | Asuransi Tanggung Gugat Umum", description: "Public liability insurance untuk bisnis di Indonesia. Perlindungan dari tuntutan cedera dan kerusakan properti pihak ketiga di lokasi bisnis Anda.", url: "https://duniaasuransi.com/public-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Public Liability Insurance Indonesia"
      description="Lindungi bisnis Anda dari tuntutan hukum akibat cedera atau kerusakan properti yang dialami pelanggan, pengunjung, atau masyarakat umum."
      benefits={[
        { icon: Shield, title: "Bodily Injury", desc: "Menanggung biaya medis dan kompensasi cedera fisik pihak ketiga." },
        { icon: Building2, title: "Property Damage", desc: "Mengganti kerusakan properti milik pihak ketiga akibat aktivitas bisnis." },
        { icon: Scale, title: "Legal Defense Costs", desc: "Menanggung biaya pengacara dan persidangan untuk membela bisnis Anda." },
        { icon: FileText, title: "Out-of-Court Settlement", desc: "Menanggung pembayaran kompensasi yang disepakati di luar pengadilan." },
        { icon: Users, title: "Premises Liability", desc: "Coverage untuk insiden yang terjadi di area bisnis, toko, atau kantor Anda." },
        { icon: AlertTriangle, title: "Product & Completed Ops", desc: "Perluasan untuk tanggung jawab atas produk dan pekerjaan yang telah diselesaikan." },
      ]}
      policyTiers={[
        { name: "Basic PL", tag: "UKM", features: ["TPL Rp500jt", "Bodily injury", "Property damage", "1 lokasi bisnis"] },
        { name: "Standard PL", tag: "Populer", highlighted: true, features: ["TPL Rp2M", "Multi-lokasi", "Legal defense", "Products coverage", "Advertising injury"] },
        { name: "Enterprise PL", tag: "Korporat", features: ["TPL unlimited", "Global coverage", "Umbrella policy", "Directors coverage", "Full legal suite"] },
      ]}
      faqs={[
        { q: "Apakah public liability wajib untuk bisnis di Indonesia?", a: "Tidak wajib secara hukum untuk semua bisnis, namun beberapa sektor seperti event organizer, kontraktor publik, dan perhotelan sering mewajibkannya." },
        { q: "Apakah toko/ritel perlu public liability?", a: "Sangat disarankan. Jika pelanggan jatuh di toko Anda atau produk menyebabkan cedera, public liability akan melindungi Anda dari tuntutan." },
        { q: "Berapa limit coverage yang direkomendasikan?", a: "Tergantung ukuran bisnis dan potensi risiko. Minimum Rp 1-2 miliar untuk bisnis menengah. Konsultasikan dengan kami untuk rekomendasi tepat." },
        { q: "Apakah karyawan termasuk dalam coverage?", a: "Cedera karyawan biasanya masuk dalam Employers Liability, bukan Public Liability. Kami dapat menyiapkan kedua polis secara bersamaan." },
      ]}
      relatedLinks={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Product Liability", href: "/product-liability" },
        { label: "Employers Liability", href: "/employers-liability" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
