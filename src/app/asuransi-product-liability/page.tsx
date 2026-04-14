import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Package, Scale, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Product Liability | Tanggung Gugat Produk Indonesia",
  description: "Asuransi product liability untuk produsen dan distributor Indonesia. Perlindungan dari gugatan konsumen akibat produk cacat atau berbahaya.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-product-liability" },
  openGraph: { title: "Asuransi Product Liability | Tanggung Gugat Produk Indonesia", description: "Asuransi product liability untuk produsen dan distributor Indonesia. Perlindungan dari gugatan konsumen akibat produk cacat atau berbahaya.", url: "https://duniaasuransi.com/asuransi-product-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Asuransi Product Liability Indonesia"
      description="Proteksi dari tuntutan hukum konsumen terhadap produk yang menyebabkan cedera, kerusakan, atau kerugian, termasuk biaya product recall."
      benefits={[
        { icon: Package, title: "Produk Cacat", desc: "Menanggung tuntutan konsumen akibat cacat produksi atau desain yang menyebabkan cedera." },
        { icon: Shield, title: "Cedera Konsumen", desc: "Kompensasi cedera fisik dan biaya medis konsumen akibat menggunakan produk Anda." },
        { icon: AlertTriangle, title: "Product Recall", desc: "Menanggung biaya penarikan produk dari pasar akibat risiko keselamatan." },
        { icon: Scale, title: "Legal Defense", desc: "Biaya pengacara dan persidangan untuk membela klaim produk berbahaya." },
        { icon: FileText, title: "Completed Operations", desc: "Perlindungan untuk produk atau jasa yang sudah diselesaikan dan diserahterimakan." },
        { icon: Building2, title: "Ekspor & Importir", desc: "Coverage untuk produk yang didistribusikan di pasar internasional." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Lokal", features: ["Bodily injury", "Property damage", "Legal defense", "Pasar domestik"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Product recall", "Completed operations", "Settlement costs", "ASEAN coverage"] },
        { name: "Global", tag: "Ekspor", features: ["Semua Standard +", "Global coverage", "High limit", "Crisis management", "Brand protection"] },
      ]}
      faqs={[
        { q: "Apakah product liability berbeda dengan public liability?", a: "Ya. Public liability untuk insiden di lokasi bisnis. Product liability untuk kerugian yang timbul dari produk yang Anda buat atau distribusikan." },
        { q: "Apakah mencakup makanan dan minuman?", a: "Ya, industri F&B sangat membutuhkan product liability termasuk coverage untuk food contamination dan penarikan produk." },
        { q: "Apakah importir perlu product liability?", a: "Ya, importir bisa dianggap sebagai 'produsen' di mata hukum konsumen Indonesia, sehingga perlu perlindungan product liability." },
        { q: "Berapa lama setelah produksi coverage masih berlaku?", a: "Tergantung polis. Claims-made policy menanggung klaim yang diajukan selama polis aktif. Occurrence policy menanggung insiden yang terjadi selama periode polis." },
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
