import type { Metadata } from "next";
import { BadgeCheck, Wallet, Building2, Clock, FileText, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Jaminan Pelaksanaan Proyek | Performance Bond Indonesia",
  description: "Jaminan pelaksanaan (performance bond) untuk kontrak konstruksi dan pengadaan di Indonesia. Jaminan kontraktor akan menyelesaikan pekerjaan sesuai kontrak.",
  alternates: { canonical: "https://duniaasuransi.com/jaminan-pelaksanaan" },
  openGraph: { title: "Jaminan Pelaksanaan Proyek | Performance Bond Indonesia", description: "Jaminan pelaksanaan (performance bond) untuk kontrak konstruksi dan pengadaan di Indonesia. Jaminan kontraktor akan menyelesaikan pekerjaan sesuai kontrak.", url: "https://duniaasuransi.com/jaminan-pelaksanaan" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Surety Bond"
      title="Jaminan Pelaksanaan (Performance Bond) Indonesia"
      description="Performance bond menjamin bahwa kontraktor akan menyelesaikan seluruh pekerjaan sesuai spesifikasi dan jadwal kontrak."
      benefits={[
        { icon: Shield, title: "Jaminan Penyelesaian", desc: "Menjamin pekerjaan akan diselesaikan sesuai spesifikasi dan waktu kontrak." },
        { icon: FileText, title: "Nilai 5-10% Kontrak", desc: "Nilai jaminan umumnya 5-10% dari nilai kontrak sesuai persyaratan." },
        { icon: Building2, title: "Proyek APBN & APBD", desc: "Diterima untuk seluruh proyek pemerintah pusat dan daerah." },
        { icon: Clock, title: "Masa Berlaku Kontrak", desc: "Berlaku selama masa pelaksanaan pekerjaan sesuai jadwal kontrak." },
        { icon: Wallet, title: "Alternatif Bank Garansi", desc: "Lebih efisien dan hemat modal dibanding bank garansi konvensional." },
        { icon: BadgeCheck, title: "Perpanjangan Fleksibel", desc: "Dapat diperpanjang jika terjadi keterlambatan dengan persetujuan para pihak." },
      ]}
      policyTiers={[
        { name: "Performance Bond Kecil", tag: "< Rp500M", features: ["Proses 2-3 hari", "Dokumen standar", "Agunan minimal"] },
        { name: "Performance Bond Menengah", tag: "Rp500M-5M", highlighted: true, features: ["Proses 3-5 hari", "Financial review", "Agunan fleksibel", "Perpanjangan mudah"] },
        { name: "Performance Bond Besar", tag: "> Rp5M", features: ["Assessment khusus", "Due diligence", "Agunan wajib", "Dedicated account manager"] },
      ]}
      faqs={[
        { q: "Apa yang terjadi jika kontraktor tidak menyelesaikan proyek?", a: "Principal (pemilik proyek) dapat mengajukan klaim kepada perusahaan asuransi. Asuransi akan menginvestigasi dan jika valid, membayar klaim maksimal nilai jaminan." },
        { q: "Apakah performance bond bisa dicairkan sebagian?", a: "Tergantung ketentuan jaminan. Umumnya pencairan penuh dilakukan setelah klaim diverifikasi." },
        { q: "Bagaimana jika proyek terlambat karena force majeure?", a: "Perpanjangan waktu dan jaminan bisa dilakukan jika keterlambatan disebabkan force majeure yang diakui kedua pihak." },
        { q: "Apakah sub-kontraktor perlu performance bond?", a: "Tergantung nilai kontrak sub dan persyaratan kontraktor utama. Kami bisa menerbitkan untuk sub-kontraktor." },
      ]}
      relatedLinks={[
        { label: "Surety Bond", href: "/surety-bond" },
        { label: "Jaminan Penawaran", href: "/jaminan-penawaran" },
        { label: "Jaminan Pemeliharaan", href: "/jaminan-pemeliharaan" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
