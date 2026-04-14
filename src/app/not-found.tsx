import Link from "next/link";
import { Shield, Home, Search, ChevronRight } from "lucide-react";

const suggestions = [
  { label: "Asuransi Mobil", href: "/asuransi-mobil" },
  { label: "Asuransi Properti", href: "/asuransi-properti" },
  { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
  { label: "Contractor All Risk", href: "/contractor-all-risk" },
  { label: "Asuransi Kargo", href: "/asuransi-kargo" },
  { label: "Kalkulator Premi", href: "/kalkulator-premi-mobil" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-[#c9a84c]/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-[#c9a84c]" />
        </div>

        {/* 404 */}
        <div className="font-syne font-black text-8xl text-[#c9a84c]/30 leading-none mb-4 select-none">
          404
        </div>

        <h1 className="font-syne font-bold text-3xl text-white mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-white/60 font-dm text-base mb-10 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Coba salah satu halaman berikut:
        </p>

        {/* Suggestions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 hover:bg-white/8 transition-all text-sm font-dm flex items-center justify-between"
            >
              {s.label}
              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-7 py-3.5 rounded-xl hover:bg-[#e0bc60] transition-colors"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-syne font-semibold px-7 py-3.5 rounded-xl hover:bg-white/15 transition-colors border border-white/20"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
