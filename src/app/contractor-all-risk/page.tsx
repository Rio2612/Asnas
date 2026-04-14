import type { Metadata } from "next";
import { Building2, Clock, FileText, HardHat, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Contractor All Risk Indonesia | Asuransi Proyek Konstruksi",
  description: "Contractor All Risk (CAR) untuk proyek konstruksi di Indonesia — gedung, jalan, jembatan, bendungan. Perlindungan material damage dan third party liability.",
  alternates: { canonical: "https://duniaasuransi.com/contractor-all-risk" },
  openGraph: { title: "Contractor All Risk Indonesia | Asuransi Proyek Konstruksi", description: "Contractor All Risk (CAR) untuk proyek konstruksi di Indonesia — gedung, jalan, jembatan, bendungan. Perlindungan material damage dan third party liability.", url: "https://duniaasuransi.com/contractor-all-risk" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Contractor All Risk (CAR) Indonesia"
      description="Perlindungan menyeluruh untuk proyek konstruksi sipil dari semua risiko selama masa pembangunan hingga periode pemeliharaan."
      benefits={[
        { icon: Building2, title: "Material Damage", desc: "Menanggung kerusakan atau kehilangan pekerjaan konstruksi, material, dan peralatan." },
        { icon: HardHat, title: "Third Party Liability", desc: "Tanggung jawab terhadap cedera orang atau kerusakan properti pihak ketiga selama proyek." },
        { icon: Shield, title: "Contractor Plant", desc: "Perlindungan alat berat dan mesin konstruksi yang digunakan di lokasi proyek." },
        { icon: Wrench, title: "Temporary Structures", desc: "Coverage untuk scaffolding, falsework, cofferdam, dan struktur sementara lainnya." },
        { icon: FileText, title: "Maintenance Period", desc: "Perlindungan diperpanjang selama masa pemeliharaan (defects liability period)." },
        { icon: Clock, title: "Surrounding Property", desc: "Perlindungan terhadap properti di sekitar lokasi proyek yang mungkin terdampak." },
      ]}
      policyTiers={[
        { name: "CAR Basic", tag: "Dasar", features: ["Material damage", "TPL Rp500jt", "Contractor plant", "Temp structures"] },
        { name: "CAR Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "TPL Rp2M", "Surrounding property", "Existing property", "Maintenance 12 bulan"] },
        { name: "CAR Comprehensive", tag: "Lengkap", features: ["Semua Standard +", "TPL unlimited", "Delayed startup", "Employee liability", "Professional fees"] },
      ]}
      faqs={[
        { q: "Siapa yang bisa membeli polis CAR?", a: "Owner/principal proyek, kontraktor utama, atau keduanya. Polis biasanya menyebutkan semua pihak yang terlibat sebagai named insured." },
        { q: "Apakah CAR menanggung bencana alam?", a: "Bencana alam (banjir, gempa, angin) umumnya termasuk dalam cakupan CAR standar. Gempa bumi kadang dikecualikan dan perlu endorsement." },
        { q: "Apakah alat berat kontraktor masuk CAR?", a: "Ya, Section II CAR (contractor plant and machinery) menanggung alat berat yang digunakan di lokasi proyek." },
        { q: "Berapa nilai pertanggungan polis CAR?", a: "Nilai pertanggungan minimum adalah nilai kontrak proyek. Untuk proyek besar, assessment oleh quantity surveyor direkomendasikan." },
      ]}
      relatedLinks={[
        { label: "Erection All Risk", href: "/erection-all-risk" },
        { label: "Asuransi EAR", href: "/asuransi-ear" },
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
        { label: "Blog Engineering", href: "/blog/asuransi-engineering-untuk-kontraktor" },
      ]}
      ctaTitle="Dapatkan Penawaran CAR Terbaik"
    />
  );
}
