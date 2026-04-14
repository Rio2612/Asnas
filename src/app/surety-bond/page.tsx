import type { Metadata } from "next";
import { BadgeCheck, Wallet, Building2, Clock, FileText, Shield } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Surety Bond Indonesia | Jaminan Proyek & Kontrak",
  description: "Surety bond terpercaya di Indonesia — jaminan penawaran, pelaksanaan, uang muka, dan pemeliharaan untuk kontraktor dan proyek pemerintah.",
  alternates: { canonical: "https://duniaasuransi.com/surety-bond" },
  openGraph: { title: "Surety Bond Indonesia | Jaminan Proyek & Kontrak", description: "Surety bond terpercaya di Indonesia — jaminan penawaran, pelaksanaan, uang muka, dan pemeliharaan untuk kontraktor dan proyek pemerintah.", url: "https://duniaasuransi.com/surety-bond" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Surety Bond & Jaminan"
      title="Surety Bond Indonesia"
      description="Solusi jaminan proyek dan kontrak untuk kontraktor, subkontraktor, dan penyedia jasa di Indonesia."
      benefits={[
        { icon: FileText, title: "Jaminan Penawaran (Bid Bond)", desc: "Jaminan bahwa kontraktor tidak akan menarik penawaran setelah dinyatakan sebagai pemenang tender." },
        { icon: Shield, title: "Jaminan Pelaksanaan (Performance Bond)", desc: "Jaminan bahwa kontraktor akan menyelesaikan pekerjaan sesuai kontrak." },
        { icon: Wallet, title: "Jaminan Uang Muka (Advance Payment Bond)", desc: "Jaminan penggunaan uang muka sesuai kontrak dan pengembalian jika gagal." },
        { icon: Clock, title: "Jaminan Pemeliharaan (Maintenance Bond)", desc: "Jaminan perbaikan defect dalam masa pemeliharaan setelah pekerjaan selesai." },
        { icon: BadgeCheck, title: "Bank Garansi Alternatif", desc: "Surety bond sebagai alternatif bank garansi yang lebih efisien dan hemat modal." },
        { icon: Building2, title: "Proyek Pemerintah & Swasta", desc: "Diterima untuk proyek APBN, APBD, dan kontrak swasta di seluruh Indonesia." },
      ]}
      policyTiers={[
        { name: "Bid Bond", tag: "Jaminan Penawaran", features: ["Nilai 1-3% dari nilai tender", "Berlaku selama masa tender", "Otomatis cair jika mangkir", "Proses cepat 1-2 hari"] },
        { name: "Performance Bond", tag: "Jaminan Pelaksanaan", features: ["Nilai 5-10% dari kontrak", "Berlaku selama masa konstruksi", "Jaminan penyelesaian proyek", "Klaim jika kontraktor wanprestasi"] },
        { name: "Advance + Maintenance", tag: "Paket Lengkap", features: ["Advance payment bond", "Maintenance bond", "Periode hingga masa warranty", "Paket hemat untuk kontraktor"] },
      ]}
      faqs={[
        { q: "Apa perbedaan surety bond dan bank garansi?", a: "Surety bond diterbitkan oleh perusahaan asuransi dan tidak membekukan modal seperti bank garansi. Prosesnya lebih cepat dan biaya preminya lebih rendah dibanding biaya bank garansi." },
        { q: "Apakah surety bond diterima untuk proyek pemerintah?", a: "Ya, surety bond dari perusahaan asuransi berlisensi OJK diterima sebagai jaminan untuk proyek pemerintah APBN/APBD." },
        { q: "Berapa lama proses penerbitan surety bond?", a: "Umumnya 1-3 hari kerja untuk proyek standar. Untuk proyek besar atau kompleks mungkin memerlukan waktu lebih lama." },
        { q: "Apa persyaratan untuk mendapatkan surety bond?", a: "Akta perusahaan, NPWP, laporan keuangan, dan dokumen proyek. Untuk proyek besar mungkin perlu jaminan agunan." },
      ]}
      relatedLinks={[
        { label: "Jaminan Penawaran", href: "/jaminan-penawaran" },
        { label: "Jaminan Pelaksanaan", href: "/jaminan-pelaksanaan" },
        { label: "Jaminan Uang Muka", href: "/jaminan-uang-muka" },
        { label: "Jaminan Pemeliharaan", href: "/jaminan-pemeliharaan" },
      ]}
      ctaTitle="Dapatkan Surety Bond Cepat & Mudah"
    />
  );
}
