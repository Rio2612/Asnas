import type { Metadata } from "next";
import { Shield, Flame, CloudRain, Zap, Lock, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Property All Risk Indonesia | Asuransi Properti Komprehensif",
  description: "Property All Risk memberikan perlindungan menyeluruh untuk bangunan dan isinya dari semua risiko tidak terduga. Cocok untuk gedung komersial, pabrik, dan gudang.",
  alternates: { canonical: "https://duniaasuransi.com/property-all-risk" },
  openGraph: { title: "Property All Risk | Dunia Asuransi", description: "Proteksi all risk untuk properti komersial dan industri di Indonesia.", url: "https://duniaasuransi.com/property-all-risk" },
};

export default function PropertyAllRiskPage() {
  return (
    <ProductPage
      badge="Asuransi Properti"
      title="Property All Risk Indonesia"
      description="Perlindungan paling komprehensif untuk properti komersial dan industri — menanggung semua risiko kecuali yang dikecualikan secara eksplisit dalam polis."
      benefits={[
        { icon: Shield, title: "Perlindungan Semua Risiko", desc: "Menanggung semua kejadian tidak terduga kecuali yang secara tegas dikecualikan dalam polis." },
        { icon: Flame, title: "Kebakaran & Ledakan", desc: "Perlindungan penuh terhadap kebakaran, ledakan, petir, dan asap." },
        { icon: CloudRain, title: "Bencana Alam", desc: "Banjir, gempa bumi, angin topan, dan risiko force majeure lainnya." },
        { icon: Zap, title: "Kerusakan Mekanis Bangunan", desc: "Termasuk kerusakan instalasi listrik, pipa air, dan sistem bangunan." },
        { icon: Lock, title: "Pencurian & Vandalisme", desc: "Perlindungan dari pencurian dengan kekerasan dan tindakan vandalisme." },
        { icon: Wrench, title: "Biaya Pembersihan Puing", desc: "Penggantian biaya demolisi dan pembersihan akibat kerusakan yang ditanggung." },
      ]}
      policyTiers={[
        { name: "Basic PAR", tag: "Standar", features: ["Kebakaran & ledakan", "Petir & korsleting", "Kerusuhan & RSMD", "Tanggung jawab pihak ketiga dasar"] },
        { name: "Standard PAR", tag: "Populer", highlighted: true, features: ["Semua Basic PAR +", "Banjir & angin badai", "Pencurian & pembobolan", "Biaya puing", "Business interruption add-on"] },
        { name: "Comprehensive PAR", tag: "Lengkap", features: ["Semua Standard PAR +", "Gempa bumi & tsunami", "Terorisme & sabotase", "Biaya sewa sementara", "Loss of rent coverage"] },
      ]}
      faqs={[
        { q: "Apa bedanya Property All Risk dengan asuransi kebakaran biasa?", a: "PAR memberikan cakupan 'semua risiko' (all risks) kecuali yang dikecualikan, sementara asuransi kebakaran hanya menanggung risiko-risiko yang disebutkan secara spesifik (named perils)." },
        { q: "Apakah stok barang dalam gudang bisa diasuransikan dengan PAR?", a: "Ya, PAR dapat mencakup bangunan beserta isinya termasuk stok barang, mesin, furnitur, dan peralatan operasional." },
        { q: "Berapa nilai pertanggungan yang direkomendasikan?", a: "Nilai pertanggungan sebaiknya sama dengan nilai penggantian baru (replacement cost) bangunan dan isinya, bukan nilai pasar, untuk menghindari underinsurance." },
        { q: "Apakah bisa klaim jika terjadi gempa bumi?", a: "Risiko gempa bumi tersedia sebagai perluasan (endorsement) pada polis PAR. Pastikan Anda memilih perluasan ini saat pembelian polis." },
      ]}
      relatedLinks={[
        { label: "Industrial All Risk", href: "/industrial-all-risk" },
        { label: "Asuransi Kebakaran", href: "/asuransi-kebakaran" },
        { label: "Business Interruption", href: "/business-interruption" },
        { label: "Asuransi Gudang", href: "/asuransi-gudang" },
      ]}
      ctaTitle="Dapatkan Penawaran Property All Risk Terbaik"
    />
  );
}
