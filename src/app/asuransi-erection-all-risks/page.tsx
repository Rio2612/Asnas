import type { Metadata } from "next";
import { Building2, FileText, HardHat, Shield, Wrench, Zap } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Erection All Risks | Asuransi Proyek Industri & Power Plant",
  description: "Erection All Risks insurance untuk power plant, refinery, chemical plant, dan proyek industri besar di Indonesia. Konsultasi dengan spesialis EAR kami.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-erection-all-risks" },
  openGraph: { title: "Erection All Risks | Asuransi Proyek Industri & Power Plant", description: "Erection All Risks insurance untuk power plant, refinery, chemical plant, dan proyek industri besar di Indonesia. Konsultasi dengan spesialis EAR kami.", url: "https://duniaasuransi.com/asuransi-erection-all-risks" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Engineering"
      title="Erection All Risks Insurance Indonesia"
      description="Perlindungan khusus untuk proyek erection skala besar — power plant, refinery, petrochemical, dan fasilitas industri strategis."
      benefits={[
        { icon: Zap, title: "Power Plant", desc: "Coverage khusus erection turbin, generator, dan sistem ketenagalistrikan." },
        { icon: Building2, title: "Refinery & Chemical Plant", desc: "Perlindungan untuk proyek pemasangan kilang minyak dan pabrik kimia." },
        { icon: Wrench, title: "Heavy Lift Operations", desc: "Coverage untuk operasi pengangkatan berat menggunakan crane kapasitas besar." },
        { icon: Shield, title: "Material in Transit", desc: "Perlindungan material dan peralatan selama pengiriman ke lokasi erection." },
        { icon: FileText, title: "Delay in Startup", desc: "Menanggung kerugian finansial akibat keterlambatan startup fasilitas." },
        { icon: HardHat, title: "Testing & Commissioning", desc: "Coverage extended selama periode testing system dan commissioning plant." },
      ]}
      policyTiers={[
        { name: "EAR Standard", tag: "Proyek Menengah", features: ["Material damage", "TPL", "Testing period", "Maintenance 12M"] },
        { name: "EAR Industrial", tag: "Populer", highlighted: true, features: ["Semua Standard +", "Delay in startup", "Heavy lift", "Transit coverage", "Existing plant"] },
        { name: "EAR Megaproject", tag: "Skala Besar", features: ["Semua Industrial +", "Advance loss of profit", "Full project period", "Professional fees", "Dedicated adjuster"] },
      ]}
      faqs={[
        { q: "Apakah tersedia untuk proyek power plant skala besar?", a: "Ya, kami menangani proyek power plant dari PLTG, PLTU, PLTMH hingga PLTS skala besar. Diperlukan risk assessment khusus." },
        { q: "Bagaimana proses survey untuk proyek besar?", a: "Tim surveyor kami akan melakukan site visit dan risk assessment sebelum penerbitan polis. Kami juga bekerja sama dengan risk engineering consultant." },
        { q: "Apakah tersedia untuk konsorsium kontraktor?", a: "Ya, polis dapat mencantumkan beberapa perusahaan dalam satu konsorsium sebagai named insured." },
        { q: "Bagaimana dengan proyek yang sudah berjalan sebagian?", a: "Polis dapat diterbitkan untuk proyek yang sedang berjalan dengan nilai pertanggungan disesuaikan progress." },
      ]}
      relatedLinks={[
        { label: "Contractor All Risk", href: "/contractor-all-risk" },
        { label: "Erection All Risk", href: "/erection-all-risk" },
        { label: "Machinery Breakdown", href: "/machinery-breakdown" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
