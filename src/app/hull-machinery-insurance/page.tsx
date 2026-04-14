import type { Metadata } from "next";
import { Anchor, Clock, FileText, Shield, Ship, Wrench } from "lucide-react";
import ProductPage from "@/components/sections/ProductPage";

export const metadata: Metadata = {
  title: "Hull & Machinery Insurance | Asuransi Kapal Komersial Indonesia",
  description: "Hull and machinery insurance untuk kapal niaga, tanker, dan kapal penumpang di Indonesia. Perlindungan badan kapal dan mesin dari risiko laut.",
  alternates: { canonical: "https://duniaasuransi.com/hull-machinery-insurance" },
  openGraph: { title: "Hull & Machinery Insurance | Asuransi Kapal Komersial Indonesia", description: "Hull and machinery insurance untuk kapal niaga, tanker, dan kapal penumpang di Indonesia. Perlindungan badan kapal dan mesin dari risiko laut.", url: "https://duniaasuransi.com/hull-machinery-insurance" },
};

export default function Page() {
  return (
    <ProductPage
      badge="Asuransi Marine"
      title="Hull & Machinery Insurance Indonesia"
      description="Perlindungan komprehensif untuk badan kapal (hull) dan mesin kapal (machinery) dari berbagai risiko laut dan pelabuhan."
      benefits={[
        { icon: Ship, title: "Hull Coverage", desc: "Perlindungan badan kapal dari tabrakan, kandas, dan kerusakan akibat cuaca buruk." },
        { icon: Wrench, title: "Main Engine", desc: "Menanggung kerusakan mesin utama, shaft, dan propeller kapal." },
        { icon: Anchor, title: "Auxiliary Machinery", desc: "Coverage mesin bantu, pompa, kompresor, dan sistem listrik kapal." },
        { icon: Shield, title: "Collision Liability", desc: "Tanggung jawab tabrakan dengan kapal lain (3/4 collision liability)." },
        { icon: Clock, title: "Port Risk", desc: "Coverage selama kapal berlabuh di pelabuhan atau menjalani perbaikan." },
        { icon: FileText, title: "Total Loss", desc: "Ganti rugi penuh untuk constructive total loss atau actual total loss." },
      ]}
      policyTiers={[
        { name: "IHC Port Risk", tag: "Di Pelabuhan", features: ["Port risk only", "Hull & machinery", "Tidak untuk pelayaran"] },
        { name: "IHC Standard", tag: "Populer", highlighted: true, features: ["Hull damage", "Machinery", "3/4 collision", "Salvage", "Trading area lokal"] },
        { name: "IHC Worldwide", tag: "Internasional", features: ["Semua Standard +", "Worldwide trading", "War & strikes", "Full collision", "P&I integration"] },
      ]}
      faqs={[
        { q: "Apa itu 3/4 collision liability dalam H&M?", a: "Standar polis H&M menanggung 3/4 (75%) dari liability terhadap kapal yang ditabrak. Sisanya 1/4 biasanya ditanggung P&I club." },
        { q: "Apakah kapal tug & barge bisa diasuransikan?", a: "Ya, kapal tug, barge, dan kombinasinya bisa diasuransikan. Nilai pertanggungan berdasarkan agreed value atau actual value." },
        { q: "Berapa nilai pertanggungan H&M yang tepat?", a: "Umumnya berdasarkan market value kapal atau insured value yang disepakati. Survey kondisi kapal diperlukan untuk polis baru." },
        { q: "Apakah mesin kapal yang rusak akibat breakdown ditanggung?", a: "Machinery breakdown dalam H&M ada batasnya. Untuk coverage mesin lebih komprehensif, dapat ditambahkan endorsement machinery breakdown." },
      ]}
      relatedLinks={[
        { label: "Asuransi Kapal", href: "/asuransi-kapal" },
        { label: "Protection & Indemnity", href: "/protection-indemnity" },
        { label: "Asuransi Marine", href: "/asuransi-marine" },
      ]}
      ctaTitle="Konsultasi Gratis Sekarang"
    />
  );
}
