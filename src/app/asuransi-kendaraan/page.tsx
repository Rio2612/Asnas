import type { Metadata } from "next";
import Link from "next/link";
import { Car, Truck, Zap, Shield, ChevronRight } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Asuransi Kendaraan Indonesia | Mobil, Motor, Truk, EV",
  description: "Solusi asuransi kendaraan lengkap di Indonesia — mobil, motor, truk, dump truck, dan kendaraan listrik. All Risk & TLO dengan premi kompetitif sesuai tarif OJK.",
  alternates: { canonical: "https://duniaasuransi.com/asuransi-kendaraan" },
  openGraph: { title: "Asuransi Kendaraan Indonesia | Dunia Asuransi", description: "Proteksi kendaraan pribadi dan armada bisnis Anda.", url: "https://duniaasuransi.com/asuransi-kendaraan" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Kendaraan",
  provider: { "@type": "InsuranceAgency", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
  areaServed: "Indonesia",
  serviceType: "Motor Vehicle Insurance",
};

const subProducts = [
  { label: "Asuransi Mobil", href: "/asuransi-mobil", desc: "All Risk & TLO untuk semua jenis mobil penumpang.", icon: Car },
  { label: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik", desc: "Proteksi khusus EV/BEV termasuk baterai dan komponen elektrik.", icon: Zap },
  { label: "Asuransi Motor", href: "/asuransi-motor", desc: "Perlindungan sepeda motor dari kecelakaan dan pencurian.", icon: Shield },
  { label: "Asuransi Truk", href: "/asuransi-truk", desc: "Asuransi armada truk logistik dan truk komersial.", icon: Truck },
  { label: "Asuransi Dump Truck", href: "/asuransi-dump-truck", desc: "Perlindungan khusus dump truck pertambangan dan konstruksi.", icon: Truck },
  { label: "Motor Vehicle", href: "/asuransi-motor-vehicle", desc: "Solusi fleet insurance untuk armada kendaraan perusahaan.", icon: Car },
  { label: "Car Insurance Indonesia", href: "/asuransi-car-indonesia", desc: "English-language car insurance for expats and international clients.", icon: Car },
];

export default function AsuransiKendaraanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/8 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Asuransi Kendaraan
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            Asuransi Kendaraan Terlengkap di Indonesia
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-2xl mx-auto mb-8">
            Dari mobil pribadi hingga armada truk komersial — solusi asuransi All Risk & TLO berdasarkan tarif OJK terbaru.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="https://wa.me/628131556592" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-7 py-3.5 rounded-xl hover:bg-[#e0bc60] transition-all">
              Konsultasi Gratis
            </Link>
            <Link href="/kalkulator-premi-mobil"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-syne font-semibold px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              Hitung Premi
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3 text-center">Produk Asuransi Kendaraan</h2>
          <p className="text-[#64748b] font-dm text-center mb-10">Perlindungan optimal untuk setiap jenis kendaraan</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl text-[#0a1628] mb-8">Perbedaan All Risk vs TLO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: "All Risk", price: "Premi lebih tinggi", items: ["Kerusakan parsial ditanggung", "Kecelakaan kecil tercakup", "Kerusakan total ditanggung", "Pencurian ditanggung", "Cocok untuk kendaraan < 8 tahun"] },
              { type: "TLO", price: "Premi lebih hemat", items: ["Hanya kerusakan > 75%", "Pencurian ditanggung", "Tidak cover parsial", "Premi 60-70% lebih murah", "Cocok untuk kendaraan > 5 tahun"] },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border-2 ${i === 0 ? "border-[#c9a84c] bg-[#c9a84c]/5" : "border-[#e8e1ce] bg-[#faf8f3]"}`}>
                <h3 className="font-syne font-bold text-[#0a1628] text-lg mb-1">{item.type}</h3>
                <p className="text-[#c9a84c] font-syne text-xs font-semibold mb-4">{item.price}</p>
                <ul className="space-y-2">
                  {item.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-dm text-[#334155]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog/perbedaan-all-risk-dan-tlo" className="text-[#c9a84c] font-dm text-sm hover:underline">
              Baca panduan lengkap: Perbedaan All Risk & TLO →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection title="Konsultasi Asuransi Kendaraan Gratis" showCalc />
    </>
  );
}
