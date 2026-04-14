import type { Metadata } from "next";
import { BarChart, Building2, Clock, Shield, Wrench, Zap } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Machinery Breakdown Insurance | Asuransi Kerusakan Mesin Industri",
  description: "Machinery breakdown insurance untuk mesin industri, generator, kompresor, dan peralatan produksi di Indonesia. Perlindungan kerusakan mendadak yang tidak terduga.",
  alternates: { canonical: "https://duniaasuransi.com/machinery-breakdown" },
  openGraph: { title: "Machinery Breakdown Insurance | Asuransi Kerusakan Mesin Industri", description: "Machinery breakdown insurance untuk mesin industri, generator, kompresor, dan peralatan produksi di Indonesia. Perlindungan kerusakan mendadak yang tidak terduga.", url: "https://duniaasuransi.com/machinery-breakdown" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Machinery Breakdown Insurance Indonesia"
      description="Perlindungan untuk mesin industri yang beroperasi dari kerusakan mendadak akibat cacat material, kesalahan desain, atau kegagalan operator."
      benefits={[
        { icon: Wrench, title: "Kerusakan Mendadak", desc: "Menanggung kerusakan mesin yang terjadi secara tiba-tiba dan tidak terduga saat beroperasi." },
        { icon: Zap, title: "Kerusakan Elektrikal", desc: "Perlindungan motor listrik, transformer, switchgear dari short circuit dan overload." },
        { icon: Shield, title: "Cacat Material", desc: "Kerusakan akibat cacat dalam material, kesalahan desain, atau workmanship." },
        { icon: BarChart, title: "Biaya Perbaikan", desc: "Mengganti seluruh biaya perbaikan atau penggantian mesin yang rusak." },
        { icon: Clock, title: "Mesin Kritis Produksi", desc: "Khusus untuk mesin utama yang jika rusak akan menghentikan proses produksi." },
        { icon: Building2, title: "Generator & Utilities", desc: "Coverage untuk generator, kompresor, chiller, boiler, dan utilitas industri." },
      ]}
      policyTiers={[
        { name: "MB Basic", tag: "Dasar", features: ["Kerusakan mekanik", "Electrical damage", "Biaya perbaikan", "Parts replacement"] },
        { name: "MB Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Overhaul coverage", "Hired equipment", "Expediting expenses", "Third party data"] },
        { name: "MB + MLOP", tag: "Lengkap", features: ["Semua Standard +", "Loss of profit (MLOP)", "Extra expenses", "Advance profits", "BI extended"] },
      ]}
      faqs={[
        { q: "Apa bedanya machinery breakdown dengan industrial all risk?", a: "Machinery Breakdown (MB) khusus menanggung kerusakan internal mesin yang beroperasi. Industrial All Risk (IAR) menanggung risiko eksternal seperti kebakaran, banjir, dan pencurian." },
        { q: "Apakah keausan normal (wear & tear) ditanggung?", a: "Tidak. MB hanya menanggung kerusakan mendadak yang tidak terduga. Keausan normal, korosi, dan kerusakan gradual dikecualikan." },
        { q: "Apakah generator bisa diasuransikan dengan MB?", a: "Ya, generator, UPS, transformator, kompresor, dan mesin utilitas lainnya bisa diasuransikan." },
        { q: "Apa itu Machinery Loss of Profit?", a: "MLOP adalah perluasan MB yang menanggung kehilangan laba selama mesin utama tidak bisa beroperasi akibat klaim MB yang disetujui." },
      ]}
      relatedLinks={[
        { label: "Industrial All Risk", href: "/industrial-all-risk" },
        { label: "Machinery Loss of Profit", href: "/machinery-loss-of-profit" },
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
