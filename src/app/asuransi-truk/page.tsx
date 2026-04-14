import type { Metadata } from "next";
import { Clock, MapPin, Package, Shield, Truck, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Truk Indonesia | Armada Truk & Kendaraan Komersial",
  description: "Asuransi truk terpercaya untuk armada logistik dan truk komersial di Indonesia. All Risk & TLO untuk semua jenis truk dengan premi kompetitif.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-truk" },
  openGraph: { title: "Asuransi Truk Indonesia | Armada Truk & Kendaraan Komersial", description: "Asuransi truk terpercaya untuk armada logistik dan truk komersial di Indonesia. All Risk & TLO untuk semua jenis truk dengan premi kompetitif.", url: "https://duniaasuransi.com/asuransi-truk" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Kendaraan Komersial"
      title="Asuransi Truk Indonesia"
      description="Perlindungan optimal untuk armada truk logistik, truk box, truk kontainer, dan kendaraan komersial berat di Indonesia."
      benefits={[
        { icon: Truck, title: "Semua Jenis Truk", desc: "Truk ringan, sedang, berat, truk box, flatbed, dan truk kontainer semua bisa dilindungi." },
        { icon: Shield, title: "All Risk Armada", desc: "Perlindungan kerusakan fisik dari kecelakaan, tabrakan, dan risiko lainnya di jalan." },
        { icon: Package, title: "Tanggung Jawab Muatan", desc: "Menanggung kerusakan muatan pihak ketiga akibat kecelakaan kendaraan Anda." },
        { icon: MapPin, title: "Coverage Seluruh Indonesia", desc: "Berlaku di seluruh wilayah Indonesia termasuk jalan lintas pulau dan area terpencil." },
        { icon: Wrench, title: "Bengkel Rekanan Komersial", desc: "Bengkel spesialis kendaraan berat dan komersial di kota-kota besar Indonesia." },
        { icon: Clock, title: "Fleet Management", desc: "Program khusus untuk armada besar dengan benefit pengelolaan klaim terpusat." },
      ]}
      policyTiers={[
        { name: "TLO Truk", tag: "Ekonomis", features: ["Total loss & pencurian", "Rate kompetitif", "Untuk armada besar", "Cocok truk operasional lama"] },
        { name: "All Risk Truk", tag: "Populer", highlighted: true, features: ["Kerusakan parsial", "Tanggung jawab pihak ketiga", "Bangkitan muatan (opsional)", "Bengkel rekanan"] },
        { name: "Fleet Insurance", tag: "Enterprise", features: ["All Risk Truk +", "Fleet management", "Klaim terpusat", "Diskon armada", "BI coverage"] },
      ]}
      faqs={[
        { q: "Apakah tersedia asuransi untuk armada 50+ truk?", a: "Ya, kami menawarkan program fleet insurance khusus dengan pengelolaan terpusat dan diskon premi untuk armada besar." },
        { q: "Apakah muatan barang bisa diasuransikan bersamaan?", a: "Muatan dapat diasuransikan secara terpisah dengan marine cargo insurance. Kami dapat menyiapkan paket gabungan yang efisien." },
        { q: "Bagaimana asuransi untuk truk yang beroperasi lintas pulau?", a: "Polis berlaku di seluruh Indonesia. Untuk perjalanan via kapal feri, diperlukan endorsement marine transit." },
        { q: "Apakah tersedia untuk truk dengan GVWR di atas 20 ton?", a: "Ya, kami dapat menanggung kendaraan berat hingga GVWR berapa pun sesuai hasil survei dan penilaian underwriter." },
      ]}
      relatedLinks={[
        { label: "Asuransi Dump Truck", href: "/asuransi-dump-truck" },
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
