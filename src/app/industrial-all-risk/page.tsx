import type { Metadata } from "next";
import { Factory, Shield, Zap, Flame, Wrench, BarChart } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Industrial All Risk | Asuransi Pabrik & Industri Indonesia",
  description: "Industrial All Risk (IAR) untuk perlindungan komprehensif pabrik, fasilitas industri, dan aset manufaktur. Coverage mesin, bangunan, dan stok produksi.",
  alternates: { canonical: "https://duniaasuransi.com/industrial-all-risk" },
  openGraph: { title: "Industrial All Risk | Dunia Asuransi", description: "Proteksi all risk untuk pabrik dan fasilitas industri di Indonesia.", url: "https://duniaasuransi.com/industrial-all-risk" },
};

export default function IndustrialAllRiskPage() {
  return (
    <ProductPage
      badge="Asuransi Properti Industri"
      title="Industrial All Risk (IAR) Indonesia"
      description="Solusi asuransi komprehensif untuk pabrik, fasilitas manufaktur, dan kompleks industri — satu polis untuk semua aset dan risiko operasional."
      benefits={[
        { icon: Factory, title: "Perlindungan Pabrik Menyeluruh", desc: "Menanggung gedung pabrik, mesin produksi, dan infrastruktur pendukung dalam satu polis terintegrasi." },
        { icon: Flame, title: "Kebakaran & Risiko Terkait", desc: "Proteksi terhadap kebakaran, ledakan, dan kerusakan akibat panas berlebih pada proses produksi." },
        { icon: Zap, title: "Kerusakan Mesin (MB)", desc: "Extension machinery breakdown untuk mesin dan peralatan produksi utama." },
        { icon: Shield, title: "Stok & Bahan Baku", desc: "Perlindungan stok produk jadi, bahan baku, dan barang dalam proses produksi." },
        { icon: BarChart, title: "Business Interruption", desc: "Pengganti kerugian pendapatan selama pabrik tidak beroperasi akibat klaim yang ditanggung." },
        { icon: Wrench, title: "Biaya Rekonstruksi", desc: "Mengganti seluruh biaya rekonstruksi bangunan dan penggantian mesin yang rusak." },
      ]}
      policyTiers={[
        { name: "IAR Standar", tag: "Dasar", features: ["Kebakaran & ledakan", "Bencana alam", "RSMD", "Bangunan & mesin utama"] },
        { name: "IAR Plus", tag: "Populer", highlighted: true, features: ["Semua IAR Standar +", "Machinery breakdown", "Stok & bahan baku", "Business interruption 12 bulan", "Tanggung jawab pihak ketiga"] },
        { name: "IAR Comprehensive", tag: "Enterprise", features: ["Semua IAR Plus +", "Gempa bumi & tsunami", "Terorisme & sabotase", "BI extended 24 bulan", "Loss of profit", "Product contamination"] },
      ]}
      faqs={[
        { q: "Apa perbedaan Industrial All Risk dengan Property All Risk?", a: "IAR dirancang khusus untuk fasilitas industri dengan cakupan yang lebih luas termasuk machinery breakdown dan process-related risks, sementara PAR lebih umum untuk properti komersial dan residensial." },
        { q: "Apakah mesin produksi tercakup dalam IAR?", a: "Ya, IAR mencakup mesin dan peralatan produksi. Untuk perlindungan kerusakan mesin yang lebih komprehensif, tersedia extension Machinery Breakdown." },
        { q: "Bagaimana cara menghitung nilai pertanggungan pabrik?", a: "Nilai pertanggungan dihitung berdasarkan replacement cost bangunan, mesin (new replacement value), stok, dan aset lainnya. Tim surveyor kami dapat membantu penilaian." },
        { q: "Apakah tersedia untuk perusahaan multi-lokasi?", a: "Ya, tersedia polis floater untuk perusahaan dengan beberapa lokasi pabrik di seluruh Indonesia dalam satu polis yang efisien." },
      ]}
      relatedLinks={[
        { label: "Property All Risk", href: "/property-all-risk" },
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
        { label: "Business Interruption", href: "/business-interruption" },
      ]}
    />
  );
}
