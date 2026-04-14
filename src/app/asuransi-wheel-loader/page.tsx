import type { Metadata } from "next";
import { BarChart, Clock, HardHat, MapPin, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Wheel Loader | Proteksi Alat Berat Loading",
  description: "Asuransi wheel loader untuk tambang, konstruksi, dan industri di Indonesia. Lindungi unit wheel loader dari kerusakan fisik dan operasional.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-wheel-loader" },
  openGraph: { title: "Asuransi Wheel Loader | Proteksi Alat Berat Loading", description: "Asuransi wheel loader untuk tambang, konstruksi, dan industri di Indonesia. Lindungi unit wheel loader dari kerusakan fisik dan operasional.", url: "https://duniaasuransi.com/asuransi-wheel-loader" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Alat Berat"
      title="Asuransi Wheel Loader Indonesia"
      description="Perlindungan optimal untuk wheel loader operasional di tambang, pelabuhan, pabrik, dan proyek konstruksi."
      benefits={[
        { icon: HardHat, title: "Semua Kapasitas WL", desc: "Wheel loader kecil hingga besar untuk berbagai aplikasi industri dan pertambangan." },
        { icon: Shield, title: "Kerusakan Fisik", desc: "Perlindungan dari benturan, terbalik, dan kerusakan akibat kondisi operasional." },
        { icon: Wrench, title: "Bucket & Attachment", desc: "Coverage untuk bucket, fork attachment, dan perlengkapan tambahan wheel loader." },
        { icon: Clock, title: "Operasional Pelabuhan", desc: "Coverage khusus untuk wheel loader di area pelabuhan dan logistik kargo." },
        { icon: MapPin, title: "Area Tambang & Pabrik", desc: "Berlaku di lokasi tambang, pabrik, dan area industri di seluruh Indonesia." },
        { icon: BarChart, title: "Breakdown Coverage", desc: "Penggantian biaya perbaikan kerusakan mesin dan sistem transmisi mendadak." },
      ]}
      policyTiers={[
        { name: "Basic", tag: "Dasar", features: ["Kerusakan fisik", "Kebakaran", "Pencurian"] },
        { name: "Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Breakdown mesin", "Attachment coverage", "TPL"] },
        { name: "Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Loss of hire", "PA operator", "Fleet"] },
      ]}
      faqs={[
        { q: "Apakah attachment tambahan wheel loader bisa diasuransikan?", a: "Ya, attachment seperti fork, log grapple, atau bucket dapat disertakan dalam nilai pertanggungan." },
        { q: "Coverage berlaku di pelabuhan?", a: "Ya, wheel loader di area pelabuhan dan logistik bisa diasuransikan dengan coverage sesuai operasional." },
        { q: "Bagaimana survei untuk unit di lokasi terpencil?", a: "Survei bisa dilakukan on-site oleh surveyor kami atau menggunakan laporan teknis dan foto dari teknisi Anda." },
        { q: "Apakah tersedia untuk wheel loader rental?", a: "Ya, perusahaan rental dapat mengasuransikan unit wheel loader mereka." },
      ]}
      relatedLinks={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Excavator", href: "/asuransi-excavator" },
        { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
