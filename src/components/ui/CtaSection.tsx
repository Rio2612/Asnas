import Link from "next/link";
import { MessageCircle, Calculator } from "lucide-react";
import { SITE } from "@/lib/config";

interface CtaSectionProps {
  title?: string;
  description?: string;
  showCalc?: boolean;
}

export default function CtaSection({
  title = "Butuh Konsultasi Asuransi?",
  description = "Tim ahli kami siap membantu Anda memilih perlindungan terbaik sesuai kebutuhan. Konsultasi gratis, tanpa komitmen.",
  showCalc = true,
}: CtaSectionProps) {
  return (
    <section className="bg-[#0a1628] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Mulai Sekarang
        </span>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-white/60 font-dm text-lg max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] text-[#0a1628] font-syne font-bold text-base px-8 py-4 rounded-xl hover:bg-[#e0bc60] transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </Link>
          {showCalc && (
            <Link
              href="/kalkulator-premi-mobil"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-white font-syne font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <Calculator className="w-5 h-5" />
              Hitung Premi Mobil
            </Link>
          )}
        </div>
        <p className="mt-6 text-white/40 text-sm font-dm">
          Konsultan:{" "}
          <span className="text-[#c9a84c] font-semibold">{SITE.consultant}</span>
          {" "}— {SITE.email}
        </p>
      </div>
    </section>
  );
}
