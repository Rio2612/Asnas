import type { Metadata } from "next";
import { Building2, Clock, FileText, HardHat, Shield, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Asuransi EAR | Erection All Risk untuk Proyek Industri Indonesia",
  description: "Asuransi EAR (Erection All Risk) untuk proyek pemasangan mesin dan steel structure di Indonesia. Perlindungan komprehensif selama masa erection.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-ear" },
  openGraph: { title: "Asuransi EAR | Erection All Risk untuk Proyek Industri Indonesia", description: "Asuransi EAR (Erection All Risk) untuk proyek pemasangan mesin dan steel structure di Indonesia. Perlindungan komprehensif selama masa erection.", url: "https://duniaasuransi.com/asuransi-ear" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Asuransi EAR (Erection All Risk)"
      description="EAR Insurance melindungi proyek pemasangan mesin berat dan konstruksi baja dari semua risiko selama masa erection."
      benefits={[
        { icon: Wrench, title: "Erection Coverage", desc: "Perlindungan penuh selama proses erection mesin dan steel structure." },
        { icon: Shield, title: "Material Damage", desc: "Menanggung kerusakan material akibat kecelakaan, kesalahan handling, dan force majeure." },
        { icon: HardHat, title: "Site Equipment", desc: "Coverage alat bantu erection, crane, dan peralatan yang digunakan di site." },
        { icon: FileText, title: "Third Party Liability", desc: "Tanggung jawab terhadap pihak ketiga di area dan sekitar lokasi erection." },
        { icon: Clock, title: "Commissioning Period", desc: "Coverage diperpanjang selama periode testing dan commissioning awal." },
        { icon: Building2, title: "Delays & Penalties", desc: "Optional: delay in startup coverage untuk kerugian akibat keterlambatan proyek." },
      ]}
      policyTiers={[
        { name: "EAR Basic", tag: "Dasar", features: ["Material damage", "TPL dasar", "Site equipment"] },
        { name: "EAR Standard", tag: "Populer", highlighted: true, features: ["Semua Basic +", "Testing & commissioning", "Existing plant", "Maintenance 12 bln"] },
        { name: "EAR Plus", tag: "Lengkap", features: ["Semua Standard +", "Delay in startup", "Advanced breakdown", "Professional fees"] },
      ]}
      faqs={[
        { q: "Apa perbedaan EAR dan CAR?", a: "EAR untuk proyek pemasangan mesin dan steel structure. CAR untuk pekerjaan konstruksi sipil. Proyek yang menggabungkan keduanya bisa menggunakan polis kombinasi." },
        { q: "Berapa nilai pertanggungan EAR yang tepat?", a: "Nilai pertanggungan harus mencakup nilai kontrak erection termasuk mesin, material, biaya erection, dan biaya tidak terduga." },
        { q: "Apakah EAR berlaku untuk proyek di luar negeri?", a: "Polis yang kami tawarkan berlaku untuk proyek di Indonesia. Untuk proyek luar negeri, tersedia polis international." },
        { q: "Bagaimana jika mesin rusak saat commissioning?", a: "Periode commissioning dapat dimasukkan sebagai extended testing period dalam polis EAR. Klaim selama commissioning bisa diproses." },
      ]}
      relatedLinks={[
        { label: "Erection All Risk", href: "/erection-all-risk" },
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
