import type { Metadata } from "next";
import { BadgeCheck, Building2, Clock, FileText, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Jaminan Pemeliharaan | Maintenance Bond Proyek Indonesia",
  description: "Jaminan pemeliharaan untuk masa defects liability period proyek konstruksi Indonesia. Jaminan kontraktor memperbaiki cacat dalam masa garansi.",
  alternates: { canonical: "https://duniaasuransi.com/jaminan-pemeliharaan" },
  openGraph: { title: "Jaminan Pemeliharaan | Maintenance Bond Proyek Indonesia", description: "Jaminan pemeliharaan untuk masa defects liability period proyek konstruksi Indonesia. Jaminan kontraktor memperbaiki cacat dalam masa garansi.", url: "https://duniaasuransi.com/jaminan-pemeliharaan" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Surety Bond"
      title="Jaminan Pemeliharaan (Maintenance Bond) Indonesia"
      description="Maintenance bond menjamin kontraktor akan memperbaiki cacat atau kerusakan yang ditemukan selama masa pemeliharaan setelah serah terima."
      benefits={[
        { icon: Wrench, title: "Jaminan Perbaikan Defect", desc: "Menjamin kontraktor akan memperbaiki semua cacat dalam masa defects liability period." },
        { icon: Shield, title: "Nilai 5% dari Kontrak", desc: "Umumnya 5% dari nilai kontrak atau senilai retensi yang dilepaskan." },
        { icon: Clock, title: "Masa Pemeliharaan", desc: "Berlaku selama masa pemeliharaan, umumnya 6-12 bulan setelah serah terima." },
        { icon: FileText, title: "Pengganti Retensi", desc: "Memungkinkan kontraktor mendapatkan seluruh pembayaran tanpa retensi." },
        { icon: Building2, title: "Semua Jenis Proyek", desc: "Berlaku untuk proyek gedung, jalan, jembatan, dan infrastruktur lainnya." },
        { icon: BadgeCheck, title: "Penerbitan Cepat", desc: "Dapat diterbitkan bersamaan dengan serah terima pekerjaan." },
      ]}
      policyTiers={[
        { name: "Maintenance Bond Kecil", tag: "< Rp500M", features: ["Proses 1-2 hari", "6-12 bulan masa berlaku", "Tanpa agunan"] },
        { name: "Maintenance Bond Menengah", tag: "Rp500M-5M", highlighted: true, features: ["Proses 2-3 hari", "Perpanjangan fleksibel", "Agunan minimal", "Pengganti retensi penuh"] },
        { name: "Maintenance Bond Besar", tag: "> Rp5M", features: ["Assessment khusus", "Agunan diperlukan", "Extended warranty", "Dedicated account manager"] },
      ]}
      faqs={[
        { q: "Apakah maintenance bond bisa menggantikan retensi?", a: "Ya, maintenance bond adalah instrumen umum untuk menggantikan retensi sehingga kontraktor bisa menerima pembayaran penuh lebih cepat." },
        { q: "Berapa lama masa berlaku maintenance bond?", a: "Sesuai masa pemeliharaan kontrak, umumnya 6, 12, atau 24 bulan setelah provisional handover." },
        { q: "Bagaimana jika kontraktor tidak memperbaiki defect?", a: "Pemilik proyek bisa mengklaim jaminan untuk membiayai perbaikan defect oleh kontraktor lain." },
        { q: "Apakah bisa diterbitkan setelah PHO?", a: "Ya, maintenance bond biasanya diterbitkan pada saat atau setelah provisional handover (PHO) sebagai syarat pengembalian retensi." },
      ]}
      relatedLinks={[
        { label: "Surety Bond", href: "/surety-bond" },
        { label: "Jaminan Pelaksanaan", href: "/jaminan-pelaksanaan" },
        { label: "Jaminan Penawaran", href: "/jaminan-penawaran" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
