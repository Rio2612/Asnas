import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Flame, Zap, Shield, CloudRain, Wrench, ChevronRight } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Asuransi Properti Terbaik Indonesia | Perlindungan Bangunan & Aset",
  description:
    "Asuransi properti terpercaya di Indonesia — property all risk, kebakaran, industrial all risk, business interruption. Lindungi bangunan & aset bisnis Anda. Konsultasi gratis!",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-properti" },
  openGraph: {
    title: "Asuransi Properti | Dunia Asuransi",
    description: "Perlindungan menyeluruh untuk bangunan, gudang, hotel, dan aset properti bisnis di Indonesia.",
    url: "https://duniaasuransi.com/asuransi-properti",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Properti",
  provider: { "@type": "InsuranceAgency", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
  areaServed: "Indonesia",
  serviceType: "Property Insurance",
};

const subProducts = [
  { label: "Property All Risk", href: "/property-all-risk", desc: "Perlindungan all risk untuk gedung dan isinya dari semua risiko.", icon: Shield },
  { label: "Industrial All Risk", href: "/industrial-all-risk", desc: "Proteksi komprehensif untuk pabrik dan aset industri.", icon: Building2 },
  { label: "Asuransi Kebakaran", href: "/asuransi-kebakaran", desc: "Perlindungan dasar kebakaran, petir, ledakan, dan asap.", icon: Flame },
  { label: "Business Interruption", href: "/business-interruption", desc: "Pengganti kerugian pendapatan saat bisnis terhenti akibat klaim.", icon: Zap },
  { label: "Asuransi Hotel", href: "/asuransi-hotel", desc: "Paket khusus untuk properti perhotelan dan hospitality.", icon: Building2 },
  { label: "Asuransi Rumah", href: "/asuransi-rumah", desc: "Perlindungan optimal untuk hunian pribadi dan isinya.", icon: Shield },
  { label: "Gedung Komersial", href: "/asuransi-gedung-komersial", desc: "Asuransi untuk gedung perkantoran dan pusat perbelanjaan.", icon: Building2 },
  { label: "Asuransi Gudang", href: "/asuransi-gudang", desc: "Proteksi gudang logistik, cold storage, dan fasilitas penyimpanan.", icon: Wrench },
];

export default function AsuransiPropertiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Asuransi Properti
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            Asuransi Properti Murah & Terpercaya di Indonesia
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-2xl mx-auto mb-8">
            Lindungi properti residensial, komersial, dan industri Anda dari kebakaran, bencana alam, pencurian, dan berbagai risiko lainnya.
          </p>
          <Link href="https://wa.me/628131556592?text=Konsultasi%20asuransi%20properti" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-8 py-4 rounded-xl hover:bg-[#e0bc60] transition-all hover:scale-105">
            Konsultasi Gratis
          </Link>
        </div>
      </section>

      {/* Sub-products grid */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3 text-center">Produk Asuransi Properti</h2>
          <p className="text-[#64748b] font-dm text-center mb-10">Pilih produk sesuai kebutuhan perlindungan Anda</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subProducts.map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href}
                  className="group bg-white rounded-2xl p-6 border border-[#e8e1ce] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-5 h-5 text-[#c9a84c] group-hover:text-[#0a1628]" />
                  </div>
                  <h3 className="font-syne font-bold text-[#0a1628] text-sm mb-2">{p.label}</h3>
                  <p className="text-[#64748b] text-xs font-dm mb-3">{p.desc}</p>
                  <span className="inline-flex items-center text-[#c9a84c] text-xs font-syne font-semibold gap-1">
                    Selengkapnya <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-8 text-center">Risiko yang Dijamin</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Kebakaran & Ledakan", "Petir & Korsleting", "Banjir & Bencana Alam", "Kerusuhan & RSMD", "Pencurian & Perampokan", "Kerusakan Akibat Asap"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#faf8f3] rounded-xl p-4">
                <div className="w-2 h-2 bg-[#c9a84c] rounded-full flex-shrink-0" />
                <span className="text-sm font-dm text-[#334155]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog internal links */}
      <section className="py-10 px-4 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-syne font-semibold text-[#0a1628] text-sm uppercase tracking-wider mb-4">Artikel Terkait</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/blog/cara-memilih-asuransi-properti" className="text-sm font-dm text-[#334155] bg-white border border-[#e8e1ce] px-4 py-2 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              Cara Memilih Asuransi Properti
            </Link>
          </div>
        </div>
      </section>

      <CtaSection title="Konsultasi Asuransi Properti Gratis" description="Dapatkan penawaran terbaik untuk perlindungan properti Anda dari konsultan berpengalaman kami." showCalc={false} />
    </>
  );
}
