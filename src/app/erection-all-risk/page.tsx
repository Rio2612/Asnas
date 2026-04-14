import type { Metadata } from "next";
import { Building2, Clock, FileText, HardHat, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Erection All Risk Indonesia | Asuransi Pemasangan Mesin & Steel",
  description: "Erection All Risk (EAR) untuk pemasangan mesin industri, steel structure, dan plant di Indonesia. Perlindungan material damage dan third party liability.",
  alternates: { canonical: "https://duniaasuransi.com/erection-all-risk" },
  openGraph: { title: "Erection All Risk Indonesia | Asuransi Pemasangan Mesin & Steel", description: "Erection All Risk (EAR) untuk pemasangan mesin industri, steel structure, dan plant di Indonesia. Perlindungan material damage dan third party liability.", url: "https://duniaasuransi.com/erection-all-risk" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Erection All Risk (EAR) Indonesia"
      description="Perlindungan komprehensif untuk proyek erection mesin berat, steel structure, dan fasilitas industri dari semua risiko pemasangan."
      benefits={[
        { icon: Wrench, title: "Pemasangan Mesin", desc: "Menanggung kerusakan mesin dan peralatan selama proses erection dan komisioning." },
        { icon: Building2, title: "Steel Structure", desc: "Perlindungan struktur baja dan komponen prefabrikasi selama pemasangan." },
        { icon: Shield, title: "Material Damage", desc: "Coverage semua material yang digunakan dalam proses erection dari kerusakan." },
        { icon: HardHat, title: "Testing & Commissioning", desc: "Perlindungan diperpanjang selama periode testing dan commissioning plant." },
        { icon: FileText, title: "Third Party Liability", desc: "Tanggung jawab terhadap pihak ketiga selama proses erection berlangsung." },
        { icon: Clock, title: "Maintenance Period", desc: "Coverage diperpanjang selama defects liability period setelah selesai erection." },
      ]}
      policyTiers={[
        { name: "EAR Basic", tag: "Dasar", features: ["Material damage", "TPL dasar", "Erection tools", "Temp structures"] },
        { name: "EAR Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Testing period", "Existing plant", "TPL extended", "Maintenance period"] },
        { name: "EAR Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "Advanced breakdown", "Loss of profit", "Professional fees", "Delayed startup"] },
      ]}
      faqs={[
        { q: "Apa yang dimaksud dengan testing & commissioning coverage?", a: "Ini adalah perpanjangan perlindungan saat mesin pertama kali diuji coba sebelum diserahterimakan, karena risiko kerusakan sangat tinggi saat commissioning." },
        { q: "Apakah polis EAR mencakup mesin yang sudah ada (existing plant)?", a: "Existing plant di sekitar lokasi erection dapat diasuransikan sebagai endorsement Section II, terutama jika kegiatan erection berpotensi merusaknya." },
        { q: "Berapa lama periode asuransi EAR?", a: "Sesuai jadwal proyek plus maintenance period. Biasanya 6 bulan hingga 2 tahun." },
        { q: "Apakah EAR bisa dikombinasikan dengan CAR?", a: "Untuk proyek yang menggabungkan konstruksi sipil dan erection mesin, keduanya bisa digabung dalam satu polis terpadu." },
      ]}
      relatedLinks={[
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
