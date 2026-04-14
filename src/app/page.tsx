import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Car,
  Building2,
  Anchor,
  Wrench,
  HardHat,
  Scale,
  BadgeCheck,
  TrendingUp,
  Users,
  Clock,
  Award,
  ChevronRight,
  MessageCircle,
  Calculator,
  Star,
} from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Dunia Asuransi | Solusi Asuransi Kerugian Terpercaya di Indonesia",
  description:
    "Dunia Asuransi menyediakan solusi asuransi kerugian terpercaya di Indonesia. Asuransi properti, kendaraan, alat berat, engineering, liability, marine cargo. Konsultasi gratis!",
  alternates: { canonical: "https://duniaasuransi.com" },
  openGraph: {
    title: "Dunia Asuransi | Solusi Asuransi Kerugian Terpercaya di Indonesia",
    description:
      "Solusi asuransi kerugian komprehensif untuk individu dan bisnis di seluruh Indonesia.",
    url: "https://duniaasuransi.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://duniaasuransi.com/#agency",
      name: "Dunia Asuransi",
      url: "https://duniaasuransi.com",
      telephone: "+628131556592",
      email: "rio@duniaasuransi.com",
      description: SITE.description,
      areaServed: "Indonesia",
      employee: {
        "@type": "Person",
        name: "Rio Mardiansyah",
        jobTitle: "Insurance Consultant",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu asuransi kerugian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi kerugian adalah jenis asuransi yang memberikan perlindungan terhadap kerugian finansial akibat kerusakan, kehilangan, atau tanggung jawab hukum atas aset berwujud seperti properti, kendaraan, alat berat, dan muatan kargo.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara mengajukan klaim asuransi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hubungi konsultan kami via WhatsApp segera setelah kejadian. Kami akan memandu proses klaim dari awal hingga penyelesaian tanpa biaya tambahan.",
          },
        },
      ],
    },
  ],
};

const products = [
  {
    icon: Building2,
    label: "Asuransi Properti",
    desc: "Perlindungan menyeluruh untuk bangunan, gudang, hotel, dan aset bisnis Anda.",
    href: "/asuransi-properti",
    color: "bg-blue-50",
  },
  {
    icon: Car,
    label: "Asuransi Kendaraan",
    desc: "Proteksi optimal untuk mobil, motor, truk, dan kendaraan listrik Anda.",
    href: "/asuransi-kendaraan",
    color: "bg-green-50",
  },
  {
    icon: HardHat,
    label: "Alat Berat & Machinery",
    desc: "Cobertura for crane, excavator, bulldozer, forklift dan semua alat berat.",
    href: "/asuransi-alat-berat",
    color: "bg-yellow-50",
  },
  {
    icon: Wrench,
    label: "Asuransi Engineering",
    desc: "CAR, EAR, Machinery Breakdown untuk proyek konstruksi dan industri.",
    href: "/asuransi-engineering",
    color: "bg-orange-50",
  },
  {
    icon: Scale,
    label: "Asuransi Liability",
    desc: "Perlindungan hukum dari tuntutan pihak ketiga untuk bisnis Anda.",
    href: "/asuransi-liability",
    color: "bg-purple-50",
  },
  {
    icon: Anchor,
    label: "Asuransi Marine",
    desc: "Proteksi pengiriman barang via laut, udara, dan darat seluruh Indonesia.",
    href: "/asuransi-marine",
    color: "bg-cyan-50",
  },
  {
    icon: Shield,
    label: "Surety Bond",
    desc: "Jaminan penawaran, pelaksanaan, uang muka untuk kontraktor.",
    href: "/surety-bond",
    color: "bg-red-50",
  },
];

const stats = [
  { value: "15+", label: "Tahun Pengalaman", icon: Clock },
  { value: "2.000+", label: "Klien Terlindungi", icon: Users },
  { value: "50+", label: "Produk Asuransi", icon: BadgeCheck },
  { value: "98%", label: "Tingkat Kepuasan", icon: TrendingUp },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Direktur PT Konstruksi Nusantara",
    content:
      "Dunia Asuransi membantu kami mendapatkan polis CAR yang kompetitif untuk proyek senilai Rp 50 miliar. Prosesnya cepat dan profesional.",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Pemilik Fleet Truk Logistik",
    content:
      "Sudah 3 tahun menggunakan jasa Dunia Asuransi untuk armada truk kami. Klaim selalu dibantu hingga selesai tanpa ribet.",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    role: "Manager Operasional Tambang",
    content:
      "Asuransi alat berat kami diurus sangat cepat. Waktu excavator rusak, klaim cair dalam 2 minggu. Sangat merekomendasikan!",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Apa saja jenis asuransi kerugian yang tersedia?",
    a: "Kami menyediakan asuransi properti, kendaraan, alat berat, engineering, liability (tanggung gugat), marine cargo, dan surety bond untuk kebutuhan individu dan bisnis.",
  },
  {
    q: "Apakah bisa konsultasi asuransi secara online?",
    a: "Ya, kami melayani konsultasi via WhatsApp, email, dan video call di seluruh Indonesia tanpa perlu tatap muka.",
  },
  {
    q: "Berapa lama proses pengajuan polis asuransi?",
    a: "Umumnya polis dapat diterbitkan dalam 1-3 hari kerja setelah dokumen lengkap dan pembayaran premi.",
  },
  {
    q: "Apakah Dunia Asuransi resmi dan terpercaya?",
    a: "Ya, kami adalah agen/broker asuransi kerugian berpengalaman yang bekerja sama dengan perusahaan asuransi berlisensi OJK di Indonesia.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-[#0a1628] min-h-screen flex items-center px-4 pt-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#c9a84c]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" />
              Solusi Asuransi Kerugian Nasional
            </span>
            <h1 className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Lindungi Aset
              <br />
              <span className="text-[#c9a84c]">Bisnis & Pribadi</span>
              <br />
              Anda
            </h1>
            <p className="text-white/65 font-dm text-xl leading-relaxed max-w-xl mb-10">
              Konsultasi asuransi kerugian terpercaya — properti, kendaraan,
              alat berat, engineering, marine, liability. Layanan untuk seluruh
              Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] text-[#0a1628] font-syne font-bold text-base px-8 py-4 rounded-xl hover:bg-[#e0bc60] transition-all hover:scale-105 shadow-lg shadow-[#c9a84c]/30"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis Sekarang
              </Link>
              <Link
                href="/kalkulator-premi-mobil"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-white font-syne font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/15 transition-all border border-white/20"
              >
                <Calculator className="w-5 h-5" />
                Hitung Premi Mobil
              </Link>
            </div>
            <p className="mt-5 text-white/40 text-sm font-dm">
              Konsultan:{" "}
              <span className="text-white/60">{SITE.consultant}</span> ·{" "}
              <a
                href={`tel:${SITE.whatsapp}`}
                className="text-[#c9a84c] hover:underline"
              >
                {SITE.whatsapp}
              </a>
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-dm tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#c9a84c] py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="w-7 h-7 text-[#0a1628] mx-auto mb-2 opacity-70" />
                <div className="font-syne font-black text-3xl text-[#0a1628]">
                  {s.value}
                </div>
                <div className="font-dm text-sm text-[#0a1628]/70 mt-1">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase mb-3">
              Produk Kami
            </span>
            <h2 className="font-syne font-bold text-4xl text-[#0a1628] mb-4">
              Solusi Asuransi Lengkap
            </h2>
            <p className="text-[#64748b] font-dm text-lg max-w-2xl mx-auto">
              Dari aset pribadi hingga risiko industri besar — kami punya
              solusinya
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link
                  key={i}
                  href={p.href}
                  className="group bg-white rounded-2xl p-6 border border-[#e8e1ce] hover:border-[#c9a84c]/50 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[#0a1628] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-6 h-6 text-[#c9a84c] group-hover:text-[#0a1628]" />
                  </div>
                  <h3 className="font-syne font-bold text-[#0a1628] text-base mb-2">
                    {p.label}
                  </h3>
                  <p className="text-[#64748b] text-sm font-dm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center text-[#c9a84c] text-sm font-syne font-semibold gap-1 group-hover:gap-2 transition-all">
                    Pelajari <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase mb-3 block">
                Mengapa Kami
              </span>
              <h2 className="font-syne font-bold text-4xl text-[#0a1628] mb-5">
                Keunggulan Dunia Asuransi
              </h2>
              <p className="text-[#64748b] font-dm text-lg mb-8">
                Kami bukan sekadar penjual polis — kami adalah konsultan yang
                memastikan Anda mendapat perlindungan terbaik dengan harga
                terkompetitif.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Award,
                    title: "Konsultan Berpengalaman",
                    desc: "Tim ahli dengan pengalaman 15+ tahun di industri asuransi kerugian Indonesia.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Multi-Asuransi Terbaik",
                    desc: "Bekerja sama dengan perusahaan asuransi terpercaya berlisensi OJK.",
                  },
                  {
                    icon: Clock,
                    title: "Proses Cepat & Mudah",
                    desc: "Pengajuan polis 1-3 hari kerja, klaim dibantu hingga selesai.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Layanan Nasional",
                    desc: "Konsultasi online via WhatsApp untuk klien di seluruh Indonesia.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#c9a84c]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#c9a84c]" />
                      </div>
                      <div>
                        <h3 className="font-syne font-semibold text-[#0a1628] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#64748b] text-sm font-dm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Visual panel */}
            <div className="bg-[#0a1628] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#0a1628]" />
                  </div>
                  <div>
                    <div className="font-syne font-bold text-white text-sm">
                      Dunia Asuransi
                    </div>
                    <div className="text-white/50 text-xs font-dm">
                      Konsultan Asuransi
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Properti & Kebakaran",
                    "Kendaraan All Risk / TLO",
                    "Alat Berat & Machinery",
                    "Engineering CAR/EAR",
                    "Marine Cargo & Hull",
                    "Liability & Surety Bond",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                    >
                      <div className="w-2 h-2 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      <span className="text-white/80 text-sm font-dm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs font-dm">
                      Konsultan
                    </span>
                    <span className="text-[#c9a84c] font-syne font-semibold text-sm">
                      {SITE.consultant}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/50 text-xs font-dm">
                      WhatsApp
                    </span>
                    <a
                      href={`tel:${SITE.whatsapp}`}
                      className="text-white/80 text-sm font-dm hover:text-[#c9a84c]"
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase mb-3 block">
              Testimoni Klien
            </span>
            <h2 className="font-syne font-bold text-4xl text-[#0a1628]">
              Dipercaya Ribuan Klien
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8e1ce] hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-[#c9a84c] fill-[#c9a84c]"
                    />
                  ))}
                </div>
                <p className="text-[#334155] text-sm font-dm leading-relaxed mb-5 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div>
                  <div className="font-syne font-semibold text-[#0a1628] text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#64748b] text-xs font-dm mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="font-syne font-bold text-4xl text-[#0a1628]">
              Pertanyaan Sering Diajukan
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#faf8f3] rounded-2xl p-6 border border-[#e8e1ce]"
              >
                <h3 className="font-syne font-semibold text-[#0a1628] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[#334155] text-sm font-dm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
