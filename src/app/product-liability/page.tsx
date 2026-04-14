import type { Metadata } from "next";
import { AlertTriangle, Building2, FileText, Package, Scale, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Product Liability Insurance | Asuransi Tanggung Gugat Produk",
  description: "Product liability insurance untuk produsen dan distributor di Indonesia. Perlindungan dari tuntutan konsumen akibat produk cacat atau berbahaya.",
  alternates: { canonical: "https://duniaasuransi.com/product-liability" },
  openGraph: { title: "Product Liability Insurance | Asuransi Tanggung Gugat Produk", description: "Product liability insurance untuk produsen dan distributor di Indonesia. Perlindungan dari tuntutan konsumen akibat produk cacat atau berbahaya.", url: "https://duniaasuransi.com/product-liability" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Product Liability Insurance Indonesia"
      description="Proteksi untuk produsen, importir, dan distributor dari tuntutan hukum akibat produk yang menyebabkan cedera atau kerugian konsumen."
      benefits={[
        { icon: Shield, title: "Cedera Konsumen", desc: "Menanggung kompensasi akibat produk Anda menyebabkan cedera fisik konsumen." },
        { icon: Package, title: "Kerusakan Properti", desc: "Menanggung kerusakan milik konsumen yang disebabkan produk Anda." },
        { icon: Scale, title: "Legal Defense", desc: "Biaya pengacara dan persidangan untuk membela klaim produk cacat." },
        { icon: AlertTriangle, title: "Product Recall", desc: "Optional: biaya penarikan produk dari pasar akibat risiko keselamatan." },
        { icon: Building2, title: "Completed Operations", desc: "Perlindungan untuk produk atau pekerjaan yang sudah diselesaikan dan diserahterimakan." },
        { icon: FileText, title: "Biaya Investigasi", desc: "Menanggung biaya investigasi untuk mengidentifikasi cacat produk." },
      ]}
      policyTiers={[
        { name: "Basic PL", tag: "UKM", features: ["Cedera konsumen", "Property damage", "Legal defense", "Rp1M limit"] },
        { name: "Standard PL", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Completed operations", "Rp5M limit", "Investigasi", "Settlement"] },
        { name: "Enterprise PL", tag: "Ekspor", features: ["Semua Standard +", "Product recall", "Global coverage", "Rp20M+ limit", "Crisis management"] },
      ]}
      faqs={[
        { q: "Siapa yang perlu product liability insurance?", a: "Produsen, importir, distributor, dan retailer semua berpotensi terkena tuntutan product liability. Semakin berisiko produk, semakin penting perlindungannya." },
        { q: "Apakah product liability diperlukan untuk ekspor?", a: "Ya, banyak pembeli internasional dan retailer global mewajibkan product liability insurance dengan limit tertentu sebagai syarat kontrak." },
        { q: "Bagaimana jika produk saya sudah discontinued?", a: "Tanggung jawab produk bisa muncul bertahun-tahun setelah produksi. Polis dapat mencakup produk yang diproduksi dalam periode tertentu." },
        { q: "Apakah makanan dan minuman termasuk?", a: "Ya, industri F&B adalah salah satu yang paling membutuhkan product liability. Konsultasikan kebutuhan spesifik Anda dengan kami." },
      ]}
      relatedLinks={[
        { label: "Public Liability", href: "/public-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Professional Indemnity", href: "/asuransi-professional-indemnity" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
