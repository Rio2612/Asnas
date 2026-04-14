import type { Metadata } from "next";
import { BadgeCheck, Wallet, Building2, Clock, FileText, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Jaminan Penawaran Tender | Bid Bond Indonesia",
  description: "Jaminan penawaran (bid bond) untuk tender proyek pemerintah dan swasta di Indonesia. Diterbitkan cepat 1-2 hari kerja.",
  alternates: { canonical: "https://duniaasuransi.com/jaminan-penawaran" },
  openGraph: { title: "Jaminan Penawaran Tender | Bid Bond Indonesia", description: "Jaminan penawaran (bid bond) untuk tender proyek pemerintah dan swasta di Indonesia. Diterbitkan cepat 1-2 hari kerja.", url: "https://duniaasuransi.com/jaminan-penawaran" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Surety Bond"
      title="Jaminan Penawaran (Bid Bond) Indonesia"
      description="Jaminan bahwa peserta tender tidak akan mengundurkan diri setelah dinyatakan sebagai pemenang lelang."
      benefits={[
        { icon: FileText, title: "Proses Cepat", desc: "Penerbitan 1-2 hari kerja untuk jaminan penawaran standar." },
        { icon: Shield, title: "Nilai 1-3% Tender", desc: "Nilai jaminan sesuai ketentuan panitia lelang, umumnya 1-3% dari nilai tender." },
        { icon: BadgeCheck, title: "Diterima Semua Proyek", desc: "Berlaku untuk tender APBN, APBD, BUMN, dan proyek swasta." },
        { icon: Clock, title: "Masa Berlaku Fleksibel", desc: "Berlaku selama masa tender hingga penandatanganan kontrak." },
        { icon: Wallet, title: "Hemat Modal", desc: "Tidak memerlukan pencairan deposito seperti bank garansi." },
        { icon: Building2, title: "Seluruh Indonesia", desc: "Layanan penerbitan untuk kontraktor di seluruh wilayah Indonesia." },
      ]}
      policyTiers={[
        { name: "Bid Bond Kecil", tag: "< Rp10M", features: ["Proses 1 hari", "Dokumen minimal", "Tanpa agunan"] },
        { name: "Bid Bond Menengah", tag: "Rp10M-100M", highlighted: true, features: ["Proses 1-2 hari", "Dokumen standar", "Agunan fleksibel", "Nasabah lama prioritas"] },
        { name: "Bid Bond Besar", tag: "> Rp100M", features: ["Assessment khusus", "Laporan keuangan", "Agunan diperlukan", "Dedicated handler"] },
      ]}
      faqs={[
        { q: "Dokumen apa saja yang diperlukan untuk bid bond?", a: "Akta pendirian perusahaan, NPWP, dokumen lelang/RKS, dan KTP direksi. Untuk nilai besar perlu laporan keuangan." },
        { q: "Berapa biaya premi jaminan penawaran?", a: "Premi sangat kecil, umumnya 0.1-0.3% dari nilai jaminan. Konsultasikan dengan kami untuk penawaran terbaik." },
        { q: "Apakah bisa diterbitkan untuk konsorsium kontraktor?", a: "Ya, bid bond bisa diterbitkan atas nama konsorsium dengan mencantumkan semua anggota konsorsium." },
        { q: "Apa yang terjadi jika pemenang tender mengundurkan diri?", a: "Jaminan penawaran akan dicairkan oleh panitia lelang sebagai kompensasi. Kontraktor wajib mengembalikan nilai jaminan kepada perusahaan asuransi." },
      ]}
      relatedLinks={[
        { label: "Surety Bond", href: "/surety-bond" },
        { label: "Jaminan Pelaksanaan", href: "/jaminan-pelaksanaan" },
        { label: "Jaminan Uang Muka", href: "/jaminan-uang-muka" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
