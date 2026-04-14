import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/config";
import KontakForm from "@/components/ui/KontakForm";

export const metadata: Metadata = {
  title: "Kontak | Dunia Asuransi — Konsultasi Asuransi Gratis",
  description:
    "Hubungi konsultan Dunia Asuransi untuk konsultasi asuransi kerugian gratis. WhatsApp, email, atau isi formulir kontak. Respons cepat untuk seluruh Indonesia.",
  alternates: { canonical: "https://duniaasuransi.com/kontak" },
  openGraph: {
    title: "Kontak Dunia Asuransi | Konsultasi Gratis",
    description: "Hubungi kami via WhatsApp, email, atau formulir kontak untuk konsultasi asuransi kerugian.",
    url: "https://duniaasuransi.com/kontak",
  },
};

export default function KontakPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Hubungi Kami
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Konsultasi Gratis
          </h1>
          <p className="text-white/70 font-dm text-lg">
            Tim kami siap membantu Anda menemukan solusi asuransi terbaik. Tidak ada biaya, tidak ada komitmen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#0a1628] rounded-2xl p-6">
                <h2 className="font-syne font-bold text-white text-lg mb-5">
                  Info Kontak
                </h2>
                <div className="space-y-4">
                  <a
                    href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-[#25d366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-dm">WhatsApp</p>
                      <p className="text-white font-dm text-sm group-hover:text-[#c9a84c] transition-colors">
                        {SITE.whatsapp}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-[#c9a84c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-dm">Email</p>
                      <p className="text-white font-dm text-sm group-hover:text-[#c9a84c] transition-colors">
                        {SITE.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#c9a84c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-dm">Area Layanan</p>
                      <p className="text-white font-dm text-sm">Seluruh Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#c9a84c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-dm">Jam Layanan</p>
                      <p className="text-white font-dm text-sm">Senin–Sabtu, 08.00–17.00 WIB</p>
                      <p className="text-white/50 font-dm text-xs">WhatsApp: fleksibel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e1ce]">
                <h3 className="font-syne font-semibold text-[#0a1628] text-sm uppercase tracking-wider mb-4">
                  Konsultasi Cepat
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Asuransi Mobil", href: "/asuransi-mobil" },
                    { label: "Kalkulator Premi", href: "/kalkulator-premi-mobil" },
                    { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
                    { label: "Contractor All Risk", href: "/contractor-all-risk" },
                    { label: "Asuransi Properti", href: "/asuransi-properti" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block text-sm font-dm text-[#334155] hover:text-[#c9a84c] transition-colors py-1"
                    >
                      → {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[#e8e1ce] p-8">
                <h2 className="font-syne font-bold text-[#0a1628] text-xl mb-2">
                  Kirim Pertanyaan
                </h2>
                <p className="text-[#64748b] font-dm text-sm mb-6">
                  Isi formulir di bawah dan kami akan menghubungi Anda secepatnya.
                </p>
                <KontakForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
