import type { Metadata } from "next";
import KalkulatorForm from "@/components/calculators/KalkulatorForm";
import CtaSection from "@/components/ui/CtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalkulator Premi Asuransi Mobil OJK | Hitung Online Gratis",
  description:
    "Hitung estimasi premi asuransi mobil All Risk dan TLO berdasarkan tarif OJK terbaru. Pilih wilayah 1, 2, 3. Mendukung mobil konvensional & listrik. Gratis!",
  alternates: {
    canonical: "https://duniaasuransi.com/kalkulator-premi-mobil",
  },
  openGraph: {
    title: "Kalkulator Premi Asuransi Mobil | Dunia Asuransi",
    description:
      "Hitung premi asuransi mobil berdasarkan tarif OJK — All Risk, TLO, Wilayah 1/2/3, kendaraan listrik.",
    url: "https://duniaasuransi.com/kalkulator-premi-mobil",
  },
};

export default function KalkulatorPremiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Tools Gratis
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Kalkulator Premi Asuransi Mobil
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-xl mx-auto">
            Estimasi premi berdasarkan tarif OJK terbaru — All Risk & TLO untuk
            seluruh wilayah Indonesia, termasuk mobil listrik.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <KalkulatorForm />

        {/* How to use */}
        <div className="max-w-2xl mx-auto mt-12">
          <h2 className="font-syne font-bold text-xl text-[#0a1628] mb-5">
            Cara Menggunakan Kalkulator
          </h2>
          <ol className="space-y-3">
            {[
              "Pilih jenis polis: All Risk (semua risiko) atau TLO (kehilangan total).",
              "Pilih wilayah kendaraan terdaftar sesuai STNK.",
              "Pilih jenis kendaraan: konvensional atau mobil listrik (EV).",
              "Masukkan harga kendaraan sesuai nilai pasar atau harga beli.",
              "Klik Hitung Estimasi Premi untuk melihat range premi tahunan.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#0a1628] text-[#c9a84c] rounded-full flex items-center justify-center font-syne font-bold text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-[#334155] text-sm font-dm">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Wilayah info */}
        <div className="max-w-2xl mx-auto mt-10">
          <h2 className="font-syne font-bold text-xl text-[#0a1628] mb-5">
            Pembagian Wilayah OJK
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Wilayah 1",
                areas: "Sumatera, Kalimantan, Sulawesi, NTT, NTB, Maluku, Papua",
              },
              {
                label: "Wilayah 2",
                areas: "DKI Jakarta, Jawa Barat, Banten",
              },
              {
                label: "Wilayah 3",
                areas: "Jawa Tengah, D.I. Yogyakarta, Jawa Timur, Bali",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 border border-[#e8e1ce]"
              >
                <div className="font-syne font-bold text-[#0a1628] text-sm mb-1.5">
                  {w.label}
                </div>
                <p className="text-[#64748b] text-xs font-dm">{w.areas}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="max-w-2xl mx-auto mt-8">
          <p className="text-[#64748b] text-sm font-dm mb-3">
            Lihat juga:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Asuransi Mobil", href: "/asuransi-mobil" },
              { label: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik" },
              { label: "Asuransi Motor Vehicle", href: "/asuransi-motor-vehicle" },
              { label: "Asuransi Truk", href: "/asuransi-truk" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-dm text-[#334155] bg-white border border-[#e8e1ce] px-3 py-1.5 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Mau Harga Lebih Murah?"
        description="Hubungi konsultan kami langsung dan dapatkan diskon spesial hingga Rp 1.000.000 untuk polis baru."
        showCalc={false}
      />
    </>
  );
}
