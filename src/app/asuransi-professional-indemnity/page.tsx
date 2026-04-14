import type { Metadata } from "next";
import { Clock, FileText, Scale, Shield, Users } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Professional Indemnity Indonesia | Asuransi Malpraktik & Kelalaian Profesi",
  description: "Professional indemnity insurance untuk konsultan, dokter, arsitek, pengacara di Indonesia. Perlindungan dari tuntutan kelalaian atau kesalahan profesional.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-professional-indemnity" },
  openGraph: { title: "Professional Indemnity Indonesia | Asuransi Malpraktik & Kelalaian Profesi", description: "Professional indemnity insurance untuk konsultan, dokter, arsitek, pengacara di Indonesia. Perlindungan dari tuntutan kelalaian atau kesalahan profesional.", url: "https://duniaasuransi.com/asuransi-professional-indemnity" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Liability"
      title="Professional Indemnity Insurance Indonesia"
      description="Lindungi reputasi dan keuangan Anda sebagai profesional dari tuntutan akibat kesalahan, kelalaian, atau kegagalan dalam memberikan layanan."
      benefits={[
        { icon: FileText, title: "Kesalahan & Kelalaian", desc: "Menanggung tuntutan klien akibat kesalahan atau kelalaian dalam layanan profesional." },
        { icon: Scale, title: "Legal Defense", desc: "Biaya pengacara dan persidangan untuk membela klaim malpraktik profesional." },
        { icon: Shield, title: "Breach of Duty", desc: "Perlindungan dari tuntutan pelanggaran kewajiban profesional." },
        { icon: Users, title: "Semua Profesi", desc: "Konsultan, dokter, arsitek, akuntan, pengacara, engineer, dan profesional lainnya." },
        { icon: FileText, title: "Retroactive Coverage", desc: "Perlindungan untuk insiden yang terjadi sebelum polis aktif (retroactive date)." },
        { icon: Clock, title: "Claims-Made Basis", desc: "Polis berlaku berdasarkan kapan klaim diajukan, bukan kapan insiden terjadi." },
      ]}
      policyTiers={[
        { name: "PI Basic", tag: "Freelancer", features: ["Kesalahan & kelalaian", "Legal defense", "Rp1M limit", "1 profesi"] },
        { name: "PI Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Breach of duty", "Retroactive 3 thn", "Rp5M limit", "Multi-profesi"] },
        { name: "PI Enterprise", tag: "Firm/Korporat", features: ["Semua Standard +", "Rp20M+ limit", "Global coverage", "Cyber add-on", "Run-off coverage"] },
      ]}
      faqs={[
        { q: "Siapa yang perlu professional indemnity?", a: "Semua profesional yang memberikan saran, desain, atau layanan berbasis pengetahuan: konsultan, dokter, arsitek, pengacara, akuntan, engineer, dan lainnya." },
        { q: "Apa itu retroactive date dalam PI?", a: "Tanggal retroaktif adalah tanggal awal perlindungan mundur ke belakang. Insiden yang terjadi setelah retroactive date dan klaim diajukan saat polis aktif akan ditanggung." },
        { q: "Apakah PI menanggung kehilangan data klien?", a: "Ada tambahan cyber liability untuk data breach. Konsultasikan kebutuhan coverage digital dengan kami." },
        { q: "Apakah tersedia untuk perusahaan konsultasi besar?", a: "Ya, kami dapat menyiapkan PI dengan limit tinggi untuk firma konsultan, engineering firm, dan profesional korporat." },
      ]}
      relatedLinks={[
        { label: "Public Liability", href: "/public-liability" },
        { label: "Directors & Officers", href: "/directors-officers-liability" },
        { label: "Asuransi Liability", href: "/asuransi-liability" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
