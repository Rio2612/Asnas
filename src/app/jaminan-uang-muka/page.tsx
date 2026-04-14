import type { Metadata } from "next";
import { BadgeCheck, Wallet, Building2, Clock, FileText, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Jaminan Uang Muka | Advance Payment Bond Indonesia",
  description: "Jaminan uang muka untuk proyek konstruksi dan pengadaan di Indonesia. Jaminan kontraktor menggunakan uang muka sesuai peruntukan kontrak.",
  alternates: { canonical: "https://duniaasuransi.com/jaminan-uang-muka" },
  openGraph: { title: "Jaminan Uang Muka | Advance Payment Bond Indonesia", description: "Jaminan uang muka untuk proyek konstruksi dan pengadaan di Indonesia. Jaminan kontraktor menggunakan uang muka sesuai peruntukan kontrak.", url: "https://duniaasuransi.com/jaminan-uang-muka" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Surety Bond"
      title="Jaminan Uang Muka (Advance Payment Bond) Indonesia"
      description="Advance payment bond menjamin bahwa uang muka yang diterima kontraktor akan digunakan sesuai kontrak dan dikembalikan jika gagal."
      benefits={[
        { icon: Wallet, title: "Jaminan Penggunaan Dana", desc: "Menjamin uang muka digunakan untuk keperluan proyek sesuai kontrak." },
        { icon: Shield, title: "Nilai Sama dengan UM", desc: "Nilai jaminan sama dengan jumlah uang muka yang diterima kontraktor." },
        { icon: Clock, title: "Berkurang Seiring Progres", desc: "Nilai jaminan bisa berkurang sesuai angsuran pengembalian uang muka." },
        { icon: FileText, title: "Pengembalian Terjamin", desc: "Jika kontraktor gagal, pemilik proyek bisa klaim pengembalian uang muka." },
        { icon: Building2, title: "APBN & APBD", desc: "Diterima untuk proyek pemerintah pusat dan daerah." },
        { icon: BadgeCheck, title: "Proses Cepat", desc: "Penerbitan 1-3 hari kerja untuk jaminan uang muka standar." },
      ]}
      policyTiers={[
        { name: "APB Kecil", tag: "UM < Rp500M", features: ["Proses cepat", "Dokumen standar", "Berkurang proporsional"] },
        { name: "APB Menengah", tag: "UM Rp500M-5M", highlighted: true, features: ["Financial review", "Agunan fleksibel", "Berkurang sesuai tagihan", "Reporting berkala"] },
        { name: "APB Besar", tag: "UM > Rp5M", features: ["Due diligence", "Agunan wajib", "Monitoring penggunaan dana", "Dedicated handler"] },
      ]}
      faqs={[
        { q: "Kapan jaminan uang muka mulai berlaku?", a: "Jaminan berlaku sejak uang muka diterima kontraktor dan berakhir saat uang muka telah sepenuhnya dikembalikan melalui potongan tagihan." },
        { q: "Apakah nilai jaminan bisa dikurangi?", a: "Ya, nilai jaminan dapat dikurangi secara proporsional sesuai dengan pengembalian uang muka melalui pemotongan tagihan progress." },
        { q: "Apa yang bisa diklaim pemilik proyek?", a: "Jika kontraktor gagal mengembalikan uang muka (wanprestasi), pemilik proyek bisa mengklaim pengembalian sisa uang muka kepada perusahaan asuransi." },
        { q: "Apakah perlu agunan untuk APB besar?", a: "Tergantung nilai dan profil kontraktor. Untuk APB besar biasanya diperlukan agunan berupa properti atau deposito." },
      ]}
      relatedLinks={[
        { label: "Surety Bond", href: "/surety-bond" },
        { label: "Jaminan Pelaksanaan", href: "/jaminan-pelaksanaan" },
        { label: "Jaminan Pemeliharaan", href: "/jaminan-pemeliharaan" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
