import type { Metadata } from "next";
import {
  Car,
  Shield,
  Wrench,
  HeartPulse,
  Zap,
  FileText,
  Clock,
} from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi Mobil Terbaik Indonesia | All Risk & TLO",
  description:
    "Asuransi mobil terbaik di Indonesia — perlindungan All Risk dan TLO untuk mobil konvensional maupun listrik. Premi kompetitif, klaim mudah. Konsultasi gratis!",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-mobil" },
  openGraph: {
    title: "Asuransi Mobil Terbaik Indonesia | Dunia Asuransi",
    description:
      "Proteksi optimal untuk kendaraan Anda — All Risk & TLO dari perusahaan asuransi terpercaya berlisensi OJK.",
    url: "https://duniaasuransi.com/asuransi-mobil",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Mobil",
  provider: {
    "@type": "InsuranceAgency",
    name: "Dunia Asuransi",
    url: "https://duniaasuransi.com",
  },
  areaServed: "Indonesia",
  serviceType: "Motor Vehicle Insurance",
  description:
    "Asuransi mobil All Risk dan TLO untuk kendaraan konvensional dan listrik di seluruh Indonesia.",
};

export default function AsuransiMobilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage
        badge="Asuransi Kendaraan"
        title="Asuransi Mobil Terbaik Indonesia"
        description="Perlindungan komprehensif untuk mobil konvensional dan kendaraan listrik Anda. All Risk maupun TLO — kami bantu temukan premi terbaik sesuai budget."
        benefits={[
          {
            icon: Shield,
            title: "Perlindungan All Risk",
            desc: "Menanggung semua risiko kerusakan parsial maupun total akibat kecelakaan, tabrakan, terbalik, dan sebagainya.",
          },
          {
            icon: Car,
            title: "Perlindungan TLO",
            desc: "Total Loss Only untuk kendaraan yang hilang atau rusak lebih dari 75% nilai kendaraan.",
          },
          {
            icon: Wrench,
            title: "Bengkel Rekanan Nasional",
            desc: "Jaringan bengkel rekanan terpercaya di seluruh Indonesia untuk perbaikan cepat dan bergaransi.",
          },
          {
            icon: HeartPulse,
            title: "Tanggung Jawab Pihak Ketiga",
            desc: "Perlindungan terhadap tuntutan hukum akibat kerusakan atau cedera yang dialami pihak ketiga.",
          },
          {
            icon: Zap,
            title: "Mobil Listrik Tercover",
            desc: "Perlindungan khusus untuk EV termasuk baterai dan komponen elektrik sesuai regulasi OJK terbaru.",
          },
          {
            icon: Clock,
            title: "Proses Klaim Cepat",
            desc: "Klaim dibantu konsultan dari awal hingga selesai. Estimasi penyelesaian 5-14 hari kerja.",
          },
        ]}
        policyTiers={[
          {
            name: "TLO (Total Loss Only)",
            tag: "Ekonomis",
            features: [
              "Kerusakan > 75% nilai kendaraan",
              "Kehilangan akibat pencurian",
              "Harga premi lebih terjangkau",
              "Cocok untuk kendaraan operasional",
              "Tanggung jawab pihak ketiga (opsional)",
            ],
          },
          {
            name: "All Risk Standar",
            tag: "Populer",
            highlighted: true,
            features: [
              "Semua manfaat TLO +",
              "Kerusakan parsial semua risiko",
              "Perbaikan di bengkel rekanan",
              "Kaca & ban (opsional)",
              "Tanggung jawab pihak ketiga",
              "Banjir & bencana alam (opsional)",
            ],
          },
          {
            name: "All Risk Komprehensif",
            tag: "Lengkap",
            features: [
              "Semua manfaat All Risk Standar +",
              "Banjir & bencana alam included",
              "Terorisme & sabotase",
              "Kerusuhan & huru-hara",
              "PA pengemudi & penumpang",
              "Ambulans & layanan darurat 24 jam",
            ],
          },
        ]}
        faqs={[
          {
            q: "Apa perbedaan asuransi All Risk dan TLO untuk mobil?",
            a: "All Risk menanggung semua jenis kerusakan termasuk parsial dan total, sedangkan TLO hanya menanggung kerusakan total (>75% nilai kendaraan) atau pencurian.",
          },
          {
            q: "Apakah asuransi mobil listrik berbeda dari mobil konvensional?",
            a: "Ya, ada perbedaan pada rate premi dan cakupan. Mobil listrik memiliki rate khusus sesuai regulasi OJK yang mencakup proteksi baterai dan komponen elektrik.",
          },
          {
            q: "Bagaimana cara klaim asuransi jika mobil saya kecelakaan?",
            a: "Hubungi kami via WhatsApp sesegera mungkin. Kami akan memandu proses klaim, dari pengumpulan dokumen hingga survey dan penyelesaian perbaikan.",
          },
          {
            q: "Berapa kisaran premi asuransi mobil All Risk?",
            a: "Premi asuransi mobil berdasarkan tarif OJK, umumnya 1.5%-3.5% dari harga kendaraan per tahun tergantung wilayah, kapasitas mesin, dan nilai kendaraan.",
          },
        ]}
        relatedLinks={[
          { label: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik" },
          { label: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil" },
          { label: "Asuransi Motor", href: "/asuransi-motor" },
          { label: "Asuransi Truk", href: "/asuransi-truk" },
          {
            label: "Car Insurance Indonesia",
            href: "/asuransi-car-indonesia",
          },
        ]}
        ctaTitle="Dapatkan Penawaran Asuransi Mobil Terbaik"
      />
    </>
  );
}
