import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  Clock,
  MessageCircle,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tentang Kami | Dunia Asuransi — Konsultan Asuransi Kerugian Indonesia",
  description:
    "Dunia Asuransi adalah konsultan asuransi kerugian terpercaya di Indonesia. Kenali tim kami, pengalaman, dan komitmen kami dalam memberikan solusi perlindungan terbaik.",
  alternates: { canonical: "https://duniaasuransi.com/tentang-kami" },
  openGraph: {
    title: "Tentang Kami | Dunia Asuransi",
    description: "Konsultan asuransi kerugian terpercaya dengan pengalaman 15+ tahun melayani klien di seluruh Indonesia.",
    url: "https://duniaasuransi.com/tentang-kami",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rio Mardiansyah",
  jobTitle: "Insurance Consultant",
  worksFor: {
    "@type": "InsuranceAgency",
    name: "Dunia Asuransi",
    url: "https://duniaasuransi.com",
  },
  telephone: "+628131556592",
  email: "rio@duniaasuransi.com",
  knowsAbout: [
    "Asuransi Properti",
    "Asuransi Kendaraan",
    "Asuransi Alat Berat",
    "Asuransi Engineering",
    "Asuransi Marine",
    "Asuransi Liability",
    "Surety Bond",
  ],
};

const expertise = [
  "Asuransi Properti & Kebakaran",
  "Asuransi Kendaraan All Risk & TLO",
  "Asuransi Alat Berat & Machinery",
  "Contractor & Erection All Risk",
  "Marine Cargo & Hull Insurance",
  "Liability & Professional Indemnity",
  "Surety Bond & Jaminan",
  "Business Interruption Insurance",
];

const values = [
  {
    icon: Shield,
    title: "Integritas",
    desc: "Kami memberikan rekomendasi yang jujur dan objektif, bukan sekadar menjual polis.",
  },
  {
    icon: Award,
    title: "Keahlian",
    desc: "Pengetahuan mendalam tentang produk asuransi dari puluhan perusahaan asuransi terpercaya.",
  },
  {
    icon: Users,
    title: "Kemitraan",
    desc: "Kami memandang klien sebagai mitra jangka panjang, bukan sekadar transaksi satu kali.",
  },
  {
    icon: Clock,
    title: "Responsif",
    desc: "Respons cepat untuk pertanyaan, pengajuan polis, dan bantuan klaim kapan pun dibutuhkan.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/8 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Tentang Kami
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            Konsultan Asuransi Kerugian<br />Terpercaya di Indonesia
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-2xl">
            Dunia Asuransi hadir untuk membantu individu dan bisnis di seluruh Indonesia mendapatkan perlindungan asuransi kerugian yang tepat — dengan harga terbaik dan layanan profesional.
          </p>
        </div>
      </section>

      {/* Consultant profile */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile card */}
            <div className="bg-[#0a1628] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#c9a84c] rounded-2xl flex items-center justify-center mb-5">
                  <Shield className="w-8 h-8 text-[#0a1628]" />
                </div>
                <h2 className="font-syne font-bold text-2xl text-white mb-1">
                  {SITE.consultant}
                </h2>
                <p className="text-[#c9a84c] font-syne font-semibold text-sm mb-5">
                  Insurance Consultant — Dunia Asuransi
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${SITE.whatsapp}`}
                    className="flex items-center gap-3 text-white/70 hover:text-[#c9a84c] transition-colors font-dm text-sm"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {SITE.whatsapp}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-[#c9a84c] transition-colors font-dm text-sm"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {SITE.email}
                  </a>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <p className="text-white/50 text-xs font-dm mb-3 uppercase tracking-wider">
                    Area Keahlian
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Properti", "Kendaraan", "Alat Berat", "Engineering", "Marine", "Liability"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-dm bg-white/10 text-white/70 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-5">
                Mengapa Memilih Dunia Asuransi?
              </h2>
              <p className="text-[#334155] font-dm leading-relaxed mb-5">
                Dengan pengalaman lebih dari 15 tahun di industri asuransi kerugian Indonesia, kami telah membantu ribuan klien — mulai dari individu yang ingin melindungi kendaraan dan rumahnya, hingga perusahaan besar yang membutuhkan solusi asuransi komprehensif untuk aset industri senilai ratusan miliar rupiah.
              </p>
              <p className="text-[#334155] font-dm leading-relaxed mb-6">
                Kami bukan hanya penjual polis. Kami adalah mitra yang memahami kebutuhan spesifik Anda, merekomendasikan solusi terbaik dari berbagai perusahaan asuransi berlisensi OJK, dan mendampingi Anda saat proses klaim.
              </p>
              <div className="space-y-3">
                {[
                  "Konsultasi gratis tanpa komitmen",
                  "Perbandingan dari 10+ perusahaan asuransi terpercaya",
                  "Bantuan klaim dari awal hingga selesai",
                  "Layanan nasional via WhatsApp & online",
                  "Pengalaman 15+ tahun di industri asuransi kerugian",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
                    <span className="text-[#334155] font-dm text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3">
              Nilai-Nilai Kami
            </h2>
            <p className="text-[#64748b] font-dm">
              Prinsip yang menjadi landasan setiap layanan yang kami berikan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex items-start gap-4 bg-[#faf8f3] rounded-2xl p-6 border border-[#e8e1ce]">
                  <div className="w-11 h-11 bg-[#0a1628] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-[#0a1628] mb-1">{v.title}</h3>
                    <p className="text-[#64748b] text-sm font-dm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3">
            Bidang Keahlian
          </h2>
          <p className="text-[#64748b] font-dm mb-10">
            Kami menguasai seluruh lini asuransi kerugian untuk kebutuhan Anda
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-[#e8e1ce] text-sm font-dm text-[#334155] flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-[#c9a84c] rounded-full flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Mari Berkolaborasi"
        description="Siap melindungi aset Anda? Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik."
        showCalc={false}
      />
    </>
  );
}
